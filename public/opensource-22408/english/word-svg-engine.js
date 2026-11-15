/* Local, deterministic SVG vocabulary illustrations. No remote image service. */
(function(){
'use strict';
var $=function(id){return document.getElementById(id)};
function esc(s){return String(s||'').replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function hash(s){var h=2166136261;for(var i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
var palettes=[['#e8f1e8','#4f8065','#b7d5bd','#f1c66d'],['#edf0fb','#596fae','#bac8ed','#f0b7a8'],['#fbefe8','#b66b4e','#efc5a9','#e6b95c'],['#e9f3f4','#397b83','#b8dadd','#efc17a'],['#f3edf8','#8563a8','#d4c2e8','#e8b5a8']];
var rules=[
[/光|明亮|照耀|散发|radiat|bright|shine|glow|light/i,'light','光与能量'],
[/情绪|感情|快乐|悲伤|愤怒|恐惧|爱|emotion|happy|sad|ang|fear|love|joy/i,'emotion','情绪与感受'],
[/说|语言|交流|沟通|表达|讨论|演讲|通信|speak|say|talk|communicat|discuss|argu|claim|state/i,'speech','表达与交流'],
[/学习|知识|教育|学校|书|阅读|记忆|考试|learn|know|educat|school|book|read|memory|study|teach/i,'knowledge','知识与学习'],
[/法律|司法|正义|公平|义务|责任|规则|法官|law|just|court|judge|oblig|duty|rule|right/i,'law','规则与判断'],
[/时间|时期|过去|未来|现在|迟|早|持续|time|period|past|future|present|late|early|duration/i,'time','时间与变化'],
[/生长|发展|增加|提高|改善|进步|植物|树|成长|grow|develop|increase|improv|progress|rise|expand/i,'growth','生长与发展'],
[/旅行|旅程|道路|方向|移动|运输|到达|离开|journey|travel|road|route|move|transport|arriv|depart/i,'travel','路径与移动'],
[/观察|看见|注意|发现|识别|明显|视线|observe|watch|see|notice|discover|identify|obvious|vision/i,'observe','观察与发现'],
[/科学|实验|研究|数据|分析|测量|理论|技术|science|experiment|research|data|analys|measure|theor|techn/i,'science','探索与分析'],
[/钱|经济|价值|价格|购买|销售|财富|成本|利润|money|econom|value|price|buy|sell|wealth|cost|profit/i,'economy','价值与交换'],
[/人|身体|手|头|眼|心脏|健康|person|body|hand|head|eye|heart|health|disease/i,'person','人物与身体'],
[/自然|天气|水|火|空气|土地|环境|动物|nature|weather|water|fire|air|earth|environment|animal/i,'nature','自然与环境']
];
var art={
light:'<circle cx="320" cy="164" r="68" fill="A3" opacity=".25"/><circle cx="320" cy="164" r="43" fill="A4"/><path d="M320 60V35 M320 293v-25 M216 164h-28 M452 164h-28 M246 90l-19-19 M413 257l-19-19 M394 90l19-19 M227 257l19-19" stroke="A2" stroke-width="9" stroke-linecap="round"/><path d="M205 265Q320 220 435 265" fill="none" stroke="A2" stroke-width="10" stroke-linecap="round"/>',
emotion:'<path d="M320 244C270 202 205 157 226 111c18-39 68-28 94 10 26-38 76-49 94-10 21 46-44 91-94 133Z" fill="A4"/><circle cx="288" cy="151" r="7" fill="A2"/><circle cx="352" cy="151" r="7" fill="A2"/><path d="M290 181q30 27 60 0" fill="none" stroke="A2" stroke-width="7" stroke-linecap="round"/>',
speech:'<path d="M166 92q0-22 24-22h248q24 0 24 24v126q0 24-24 24H280l-60 48v-48h-30q-24 0-24-24Z" fill="#fff" stroke="A2" stroke-width="8"/><path d="M220 132h187M220 174h152" stroke="A3" stroke-width="13" stroke-linecap="round"/>',
knowledge:'<path d="M168 91q76-25 152 21v163q-76-45-152-21Z M472 91q-76-25-152 21v163q76-45 152-21Z" fill="#fff" stroke="A2" stroke-width="8"/><path d="M320 112v163 M202 135q48-11 80 11 M438 135q-48-11-80 11" stroke="A3" stroke-width="9" fill="none"/>',
law:'<path d="M320 78v187 M220 112h200 M250 112l-44 93h88z M390 112l-44 93h88z" fill="A3" stroke="A2" stroke-width="8" stroke-linejoin="round"/><path d="M206 205q44 26 88 0 M346 205q44 26 88 0 M262 265h116m-92 26h68" fill="none" stroke="A4" stroke-width="9" stroke-linecap="round"/>',
time:'<circle cx="320" cy="176" r="104" fill="#fff" stroke="A2" stroke-width="9"/><path d="M320 99v77l60 35" fill="none" stroke="A4" stroke-width="12" stroke-linecap="round"/><circle cx="320" cy="176" r="10" fill="A2"/>',
growth:'<path d="M320 276V166 M320 206q-96 5-100-93 101-2 100 93Zm0-28q6-76 110-87 0 62-110 87Z" fill="A3" stroke="A2" stroke-width="7"/><path d="M320 274q-50 16-84 0m84 0q50 16 84 0" fill="none" stroke="A4" stroke-width="8" stroke-linecap="round"/>',
travel:'<path d="M118 260c87-25 107-154 202-118s111 120 202-32" fill="none" stroke="A3" stroke-width="24" stroke-linecap="round"/><path d="M118 260c87-25 107-154 202-118s111 120 202-32" fill="none" stroke="A2" stroke-width="5" stroke-dasharray="12 14"/><circle cx="118" cy="260" r="17" fill="A4"/><path d="m496 95 26-3 5 27" fill="none" stroke="A4" stroke-width="10"/>',
observe:'<path d="M145 178q175-206 350 0-175 206-350 0Z" fill="#fff" stroke="A2" stroke-width="9"/><circle cx="320" cy="178" r="57" fill="A3" stroke="A2" stroke-width="8"/><circle cx="320" cy="178" r="24" fill="A4"/>',
science:'<path d="M276 82h88m-70 0v75l-74 113q-10 21 18 21h164q28 0 18-21l-74-113V82" fill="#fff" stroke="A2" stroke-width="8" stroke-linejoin="round"/><path d="M251 238q69-27 138 0l26 40H225Z" fill="A3"/><circle cx="290" cy="250" r="9" fill="A4"/><circle cx="352" cy="265" r="7" fill="A2"/>',
economy:'<rect x="190" y="108" width="260" height="154" rx="20" fill="#fff" stroke="A2" stroke-width="8"/><circle cx="320" cy="185" r="52" fill="A3" stroke="A2" stroke-width="7"/><path d="M339 153q-19-16-39 0-16 18 20 31t20 33q-18 19-42 0m22-80v95" fill="none" stroke="A4" stroke-width="9" stroke-linecap="round"/>',
person:'<circle cx="320" cy="105" r="43" fill="A4"/><path d="M235 278q3-111 85-111t85 111Z" fill="A3" stroke="A2" stroke-width="8"/><path d="m276 206 44 38 44-38" fill="none" stroke="A2" stroke-width="8"/>',
nature:'<path d="M320 70q-105 95-100 172 50 48 100 18 50 30 100-18 5-77-100-172Z" fill="A3" stroke="A2" stroke-width="8"/><path d="M320 95v180m0-85-50-42m50 72 50-46" stroke="A2" stroke-width="8" fill="none" stroke-linecap="round"/>',
idea:'<path d="M320 74c-74 0-117 53-102 116 10 43 47 55 56 88h92c9-33 46-45 56-88 15-63-28-116-102-116Z" fill="A4"/><path d="M280 279h80m-70 23h60m-30-196v41m-60-10 27 28m93-28-27 28" stroke="A2" stroke-width="9" stroke-linecap="round"/><circle cx="320" cy="192" r="25" fill="#fff" opacity=".75"/>'
};
function buildSvg(word,meaning){
 var s=(word+' '+meaning).toLowerCase(),kind='idea';
 for(var i=0;i<rules.length;i++){if(rules[i][0].test(s)){kind=rules[i][1];break}}
 var seed=hash(word.toLowerCase()+'|'+meaning),p=palettes[seed%palettes.length];
 var artSvg=art[kind].replace(/A([2-4])/g,function(_,n){return p[Number(n)-1]});
 return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360" role="img" aria-label="'+esc(word)+'：'+esc(meaning)+'"><title>'+esc(word)+' — '+esc(meaning)+'</title><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="'+p[0]+'"/><stop offset="1" stop-color="#fff"/></linearGradient></defs><rect width="640" height="360" rx="28" fill="url(#bg)"/><circle cx="540" cy="68" r="38" fill="'+p[2]+'" opacity=".65"/><circle cx="92" cy="294" r="58" fill="'+p[2]+'" opacity=".35"/>'+artSvg+'</svg>';
}
window.createWordMemorySvg=function(word,meaning){return buildSvg(String(word||''),String(meaning||''))};
function render(word){
 var el=$('word-enrichment');if(!el)return;
 var q=Array.isArray(window.Q)&&window.Q.length?window.Q[window.C]:null;
 var meaning=q&&q.w===word?q.d:'';
 var s=(word+' '+meaning).toLowerCase(),kind='idea',label='概念联想';
 for(var i=0;i<rules.length;i++){if(rules[i][0].test(s)){kind=rules[i][1];label=rules[i][2];break}}
 var svg=buildSvg(word,meaning);
 var old=el.querySelector('.word-svg-memory');if(old)old.remove();
 var card=document.createElement('section');card.className='word-svg-memory';
 card.innerHTML='<div class="word-svg-heading"><span>视觉记忆 · 本地 SVG 插画</span><span class="word-svg-kind">'+esc(label)+'</span></div><div class="word-svg-art">'+svg+'</div><div class="word-svg-caption"><strong>'+esc(word)+'</strong><span>'+esc(meaning||'观察画面，联想单词含义')+'</span></div><div class="word-svg-tip">先看图回忆词义，再翻开下方卡片核对。插画由本地 SVG 规则生成，无需联网。</div>';
 el.insertBefore(card,el.firstChild);
}
var original=window.loadWordEnrichment;
if(typeof original==='function'){window.loadWordEnrichment=function(word){original(word);render(word)}}
document.addEventListener('DOMContentLoaded',function(){var q=Array.isArray(window.Q)&&window.Q.length?window.Q[window.C]:null;if(q)render(q.w)});
})();