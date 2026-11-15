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
      else if (ch === '\\\\') escaped = true;
      else if (ch === quote) quote = '';
      continue;
    }
    if (ch === '"' || ch === "'" || ch === '`') { quote = ch; continue; }
    if (ch === '[') depth++;
    if (ch === ']') { depth--; if (depth === 0) return JSON.parse(source.slice(start, i + 1)); }
  }
  throw new Error('Unclosed array for ' + marker);
}
function norm(s) { return String(s || '').replace(/\\s+/g, '').replace(/[“”‘’"'`]/g, '').replace(/[，。；：！？、,.!?;:（）()【】\\[\\]{}]/g, ''); }
function subjectCode(s) {
  return ({'数据结构':'data-structure','计算机组成原理':'computer-organization','操作系统':'operating-system','计算机网络':'computer-network'})[s];
}
function termsFor(title) {
  const stop = new Set(['与','和','及','的','原理','性质','定义','基础','结构','过程','方式','方法','管理','操作','机制','系统','概念','算法']);
  return [...new Set(String(title).split(/[与和及、，,：:／/（）()\\s]+/).filter(x => x.length >= 2 && !stop.has(x)))].sort((a,b)=>b.length-a.length);
}
function pickQuestion(q) {
  return {year:q.year,index:q.index,id:q.id,subject:q.subject,type:q.type,typeName:q.typeName,score:q.score,question:q.question,answer:q.answer,analysis:q.analysis};
}
const source = fs.readFileSync('data/408/questions_data.js','utf8');
const dataContext = {};
vm.runInNewContext(source + '\\n;globalThis.__QUESTIONS_DATA__ = QUESTIONS_DATA;', dataContext, {timeout:120000});
const data = dataContext.__QUESTIONS_DATA__ || dataContext.QUESTIONS_DATA || dataContext.window?.QUESTIONS_DATA;
if (!Array.isArray(data)) throw new Error('QUESTIONS_DATA is not an array; inspect source export name');
const mapContext = {window:{}};
vm.runInNewContext(fs.readFileSync('public/opensource-22408/408/cards-questions.js','utf8'),mapContext,{timeout:30000});
const mapping = mapContext.window.CARD_QUESTION_MAP || {};
const topicMap = mapContext.window.CARD_EXAM_TOPIC_MAP || {};
const cardSource = fs.readFileSync('public/opensource-22408/408/cards.html','utf8');
const cards = extractArray(cardSource,'const cards=');
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
  if (!q) errors.push('题库中找不到对应年份和题号');
  else {
    if (String(q.id) !== String(rec.id)) errors.push('题目ID不一致');
    if (q.subject !== subjectCode(rec.topic)) errors.push('科目不一致：map='+rec.topic+' source='+q.subject);
    if (norm(q.question) !== norm(rec.question)) errors.push('题干与原始题库不一致');
    if (norm(q.answer) !== norm(rec.answer)) errors.push('答案与原始题库不一致');
    if (norm(q.analysis) !== norm(rec.analysis)) errors.push('解析与原始题库不一致');
  }
  validation.push({topic,card:topicMap[topic]||null,year:rec.year,index:rec.index,id:rec.id,auditStatus:rec.audit?.status||'unreviewed',errors,sourceQuestion:q?pickQuestion(q):null});
}
const used = new Set(Object.values(mapping).map(r=>String(r.year)+'-'+String(r.index)));
const candidateReport = cards.map(card => {
  const [subject,title] = card;
  const code = subjectCode(subject);
  const terms = termsFor(title);
  const candidates = data.filter(q => q.subject === code && !used.has(String(q.year)+'-'+String(q.index))).map(q => {
    const hay = norm((q.question||'')+' '+(q.analysis||''));
    const hits = terms.filter(t => hay.includes(norm(t)));
    const score = hits.reduce((n,t)=>n+Math.min(t.length,8),0);
    return {q,score,hits};
  }).filter(x=>x.score>0).sort((a,b)=>b.score-a.score).slice(0,5).map(x=>({...pickQuestion(x.q),score:x.score,matchedTerms:x.hits}));
  return {subject,title,candidates};
});
const counts = {cards:cards.length,mappings:Object.keys(mapping).length,sourceQuestions:data.length,invalidMappings:validation.filter(x=>x.errors.length).length,unreviewedMappings:validation.filter(x=>x.auditStatus==='unreviewed').length,cardsWithCandidates:candidateReport.filter(x=>x.candidates.length).length,candidateRows:candidateReport.reduce((n,x)=>n+x.candidates.length,0)};
fs.mkdirSync('reports',{recursive:true});
fs.writeFileSync('reports/408-association-audit.json',JSON.stringify({generatedAt:new Date().toISOString(),counts,validation,candidates:candidateReport},null,2));
console.log(JSON.stringify(counts));
