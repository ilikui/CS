const fs = require('fs');
const vm = require('vm');
function extractArray(source, marker) {
  const at=source.indexOf(marker); if(at<0)throw new Error('Missing '+marker);
  const start=source.indexOf('[',at+marker.length);let depth=0,quote='',escaped=false;
  for(let i=start;i<source.length;i++){const ch=source[i];if(quote){if(escaped)escaped=false;else if(ch==='\\')escaped=true;else if(ch===quote)quote='';continue;}if(ch==='"'||ch==="'"){quote=ch;continue;}if(ch==='[')depth++;if(ch===']'&&--depth===0)return JSON.parse(source.slice(start,i+1));}
  throw new Error('Unclosed array');
}
function plain(s){return String(s||'').replace(/<script[\s\S]*?<\/script>/gi,' ').replace(/<style[\s\S]*?<\/style>/gi,' ').replace(/<[^>]*>/g,' ').replace(/&nbsp;|&#160;/gi,' ').replace(/&amp;/gi,'&').replace(/&lt;/gi,'<').replace(/&gt;/gi,'>').replace(/&quot;/gi,'"').replace(/&#39;|&apos;/gi,"'").replace(/\s+/g,' ').trim();}
function norm(s){return plain(s).toLowerCase().replace(/[\s，。；：！？、,.!?;:（）()【】\[\]{}“”‘’"']/g,'');}
function subjectForIndex(i){if(i>=1&&i<=10)return '数据结构';if(i>=11&&i<=20)return '计算机组成原理';if(i>=21&&i<=30)return '操作系统';if(i>=31&&i<=40)return '计算机网络';return null;}
function subjectCode(subject){return ({'数据结构':'data-structure','计算机组成原理':'computer-organization','操作系统':'operating-system','计算机网络':'computer-network'})[subject]||null;}
function splitTerms(s){const stop=new Set(['原理','性质','定义','基础','结构','过程','方式','方法','管理','操作','机制','系统','概念','算法','与','和','及','的','考点']);return [...new Set(String(s||'').split(/[与和及、，,：:／/（）()\s·；;]+/).map(x=>x.trim()).filter(x=>x.length>=2&&!stop.has(x)))];}
function bigrams(s){const x=norm(s),out=new Map();for(let i=0;i<x.length-1;i++){const g=x.slice(i,i+2);if(/[\u3400-\u9fff]/.test(g))out.set(g,(out.get(g)||0)+1);}return out;}
function cosine(a,b,idf){let dot=0,na=0,nb=0;for(const[k,v]of a){const w=idf.get(k)||1,z=v*w;na+=z*z;dot+=z*(b.get(k)||0)*w;}for(const[k,v]of b){const z=v*(idf.get(k)||1);nb+=z*z;}return na&&nb?dot/Math.sqrt(na*nb):0;}
const qctx={};vm.runInNewContext(fs.readFileSync('data/408/questions_data.js','utf8')+'\n;globalThis.__Q=QUESTIONS_DATA;',qctx,{timeout:120000});
const questions=qctx.__Q;if(!Array.isArray(questions)||!questions.length)throw new Error('QUESTIONS_DATA unavailable');
const cards=extractArray(fs.readFileSync('public/opensource-22408/408/cards.html','utf8'),'const cards=');
const mapCtx={window:{}};vm.runInNewContext(fs.readFileSync('public/opensource-22408/408/cards-questions.js','utf8'),mapCtx,{timeout:30000});
const oldMap=mapCtx.window.CARD_QUESTION_MAP||{},topicMap=mapCtx.window.CARD_EXAM_TOPIC_MAP||{},cardByTitle=new Map(cards.map(c=>[c[1],c]));
const aliases=new Map(cards.map(c=>[c[1],new Set([c[1],...splitTerms(c[1])])]));for(const[topic,title]of Object.entries(topicMap))if(aliases.has(title)){aliases.get(title).add(topic);for(const t of splitTerms(topic))aliases.get(title).add(t);}
const oldLinks=new Map();for(const[topic,rec]of Object.entries(oldMap)){const title=topicMap[topic];if(!title||!cardByTitle.has(title))continue;const key=String(rec.year)+'-'+String(rec.index);if(!oldLinks.has(key))oldLinks.set(key,[]);oldLinks.get(key).push({title,topic,record:rec,status:'verified'});}
const cardDocs=cards.map(c=>({subject:c[0],title:c[1],text:c.slice(1).join(' '),terms:[...aliases.get(c[1])].filter(x=>x&&x.length>=2),grams:bigrams(c.slice(1).join(' '))}));
const df=new Map();for(const c of cardDocs)for(const k of c.grams.keys())df.set(k,(df.get(k)||0)+1);
const idf=new Map([...df].map(([k,n])=>[k,Math.log(1+(cardDocs.length+1)/(n+1))]));
const bySubject=new Map();for(const c of cardDocs){if(!bySubject.has(c.subject))bySubject.set(c.subject,[]);bySubject.get(c.subject).push(c);}
const questionMap={},cardQuestionList=Object.fromEntries(cards.map(c=>[c[1],[]])),subjectStats={};
let verifiedQuestions=0,suggestedQuestions=0,lowConfidence=0;
for(const q of questions){
 const inferredSubject=subjectForIndex(Number(q.index))||q.subject;
 const key=String(q.year)+'-'+String(q.index),text=plain((q.question||'')+' '+(q.analysis||'')),qNorm=norm(text),qGrams=bigrams(text);
 let links=oldLinks.get(key)||[];if(links.length)verifiedQuestions++;
 else{
  const candidates=(bySubject.get(inferredSubject)||cardDocs).map(c=>{let phraseScore=0,matched=[];for(const term of c.terms){const t=norm(term);if(t.length>=2&&qNorm.includes(t)){phraseScore+=Math.min(t.length,8);matched.push(term);}}const sim=cosine(qGrams,c.grams,idf);return{title:c.title,phraseScore,similarity:sim,score:phraseScore*.08+sim,matched};}).sort((a,b)=>b.score-a.score);
  const best=candidates[0];if(!best)throw new Error('No card candidate '+key);const chosen=[best];
  if(best.score>0)for(const c of candidates.slice(1,4))if(c.score>=best.score*.78&&c.score>0&&c.phraseScore>=2)chosen.push(c);
  const band=best.phraseScore>=5||best.similarity>=.18?'medium':'low';if(band==='low')lowConfidence++;
  links=chosen.map(c=>({title:c.title,topic:c.matched.join('、')||c.title,status:'needs-review',confidence:c.score,confidenceBand:band,matchedTerms:c.matched}));suggestedQuestions++;
 }
 const clean=links.map(l=>({title:l.title,topic:l.topic||l.title,status:l.status||'needs-review',confidence:l.confidence??1,confidenceBand:l.confidenceBand||(l.status==='verified'?'verified':'low'),matchedTerms:l.matchedTerms||[],recordTopic:l.status==='verified'?l.topic:null}));
 const rec={key,year:q.year,index:q.index,id:q.id,subject:inferredSubject,subjectCode:subjectCode(inferredSubject),type:q.type,typeName:q.typeName||({1:'选择题',2:'应用题',3:'算法题'}[q.type]||'真题'),score:q.score,question:plain(q.question||''),answer:plain(q.answer||''),analysis:plain(q.analysis||''),cards:clean};
 questionMap[key]=rec;for(const l of clean)cardQuestionList[l.title].push(key);
 if(!subjectStats[inferredSubject])subjectStats[inferredSubject]={questions:0,verified:0,suggested:0};subjectStats[inferredSubject].questions++;if(clean.some(l=>l.status==='verified'))subjectStats[inferredSubject].verified++;else subjectStats[inferredSubject].suggested++;
}
for(const list of Object.values(cardQuestionList))list.sort((a,b)=>a.year-b.year||a.index-b.index);
const linkedCards=Object.values(cardQuestionList).filter(x=>x.length).length;
const report={sourceQuestions:questions.length,linkedQuestions:Object.keys(questionMap).length,verifiedQuestions,suggestedQuestions,lowConfidenceSuggestions:lowConfidence,cards:cards.length,cardsWithQuestions:linkedCards,cardsWithoutQuestions:cards.length-linkedCards,subjectStats};
fs.mkdirSync('public/opensource-22408/408',{recursive:true});
fs.writeFileSync('public/opensource-22408/408/question-card-map.js','window.QUESTION_CARD_MAP = '+JSON.stringify(questionMap)+';\nwindow.CARD_QUESTION_LIST = '+JSON.stringify(cardQuestionList)+';\nwindow.QUESTION_CARD_COVERAGE = '+JSON.stringify(report)+';\n');
fs.mkdirSync('reports',{recursive:true});fs.writeFileSync('reports/408-question-card-coverage.json',JSON.stringify({generatedAt:new Date().toISOString(),...report},null,2));
console.log(JSON.stringify(report));
