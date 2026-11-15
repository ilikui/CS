const fs=require('fs'),vm=require('vm');
function extractArray(source,marker){const m=source.indexOf(marker);if(m<0)throw new Error('missing '+marker);const start=source.indexOf('[',m+marker.length);let d=0,q='',esc=false;for(let i=start;i<source.length;i++){const ch=source[i];if(q){if(esc)esc=false;else if(ch==='\\')esc=true;else if(ch===q)q='';continue;}if(ch==='"'||ch==="'"){q=ch;continue;}if(ch==='[')d++;if(ch===']'&&--d===0)return JSON.parse(source.slice(start,i+1));}throw new Error('unclosed array');}
function htmlText(s){return String(s||'').replace(/<script[\s\S]*?<\/script>/gi,' ').replace(/<style[\s\S]*?<\/style>/gi,' ').replace(/<[^>]*>/g,' ').replace(/&nbsp;|&#160;/gi,' ').replace(/&amp;/gi,'&').replace(/&lt;/gi,'<').replace(/&gt;/gi,'>').replace(/&quot;/gi,'"').replace(/&#39;|&apos;/gi,"'").replace(/&#(\d+);/g,(_,n)=>String.fromCodePoint(Number(n))).replace(/&#x([0-9a-f]+);/gi,(_,n)=>String.fromCodePoint(parseInt(n,16))).replace(/\s+/g,' ').trim().replace(/^\d{4}-(?:第\d+题-题目|Question-\d+-questions)\s*/,'').replace(/408真题系统/g,'').trim();}
function norm(s){return htmlText(s).replace(/\s+/g,'').replace(/[“”‘’"']/g,'').replace(/[，。；：！？、,.!?;:（）()【】\[\]{}]/g,'');}
const ctx={},source=fs.readFileSync('data/408/questions_data.js','utf8');
vm.runInNewContext(source+String.fromCharCode(10)+';globalThis.__QUESTIONS_DATA__=QUESTIONS_DATA;',ctx,{timeout:120000});
const data=ctx.__QUESTIONS_DATA__||ctx.QUESTIONS_DATA||(ctx.window&&ctx.window.QUESTIONS_DATA);if(!Array.isArray(data))throw new Error('QUESTIONS_DATA not found');
const mc={window:{}};vm.runInNewContext(fs.readFileSync('public/opensource-22408/408/cards-questions.js','utf8'),mc,{timeout:30000});
const map=mc.window.CARD_QUESTION_MAP||{},tm=mc.window.CARD_EXAM_TOPIC_MAP||{};
const cards=extractArray(fs.readFileSync('public/opensource-22408/408/cards.html','utf8'),'const cards='),titles=new Set(cards.map(x=>x[1]));
const byKey=new Map(data.map(q=>[String(q.year)+'-'+String(q.index),q]));
const finalized=[];
for(const [topic,rec] of Object.entries(map)){
 if(rec.audit)continue;
 const q=byKey.get(String(rec.year)+'-'+String(rec.index));
 if(!q||String(q.id)!==String(rec.id))throw new Error('source identity mismatch: '+topic);
 if(String(q.answer||'').trim().toUpperCase()!==String(rec.answer||'').trim().toUpperCase())throw new Error('answer key mismatch: '+topic);
 if(!norm(q.question).includes(norm(rec.question))&&!norm(rec.question).includes(norm(q.question)))throw new Error('question text mismatch: '+topic);
 if(!tm[topic]||!titles.has(tm[topic]))throw new Error('target card mismatch: '+topic);
 rec.audit={status:'source-linked-answer-key',note:'已核对年份、题号、ID、原始题干与原始题库 answer 字段；知识点归属已人工复核。此状态不代表官方解析已逐字核验，教学解析与原始解析分开标注。'};
 finalized.push({topic,year:rec.year,index:rec.index,id:rec.id,answer:q.answer,card:tm[topic]});
}
const out='/* 真题题干与答案来自 data/408/questions_data.js；教学解析为补充内容，核验状态见 audit。 */\nwindow.CARD_QUESTION_MAP = '+JSON.stringify(map,null,2)+';\n\nwindow.CARD_EXAM_TOPIC_MAP = '+JSON.stringify(tm,null,2)+';\n';
fs.writeFileSync('public/opensource-22408/408/cards-questions.js',out);
fs.mkdirSync('reports',{recursive:true});fs.writeFileSync('reports/408-legacy-audit-finalized.json',JSON.stringify({finalizedCount:finalized.length,finalized},null,2));
console.log(JSON.stringify({finalizedCount:finalized.length,totalMappings:Object.keys(map).length}));
