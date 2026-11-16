// Build a review queue for every 408 question not yet present in the formal card map.
// This script NEVER promotes machine candidates to formal associations.
const fs = require('fs');
const vm = require('vm');

function extractArray(source, marker) {
  const at = source.indexOf(marker);
  if (at < 0) throw new Error('Cannot find ' + marker);
  const start = source.indexOf('[', at + marker.length);
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
  throw new Error('Unclosed array: ' + marker);
}
function htmlText(s) {
  return String(s || '').replace(/<script[\s\S]*?<\/script>/gi,' ')
    .replace(/<style[\s\S]*?<\/style>/gi,' ').replace(/<[^>]*>/g,' ')
    .replace(/&nbsp;|&#160;/gi,' ').replace(/&amp;/gi,'&').replace(/&lt;/gi,'<')
    .replace(/&gt;/gi,'>').replace(/&quot;/gi,'"').replace(/&#39;|&apos;/gi,"'")
    .replace(/\s+/g,' ').trim();
}
function norm(s) { return htmlText(s).toLowerCase().replace(/\s+/g,'').replace(/[“”‘’"'，。；：！？、,.!?;:（）()【】\[\]{}]/g,''); }
function subjectForIndex(i) {
  if (i >= 1 && i <= 10) return '数据结构';
  if (i >= 11 && i <= 20) return '计算机组成原理';
  if (i >= 21 && i <= 30) return '操作系统';
  if (i >= 31 && i <= 40) return '计算机网络';
  return null;
}
const subjectAliases = {
  'data-structure':'数据结构','数据结构':'数据结构',
  'computer-organization':'计算机组成原理','computer_organization':'计算机组成原理','计算机组成原理':'计算机组成原理',
  'operating-system':'操作系统','operating_system':'操作系统','操作系统':'操作系统',
  'computer-network':'计算机网络','computer_network':'计算机网络','计算机网络':'计算机网络'
};
const stop = new Set(['408','考研','真题','知识点','基础','原理','性质','定义','概念','过程','方法','方式','系统','结构','操作','管理','实现','分析','相关','以及','进行','其中','一个','多个','可以','需要','根据','通过','对于','如果','当时','什么','下列','正确','错误','选择','判断','计算','说明','描述','特点','区别','比较','步骤','算法','数据','计算机','网络','存储']);
function termsForCard(card) {
  const weighted = new Map();
  const add = (term, weight) => {
    const t = norm(term);
    if (t.length < 2 || stop.has(t) || /^\d+$/.test(t)) return;
    weighted.set(t, Math.max(weighted.get(t) || 0, weight));
  };
  add(card[1], 12);
  const fields = [[card[8],5],[card[3],3],[card[2],2],[card[4],1],[card[5],1],[card[6],1],[card[7],1]];
  for (const [value, base] of fields) {
    const raw = htmlText(value);
    const chunks = raw.split(/[。；，、：:！？!?（）()\[\]→|\n]+/).map(x=>x.trim()).filter(x=>x.length>=2 && x.length<=28);
    for (const chunk of chunks) {
      add(chunk, base + Math.min(2, Math.floor(chunk.length/5)));
      const cjk = chunk.match(/[\u4e00-\u9fff]{2,}/g) || [];
      for (const run of cjk) {
        if (run.length <= 7) add(run, base + 1);
        else for (let n=3;n<=5;n++) for(let i=0;i+n<=run.length;i++) add(run.slice(i,i+n), Math.max(1,base-1));
      }
      const words = chunk.match(/[A-Za-z][A-Za-z0-9+_.-]{1,}/g) || [];
      for (const word of words) add(word, base + 2);
    }
  }
  return [...weighted.entries()].map(([term,weight])=>({term,weight})).sort((a,b)=>b.weight-a.weight);
}
function loadQuestions() {
  const context = {window:{}};
  const source = fs.readFileSync('data/408/questions_data.js','utf8');
  vm.runInNewContext(source + String.fromCharCode(10) + ';globalThis.__QUESTIONS_DATA__ = (typeof QUESTIONS_DATA !== \'undefined\') ? QUESTIONS_DATA : window.QUESTIONS_DATA;',context,{timeout:120000});
  const data = context.__QUESTIONS_DATA__ || context.window.QUESTIONS_DATA || context.QUESTIONS_DATA;
  if (!Array.isArray(data)) throw new Error('QUESTIONS_DATA export not found in data/408/questions_data.js (expected window.QUESTIONS_DATA or global QUESTIONS_DATA)');
  return data;
}
const questions = loadQuestions();
const cards = extractArray(fs.readFileSync('public/opensource-22408/408/cards.html','utf8'),'const cards=');
const mapContext = {window:{}};
vm.runInNewContext(fs.readFileSync('public/opensource-22408/408/cards-questions.js','utf8'),mapContext,{timeout:30000});
const mapping = mapContext.window.CARD_QUESTION_MAP || {};
const topicMap = mapContext.window.CARD_EXAM_TOPIC_MAP || {};
const linked = new Map();
for (const [topic, rec] of Object.entries(mapping)) {
  const key = String(rec.year)+'-'+String(rec.index);
  if (!linked.has(key)) linked.set(key,new Set());
  const card = topicMap[topic];
  if (card) linked.get(key).add(card);
}
const indexedCards = cards.map(card => ({
  subject:card[0], title:card[1], terms:termsForCard(card),
  searchable:norm([card[1],card[2],card[3],card[4],card[5],card[6],card[7],card[8]].join(' '))
}));
const queue = [];
const unmatched = [];
for (const q of questions) {
  const key = String(q.year)+'-'+String(q.index);
  const existing = [...(linked.get(key) || [])];
  const subject = subjectAliases[String(q.subject || '')] || subjectForIndex(Number(q.index));
  const body = norm([q.question,q.analysisHtml,q.answerHtml,q.analysis,q.answer].filter(Boolean).join(' '));
  const pool = indexedCards.filter(card => (!subject || card.subject === subject) && !existing.includes(card.title));
  const ranked = pool.map(card => {
    let score = 0; const hits = [];
    for (const item of card.terms) {
      if (item.term.length >= 2 && body.includes(item.term)) {
        score += item.weight;
        if (hits.length < 12) hits.push(item.term);
      }
    }
    if (body.includes(norm(card.title))) score += 12;
    return {card:card.title,score,matchedTerms:hits};
  }).filter(x=>x.score>0).sort((a,b)=>b.score-a.score || a.card.localeCompare(b.card,'zh-CN')).slice(0,5);
  const top = ranked[0]?.score || 0, second = ranked[1]?.score || 0;
  const confidence = top >= 20 && top-second >= 5 ? 'high-candidate' : top >= 9 ? 'medium-candidate' : top > 0 ? 'low-candidate' : 'no-candidate';
  const record = {year:q.year,index:q.index,id:q.id,subject:subject || q.subject || null,type:q.typeName || q.type || null,question:htmlText(q.question),answer:q.answer || null,analysis:htmlText(q.analysis || q.analysisHtml || ''),existingCards:existing,confidence,candidates:ranked};
  if (ranked.length) queue.push(record); else unmatched.push(record);
}
const linkedCards = new Set(Object.values(topicMap));
const report = {
  generatedAt:new Date().toISOString(),
  policy:'Machine-ranked candidates only, including secondary-card candidates for already-linked questions. No candidate is a formal association until question wording and the directly tested concept are manually verified.',
  counts:{
    sourceQuestions:questions.length,formalMappingRecords:Object.keys(mapping).length,
    uniqueQuestionsAlreadyLinked:linked.size,questionsWithoutAnyFormalLink:questions.filter(q=>!linked.has(String(q.year)+'-'+String(q.index))).length,
    questionsNeedingAdditionalCardReview:queue.length+unmatched.length,candidateQuestions:queue.length,noCandidateQuestions:unmatched.length,
    cards:cards.length,cardsWithFormalLinks:linkedCards.size,cardsWithoutFormalLinks:cards.filter(c=>!linkedCards.has(c[1])).map(c=>({subject:c[0],title:c[1]}))
  },
  queue,unmatched
};
fs.mkdirSync('reports',{recursive:true});
fs.writeFileSync('reports/408-question-card-candidate-queue.json',JSON.stringify(report,null,2));
console.log(JSON.stringify(report.counts));
