// Audit source identity, target card existence, and candidate coverage; never auto-promote candidates.
// Re-run source-backed audit after 2017 merge, shell and heap sort mappings.
// Refresh audit after the third batch of source-backed associations.
// Re-run after application-question solutions and status-label corrections.
// Refresh audit after round-five source-backed question links.
const fs = require('fs');
const vm = require('vm');

function extractArray(source, marker) {
  const markerAt = source.indexOf(marker);
  if (markerAt < 0) throw new Error('Cannot find ' + marker);
  const start = source.indexOf('[', markerAt + marker.length);
  let depth = 0, quote = '', escaped = false;
  for (let i = start; i < source.length; i++) {
    const ch = source[i];
    if (quote) {
      if (escaped) escaped = false;
      else if (ch === '\\') escaped = true;
      else if (ch === quote) quote = '';
      continue;
    }
    if (ch === '"' || ch === "'") { quote = ch; continue; }
    if (ch === '[') depth++;
    if (ch === ']') { depth--; if (depth === 0) return JSON.parse(source.slice(start, i + 1)); }
  }
  throw new Error('Unclosed array for ' + marker);
}
function htmlText(s) {
  return String(s || '').replace(/<script[\s\S]*?<\/script>/gi,' ').replace(/<style[\s\S]*?<\/style>/gi,' ')
    .replace(/<[^>]*>/g,' ').replace(/&nbsp;|&#160;/gi,' ').replace(/&amp;/gi,'&')
    .replace(/&lt;/gi,'<').replace(/&gt;/gi,'>').replace(/&quot;/gi,'"').replace(/&#39;|&apos;/gi,"'")
    .replace(/&#(\d+);/g,(_,n)=>String.fromCodePoint(Number(n))).replace(/&#x([0-9a-f]+);/gi,(_,n)=>String.fromCodePoint(parseInt(n,16)))
    .replace(/\s+/g,' ').trim();
}
function norm(s) { return htmlText(s).replace(/\s+/g,'').replace(/[“”‘’"']/g,'').replace(/[，。；：！？、,.!?;:（）()【】\[\]{}]/g,''); }
function subjectForIndex(i) {
  if (i >= 1 && i <= 10) return '数据结构';
  if (i >= 11 && i <= 20) return '计算机组成原理';
  if (i >= 21 && i <= 30) return '操作系统';
  if (i >= 31 && i <= 40) return '计算机网络';
  return null;
}
function termsFor(title) {
  const stop = new Set(['与','和','及','的','原理','性质','定义','基础','结构','过程','方式','方法','管理','操作','机制','系统','概念','算法']);
  return [...new Set(String(title).split(/[与和及、，,：:／/（）()\s]+/).filter(x => x.length >= 2 && !stop.has(x)))].sort((a,b)=>b.length-a.length);
}
function pickQuestion(q) {
  return {year:q.year,index:q.index,id:q.id,sourceSubject:q.subject,inferredSubject:subjectForIndex(Number(q.index)),type:q.type,typeName:q.typeName,score:q.score,question:htmlText(q.question),answer:q.answer||null,analysis:htmlText(q.analysis)};
}
const source = fs.readFileSync('data/408/questions_data.js','utf8');
const dataContext = {};
vm.runInNewContext(source + String.fromCharCode(10) + ';globalThis.__QUESTIONS_DATA__ = QUESTIONS_DATA;', dataContext, {timeout:120000});
const data = dataContext.__QUESTIONS_DATA__ || dataContext.QUESTIONS_DATA || (dataContext.window && dataContext.window.QUESTIONS_DATA);
if (!Array.isArray(data)) throw new Error('QUESTIONS_DATA is not an array; inspect source export name');
const mapContext = {window:{}};
vm.runInNewContext(fs.readFileSync('public/opensource-22408/408/cards-questions.js','utf8'),mapContext,{timeout:30000});
const mapping = mapContext.window.CARD_QUESTION_MAP || {};
const topicMap = mapContext.window.CARD_EXAM_TOPIC_MAP || {};
const cards = extractArray(fs.readFileSync('public/opensource-22408/408/cards.html','utf8'),'const cards=');
const cardTitles = new Set(cards.map(x=>x[1]));
const byKey = new Map();
for (const q of data) {
  const key = String(q.year)+'-'+String(q.index);
  if (!byKey.has(key)) byKey.set(key,[]);
  byKey.get(key).push(q);
}
const validation = [];
for (const [topic, rec] of Object.entries(mapping)) {
  const key = String(rec.year)+'-'+String(rec.index);
  const matches = byKey.get(key) || [];
  const q = matches.find(x => String(x.id) === String(rec.id)) || matches[0];
  const errors = [];
  if (!q) errors.push('source-question-not-found');
  else if (String(q.id) !== String(rec.id)) errors.push('source-id-mismatch');
  const targetCard = topicMap[topic] || null;
  if (!targetCard || !cardTitles.has(targetCard)) errors.push('target-card-missing');
  const sourceText = q ? norm(q.question) : '';
  const mappedText = norm(rec.question);
  const questionTextContains = !!(sourceText && mappedText && (sourceText.includes(mappedText) || mappedText.includes(sourceText)));
  const sourceAnswer = q && q.answer != null ? String(q.answer).trim() : '';
  const mappedAnswer = String(rec.answer || '').trim();
  const answerComparable = /^[A-D]$/i.test(sourceAnswer) && /^[A-D]$/i.test(mappedAnswer);
  const answerMatch = answerComparable ? sourceAnswer.toUpperCase() === mappedAnswer.toUpperCase() : null;
  if (answerMatch === false) errors.push('answer-key-mismatch');
  validation.push({topic:topic,card:targetCard,year:rec.year,index:rec.index,id:rec.id,auditStatus:(rec.audit && rec.audit.status)||'unreviewed',sourceIdentityConfirmed:!!q && String(q.id)===String(rec.id),questionTextContains:questionTextContains,sourceSubjectMetadata:q?q.subject:null,expectedSubject:rec.topic,sourceAnswer:sourceAnswer||null,mappedAnswer:mappedAnswer||null,answerMatch:answerMatch,errors:errors,sourceQuestion:q?pickQuestion(q):null});
}
const cardMappedKeys = new Map();
for (const [topic, card] of Object.entries(topicMap)) {
  if (!cardMappedKeys.has(card)) cardMappedKeys.set(card, new Set());
  const rec = mapping[topic];
  if (rec) cardMappedKeys.get(card).add(String(rec.year)+'-'+String(rec.index));
}
const candidateReport = cards.map(card => {
  const subject = card[0], title = card[1], terms = termsFor(title);
  const alreadyForCard = cardMappedKeys.get(title) || new Set();
  const candidates = data.filter(q => {
    const inferred = subjectForIndex(Number(q.index));
    return (inferred === subject || inferred === null) && !alreadyForCard.has(String(q.year)+'-'+String(q.index));
  }).map(q => {
    const hay = norm((q.question||'')+' '+(q.analysis||''));
    const hits = terms.filter(t => hay.includes(norm(t)));
    const score = hits.reduce((n,t)=>n+Math.min(t.length,8),0);
    return {q:q,score:score,hits:hits};
  }).filter(x=>x.score>0).sort((a,b)=>b.score-a.score).slice(0,5).map(x=>Object.assign(pickQuestion(x.q),{score:x.score,matchedTerms:x.hits}));
  return {subject:subject,title:title,existingLinks:alreadyForCard.size,candidates:candidates};
});
const questionGroups = new Map();
for (const v of validation) {
  const key = String(v.year)+'-'+String(v.index);
  if (!questionGroups.has(key)) questionGroups.set(key,[]);
  questionGroups.get(key).push(v.topic);
}
const duplicateQuestionLinks = [...questionGroups.entries()].filter(([,v])=>v.length>1).map(([question,topics])=>({question,topics}));
const counts = {
  cards:cards.length,mappings:Object.keys(mapping).length,sourceQuestions:data.length,
  sourceIdentityConfirmed:validation.filter(x=>x.sourceIdentityConfirmed).length,
  identityOrTargetErrors:validation.filter(x=>x.errors.some(e=>e!=='answer-key-mismatch')).length,
  answerKeyMismatches:validation.filter(x=>x.answerMatch===false).length,
  questionTextContained:validation.filter(x=>x.questionTextContains).length,
  previouslyAudited:validation.filter(x=>x.auditStatus!=='unreviewed').length,
  unreviewedMappings:validation.filter(x=>x.auditStatus==='unreviewed').length,
  cardsWithCandidates:candidateReport.filter(x=>x.candidates.length).length,
  candidateRows:candidateReport.reduce((n,x)=>n+x.candidates.length,0),
  duplicateQuestionLinks:duplicateQuestionLinks.length
};
fs.mkdirSync('reports',{recursive:true});
fs.writeFileSync('reports/408-association-audit.json',JSON.stringify({generatedAt:new Date().toISOString(),counts,validation,duplicateQuestionLinks,candidates:candidateReport},null,2));
console.log(JSON.stringify(counts));
