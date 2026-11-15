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

/* Exact lexical scenes: the illustration is selected by the headword, not by a loose substring. */
var semanticScenes={
radiate:['light','向四周发散：辐射、散发','<circle cx="320" cy="180" r="38" fill="A4"/><g stroke="A2" stroke-width="12" stroke-linecap="round"><path d="M320 95V45M320 315v-50M235 180h-55M460 180h-55M260 120l-36-36M416 276l-36-36M380 120l36-36M224 276l36-36"/></g><circle cx="320" cy="180" r="75" fill="none" stroke="A3" stroke-width="9" stroke-dasharray="8 13"/>'],
radiant:['light','容光焕发：明亮、有光彩','<circle cx="320" cy="165" r="68" fill="A4"/><g stroke="A2" stroke-width="11" stroke-linecap="round"><path d="M320 55V25M320 305v-30M210 165h-30M460 165h-30M242 87l-22-22M420 263l-22-22M398 87l22-22M220 263l22-22"/></g><path d="M288 170q32 30 64 0" stroke="A2" stroke-width="8" fill="none"/>'],
radical:['idea','根本的：触及事物根源','<path d="M320 65v170m0-55-85 75m85-75 85 75m-85-75V90" stroke="A2" stroke-width="14" fill="none" stroke-linecap="round"/><circle cx="320" cy="72" r="30" fill="A4"/><path d="M235 255l-18 38m18-38 38 14m132-14 18 38m-18-38-38 14" stroke="A3" stroke-width="12"/>'],
object:['observe','具体物体：被观察的对象','<rect x="225" y="105" width="190" height="150" rx="20" fill="A3" stroke="A2" stroke-width="9"/><rect x="260" y="140" width="120" height="80" rx="8" fill="#fff" stroke="A2" stroke-width="6"/><circle cx="320" cy="180" r="22" fill="A4"/>'],
objective:['travel','目标：瞄准要到达的终点','<circle cx="320" cy="175" r="100" fill="#fff" stroke="A2" stroke-width="9"/><circle cx="320" cy="175" r="62" fill="none" stroke="A3" stroke-width="14"/><circle cx="320" cy="175" r="22" fill="A4"/><path d="M320 175l100-90" stroke="A2" stroke-width="10"/>'],
objection:['speech','反对、异议：提出不同意见','<path d="M150 95h340v150H280l-65 48v-48h-65Z" fill="#fff" stroke="A2" stroke-width="9"/><path d="M235 135l170 70m0-70-170 70" stroke="A4" stroke-width="15" stroke-linecap="round"/>'],
obligation:['law','义务、责任：必须履行的承诺','<rect x="220" y="75" width="200" height="215" rx="18" fill="#fff" stroke="A2" stroke-width="9"/><path d="M260 130l18 18 30-36m-48 80 18 18 30-36m20-44h48m-48 80h48" stroke="A3" stroke-width="11" fill="none" stroke-linecap="round"/>'],
obscure:['observe','模糊、难懂：被雾遮挡','<path d="M175 175q20-85 100-65 45-90 130-35 55 35 30 95 65 35 20 90H205q-55-25-30-85Z" fill="A3"/><path d="M210 230h220m-190 28h160" stroke="A2" stroke-width="12" stroke-linecap="round"/>'],
observation:['observe','观察、观测：仔细查看细节','<path d="M130 175q190-190 380 0-190 190-380 0Z" fill="#fff" stroke="A2" stroke-width="9"/><circle cx="320" cy="175" r="58" fill="A3" stroke="A2" stroke-width="8"/><circle cx="320" cy="175" r="23" fill="A4"/><path d="M410 245l55 55" stroke="A2" stroke-width="14"/>'],
obsolete:['time','过时、淘汰：旧物停止使用','<rect x="220" y="90" width="200" height="185" rx="18" fill="#fff" stroke="A2" stroke-width="9"/><path d="M260 135h120m-120 38h85m-85 38h50" stroke="A3" stroke-width="11" stroke-linecap="round"/><path d="M235 280l170-190" stroke="A4" stroke-width="16"/>'],
obtain:['growth','获得：把目标收入手中','<path d="M210 230q-20-55 25-68l45 35v-95q0-25 22-25t22 25v65l18-20q20-15 35 5l-4 18q28-12 38 12l-10 35q-12 42-48 55H260q-35-8-50-42Z" fill="A3" stroke="A2" stroke-width="8"/><path d="M320 40l13 25 27 4-20 19 5 27-25-13-25 13 5-27-20-19 27-4Z" fill="A4"/>'],
obvious:['light','明显、显然：一眼就能看出来','<circle cx="320" cy="170" r="72" fill="A4"/><path d="M320 55V25m0 290v-30M205 170h-30m290 0h-30M240 90l-22-22m204 204-22-22m0-160 22-22M218 272l22-22" stroke="A2" stroke-width="12"/><path d="M285 170l24 24 48-55" stroke="#fff" stroke-width="13" fill="none"/>'],
abandon:['travel','放弃、遗弃：转身离开','<rect x="205" y="110" width="130" height="155" fill="A3" stroke="A2" stroke-width="8"/><path d="M335 110v35h25" stroke="A2" stroke-width="8" fill="none"/><path d="M390 100q60 45 15 100m0 0-28-10m28 10 10-28" stroke="A4" stroke-width="12" fill="none" stroke-linecap="round"/>'],
ability:['idea','能力：能够完成某件事','<circle cx="320" cy="170" r="92" fill="#fff" stroke="A2" stroke-width="9"/><path d="M265 170l38 40 75-88" stroke="A3" stroke-width="18" fill="none" stroke-linecap="round"/>'],
accept:['speech','接受：伸手接过并认可','<path d="M175 210q45-55 100-18l45 30 55-30q50-32 90 18l-65 65H240Z" fill="A3" stroke="A2" stroke-width="8"/><path d="M270 155l35 38 72-78" stroke="A4" stroke-width="14" fill="none"/>'],
access:['travel','通道、进入权：打开一扇门','<path d="M220 285V90q100-60 200 0v195Z" fill="#fff" stroke="A2" stroke-width="9"/><path d="M270 285V120q50-30 100 0v165Z" fill="A3"/><circle cx="350" cy="200" r="8" fill="A4"/>'],
achieve:['growth','实现、达成：登顶并插旗','<path d="M175 280l90-115 55 70 75-125 75 170Z" fill="A3" stroke="A2" stroke-width="8"/><path d="M385 120V55h75l-25 25 25 25h-75" fill="none" stroke="A4" stroke-width="10"/>'],
across:['travel','横穿、在对面：跨越两岸','<path d="M110 250q80-55 160 0t160 0 100 0" fill="none" stroke="A3" stroke-width="20"/><path d="M165 170h310m-38-28 38 28-38 28" stroke="A2" stroke-width="12" fill="none"/>'],
action:['idea','行动：把意图变成动作','<path d="M255 85l140 95-70 20-20 78Z" fill="A4" stroke="A2" stroke-width="9"/><path d="M175 270l52-52m-70-25h48m-20-62 35 35" stroke="A3" stroke-width="12"/>'],
active:['person','活跃的：正在运动、运转','<circle cx="300" cy="85" r="30" fill="A4"/><path d="M295 125l-45 65 65 25 45-52m-110 27-50 40m115-15 52 55m-117-80-15 75" stroke="A2" stroke-width="15" fill="none" stroke-linecap="round"/>'],
activity:['person','活动：一组动作或事件','<circle cx="250" cy="115" r="25" fill="A4"/><circle cx="390" cy="115" r="25" fill="A4"/><path d="M195 265q0-100 55-100t55 100m30 0q0-100 55-100t55 100" fill="A3" stroke="A2" stroke-width="8"/>'],
advantage:['growth','优势：领先一步的有利条件','<path d="M205 275h230M240 275v-60h160v60M280 215v-60h80v60M305 155v-55h30v55" fill="A3" stroke="A2" stroke-width="8"/><path d="M320 60l20 25h-40Z" fill="A4"/>'],
affect:['science','影响：变化从一个传递到另一个','<circle cx="210" cy="175" r="34" fill="A4"/><circle cx="320" cy="175" r="34" fill="A3"/><circle cx="430" cy="175" r="34" fill="A4"/><path d="M250 175h32m-10-12 12 12-12 12m76-12h32m-10-12 12 12-12 12" stroke="A2" stroke-width="9" fill="none"/>'],
afford:['economy','负担得起：预算允许的支出','<rect x="215" y="105" width="210" height="155" rx="18" fill="#fff" stroke="A2" stroke-width="9"/><path d="M215 150h210" stroke="A2" stroke-width="9"/><circle cx="320" cy="205" r="38" fill="A3"/><path d="M334 185q-16-13-30 0-12 14 14 24t14 23q-14 14-31 0m17-58v70" stroke="A4" stroke-width="7" fill="none"/>'],
agree:['speech','同意：双方握手达成一致','<path d="M180 170l70-45 70 42 55-22 85 50-70 70-70-38-55 30-85-45Z" fill="A3" stroke="A2" stroke-width="8"/><path d="M260 190l60 35 60-42" stroke="A4" stroke-width="13" fill="none"/>'],
amount:['economy','数量、总额：衡量多少','<path d="M320 75v170m-115-100h230M205 145l-35 85h70Zm230 0-35 85h70Z" fill="A3" stroke="A2" stroke-width="8"/><path d="M250 265h140" stroke="A4" stroke-width="11"/>']
};
/* Sense-specific scenes: one headword can map to several genuinely different meanings. */
var multiSenseScenes={
 object:[
  [/物体|物品|东西|对象|宾语/,['observe','物体 / 对象：可被指向的具体事物','<rect x="220" y="105" width="200" height="150" rx="18" fill="A3" stroke="A2" stroke-width="9"/><circle cx="320" cy="180" r="35" fill="A4"/><path d="M250 275h140" stroke="A2" stroke-width="9"/>']],
  [/目标|目的/,['travel','目标：行动要抵达的终点','<circle cx="320" cy="175" r="100" fill="#fff" stroke="A2" stroke-width="9"/><circle cx="320" cy="175" r="62" fill="none" stroke="A3" stroke-width="14"/><circle cx="320" cy="175" r="22" fill="A4"/><path d="M320 175l115-95" stroke="A2" stroke-width="10"/>']],
  [/不同意|反对/,['speech','反对：明确表达异议','<path d="M145 90h350v155H275l-65 50v-50h-65Z" fill="#fff" stroke="A2" stroke-width="9"/><path d="M235 130l170 75m0-75-170 75" stroke="A4" stroke-width="16" stroke-linecap="round"/>']]
 ],
 figure:[
  [/数字|算术|计算/,['science','数字 / 计算：用数字进行运算','<rect x="235" y="75" width="170" height="220" rx="18" fill="#fff" stroke="A2" stroke-width="9"/><rect x="260" y="105" width="120" height="48" rx="8" fill="A3"/><g fill="A4"><circle cx="280" cy="190" r="13"/><circle cx="320" cy="190" r="13"/><circle cx="360" cy="190" r="13"/><circle cx="280" cy="235" r="13"/><circle cx="320" cy="235" r="13"/><circle cx="360" cy="235" r="13"/></g>']],
  [/人物|人影|身材|塑像/,['person','人物 / 身影：一个人的形象','<circle cx="320" cy="105" r="43" fill="A4"/><path d="M235 280q3-110 85-110t85 110Z" fill="A3" stroke="A2" stroke-width="8"/><path d="M270 205h100" stroke="A2" stroke-width="8"/>']],
  [/图表|图形/,['science','图表：用图形呈现数据','<path d="M205 275V95M205 275h245" stroke="A2" stroke-width="10"/><rect x="245" y="205" width="38" height="70" fill="A3"/><rect x="310" y="155" width="38" height="120" fill="A4"/><rect x="375" y="110" width="38" height="165" fill="A3"/><path d="M245 175l65-45 65 15 70-65" fill="none" stroke="A2" stroke-width="8"/>']],
  [/认为|以为|弄懂|弄清楚/,['idea','理解 / 认为：脑中形成判断','<path d="M320 65c-75 0-115 55-100 118 10 42 45 55 55 88h90c10-33 45-46 55-88 15-63-25-118-100-118Z" fill="A4"/><path d="M270 185l35 35 75-85" fill="none" stroke="A2" stroke-width="13" stroke-linecap="round"/>']]
 ],
 present:[
  [/礼物/,['growth','礼物：被包装并送出的东西','<rect x="205" y="145" width="230" height="135" rx="12" fill="A3" stroke="A2" stroke-width="8"/><path d="M320 145v135M205 190h230" stroke="#fff" stroke-width="12"/><path d="M320 145q-90-15-65-65 45-25 65 65 25-90 65-65 25 50-65 65Z" fill="A4" stroke="A2" stroke-width="6"/>']],
  [/目前|现在|当前|当前的/,['time','当前：时间轴上的此刻','<path d="M165 180h310" stroke="A2" stroke-width="10"/><circle cx="320" cy="180" r="38" fill="A4" stroke="A2" stroke-width="8"/><path d="M320 180V95m0 85 55 30" stroke="A2" stroke-width="9" fill="none"/><circle cx="190" cy="180" r="12" fill="A3"/><circle cx="450" cy="180" r="12" fill="A3"/>']],
  [/在场|出席|存在/,['person','在场：人物出现在现场','<circle cx="320" cy="110" r="35" fill="A4"/><path d="M250 280q0-115 70-115t70 115Z" fill="A3" stroke="A2" stroke-width="8"/><path d="M175 290h290" stroke="A2" stroke-width="9"/>']],
  [/授予|提交|展现|呈现|使经历/,['speech','呈交 / 展示：把内容递交出来','<rect x="225" y="95" width="170" height="190" rx="12" fill="#fff" stroke="A2" stroke-width="8"/><path d="M260 145h100m-100 40h100m-100 40h65" stroke="A3" stroke-width="10"/><path d="M390 215l55 0m-20-20 20 20-20 20" stroke="A4" stroke-width="10" fill="none"/>']]
 ],
 issue:[
  [/议题|问题/,['idea','议题 / 问题：需要讨论解决的焦点','<path d="M150 90h340v160H280l-65 55v-55h-65Z" fill="#fff" stroke="A2" stroke-width="9"/><circle cx="320" cy="165" r="34" fill="A4"/><path d="M320 145v28m0 18v4" stroke="#fff" stroke-width="9" stroke-linecap="round"/>']],
  [/一期|期号|出版|发行|发放|签发|宣布/,['knowledge','刊物 / 发布：一期内容被正式发布','<rect x="220" y="75" width="200" height="220" rx="12" fill="#fff" stroke="A2" stroke-width="9"/><rect x="245" y="100" width="150" height="72" fill="A3"/><path d="M250 200h140m-140 32h115m-115 32h85" stroke="A2" stroke-width="9" stroke-linecap="round"/>']]
 ],
 charge:[
  [/费用|要价|收费|账上/,['economy','费用 / 收费：支付金钱','<rect x="210" y="100" width="220" height="170" rx="18" fill="#fff" stroke="A2" stroke-width="9"/><circle cx="320" cy="185" r="48" fill="A3"/><path d="M338 155q-20-17-39 0-16 18 20 31t18 34q-18 18-42 0m22-80v95" stroke="A4" stroke-width="8" fill="none"/>']],
  [/指控|指责|控告/,['law','指控：法庭提出控诉','<path d="M320 75v185M220 110h200M250 110l-40 90h80Zm140 0-40 90h80Z" fill="A3" stroke="A2" stroke-width="8"/><path d="M245 270h150" stroke="A4" stroke-width="12"/>']],
  [/电荷|充电/,['science','电荷 / 充电：电能与电流','<path d="M345 65 230 200h80l-15 100 120-155h-82Z" fill="A4" stroke="A2" stroke-width="8" stroke-linejoin="round"/><path d="M175 115h45m-22-22v45m225 110h45m-22-22v45" stroke="A3" stroke-width="9"/>']],
  [/掌管|负责/,['person','掌管：负责管理一项事务','<circle cx="320" cy="105" r="36" fill="A4"/><path d="M245 280q0-105 75-105t75 105Z" fill="A3" stroke="A2" stroke-width="8"/><path d="M270 225h100m-50-45v85" stroke="A2" stroke-width="8"/>']]
 ],
 account:[
  [/账户|账目/,['economy','账户 / 账目：记录收支余额','<rect x="210" y="95" width="220" height="175" rx="16" fill="#fff" stroke="A2" stroke-width="9"/><path d="M210 145h220" stroke="A2" stroke-width="9"/><circle cx="270" cy="205" r="24" fill="A4"/><path d="M315 190h75m-75 32h55" stroke="A3" stroke-width="10" stroke-linecap="round"/>']],
  [/叙述|说明|解释/,['speech','叙述 / 解释：把事情讲清楚','<path d="M145 85h350v165H275l-65 55v-55h-65Z" fill="#fff" stroke="A2" stroke-width="9"/><path d="M205 135h230m-230 42h180m-180 42h125" stroke="A3" stroke-width="10" stroke-linecap="round"/>']],
  [/认为是|视为/,['idea','认为 / 视为：形成一种判断','<circle cx="320" cy="170" r="90" fill="#fff" stroke="A2" stroke-width="9"/><path d="M270 170l35 35 75-85" stroke="A4" stroke-width="16" fill="none" stroke-linecap="round"/>']]
 ],
 address:[
  [/地址|网址/,['travel','地址 / 网址：定位一个地点或网页','<path d="M320 285s-95-100-95-165a95 95 0 1 1 190 0c0 65-95 165-95 165Z" fill="A3" stroke="A2" stroke-width="8"/><circle cx="320" cy="120" r="32" fill="A4"/><path d="M180 300h280" stroke="A2" stroke-width="9"/>']],
  [/演讲|讲话/,['speech','演讲：面向听众表达观点','<path d="M180 95h240v130H180Z" fill="#fff" stroke="A2" stroke-width="8"/><path d="M300 225v55m-40 0h80" stroke="A2" stroke-width="9"/><circle cx="220" cy="275" r="15" fill="A4"/><circle cx="300" cy="275" r="15" fill="A4"/><circle cx="380" cy="275" r="15" fill="A4"/>']],
  [/处理/,['science','处理问题：面对问题并着手解决','<path d="M180 115h280v170H180Z" fill="#fff" stroke="A2" stroke-width="8"/><path d="M225 200l45 42 95-100" stroke="A4" stroke-width="15" fill="none" stroke-linecap="round"/>']]
 ],
 subject:[
  [/主题/,['idea','主题：讨论或文章围绕的中心','<circle cx="320" cy="175" r="95" fill="A4" opacity=".35"/><circle cx="320" cy="175" r="58" fill="A3"/><circle cx="320" cy="175" r="20" fill="#fff"/><path d="M320 55v45m0 150v45m-120-120h45m150 0h45" stroke="A2" stroke-width="9"/>']],
  [/学科/,['knowledge','学科：系统学习的一门知识','<path d="M165 105q78-25 155 20v165q-77-45-155-20Zm310 0q-78-25-155 20v165q77-45 155-20Z" fill="#fff" stroke="A2" stroke-width="8"/><path d="M320 125v165" stroke="A3" stroke-width="9"/>']],
  [/对象|主语/,['observe','语法对象 / 主语：句子中的成分','<rect x="155" y="125" width="125" height="80" rx="12" fill="A3"/><rect x="360" y="125" width="125" height="80" rx="12" fill="A4"/><path d="M280 165h80m-20-20 20 20-20 20" stroke="A2" stroke-width="9" fill="none"/><path d="M165 235h310" stroke="A2" stroke-width="8"/>']],
  [/易遭|取决于|受.*支配/,['law','受制于：处于条件或规则约束下','<rect x="220" y="100" width="200" height="170" rx="12" fill="#fff" stroke="A2" stroke-width="9"/><path d="M250 145h140m-140 45h140m-140 45h95" stroke="A3" stroke-width="11"/><path d="M320 65v35" stroke="A4" stroke-width="12"/>']]
 ],
 field:[
  [/田|地|运动场/,['nature','田野 / 场地：开阔的地面空间','<path d="M150 265 250 105l90 160 70-110 80 110Z" fill="A3" stroke="A2" stroke-width="8"/><path d="M180 285h280" stroke="A2" stroke-width="9"/>']],
  [/领域/,['knowledge','领域：某一专业范围','<circle cx="320" cy="175" r="105" fill="none" stroke="A2" stroke-width="9"/><circle cx="320" cy="175" r="65" fill="A3"/><circle cx="320" cy="175" r="25" fill="A4"/>']],
  [/实地|处理|应付/,['science','实地处理：到现场调查应对','<path d="M180 105h280v180H180Z" fill="#fff" stroke="A2" stroke-width="8"/><path d="M220 245l55-75 45 40 75-95" fill="none" stroke="A4" stroke-width="12"/><circle cx="395" cy="115" r="12" fill="A3"/>']]
 ],
 mean:[
  [/意思是/,['speech','意思是：用语言表达含义','<path d="M150 90h340v150H280l-65 50v-50h-65Z" fill="#fff" stroke="A2" stroke-width="9"/><path d="M220 135h190m-190 45h145" stroke="A3" stroke-width="11"/>']],
  [/打算|意图/,['idea','打算：心中形成计划','<circle cx="320" cy="150" r="65" fill="A4"/><path d="M320 215v65m-75-20h150" stroke="A2" stroke-width="10"/><path d="M285 150l25 25 50-55" stroke="#fff" stroke-width="10" fill="none"/>']],
  [/小气|刻薄/,['person','刻薄 / 小气：不愿分享的态度','<circle cx="320" cy="110" r="34" fill="A4"/><path d="M250 280q0-105 70-105t70 105Z" fill="A3" stroke="A2" stroke-width="8"/><path d="M280 150l25 15m55-15-25 15" stroke="A2" stroke-width="8"/>']],
  [/平均/,['science','平均数：把总量均分','<path d="M190 250h260M220 250v-70h55v70m35 0v-70h55v70m35 0v-70h55v70" fill="A3" stroke="A2" stroke-width="8"/><path d="M190 145h260" stroke="A4" stroke-width="10"/>']]
 ],
 nature:[
  [/自然/,['nature','自然：山川、植物与环境','<path d="M130 270 255 95l75 105 55-75 125 145Z" fill="A3" stroke="A2" stroke-width="8"/><circle cx="450" cy="95" r="34" fill="A4"/><path d="M320 280v-90m0 45-35-28m35 48 35-28" stroke="A2" stroke-width="9"/>']],
  [/天性|性格|本质/,['person','天性 / 本质：事物内在的特征','<circle cx="320" cy="175" r="95" fill="#fff" stroke="A2" stroke-width="9"/><circle cx="320" cy="175" r="48" fill="A3"/><circle cx="320" cy="175" r="18" fill="A4"/>']]
 ],
 character:[
  [/性格|特点|名誉/,['person','性格 / 特点：一个人的内在特征','<circle cx="320" cy="105" r="40" fill="A4"/><path d="M235 280q0-110 85-110t85 110Z" fill="A3" stroke="A2" stroke-width="8"/><path d="M290 135q30 20 60 0" stroke="A2" stroke-width="8" fill="none"/>']],
  [/角色/,['speech','角色：故事中的人物身份','<path d="M250 90h140v190H250Z" fill="#fff" stroke="A2" stroke-width="8"/><circle cx="320" cy="145" r="30" fill="A4"/><path d="M275 245q0-65 45-65t45 65Z" fill="A3"/>']],
  [/字符/,['knowledge','字符：文字系统中的单个符号','<rect x="210" y="95" width="220" height="175" rx="15" fill="#fff" stroke="A2" stroke-width="8"/><path d="M265 225l55-105 55 105m-85-38h60" stroke="A4" stroke-width="13" fill="none"/>']]
 ],
 function:[
  [/函数/,['science','函数：输入经过规则映射为输出','<rect x="250" y="115" width="140" height="120" rx="18" fill="A3" stroke="A2" stroke-width="8"/><path d="M155 175h95m-25-20 25 20-25 20m140 0h95m-25-20 25 20-25 20" stroke="A2" stroke-width="9" fill="none"/><circle cx="185" cy="175" r="15" fill="A4"/><circle cx="455" cy="175" r="15" fill="A4"/>']],
  [/功能|职能|作用/,['idea','功能：某物承担的用途','<circle cx="320" cy="175" r="70" fill="A3"/><path d="M320 75v55m0 90v55m-100-100h55m90 0h55" stroke="A2" stroke-width="12"/><circle cx="320" cy="175" r="24" fill="A4"/>']],
  [/宴会/,['person','宴会：人们聚集参加活动','<circle cx="245" cy="125" r="25" fill="A4"/><circle cx="395" cy="125" r="25" fill="A4"/><path d="M195 265q0-95 50-95t50 95m50 0q0-95 50-95t50 95" fill="A3" stroke="A2" stroke-width="8"/><path d="M285 215h70" stroke="A4" stroke-width="9"/>']]
 ],
 case:[
  [/案件|诉讼/,['law','案件：进入司法程序的案子','<path d="M220 85h200v205H220Z" fill="#fff" stroke="A2" stroke-width="9"/><path d="M255 135h130m-130 42h130m-130 42h90" stroke="A3" stroke-width="10"/><path d="M280 70h80" stroke="A4" stroke-width="12"/>']],
  [/情况|事例|论据/,['idea','情况 / 事例：用一个实例说明观点','<rect x="205" y="90" width="230" height="190" rx="15" fill="#fff" stroke="A2" stroke-width="8"/><circle cx="270" cy="150" r="22" fill="A4"/><path d="M315 145h85m-130 55h130m-130 35h95" stroke="A3" stroke-width="10"/>']],
  [/箱|盒/,['observe','箱子：装载物品的容器','<path d="M190 145 320 80l130 65v125l-130 65-130-65Z" fill="A3" stroke="A2" stroke-width="8"/><path d="M190 145l130 70 130-70M320 215v120" fill="none" stroke="A2" stroke-width="8"/>']]
 ]
};

/* Expanded high-frequency exam vocabulary: distinct visual metaphors for each gloss. */
var extraSenseArt={
money:'<circle cx="320" cy="175" r="82" fill="A3" stroke="A2" stroke-width="9"/><path d="M350 125q-45-35-72 0-25 30 35 48t35 48q-30 35-75 0m38-115v145" fill="none" stroke="A4" stroke-width="11"/>',
trade:'<path d="M150 145h310m-35-30 35 30-35 30M490 215H180m35-30-35 30 35 30" fill="none" stroke="A2" stroke-width="12" stroke-linecap="round"/><rect x="260" y="145" width="120" height="70" rx="12" fill="A3"/>',
fair:'<path d="M320 75v185m-105-135h210M250 125l-48 95h96Zm140 0-48 95h96Z" fill="A3" stroke="A2" stroke-width="8"/><path d="M255 275h130" stroke="A4" stroke-width="12"/>',
gift:'<rect x="205" y="145" width="230" height="135" rx="12" fill="A3" stroke="A2" stroke-width="8"/><path d="M320 145v135M205 190h230" stroke="#fff" stroke-width="12"/><path d="M320 145q-90-15-65-65 45-25 65 65 25-90 65-65 25 50-65 65Z" fill="A4"/>',
care:'<path d="M320 270s-115-75-115-145c0-65 80-85 115-25 35-60 115-40 115 25 0 70-115 145-115 145Z" fill="A4" stroke="A2" stroke-width="8"/>',
machine:'<rect x="205" y="105" width="230" height="155" rx="18" fill="A3" stroke="A2" stroke-width="9"/><circle cx="270" cy="180" r="30" fill="#fff" stroke="A2" stroke-width="8"/><path d="M320 150h80m-80 35h80m-80 35h55" stroke="A4" stroke-width="10" stroke-linecap="round"/>',
water:'<path d="M120 205q50-55 100 0t100 0 100 0 100 0M120 255q50-55 100 0t100 0 100 0 100 0" fill="none" stroke="A3" stroke-width="18" stroke-linecap="round"/><path d="M320 75c-55 75-65 95-65 125a65 65 0 0 0 130 0c0-30-10-50-65-125Z" fill="A4"/>',
average:'<path d="M180 250h280M215 250v-90h55v90m45 0v-90h55v90m45 0v-90h55v90" fill="A3" stroke="A2" stroke-width="8"/><path d="M180 125h280" stroke="A4" stroke-width="12" stroke-dasharray="12 10"/>',
clothes:'<path d="M245 90 190 125l35 65 35-20v110h120V170l35 20 35-65-55-35-45 30h-60Z" fill="A3" stroke="A2" stroke-width="9" stroke-linejoin="round"/>',
claim:'<path d="M155 95h330v155H280l-65 55v-55h-60Z" fill="#fff" stroke="A2" stroke-width="9"/><path d="M220 140h200m-200 45h145" stroke="A3" stroke-width="12" stroke-linecap="round"/>',
apply:'<rect x="205" y="85" width="190" height="210" rx="14" fill="#fff" stroke="A2" stroke-width="9"/><path d="M245 145h110m-110 42h110m-110 42h70" stroke="A3" stroke-width="11"/><path d="m380 220 45 45 65-85" fill="none" stroke="A4" stroke-width="13" stroke-linecap="round"/>',
approach:'<path d="M130 245h380M175 205l-45 40 45 40M465 205l45 40-45 40" fill="none" stroke="A2" stroke-width="10"/><circle cx="320" cy="170" r="75" fill="A3"/><path d="M320 95v150m-75-75h150" stroke="A4" stroke-width="9"/>',
process:'<rect x="95" y="130" width="115" height="90" rx="12" fill="A3"/><rect x="265" y="130" width="115" height="90" rx="12" fill="A4"/><rect x="435" y="130" width="115" height="90" rx="12" fill="A3"/><path d="M210 175h55m-18-18 18 18-18 18m115-18h55m-18-18 18 18-18 18" stroke="A2" stroke-width="9" fill="none"/>',
'run':'<path d="M130 250q85-100 170 0t170 0" fill="none" stroke="A3" stroke-width="16"/><circle cx="320" cy="100" r="30" fill="A4"/><path d="m320 135-35 65 65 25m-65-25-55 55m55-55 65-15 55 45" stroke="A2" stroke-width="12" fill="none" stroke-linecap="round"/>',
work:'<path d="M175 130h290v165H175Z" fill="#fff" stroke="A2" stroke-width="9"/><path d="M245 130v-35h150v35M220 180h200m-200 45h150" fill="none" stroke="A3" stroke-width="12"/><circle cx="420" cy="255" r="25" fill="A4"/>',
file:'<rect x="175" y="115" width="290" height="185" rx="12" fill="#fff" stroke="A2" stroke-width="9"/><path d="M175 155h290m-230-40v-25h115v25M220 195h200m-200 42h155" stroke="A3" stroke-width="11"/>',
cross:'<path d="M170 95 470 275M470 95 170 275" stroke="A3" stroke-width="30" stroke-linecap="round"/><path d="M320 65v240" stroke="A2" stroke-width="8" stroke-dasharray="10 12"/>',
handle:'<path d="M220 150v-30q0-35 35-35h130q35 0 35 35v30" fill="none" stroke="A2" stroke-width="13"/><rect x="175" y="145" width="290" height="150" rx="16" fill="A3"/><path d="M250 205h140" stroke="A4" stroke-width="13"/>',
mirror:'<rect x="220" y="75" width="200" height="230" rx="100" fill="#fff" stroke="A2" stroke-width="10"/><path d="M270 255 370 125" stroke="A4" stroke-width="16" stroke-linecap="round"/><circle cx="320" cy="190" r="38" fill="A3" opacity=".6"/>',
counter:'<path d="M150 165h340v115H150Z" fill="A3" stroke="A2" stroke-width="9"/><path d="M205 165v-70h230v70" fill="none" stroke="A2" stroke-width="9"/><path d="m250 120 55 55m-55 0 55-55" stroke="A4" stroke-width="10"/>',
echo:'<path d="M260 130q-70 45 0 90m40-125q-100 80 0 160m45-195q-130 115 0 230" fill="none" stroke="A3" stroke-width="12" stroke-linecap="round"/><circle cx="210" cy="175" r="20" fill="A4"/>',
manual:'<path d="M170 95h145q35 0 35 35v170H205q-35 0-35-35Z M470 95H325q-35 0-35 35v170h145q35 0 35-35Z" fill="#fff" stroke="A2" stroke-width="8"/><path d="M215 150h90m-90 40h90m70-40h55m-55 40h55" stroke="A3" stroke-width="10"/>',
facility:'<path d="M145 275V135l85-55 85 55v140Zm170 0V115l85-45 85 45v160Z" fill="A3" stroke="A2" stroke-width="8"/><path d="M195 190h70m-35-35v70m145-35h70" stroke="A4" stroke-width="12"/>',
plus:'<circle cx="320" cy="175" r="100" fill="A3"/><path d="M320 105v140m-70-70h140" stroke="#fff" stroke-width="20" stroke-linecap="round"/>',
extra:'<rect x="190" y="115" width="260" height="175" rx="14" fill="#fff" stroke="A2" stroke-width="9"/><path d="M320 75v170m-85-85h170" stroke="A4" stroke-width="15" stroke-linecap="round"/>',
protest:'<path d="M205 285V105l190 50-190 50" fill="A4" stroke="A2" stroke-width="9"/><path d="M205 285h-35" stroke="A2" stroke-width="12"/><circle cx="420" cy="120" r="25" fill="A3"/><path d="M420 65v-25m45 80h25" stroke="A2" stroke-width="8"/>',
sort:'<path d="M175 110h290m-290 65h220m-220 65h150" stroke="A3" stroke-width="20" stroke-linecap="round"/><path d="m390 220 35 35 55-75" fill="none" stroke="A4" stroke-width="13"/>',
advocate:'<path d="M150 90h340v155H280l-65 55v-55h-65Z" fill="#fff" stroke="A2" stroke-width="9"/><path d="M220 145h200m-200 45h150" stroke="A3" stroke-width="11"/><path d="m410 245 30 30 55-65" fill="none" stroke="A4" stroke-width="12"/>',
discipline:'<path d="M320 70 455 120v85q0 75-135 125Q185 280 185 205v-85Z" fill="A3" stroke="A2" stroke-width="9"/><path d="m260 200 40 40 85-95" fill="none" stroke="A4" stroke-width="15"/>',
assume:'<circle cx="320" cy="175" r="95" fill="#fff" stroke="A2" stroke-width="9"/><path d="m270 175 35 35 75-85" fill="none" stroke="A4" stroke-width="15"/><path d="M320 55v-25m0 290v-25" stroke="A3" stroke-width="10"/>',
attack:'<path d="m170 250 115-115 65 65 120-120" fill="none" stroke="A2" stroke-width="18" stroke-linecap="round"/><path d="m425 80 45-5-5 45" fill="none" stroke="A4" stroke-width="13"/>',
attend:'<circle cx="320" cy="105" r="34" fill="A4"/><path d="M245 280q0-105 75-105t75 105Z" fill="A3" stroke="A2" stroke-width="8"/><path d="M155 290h330" stroke="A2" stroke-width="9"/>',
interpret:'<path d="M150 90h340v150H280l-65 50v-50h-65Z" fill="#fff" stroke="A2" stroke-width="9"/><path d="M220 135h190m-190 45h145" stroke="A3" stroke-width="11"/><path d="m360 245 35 30 55-65" fill="none" stroke="A4" stroke-width="12"/>',
pose:'<circle cx="320" cy="100" r="30" fill="A4"/><path d="M320 135 270 210l70 30 45-65m-115 35-45 55m115-25 45 35" fill="none" stroke="A2" stroke-width="13" stroke-linecap="round"/>',
treat:'<path d="M320 70c-55 75-65 95-65 125a65 65 0 0 0 130 0c0-30-10-50-65-125Z" fill="A4"/><path d="M170 265h300m-250-35 35 35-35 35m150-70-35 35 35 35" stroke="A2" stroke-width="9" fill="none"/>',
form:'<path d="M170 250q0-120 150-120t150 120" fill="none" stroke="A3" stroke-width="20"/><path d="M220 245h200m-160-45h120" stroke="A2" stroke-width="11"/><circle cx="320" cy="105" r="25" fill="A4"/>',
conduct:'<circle cx="320" cy="110" r="32" fill="A4"/><path d="M320 145v115m-75-75 75-40 75 40m-75 75-55 45m55-45 55 45" fill="none" stroke="A2" stroke-width="12" stroke-linecap="round"/><path d="M175 95q-30 80 0 160m290-160q30 80 0 160" fill="none" stroke="A3" stroke-width="9"/>'
};
function makeExtraSense(kind,label,shape){return [kind,label,extraSenseArt[shape]]}

Object.assign(extraSenseArt,{
turn:'<path d="M180 175h280m-45-35 45 35-45 35" stroke="A2" stroke-width="12" fill="none"/><path d="M320 80a95 95 0 1 1-80 145" fill="none" stroke="A3" stroke-width="15"/>',
flood:'<path d="M120 190q50-45 100 0t100 0 100 0 100 0M120 245q50-45 100 0t100 0 100 0 100 0" fill="none" stroke="A3" stroke-width="18"/><path d="M180 100h280" stroke="A2" stroke-width="9"/>',
walk:'<circle cx="320" cy="85" r="27" fill="A4"/><path d="m320 115-30 75 65 30m-65-30-55 65m55-65 75-35m-10 65 55 60" fill="none" stroke="A2" stroke-width="13" stroke-linecap="round"/><path d="M150 285h340" stroke="A3" stroke-width="9"/>',
target:'<circle cx="320" cy="175" r="105" fill="none" stroke="A2" stroke-width="9"/><circle cx="320" cy="175" r="65" fill="none" stroke="A3" stroke-width="13"/><circle cx="320" cy="175" r="23" fill="A4"/><path d="m405 90 55-45m-55 45 8-45m-8 45 45 8" stroke="A2" stroke-width="8"/>',
slow:'<circle cx="320" cy="175" r="100" fill="#fff" stroke="A2" stroke-width="9"/><path d="M320 95v85l60 35" stroke="A3" stroke-width="12" fill="none"/><path d="M175 285h290" stroke="A4" stroke-width="10"/>',
person:'<circle cx="320" cy="105" r="38" fill="A4"/><path d="M235 280q0-110 85-110t85 110Z" fill="A3" stroke="A2" stroke-width="8"/>',
level:'<path d="M165 235h310" stroke="A2" stroke-width="12"/><rect x="205" y="145" width="230" height="70" rx="10" fill="A3"/><path d="M320 145V95m-45 0h90" stroke="A4" stroke-width="10"/>',
nature:'<path d="M120 270 245 95l75 105 65-80 125 150Z" fill="A3" stroke="A2" stroke-width="8"/><circle cx="450" cy="95" r="30" fill="A4"/>',
character:'<rect x="205" y="85" width="230" height="210" rx="14" fill="#fff" stroke="A2" stroke-width="9"/><circle cx="320" cy="145" r="35" fill="A4"/><path d="M255 255q0-65 65-65t65 65" fill="A3"/>',
speech:'<path d="M145 85h350v165H275l-65 55v-55h-65Z" fill="#fff" stroke="A2" stroke-width="9"/><path d="M205 135h230m-230 45h175" stroke="A3" stroke-width="11"/>',
knowledge:'<path d="M165 105q78-25 155 20v165q-77-45-155-20Zm310 0q-78-25-155 20v165q77-45 155-20Z" fill="#fff" stroke="A2" stroke-width="8"/><path d="M320 125v165" stroke="A3" stroke-width="9"/>'
});

Object.assign(multiSenseScenes,{
 deal:[[/交易|协议|做生意|买卖|发牌|毒品/,makeExtraSense('economy','交易 / 买卖：双方交换价值','trade')],[/处理|对付|涉及/,makeExtraSense('idea','处理 / 对付：着手应对事务','handle')],[/大量|很多|待遇/,makeExtraSense('economy','大量 / 待遇：数量或受到的对待','money')]],
 fair:[[/公平|合理|按照规则/,makeExtraSense('law','公平：遵循同一规则','fair')],[/浅色|晴朗|美丽/,makeExtraSense('nature','浅色 / 晴朗：明亮的外观','water')],[/展销会|游乐场|集市/,makeExtraSense('travel','集市：人群聚集交易','trade')]],
 gift:[[/礼物/,makeExtraSense('growth','礼物：包装后赠送的物品','gift')],[/天赋|才能/,makeExtraSense('person','天赋：与生俱来的能力','care')],[/赠送/,makeExtraSense('speech','赠送：把物品交给他人','gift')]],
 tend:[[/往往|倾向/,makeExtraSense('idea','倾向：行为方向或概率','approach')],[/照顾|照料/,makeExtraSense('person','照料：照看他人','care')],[/管理|打点/,makeExtraSense('economy','管理：照管经营事务','work')]],
 operate:[[/操作|使运行|运转|使用/,makeExtraSense('science','操作 / 运转：机器按指令工作','machine')],[/手术/,makeExtraSense('person','动手术：医疗操作','treat')],[/经营/,makeExtraSense('economy','经营：持续管理业务','work')]],
 current:[[/当前|现在|流行/,makeExtraSense('time','当前：此时此刻','approach')],[/水流|气流/,makeExtraSense('nature','水流 / 气流：流动的介质','water')],[/电流/,makeExtraSense('science','电流：电荷定向移动','machine')],[/思潮/,makeExtraSense('idea','思潮：群体中的思想流动','echo')]],
 average:[[/平均数|均值|平均数是|计算出/,makeExtraSense('science','平均数：总量均分','average')],[/中等|普通/,makeExtraSense('idea','普通：处于常见水平','sort')]],
 suit:[[/西服|套装/,makeExtraSense('person','套装：穿着的衣服','clothes')],[/诉讼|起诉/,makeExtraSense('law','诉讼：法律程序','claim')],[/适合|相配|合身/,makeExtraSense('idea','适合：彼此匹配','form')]],
 feature:[[/特征|特点|五官/,makeExtraSense('observe','特征：可辨认的特点','mirror')],[/特写|专题/,makeExtraSense('knowledge','专题：集中呈现一个主题','manual')],[/以.*为特色|重要作用/,makeExtraSense('idea','特色 / 作用：突出价值','plus')]],
 claim:[[/声称|申明/,makeExtraSense('speech','声称：公开表达主张','claim')],[/要求拥有|认领|所有权/,makeExtraSense('law','认领：主张权利归属','assume')],[/夺去|生命/,makeExtraSense('person','夺去生命：造成生命损失','attack')],[/索赔|索取|要求/,makeExtraSense('law','索赔：提出权利要求','claim')]],
 apply:[[/申请/,makeExtraSense('knowledge','申请：递交申请材料','apply')],[/适用/,makeExtraSense('law','适用：规则用于具体情形','form')],[/应用|运用/,makeExtraSense('science','应用：把方法用于实践','machine')],[/涂抹|按|踩/,makeExtraSense('person','施加：把力量或物质作用于表面','treat')]],
 approach:[[/接近|靠近/,makeExtraSense('travel','接近：逐步缩短距离','approach')],[/接洽|要求/,makeExtraSense('speech','接洽：主动联系沟通','claim')],[/处理|对付/,makeExtraSense('idea','处理：采用办法应对','handle')],[/方法|态度|路径/,makeExtraSense('knowledge','方法 / 路径：通往目标的方式','process')]],
 process:[[/过程|流程|工序/,makeExtraSense('science','过程：按步骤推进','process')],[/加工|处理/,makeExtraSense('machine','加工：对原料进行处理','machine')],[/审阅|审核/,makeExtraSense('knowledge','审阅：检查文件内容','file')]],
 run:[[/奔跑|跑|赛跑/,makeExtraSense('person','奔跑：身体快速移动','run')],[/行驶|移动|流淌/,makeExtraSense('travel','流动 / 行驶：沿路径移动','water')],[/管理|经营/,makeExtraSense('economy','经营：负责组织运营','work')],[/运转|操作/,makeExtraSense('science','运转：机器持续工作','machine')],[/发生|变成|包含|刊登|连续上演|一段时光/,makeExtraSense('time','发生 / 持续：事件展开','process')]],
 work:[[/工作|干活|职业/,makeExtraSense('person','工作：投入劳动','work')],[/奏效|运转/,makeExtraSense('science','奏效 / 运转：产生预期效果','machine')],[/管理|经营|操作/,makeExtraSense('economy','管理 / 操作：组织事务','handle')],[/成果|作品/,makeExtraSense('knowledge','成果 / 作品：完成的产出','file')]],
 file:[[/文件夹|文件|档案/,makeExtraSense('knowledge','文件 / 档案：保存的信息','file')],[/归档/,makeExtraSense('knowledge','归档：分类保存资料','sort')],[/报道|发送/,makeExtraSense('speech','发送报道：向外发布信息','claim')],[/诉讼|申请|提交/,makeExtraSense('law','提交申请：递交正式文件','apply')],[/锉/,makeExtraSense('science','锉削：磨平材料表面','machine')]],
 cross:[[/越过|渡过/,makeExtraSense('travel','越过：穿过边界','approach')],[/相交|交叉/,makeExtraSense('science','相交：两条路径交汇','cross')],[/反对/,makeExtraSense('speech','反对：提出异议','protest')],[/叉号|十字架/,makeExtraSense('idea','交叉符号：两线相交','cross')],[/恼怒|生气/,makeExtraSense('emotion','恼怒：负面情绪','care')]],
 handle:[[/处理|应付|驾驭/,makeExtraSense('idea','处理 / 应付：掌控问题','handle')],[/触|拿/,makeExtraSense('person','触碰 / 拿取：用手接触','care')],[/把手|柄/,makeExtraSense('science','把手：供抓握的部件','machine')]],
 tackle:[[/处理|难题|交涉|抓获/,makeExtraSense('idea','处理难题：主动解决问题','handle')],[/抢球|抢断|擒抱|阻截/,makeExtraSense('person','抢断：比赛中的身体对抗','attack')],[/体育器材/,makeExtraSense('science','器材：用于运动的装备','machine')]],
 mirror:[[/镜子/,makeExtraSense('observe','镜子：反射影像的表面','mirror')],[/反映|相似|映照|反射/,makeExtraSense('idea','反映：呈现相似特征','echo')]],
 counter:[[/柜台|料理台/,makeExtraSense('economy','柜台：服务与交易台面','counter')],[/计算器/,makeExtraSense('science','计算器：执行数字计算','average')],[/反驳|驳斥/,makeExtraSense('speech','反驳：用论据回应观点','claim')],[/抵制|抵消|逆向|反对/,makeExtraSense('idea','抵制 / 抵消：产生相反作用','cross')]],
 echo:[[/回声|回音|回响/,makeExtraSense('nature','回声：声音反射后返回','echo')],[/相似的东西/,makeExtraSense('idea','相似回响：与原物相似的回应','mirror')],[/附和|重复/,makeExtraSense('speech','附和：重复他人的表达','claim')]],
 manual:[[/人力|体力|手动/,makeExtraSense('person','手动：由人力直接操作','handle')],[/手册|说明书/,makeExtraSense('knowledge','说明书：指导操作的文档','manual')]],
 facility:[[/设备|设施/,makeExtraSense('science','设施：支持活动的设备','facility')],[/特色功能/,makeExtraSense('idea','特色功能：系统提供的能力','machine')],[/天资/,makeExtraSense('person','天资：自然具备的能力','gift')]],
 plus:[[/加|和|外加/,makeExtraSense('science','加法：数量相加','plus')],[/优势|长处|优点/,makeExtraSense('idea','优势：额外的有利条件','extra')],[/零上的|多的/,makeExtraSense('science','正数 / 超出：高于零或基准','average')],[/此外|况且/,makeExtraSense('speech','此外：补充另一项信息','claim')]],
 extra:[[/额外|附加|另外|特别|格外/,makeExtraSense('idea','额外：超出常规部分','extra')],[/另外收费/,makeExtraSense('economy','额外收费：附加成本','money')],[/临时演员/,makeExtraSense('person','临时演员：临时出演者','attend')]],
 protest:[[/抗议|反对/,makeExtraSense('speech','抗议：公开表达反对','protest')],[/申辩|申明/,makeExtraSense('law','申辩：正式说明立场','claim')]],
 sort:[[/种类|类别/,makeExtraSense('knowledge','类别：按共同特征分组','sort')],[/分类|整理|排序/,makeExtraSense('science','分类排序：将项目组织起来','sort')],[/妥善处理/,makeExtraSense('idea','妥善处理：把问题安排妥当','handle')]],
 advocate:[[/提倡|主张/,makeExtraSense('speech','提倡：公开支持某种主张','advocate')],[/拥护者|提倡者/,makeExtraSense('person','拥护者：支持某种理念的人','attend')],[/辩护律师/,makeExtraSense('law','辩护律师：在法律程序中辩护','fair')]],
 discipline:[[/纪律|自制|训练方法/,makeExtraSense('idea','纪律 / 自制：约束并管理行为','discipline')],[/学科/,makeExtraSense('knowledge','学科：系统知识领域','manual')],[/处罚|训导|管教/,makeExtraSense('law','处罚 / 管教：纠正行为','fair')]],
 assume:[[/假设/,makeExtraSense('science','假设：暂时接受一个前提','assume')],[/承担|取得/,makeExtraSense('person','承担：接下责任或任务','handle')],[/呈现出/,makeExtraSense('observe','呈现：显露某种特征','mirror')],[/假装/,makeExtraSense('person','假装：表现出并非真实的样子','pose')]],
 attack:[[/攻击|袭击|进攻/,makeExtraSense('person','攻击：主动发起进攻','attack')],[/抨击/,makeExtraSense('speech','抨击：用言辞批评','protest')],[/疾病|发作/,makeExtraSense('science','发作：疾病突然出现','treat')],[/破坏|侵蚀/,makeExtraSense('nature','侵蚀：逐渐造成损坏','water')],[/解决|问题/,makeExtraSense('idea','攻克问题：主动着手解决','handle')]],
 attend:[[/出席|参加/,makeExtraSense('person','出席：到场参与活动','attend')],[/学校/,makeExtraSense('knowledge','上学：进入学校学习','manual')],[/陪同|伴随/,makeExtraSense('person','陪同：与他人同行','care')],[/注意|专心/,makeExtraSense('observe','注意：集中观察与关注','mirror')],[/照顾/,makeExtraSense('person','照顾：留意并照料他人','care')]],
 interpret:[[/解释|说明|理解为/,makeExtraSense('speech','解释：说明含义','interpret')],[/口译/,makeExtraSense('speech','口译：在语言之间即时转换','echo')]],
 pose:[[/造成|威胁|问题|提出/,makeExtraSense('idea','造成 / 提出：带来问题或议题','claim')],[/摆姿势|姿势/,makeExtraSense('person','摆姿势：调整身体姿态','pose')],[/佯装|假扮/,makeExtraSense('person','假扮：表现成另一种身份','mirror')]],
 treat:[[/对待/,makeExtraSense('person','对待：与人相处的方式','care')],[/治疗/,makeExtraSense('science','治疗：医疗干预','treat')],[/处理/,makeExtraSense('idea','处理：对事务采取行动','handle')],[/款待/,makeExtraSense('person','款待：热情招待客人','gift')]],
 form:[[/类型|形式|表格|形状/,makeExtraSense('knowledge','形式 / 表格：组织信息的结构','manual')],[/体能/,makeExtraSense('person','体能：身体状态与能力','run')],[/形成|出现|建立|组成|成形|塑造/,makeExtraSense('science','形成：从部分构成整体','form')]],
 conduct:[[/实施|执行|办法/,makeExtraSense('science','实施：按计划执行行动','process')],[/表现|行为|举止/,makeExtraSense('person','行为：人的举止表现','attend')],[/传导/,makeExtraSense('science','传导：能量或信号传递','machine')],[/引导|指挥/,makeExtraSense('person','引导 / 指挥：带领行动方向','conduct')]]
});


/* English II familiar-word secondary meanings: every matched gloss fragment gets its own scene. */
Object.assign(extraSenseArt,{
 rotation:'<path d="M190 145a135 135 0 0 1 235-45l35 40m-5-65 5 65-65-5" fill="none" stroke="A3" stroke-width="18" stroke-linecap="round"/><path d="M450 205a135 135 0 0 1-235 45l-35-40m5 65-5-65 65 5" fill="none" stroke="A2" stroke-width="18" stroke-linecap="round"/>',
 split:'<path d="M320 65v95m0 0-120 125m120-125 120 125" fill="none" stroke="A2" stroke-width="14"/><path d="M285 100 355 170m0-70-70 70" stroke="A4" stroke-width="12"/>',
 flash:'<path d="m340 55-150 165h110l-25 100 155-185H320Z" fill="A4" stroke="A2" stroke-width="8" stroke-linejoin="round"/><path d="M140 100l35 25m280 115 35 20" stroke="A3" stroke-width="10"/>',
 ice:'<path d="M320 65v235m-105-175 210 115m0-115L215 240m105-175-30 40m30-40 30 40m-135 135 50-5m-50 5 20-45m190 45-50-5m50 5-20-45" stroke="A3" stroke-width="13" stroke-linecap="round"/>',
 swing:'<path d="M230 75v125m180-125v125M230 200q90 130 180 0" fill="none" stroke="A2" stroke-width="10"/><circle cx="320" cy="245" r="35" fill="A4"/><path d="M275 290h90" stroke="A3" stroke-width="10"/>',
 bounce:'<circle cx="320" cy="115" r="42" fill="A4" stroke="A2" stroke-width="8"/><path d="M170 270q75-65 150 0t150 0" fill="none" stroke="A3" stroke-width="15"/><path d="M320 165v60m-20-20 20 20 20-20" fill="none" stroke="A2" stroke-width="9"/>',
 pop:'<path d="M320 65 345 130l70-35-35 70 70 25-70 25 35 70-70-35-25 70-25-70-70 35 35-70-70-25 70-25-35-70 70 35Z" fill="A4" stroke="A2" stroke-width="7"/><circle cx="320" cy="190" r="28" fill="#fff"/>',
 register:'<rect x="185" y="90" width="270" height="205" rx="12" fill="#fff" stroke="A2" stroke-width="9"/><path d="M225 145h190m-190 45h145m-145 45h95" stroke="A3" stroke-width="11"/><circle cx="405" cy="245" r="22" fill="A4"/>',
 fit:'<path d="M190 125h260v155H190Z" fill="A3" stroke="A2" stroke-width="9"/><path d="M250 85v70m-35-35h70m80-35v70m-35-35h70" stroke="A4" stroke-width="12"/><path d="m260 215 35 35 75-85" fill="none" stroke="#fff" stroke-width="12"/>',
 lead:'<circle cx="320" cy="95" r="28" fill="A4"/><path d="M320 125v115m0-80-95 65m95-65 95 65M320 240l-55 55m55-55 55 55" fill="none" stroke="A2" stroke-width="13" stroke-linecap="round"/><path d="M145 285h350" stroke="A3" stroke-width="10"/>',
 stall:'<path d="M175 145h290v145H175Z" fill="A3" stroke="A2" stroke-width="9"/><path d="M215 145v-50h210v50M245 200h150" fill="none" stroke="A2" stroke-width="10"/><circle cx="320" cy="245" r="23" fill="A4"/>',
 stretch:'<path d="M140 175h400m-50-40 50 40-50 40M190 135l-50 40 50 40" fill="none" stroke="A2" stroke-width="12"/><rect x="250" y="135" width="140" height="80" rx="12" fill="A3"/><path d="M280 115v120m80-120v120" stroke="A4" stroke-width="8" stroke-dasharray="8 9"/>',
 snap:'<path d="M170 100 470 270" stroke="A2" stroke-width="18" stroke-linecap="round"/><path d="m300 175 35-45m-35 45 55 20" stroke="A4" stroke-width="13"/><path d="M320 65v45m-90 10-30-30m210 30 30-30" stroke="A3" stroke-width="10"/>',
 sweep:'<path d="M180 255q130-180 280-130" fill="none" stroke="A3" stroke-width="20" stroke-linecap="round"/><path d="m400 90 60 35-55 45" fill="none" stroke="A2" stroke-width="12"/><path d="M180 280h280" stroke="A2" stroke-width="8"/>',
 lift:'<rect x="225" y="145" width="190" height="125" rx="14" fill="A3" stroke="A2" stroke-width="9"/><path d="M320 270V75m-35 40 35-40 35 40" fill="none" stroke="A4" stroke-width="13"/><path d="M175 285h290" stroke="A2" stroke-width="9"/>',
 shift:'<rect x="175" y="135" width="130" height="105" rx="12" fill="A3"/><rect x="335" y="135" width="130" height="105" rx="12" fill="A4"/><path d="M305 185h30m-12-18 12 18-12 18" stroke="A2" stroke-width="10" fill="none"/>',
 collect:'<circle cx="320" cy="170" r="95" fill="none" stroke="A2" stroke-width="10"/><path d="M320 75v95l75 55" fill="none" stroke="A3" stroke-width="12"/><circle cx="320" cy="170" r="18" fill="A4"/>',
 pass:'<path d="M145 175h320m-50-40 50 40-50 40" fill="none" stroke="A2" stroke-width="12"/><circle cx="205" cy="175" r="28" fill="A4"/><circle cx="390" cy="175" r="28" fill="A3"/>',
 trail:'<path d="M145 255q85-155 170-75t170-75" fill="none" stroke="A3" stroke-width="15" stroke-dasharray="18 12"/><circle cx="485" cy="105" r="20" fill="A4"/><path d="M150 285h340" stroke="A2" stroke-width="8"/>',
 float:'<path d="M125 210q50-45 100 0t100 0 100 0 100 0" fill="none" stroke="A3" stroke-width="14"/><rect x="260" y="120" width="120" height="75" rx="20" fill="A4" stroke="A2" stroke-width="8"/><path d="M320 120V80" stroke="A2" stroke-width="8"/>',
 crack:'<path d="m320 65-35 85 45 30-70 75 60 10-30 70" fill="none" stroke="A2" stroke-width="14" stroke-linejoin="round"/><path d="M150 175h115m110 0h115" stroke="A3" stroke-width="12"/>',
 cast:'<path d="M180 255q140-190 280-80" fill="none" stroke="A2" stroke-width="11"/><path d="m410 130 50 45-65 15" fill="none" stroke="A4" stroke-width="12"/><circle cx="320" cy="155" r="30" fill="A3"/>',
 hold:'<path d="M220 270V150q0-30 25-30t25 30v-55q0-30 25-30t25 30v55-70q0-30 25-30t25 30v80-40q0-28 25-28t25 28v105q0 75-75 75h-45q-80 0-80-80Z" fill="A3" stroke="A2" stroke-width="8"/>',
 strike:'<path d="M180 245 420 95" stroke="A2" stroke-width="22" stroke-linecap="round"/><path d="m395 75 55 15-20 55" fill="none" stroke="A4" stroke-width="13"/><path d="M170 105l35 35m-45 45 45 0" stroke="A3" stroke-width="10"/>',
 drag:'<rect x="230" y="125" width="150" height="115" rx="12" fill="A3" stroke="A2" stroke-width="8"/><path d="M380 185h105m-35-30 35 30-35 30M190 265h250" fill="none" stroke="A4" stroke-width="12"/>',
 back:'<path d="M430 130H245q-75 0-75 75t75 75h185" fill="none" stroke="A3" stroke-width="18" stroke-linecap="round"/><path d="m260 225-45 55 45 55" fill="none" stroke="A2" stroke-width="12"/>',
 list:'<rect x="190" y="80" width="260" height="225" rx="12" fill="#fff" stroke="A2" stroke-width="9"/><path d="M235 135h165m-165 55h165m-165 55h120" stroke="A3" stroke-width="11"/><circle cx="215" cy="135" r="8" fill="A4"/><circle cx="215" cy="190" r="8" fill="A4"/><circle cx="215" cy="245" r="8" fill="A4"/>',
twist:'<path d="M220 90q200 0 200 85t-200 85q-100 0-100-65t100-65h180" fill="none" stroke="A3" stroke-width="20" stroke-linecap="round"/><path d="m365 105 55 25-55 25" fill="none" stroke="A2" stroke-width="11"/>',
drive:'<path d="M175 245h290l-35-100H210Z" fill="A3" stroke="A2" stroke-width="9"/><circle cx="240" cy="250" r="28" fill="A4" stroke="A2" stroke-width="7"/><circle cx="400" cy="250" r="28" fill="A4" stroke="A2" stroke-width="7"/><path d="M270 145q50-75 100 0" fill="none" stroke="A2" stroke-width="9"/>',
advance:'<path d="M150 245h340m-55-45 55 45-55 45" fill="none" stroke="A2" stroke-width="13"/><rect x="185" y="115" width="110" height="80" rx="12" fill="A3"/><rect x="330" y="115" width="110" height="80" rx="12" fill="A4"/>',
slip:'<path d="M185 240q90-130 180-20t90-30" fill="none" stroke="A3" stroke-width="16" stroke-linecap="round"/><path d="m405 155 50 35-55 25" fill="none" stroke="A2" stroke-width="11"/><circle cx="210" cy="250" r="22" fill="A4"/>',
count:'<rect x="205" y="90" width="230" height="205" rx="18" fill="#fff" stroke="A2" stroke-width="9"/><rect x="245" y="120" width="150" height="48" rx="8" fill="A3"/><g fill="A4"><circle cx="260" cy="210" r="13"/><circle cx="320" cy="210" r="13"/><circle cx="380" cy="210" r="13"/><circle cx="260" cy="255" r="13"/><circle cx="320" cy="255" r="13"/><circle cx="380" cy="255" r="13"/></g>',
open:'<path d="M180 285V100h175v185Z" fill="A3" stroke="A2" stroke-width="9"/><path d="M355 100l120 35v150l-120 0Z" fill="#fff" stroke="A2" stroke-width="9"/><circle cx="330" cy="195" r="9" fill="A4"/>',
feed:'<path d="M180 115h260v165H180Z" fill="#fff" stroke="A2" stroke-width="9"/><path d="M220 155h180m-180 45h130" stroke="A3" stroke-width="11"/><path d="M320 65v50m-22-22 22 22 22-22" fill="none" stroke="A4" stroke-width="12"/>',
grow:'<path d="M320 285V145m0 65q-105-5-105-95 90-5 105 95Zm0-45q105-5 105-95-90-5-105 95Z" fill="A3" stroke="A2" stroke-width="8"/><path d="M200 285h240" stroke="A2" stroke-width="9"/>',
move:'<rect x="190" y="135" width="110" height="100" rx="12" fill="A3"/><rect x="340" y="135" width="110" height="100" rx="12" fill="A4"/><path d="M300 185h40m-18-18 18 18-18 18" stroke="A2" stroke-width="10" fill="none"/>',
show:'<path d="M140 175q180-160 360 0-180 160-360 0Z" fill="#fff" stroke="A2" stroke-width="9"/><circle cx="320" cy="175" r="55" fill="A3"/><circle cx="320" cy="175" r="22" fill="A4"/>',
set:'<circle cx="320" cy="175" r="95" fill="none" stroke="A2" stroke-width="12"/><path d="M320 60v45m0 140v45m-115-115h45m140 0h45" stroke="A3" stroke-width="12"/><circle cx="320" cy="175" r="35" fill="A4"/>',
play:'<path d="M255 95v170l145-85Z" fill="A4" stroke="A2" stroke-width="9"/><path d="M165 285h310" stroke="A3" stroke-width="10"/>',
read:'<path d="M165 110q78-25 155 20v165q-77-45-155-20Zm310 0q-78-25-155 20v165q77-45 155-20Z" fill="#fff" stroke="A2" stroke-width="8"/><path d="M320 130v165" stroke="A3" stroke-width="9"/>',
range:'<path d="M150 175h340m-40-35 40 35-40 35M190 105v140m280-140v140" fill="none" stroke="A2" stroke-width="10"/><circle cx="240" cy="175" r="25" fill="A3"/><circle cx="400" cy="175" r="25" fill="A4"/>',
ground:'<path d="M130 250 245 100l75 100 65-80 125 130Z" fill="A3" stroke="A2" stroke-width="8"/><path d="M130 275h380" stroke="A2" stroke-width="10"/>',
power:'<path d="M320 65 190 190h100l-20 115 160-160H330Z" fill="A4" stroke="A2" stroke-width="9"/><path d="M150 120h55m-27-27v55m335 100h-55m27-27v55" stroke="A3" stroke-width="9"/>',
change:'<path d="M175 130h290m-45-35 45 35-45 35M465 230H175m45-35-45 35 45 35" fill="none" stroke="A2" stroke-width="12"/><circle cx="320" cy="180" r="42" fill="A4"/>'
});
Object.assign(multiSenseScenes,{
 turn:[[/旋转|转身|转弯|翻页|翻\s*\(/,makeExtraSense('movement','转动 / 转弯：方向发生变化','rotation')],[/翻过来|松开|折起/,makeExtraSense('movement','翻转 / 折起：改变物体状态','twist')],[/变成|成为|到达年龄/,makeExtraSense('time','变成 / 到达：状态或年龄变化','grow')],[/机会|转变/,makeExtraSense('idea','机会 / 转变：局势出现转机','change')]],
 split:[[/分裂|分开|撕裂/,makeExtraSense('science','分裂 / 撕裂：整体分成部分','split')],[/分担|分摊/,makeExtraSense('economy','分担：共同承担份额','average')],[/断绝关系|离开/,makeExtraSense('person','断绝 / 离开：关系或位置分离','back')],[/分歧|份额|裂缝|劈叉/,makeExtraSense('idea','分歧 / 裂缝：出现分隔','split')]],
 flash:[[/闪光|闪现|闪电/,makeExtraSense('nature','闪光：瞬间发亮','flash')],[/发出信号|闪光灯/,makeExtraSense('science','闪光信号：用光传递信息','flash')],[/快速地.*出示|发送.*信息/,makeExtraSense('speech','快速展示 / 发送：瞬间传递内容','show')],[/飞速运动|猛然想起|突然显露/,makeExtraSense('movement','飞速 / 突然：瞬间出现','pop')]],
 break:[[/破裂|破碎|弄坏|弄破/,makeExtraSense('science','破裂：物体结构断开','crack')],[/违反|打破纪录/,makeExtraSense('law','违反 / 打破纪录：突破规则或记录','strike')],[/中断|暂停|间歇|休息/,makeExtraSense('time','中断 / 休息：活动暂时停止','set')],[/逃脱|透露|发作|开始/,makeExtraSense('movement','逃脱 / 发作：突然脱离或开始','flash')]],
 freeze:[[/结冰|冰冻|霜冻|冻住|冻死/,makeExtraSense('nature','结冰：液体凝固成冰','ice')],[/因害怕.*不动|惊呆/,makeExtraSense('emotion','惊呆：因恐惧而僵住','hold')],[/冷藏/,makeExtraSense('science','冷藏：低温保存','ice')],[/定格|固定|冻结|停止/,makeExtraSense('time','定格 / 冻结：状态停止变化','set')]],
 swing:[[/摆动|秋千|挥杆/,makeExtraSense('movement','摆动：围绕支点来回运动','swing')],[/转弯/,makeExtraSense('travel','转弯：改变行进方向','turn')],[/改变意见|改变.*观点/,makeExtraSense('idea','改变观点：立场发生转向','change')],[/搞到|办成/,makeExtraSense('idea','办成：设法促成结果','handle')]],
 bounce:[[/弹起|弹跳|跳动|弹性/,makeExtraSense('movement','弹跳：碰撞后反弹','bounce')],[/拒付支票/,makeExtraSense('economy','拒付支票：支付未能兑现','register')],[/颠簸行进/,makeExtraSense('travel','颠簸行进：路面起伏造成跳动','drive')],[/解雇/,makeExtraSense('work','解雇：终止雇佣关系','back')],[/活力|蓬松/,makeExtraSense('nature','活力 / 蓬松：富有弹性与生气','grow')]],
 pop:[[/流行音乐|流行的|通俗/,makeExtraSense('culture','流行：大众文化','play')],[/砰的.*声|爆裂|砰砰声/,makeExtraSense('sound','爆裂声：突然发出的声响','pop')],[/突然地去|突然出现/,makeExtraSense('movement','突然出现：快速进入视野','flash')],[/耳胀/,makeExtraSense('science','耳压变化：压力突然改变','power')],[/汽水|爸爸|爸/,makeExtraSense('daily','汽水 / 爸爸：日常词义','gift')]],
 close:[[/关闭|合上|合拢|停业/,makeExtraSense('movement','关闭：入口或营业状态结束','open')],[/结束|终结/,makeExtraSense('time','结束：活动到达终点','set')],[/缩小|接近|靠近/,makeExtraSense('distance','接近：距离逐渐缩短','approach')],[/亲密|关系密切/,makeExtraSense('person','亲密：人与人关系紧密','care')]],
 register:[[/注册|登记|登记表/,makeExtraSense('document','登记：把信息正式记录下来','register')],[/流露出|显露/,makeExtraSense('emotion','流露：情绪或特点显现','show')],[/注意到/,makeExtraSense('observe','注意到：意识到某事存在','mirror')],[/显示读数|记录/,makeExtraSense('science','显示 / 记录：仪器呈现数据','count')],[/发表意见/,makeExtraSense('speech','发表意见：正式表达观点','claim')],[/挂号邮寄/,makeExtraSense('mail','挂号邮寄：登记后寄送','pass')],[/音区/,makeExtraSense('music','音区：声音所在的音高范围','range')],[/现金收纳机/,makeExtraSense('economy','收银机：记录并收取款项','money')]],
 fit:[[/适合|合身|符合|匹配/,makeExtraSense('match','适合：尺寸或条件相匹配','fit')],[/可容纳/,makeExtraSense('space','容纳：空间足以放入','open')],[/试穿/,makeExtraSense('clothing','试穿：检查衣物是否合身','clothes')],[/安装/,makeExtraSense('machine','安装：将部件装配到位','machine')],[/健壮|健康/,makeExtraSense('health','健壮：身体健康强健','grow')],[/发作|一阵/,makeExtraSense('health','一阵 / 发作：短时突发状态','flash')]],
 lead:[[/带路|领导|处于首位|领先/,makeExtraSense('leadership','带领 / 领先：走在队伍前方','lead')],[/通往/,makeExtraSense('travel','通往：道路指向目的地','approach')],[/导致|造成/,makeExtraSense('cause','导致：引出某种结果','process')],[/使得出观点/,makeExtraSense('reason','引导得出观点：推理形成结论','interpret')],[/过.*生活/,makeExtraSense('life','过某种生活：持续生活方式','grow')],[/铅/,makeExtraSense('material','铅：一种金属元素','ground')],[/范例/,makeExtraSense('example','范例：可供参考的例子','show')]],
 stall:[[/货摊|摊位|牲畜棚|小隔间/,makeExtraSense('place','摊位 / 隔间：分隔出的空间','stall')],[/熄火|抛锚/,makeExtraSense('vehicle','熄火 / 抛锚：车辆停止运作','drive')],[/暂缓|搁置|拖延|拖住/,makeExtraSense('time','拖延 / 搁置：让进程暂停','set')]],
 last:[[/最后的|最后|最终|最后来的/,makeExtraSense('sequence','最后：顺序中的末尾','range')],[/最近|上一次/,makeExtraSense('time','最近：时间上刚刚过去','collect')],[/最不可能/,makeExtraSense('probability','最不可能：概率极低','count')],[/持续|保持良好状态|够用/,makeExtraSense('duration','持续：经受时间考验','stretch')],[/仅剩下/,makeExtraSense('remainder','剩余：留下来的部分','split')]],
 clear:[[/清楚|明显|无疑/,makeExtraSense('understanding','清楚：信息容易理解','show')],[/清理|清除|移走/,makeExtraSense('clean','清理：移除障碍或杂物','sweep')],[/离开/,makeExtraSense('movement','离开：从场所移出','back')],[/变晴朗|变清澈|散去|消失/,makeExtraSense('nature','放晴 / 消散：遮挡逐渐消失','flash')],[/兑现支票/,makeExtraSense('finance','兑现支票：资金结算完成','money')],[/获利|净赚/,makeExtraSense('finance','净赚：扣除成本后的收益','average')]],
 stretch:[[/拉长|撑大|伸展|伸出|拉紧/,makeExtraSense('movement','伸展：长度或范围扩大','stretch')],[/有弹性/,makeExtraSense('material','弹性：受力后可伸长','bounce')],[/绵延|延续|一段时间/,makeExtraSense('duration','延续：时间或空间持续','range')],[/消耗|竭尽所能|滥用/,makeExtraSense('effort','过度使用：把资源推至极限','power')],[/一段/,makeExtraSense('segment','一段：连续整体中的区间','range')]],
 snap:[[/断裂|啪地|拍照|咬/,makeExtraSense('sound','啪地断开：瞬间发出脆响','snap')],[/移动|迅速移动/,makeExtraSense('movement','迅速移动：突然改变位置','flash')],[/失去自制力/,makeExtraSense('emotion','失去自制：情绪突然爆发','pop')],[/照片|摁扣/,makeExtraSense('object','照片 / 摁扣：瞬间定格或扣合','show')],[/仓促|迅速/,makeExtraSense('time','迅速：动作发生很快','advance')]],
 sweep:[[/打扫|清除/,makeExtraSense('clean','打扫：清除地面杂物','sweep')],[/席卷|横扫|传播|冲走|吹走/,makeExtraSense('movement','席卷：快速扫过大片区域','flood')],[/挥动|掠过/,makeExtraSense('movement','挥动 / 掠过：沿弧线快速移动','swing')],[/巡视/,makeExtraSense('work','巡视：沿路线检查','trail')],[/广度/,makeExtraSense('space','广度：覆盖的范围','range')]],
 lift:[[/提起|抬|举|提|移开/,makeExtraSense('movement','提起：向上移动物体','lift')],[/高兴起来/,makeExtraSense('emotion','振奋：情绪向上提升','grow')],[/增长/,makeExtraSense('economy','增长：数值上升','advance')],[/空运/,makeExtraSense('travel','空运：通过航空运输','drive')],[/解除限制/,makeExtraSense('law','解除限制：取消约束','open')],[/偷盗/,makeExtraSense('crime','偷盗：未经允许拿走物品','hold')],[/消散|消失/,makeExtraSense('nature','消散：云雾逐渐散开','flash')],[/电梯/,makeExtraSense('transport','电梯：垂直运送人员','lift')],[/搭便车/,makeExtraSense('travel','搭便车：搭乘他人车辆','pass')]],
 shift:[[/转移|挪动|换挡/,makeExtraSense('movement','转移：位置或档位变化','shift')],[/情况.*改变|改变观点|改变态度|转变/,makeExtraSense('change','改变：状态或立场发生变化','change')],[/推卸责任/,makeExtraSense('responsibility','推卸责任：把责任转给别人','back')],[/轮班/,makeExtraSense('work','轮班：工作时段轮换','collect')]],
 collect:[[/收集|收藏|领取|收走|聚集|集合|汇集/,makeExtraSense('gather','收集：把分散对象集中起来','collect')],[/收账|募捐|募集/,makeExtraSense('money','收款 / 募集：集中资金','money')],[/积累|聚积/,makeExtraSense('growth','积累：数量逐步增加','grow')],[/赢得/,makeExtraSense('success','赢得：取得成果或胜利','advance')],[/由受话人付费/,makeExtraSense('phone','对方付费电话：费用由接听者承担','register')]],
 pass:[[/经过|沿.*方向移动|流逝/,makeExtraSense('movement','经过 / 流逝：从某处或某时经过','trail')],[/传球/,makeExtraSense('sport','传球：把球交给队友','pass')],[/及格|合格/,makeExtraSense('exam','及格：达到合格标准','fit')],[/结束/,makeExtraSense('time','结束：某阶段告一段落','set')],[/给|递/,makeExtraSense('transfer','递交：把物品交给他人','gift')],[/大于/,makeExtraSense('math','大于：数值超过比较对象','range')],[/消磨/,makeExtraSense('time','消磨时间：让时间逐渐过去','collect')],[/通过|通行证|关口/,makeExtraSense('access','通过：越过关卡或获得许可','open')]],
 trail:[[/痕迹|踪迹|跟踪|追踪/,makeExtraSense('trace','痕迹 / 追踪：沿线索寻找','trail')],[/小路|路线/,makeExtraSense('path','小路：穿过环境的路径','approach')],[/拖|拉/,makeExtraSense('movement','拖曳：物体沿地面移动','drag')],[/落后|失利/,makeExtraSense('competition','落后：位置或比分处于后方','back')],[/疲惫地走/,makeExtraSense('person','疲惫地走：缓慢跟在后面','walk')]],
 float:[[/漂浮|飘浮|浮动|轻盈走动/,makeExtraSense('movement','漂浮：停留在液面或空中','float')],[/提出想法|计划/,makeExtraSense('idea','提出计划：把想法抛出讨论','claim')],[/汇率.*浮动/,makeExtraSense('finance','汇率浮动：货币价值自由变化','change')],[/彩车/,makeExtraSense('parade','彩车：游行中的装饰车辆','show')],[/鱼漂|浮板/,makeExtraSense('object','浮漂 / 浮板：漂在水面的物件','water')],[/备用零钱/,makeExtraSense('money','备用零钱：随时可用的小额现金','money')]],
 crack:[[/破裂|裂开|裂缝|缝隙/,makeExtraSense('break','裂开：材料出现断口','crack')],[/砸开|破开|猛击|重击/,makeExtraSense('impact','猛击：施加突然的力量','strike')],[/解决方法/,makeExtraSense('solution','找到解决方法：破解难题','interpret')],[/爆裂声/,makeExtraSense('sound','爆裂声：突然的破裂声响','pop')],[/尝试/,makeExtraSense('attempt','尝试：进行一次努力','advance')],[/一流的|训练有素/,makeExtraSense('quality','一流：能力或质量出众','lead')]],
 cast:[[/扔|抛|投以|投射/,makeExtraSense('movement','投掷：把物体抛向目标','cast')],[/选角|演员/,makeExtraSense('performance','选角 / 演员：为角色安排演员','attend')],[/投票/,makeExtraSense('civic','投票：表达选择','claim')],[/浇铸|铸造品/,makeExtraSense('manufacture','铸造：将材料浇注成形','form')],[/钓线|钓钩/,makeExtraSense('fishing','抛钓线：把鱼钩投向水中','cast')],[/石膏绷带/,makeExtraSense('medical','石膏绷带：固定受伤部位','hold')]],
 hold:[[/拿着|拿|握/,makeExtraSense('grip','握持：用手抓住物体','hold')],[/保持|持有|认为/,makeExtraSense('state','保持 / 持有：维持某种状态','set')],[/举行/,makeExtraSense('event','举行：组织一场活动','show')],[/拥抱/,makeExtraSense('person','拥抱：双臂环抱他人','care')],[/容纳|包含/,makeExtraSense('space','容纳：内部空间能够装下','open')],[/担任/,makeExtraSense('role','担任：承担职位或角色','lead')],[/不挂断/,makeExtraSense('phone','保持通话：电话暂不结束','register')],[/影响|控制|支撑点/,makeExtraSense('influence','控制 / 支撑：维持稳定或影响','power')]],
 strike:[[/打|击|撞|袭击|侵袭/,makeExtraSense('impact','击打 / 袭击：力量直接作用','strike')],[/突然想到/,makeExtraSense('idea','突然想到：念头瞬间出现','flash')],[/给.*印象/,makeExtraSense('impression','留下印象：影响他人感受','show')],[/罢工/,makeExtraSense('labor','罢工：劳动者集体停工','protest')],[/行进/,makeExtraSense('movement','行进：队伍向前移动','advance')],[/划火柴|敲|鸣/,makeExtraSense('sound','划火柴 / 敲击：产生火花或声音','flash')],[/全中/,makeExtraSense('sport','全中：击中全部目标','target')]],
 drag:[[/拖|拉|生拉硬拽|拖动/,makeExtraSense('movement','拖动：沿表面拉动物体','drag')],[/缓慢而费力/,makeExtraSense('effort','费力移动：缓慢克服阻力','stretch')],[/时间.*很慢/,makeExtraSense('time','时间过得慢：主观感到漫长','slow')],[/累赘|讨厌的人或事/,makeExtraSense('burden','累赘：带来额外负担','extra')],[/空气阻力/,makeExtraSense('physics','空气阻力：运动时受到的阻碍','power')]],
 back:[[/背部|腰背|脊柱|靠背/,makeExtraSense('body','背部：身体后侧结构','person')],[/后面|背后的|后退|向后/,makeExtraSense('direction','后方：位置或方向在后','back')],[/回原处/,makeExtraSense('return','返回：回到原来的位置','rotation')],[/拖欠/,makeExtraSense('debt','拖欠：未按时支付','money')],[/帮助|支持/,makeExtraSense('support','支持：站在某人一边','care')]],
 list:[[/名单|清单|列表|列举/,makeExtraSense('document','清单：逐项列出信息','list')],[/列入销售|价目表/,makeExtraSense('commerce','列入价目表：商品进入销售目录','register')],[/船.*倾斜/,makeExtraSense('ship','船体倾斜：船向一侧偏斜','swing')]],
 twist:[[/弯曲变形|扭动|缠绕|转动|旋转/,makeExtraSense('movement','扭转：沿轴线旋转或缠绕','twist')],[/曲折|蜿蜒/,makeExtraSense('path','蜿蜒：路线弯曲延伸','trail')],[/扭伤/,makeExtraSense('injury','扭伤：关节或肌肉受损','person')],[/曲解/,makeExtraSense('meaning','曲解：歪曲原本含义','interpret')],[/转折|急转弯/,makeExtraSense('plot','转折：方向或情节突然改变','change')]],
 drive:[[/开车|驾驶|驱车旅行|车道/,makeExtraSense('vehicle','驾驶：操纵车辆行驶','drive')],[/驱动/,makeExtraSense('machine','驱动：为机器提供动力','power')],[/迫使|驱赶/,makeExtraSense('force','迫使：推动他人采取行动','lead')],[/驱车送/,makeExtraSense('transport','开车送人：乘车运送','pass')],[/本能需求|努力|运动/,makeExtraSense('motivation','驱动力：促使行动的内在力量','power')]],
 advance:[[/前进|提前|先行/,makeExtraSense('movement','前进：向前推进','advance')],[/进步|发展/,makeExtraSense('progress','进步：能力或状态提升','grow')],[/预付款|预付/,makeExtraSense('finance','预付款：提前支付款项','money')],[/上涨/,makeExtraSense('finance','上涨：价格或数值提高','range')],[/促进|提议/,makeExtraSense('initiative','促进 / 提议：推动事情向前','claim')],[/预先|事先/,makeExtraSense('time','预先：在正式时间之前','collect')]],
 slip:[[/滑倒|滑落|滑倒/,makeExtraSense('movement','滑倒：失去摩擦而滑动','slip')],[/溜走|摆脱|松开/,makeExtraSense('escape','溜走：悄悄离开或挣脱','back')],[/变差|陷入/,makeExtraSense('decline','变差 / 陷入：状态逐渐下滑','range')],[/悄悄塞/,makeExtraSense('secret','悄悄塞入：不被察觉地放入','hold')],[/穿或脱/,makeExtraSense('clothing','穿脱：快速穿上或脱下衣物','clothes')],[/差错|纸条|衬裙/,makeExtraSense('object','差错 / 纸条：小型遗漏或纸片','list')]],
 count:[[/数数|计算.*总数|总数/,makeExtraSense('math','计数：逐个计算数量','count')],[/重要|要紧/,makeExtraSense('importance','重要：对结果产生影响','power')],[/正式认可|算作|算入/,makeExtraSense('classification','算作：归入某一类别','register')],[/罪状|论点/,makeExtraSense('argument','罪状 / 论点：列出的指控或理由','claim')],[/伯爵/,makeExtraSense('title','伯爵：贵族头衔','person')]],
 open:[[/开着|打开|张开|展开|开启|翻开/,makeExtraSense('movement','打开：从关闭状态转为开放','open')],[/开阔/,makeExtraSense('space','开阔：空间宽广无阻','range')],[/营业|开业/,makeExtraSense('business','营业：商店对外经营','stall')],[/启动/,makeExtraSense('machine','启动：设备开始运行','power')],[/让.*通行/,makeExtraSense('access','放行：允许通过','pass')],[/准备接待|开篇/,makeExtraSense('welcome','接待 / 开篇：开始迎接或引入','show')]],
 level:[[/水平|级别|高度|楼层/,makeExtraSense('measurement','水平 / 级别：衡量位置或程度','range')],[/平的|等高|相同地位/,makeExtraSense('equality','平齐：处于同一高度或地位','level')],[/使平坦|夷平|摧毁/,makeExtraSense('destruction','夷平：把高低差削平','sweep')],[/瞄准/,makeExtraSense('aim','瞄准：使方向对准目标','target')],[/使相等|平等/,makeExtraSense('equality','使平等：消除差别','fair')]],
 feed:[[/喂养|养活|进食|一餐|饲料/,makeExtraSense('food','喂养：提供食物','feed')],[/施肥/,makeExtraSense('agriculture','施肥：为植物补充养分','grow')],[/灌输/,makeExtraSense('education','灌输：持续输入观念','read')],[/塞进机器/,makeExtraSense('machine','送入机器：把材料输入设备','machine')],[/满足/,makeExtraSense('need','满足：填补需求','care')],[/供给|肥料/,makeExtraSense('supply','供给：持续提供所需资源','collect')]],
 grow:[[/成长|生长|留长/,makeExtraSense('growth','生长：逐渐发育变大','grow')],[/增加|扩大|扩展/,makeExtraSense('increase','增加：规模或数量上升','advance')],[/逐渐开始/,makeExtraSense('onset','逐渐开始：状态慢慢出现','flash')],[/种植/,makeExtraSense('plant','种植：把植物培育起来','nature')],[/逐渐变得|逐渐成为/,makeExtraSense('change','逐渐成为：状态慢慢转变','change')]],
 move:[[/移动|搬家|搬迁/,makeExtraSense('movement','移动：位置发生变化','move')],[/前进|进展/,makeExtraSense('progress','进展：事情向前推进','advance')],[/采取行动/,makeExtraSense('action','采取行动：开始实施计划','process')],[/感动/,makeExtraSense('emotion','感动：情绪受到触动','care')],[/行动|移动|改变/,makeExtraSense('action','行动 / 改变：做出实际变化','move')]],
 show:[[/出示|展示|演示|展览|表明/,makeExtraSense('display','展示：让内容可见','show')],[/教/,makeExtraSense('teaching','教学：向他人传授知识','read')],[/带领/,makeExtraSense('leadership','带领：引导他人前进','lead')],[/流露|露出|假象/,makeExtraSense('appearance','流露 / 假象：外在呈现的状态','mirror')],[/出现|露面/,makeExtraSense('arrival','出现：进入他人视野','pop')],[/演出|电视节目|上映|展览会/,makeExtraSense('entertainment','演出 / 节目：面向观众展示内容','play')]],
 set:[[/设置|使处于|布置|开创/,makeExtraSense('arrangement','设置：安排到指定状态','set')],[/凝固/,makeExtraSense('solidify','凝固：由液态变为固态','ice')],[/落下/,makeExtraSense('sunset','落下：太阳沉向地平线','ground')],[/一套|一副|电视机|布景|集/,makeExtraSense('collection','一套 / 一组：组合成整体的物件','collect')],[/固定的|处于.*的|很可能/,makeExtraSense('state','固定 / 既定：处于确定状态','hold')]],
 play:[[/玩耍|参加|活动/,makeExtraSense('activity','玩耍 / 活动：参与一项活动','person')],[/演奏|播放/,makeExtraSense('music','演奏 / 播放：呈现音乐或媒体','play')],[/捉弄|戏弄/,makeExtraSense('trick','捉弄：用玩笑欺骗他人','pop')],[/扮演/,makeExtraSense('role','扮演：进入某个角色','character')],[/发挥作用|影响/,makeExtraSense('influence','发挥作用：对结果产生影响','power')],[/佯装|假装/,makeExtraSense('pretend','假装：表现出并非真实的状态','mirror')],[/戏剧|剧本|演出/,makeExtraSense('theatre','戏剧：舞台表演与文本','show')]],
 read:[[/阅读|读懂|朗读|读到|攻读|读物/,makeExtraSense('reading','阅读：理解书面文字','read')],[/猜测|理解|读唇语/,makeExtraSense('interpretation','读出含义：从线索推断信息','interpret')],[/写着/,makeExtraSense('text','写着：文字呈现某项内容','list')],[/读起来/,makeExtraSense('impression','读起来：文字给人的整体感觉','speech')]],
 range:[[/一系列|范围|射程|山脉/,makeExtraSense('extent','范围：覆盖的区间或空间','range')],[/变化/,makeExtraSense('variation','变化：数值在区间内波动','change')],[/包括/,makeExtraSense('inclusion','包括：把对象纳入整体','collect')],[/排列/,makeExtraSense('ordering','排列：按顺序组织对象','list')],[/徘徊|漫步/,makeExtraSense('wandering','徘徊：在区域内来回走动','walk')]],
 ground:[[/土地|开阔地|地/,makeExtraSense('land','土地：脚下的地面','ground')],[/领域/,makeExtraSense('domain','领域：知识或活动范围','knowledge')],[/根据/,makeExtraSense('basis','根据：判断所依赖的基础','level')],[/搁浅/,makeExtraSense('ship','搁浅：船只触底无法航行','water')],[/停飞|阻止.*起飞/,makeExtraSense('aviation','停飞：阻止飞机升空','drive')],[/磨细|剁碎/,makeExtraSense('food','磨碎：把材料加工成细小颗粒','machine')]],
 power:[[/政权|权力|影响力/,makeExtraSense('authority','权力：影响或支配他人的能力','power')],[/能力|实力|力量/,makeExtraSense('strength','力量：完成任务的能力','lead')],[/能量|电力供应/,makeExtraSense('energy','能源：提供动力的能量','power')],[/驱动/,makeExtraSense('machine','驱动：让机器运转','machine')],[/迅猛移动/,makeExtraSense('movement','迅猛移动：以强大力量快速前进','advance')]],
 change:[[/改变|变化|变换|不同|转换|替代|互换/,makeExtraSense('change','改变：状态或内容发生变化','change')],[/换衣服|换乘/,makeExtraSense('transition','更换：从一种选择切换到另一种','shift')],[/零钱/,makeExtraSense('money','零钱：交易后的零散货币','money')]]
});

/* 62 curated dictionary-matched English-II sense rules across 31 high-value headwords. */
multiSenseScenes['deal']=[[/大量|很多|交易|协议/,['economy','交易与数量',art.economy]],[/处理|对付|做生意|涉及|发牌|贩毒/,['person','处理事务',art.person]]];
multiSenseScenes['fair']=[[/公平|按照规则|合理/,['law','公平裁决',art.law]],[/展销会|集市|露天游乐场|浅色|晴朗|美丽|不错|相当大/,['nature','集市与晴朗',art.nature]]];
multiSenseScenes['gift']=[[/礼物|赠送/,['growth','包装礼物',art.growth]],[/天赋|才能/,['idea','天赋能力',art.idea]]];
multiSenseScenes['tend']=[[/往往会|倾向于/,['travel','倾向与方向',art.travel]],[/照顾|照料|管理|打点/,['person','照料管理',art.person]]];
multiSenseScenes['operate']=[[/操作|使运行|运转|工作/,['science','机器运转',art.science]],[/动手术|经营|使用/,['person','手术与经营',art.person]]];
multiSenseScenes['current']=[[/当前|现在|流行/,['time','当前时刻',art.time]],[/水流|气流|电流|思潮/,['nature','流动与电流',art.nature]]];
multiSenseScenes['average']=[[/平均|平均数|均值|平均水平/,['science','平均值计算',art.science]],[/中等|普通|数量/,['observe','普通水平对照',art.observe]]];
multiSenseScenes['suit']=[[/西服|套装/,['person','西装套装',art.person]],[/诉讼|起诉|适合|相配|合身/,['law','适合与诉讼',art.law]]];
multiSenseScenes['feature']=[[/特征|特点|五官/,['observe','面部特征',art.observe]],[/特写|专题|特色|起重要作用/,['knowledge','专题报道',art.knowledge]]];
multiSenseScenes['claim']=[[/声称|声明|认为/,['speech','提出主张',art.speech]],[/要求拥有|认领|获得|索取|索赔|夺去|生命/,['law','所有权与索赔',art.law]]];
multiSenseScenes['apply']=[[/申请|适用/,['knowledge','提交申请',art.knowledge]],[/应用|运用|涂抹|按|踩/,['person','实际应用',art.person]]];
multiSenseScenes['approach']=[[/接近|靠近|路径/,['travel','逐步接近',art.travel]],[/接洽|要求|处理|对付|方法|态度/,['speech','方法与交涉',art.speech]]];
multiSenseScenes['process']=[[/过程|流程|工序/,['time','流程步骤',art.time]],[/加工|处理|审阅|审核/,['science','加工与审核',art.science]]];
multiSenseScenes['expect']=[[/预计|猜想/,['observe','预测未来',art.observe]],[/盼望|要求|期望/,['emotion','期待与盼望',art.emotion]]];
multiSenseScenes['run']=[[/奔跑|跑|赛跑/,['person','奔跑动作',art.person]],[/管理|经营|运转|操作|刊登|包含|连续上演|流淌|行驶|发生|变成/,['science','运营与持续运行',art.science]]];
multiSenseScenes['work']=[[/工作|干活|职业|劳动/,['person','工作场景',art.person]],[/奏效|运转|管理|经营|操作|作品|成果|争取/,['science','成果与有效运作',art.science]]];
multiSenseScenes['file']=[[/文件夹|文件|档案|归档/,['knowledge','文件归档',art.knowledge]],[/提起|诉讼|提交|申请|发送|报道|纵队|锉/,['law','正式提交与诉讼',art.law]]];
multiSenseScenes['cross']=[[/越过|渡过|相交|交叉|十字架|叉号/,['travel','交叉与跨越',art.travel]],[/反对|恼怒|生气/,['emotion','反对与恼怒',art.emotion]]];
multiSenseScenes['handle']=[[/处理|应付|驾驭/,['science','处理复杂事务',art.science]],[/把手|柄|触|拿/,['person','握住把手',art.person]]];
multiSenseScenes['tackle']=[[/难题|交涉|处理|抓获/,['science','攻克难题',art.science]],[/抢球|抢断|擒抱|阻截|体育器材/,['person','球场抢断',art.person]]];
multiSenseScenes['mirror']=[[/镜子|映照|反射/,['observe','镜面反射',art.observe]],[/写照|反映|相似/,['observe','现实映照',art.observe]]];
multiSenseScenes['counter']=[[/柜台|料理台/,['economy','服务柜台',art.economy]],[/计算器|反驳|驳斥|抵制|抵消|逆向|反对/,['law','反向抵消与反驳',art.law]]];
multiSenseScenes['silence']=[[/寂静|无声|安静/,['nature','安静无声',art.nature]],[/沉默|缄口|压制|反对意见/,['speech','保持沉默',art.speech]]];
multiSenseScenes['echo']=[[/回声|回音|回响/,['nature','山谷回声',art.nature]],[/相似|附和|重复|充满回声/,['speech','重复与附和',art.speech]]];
multiSenseScenes['bay']=[[/海湾|湾|水域/,['nature','海湾地形',art.nature]],[/隔间|月桂|栗色马|长嗥|强烈要求|棕红色/,['observe','bay的其他义项',art.observe]]];
multiSenseScenes['manual']=[[/人⼒|体⼒|手动|人力|体力/,['person','手动操作',art.person]],[/手册|说明书|使用手册/,['knowledge','使用手册',art.knowledge]]];
multiSenseScenes['facility']=[[/设备|设施/,['science','设备设施',art.science]],[/功能|天资|才能/,['idea','特殊功能与天资',art.idea]]];
multiSenseScenes['represent']=[[/代表|象征|体现/,['person','代表与象征',art.person]],[/表示|描绘|意味着|相当于/,['knowledge','图示表达含义',art.knowledge]]];
multiSenseScenes['plus']=[[/加|外加|加号/,['science','加法运算',art.science]],[/优势|长处|零上|优点|此外|况且|多的/,['growth','额外优势',art.growth]]];
multiSenseScenes['extra']=[[/额外|附加|另外|特别|格外/,['growth','额外增加',art.growth]],[/另外收费|临时演员/,['person','临时演员与附加收费',art.person]]];
multiSenseScenes['overhead']=[[/头顶|空中/,['nature','头顶上方',art.nature]],[/经营开支|经营开⽀|开支|开⽀/,['economy','企业经营开支',art.economy]]];
function matchSenseScene(word,meaning){
 var entries=multiSenseScenes[String(word||'').toLowerCase()];
 if(!entries)return null;
 var gloss=String(meaning||'');
 for(var i=0;i<entries.length;i++){if(entries[i][0].test(gloss))return entries[i][1]}
 return null;
}

function senseVariants(word,meaning){
 var key=String(word||'').toLowerCase(),entries=multiSenseScenes[key];
 if(!entries)return [];
 var parts=String(meaning||'').normalize('NFKC').split(/[；;。，,/、。]+|\\s+(?=(?:vi|vt|adj|adv|n|det|ord|vlink|pref|int)\\.\\s*)/),out=[],seen={};
 for(var p=0;p<parts.length;p++){
  var part=parts[p].replace(/^(?:(?:vi|vt|adj|adv|n|det|ord|vlink|pref|int)\\.\\s*)+/i,'').trim();
  if(!part)continue;
  var matched=false;
  for(var i=0;i<entries.length;i++){
   if(entries[i][0].test(part)){
    var scene=entries[i][1],sceneKey=scene[1]+'|'+part;
    if(!seen[sceneKey]){seen[sceneKey]=true;out.push({meaning:part,scene:[scene[0],scene[1]+'：'+part,scene[2]]})}
    matched=true;break;
   }
  }
  /* Every remaining dictionary gloss still receives its own deterministic meaning-aware SVG. */
  if(!matched){
   var fallback=sceneFor('sense-'+key,part),fallbackKey=fallback[1]+'|'+part;
   if(!seen[fallbackKey]){seen[fallbackKey]=true;out.push({meaning:part,scene:[fallback[0],fallback[1]+'：'+part,fallback[2]]})}
  }
 }
 return out;
}
function sceneFor(word,meaning){
 var key=String(word||'').toLowerCase(),sense=matchSenseScene(key,meaning),exact=semanticScenes[key];
 if(sense)return sense;
 if(exact)return exact;
 var gloss=String(meaning||''),kind='idea',label='抽象概念与联想';
 for(var i=0;i<rules.length;i++){if(rules[i][0].test(gloss+' '+key)){kind=rules[i][1];label=rules[i][2];break}}
 /* Each headword gets a deterministic, meaning-aware composition. Exact hand-drawn scenes above always win. */
 var seed=hash(key+'|'+gloss),x=150+(seed%341),y=82+((seed>>>7)%190),r=13+((seed>>>13)%22),variant=(seed>>>19)%12;
 var motifs=[
 '<path d="M'+(x-38)+' '+y+'h76m-19-19 19 19-19 19" fill="none" stroke="A4" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>',
 '<circle cx="'+x+'" cy="'+y+'" r="'+r+'" fill="none" stroke="A4" stroke-width="9"/><circle cx="'+x+'" cy="'+y+'" r="'+Math.max(5,r/2)+'" fill="A4"/>',
 '<path d="M'+(x-28)+' '+(y+24)+'l28 -48 28 48Z" fill="A4" stroke="A2" stroke-width="5"/>',
 '<path d="M'+(x-32)+' '+(y-18)+'q32 -30 64 0t0 36q-32 30-64 0" fill="none" stroke="A4" stroke-width="10"/>',
 '<path d="M'+(x-32)+' '+(y+20)+'l20 -40 20 40 20 -40" fill="none" stroke="A4" stroke-width="9" stroke-linejoin="round"/>',
 '<path d="M'+x+' '+(y-32)+'v64m-32-32h64" stroke="A4" stroke-width="10" stroke-linecap="round"/>',
 '<path d="M'+(x-34)+' '+(y-12)+'h68m-34-25v75" stroke="A4" stroke-width="8"/><circle cx="'+x+'" cy="'+y+'" r="10" fill="A2"/>',
 '<path d="M'+(x-30)+' '+(y+24)+'q-10-45 30-50 40 5 30 50" fill="none" stroke="A4" stroke-width="10"/><circle cx="'+x+'" cy="'+(y-24)+'" r="9" fill="A4"/>',
 '<path d="M'+(x-28)+' '+(y+25)+'l28-50 28 50" fill="none" stroke="A4" stroke-width="10" stroke-linecap="round"/>',
 '<path d="M'+(x-35)+' '+y+'q35-45 70 0-35 45-70 0Z" fill="none" stroke="A4" stroke-width="8"/><circle cx="'+x+'" cy="'+y+'" r="9" fill="A4"/>',
 '<path d="M'+(x-25)+' '+(y-25)+'l50 50m0-50-50 50" stroke="A4" stroke-width="10" stroke-linecap="round"/>',
 '<path d="M'+(x-30)+' '+(y+20)+'h60m-48-18 18-22 18 22" fill="none" stroke="A4" stroke-width="9" stroke-linecap="round"/>'
 ];
 return [kind,label+' · '+key,(art[kind]||art.idea)+motifs[variant]];
}

function buildSvg(word,meaning){
 var exact=sceneFor(word,meaning),kind=exact?exact[0]:'idea';
 if(!exact){for(var i=0;i<rules.length;i++){if(rules[i][0].test(meaning||'')){kind=rules[i][1];break}}}
 var seed=hash(word.toLowerCase()+'|'+meaning),p=palettes[seed%palettes.length],gid='wg'+seed.toString(36);
 var artSvg=(exact?exact[2]:art[kind]).replace(/A([2-4])/g,function(_,n){return p[Number(n)-1]});
 return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360" role="img" aria-label="'+esc(word)+'：'+esc(meaning)+'"><title>'+esc(word)+' — '+esc(meaning)+'</title><defs><linearGradient id="'+gid+'" x1="0" y1="0" x2="1" y2="1"><stop stop-color="'+p[0]+'"/><stop offset="1" stop-color="#fff"/></linearGradient></defs><rect width="640" height="360" rx="28" fill="url(#'+gid+')"/><circle cx="540" cy="68" r="38" fill="'+p[2]+'" opacity=".65"/><circle cx="92" cy="294" r="58" fill="'+p[2]+'" opacity=".35"/>'+artSvg+'</svg>';
}
function buildMultiSenseSvg(word,meaning){
 var variants=senseVariants(word,meaning);
 if(variants.length<2)return buildSvg(word,meaning);
 var cols=2,rows=Math.ceil(variants.length/cols),parts='';
 for(var i=0;i<variants.length;i++){
  var full=buildSvg(word,variants[i].meaning),start=full.indexOf('>')+1,end=full.lastIndexOf('</svg>'),x=(i%cols)*320,y=Math.floor(i/cols)*180;
  parts+='<svg x="'+x+'" y="'+y+'" width="320" height="180" viewBox="0 0 640 360">'+full.slice(start,end)+'</svg>';
 }
 return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 '+(rows*180)+'" role="img" aria-label="'+esc(word)+' 的多义词场景"><title>'+esc(word)+'：多义词场景</title>'+parts+'</svg>';
}
window.createWordMemorySvg=function(word,meaning){return buildMultiSenseSvg(String(word||''),String(meaning||''))};
function render(word){
 var el=$('word-enrichment');if(!el)return;
 var q=Array.isArray(window.Q)&&window.Q.length?window.Q[window.C]:null;
 var meaning=q&&q.w===word?q.d:'';
 var exact=sceneFor(word,meaning),kind=exact?exact[0]:'idea',label=exact?exact[1]:'概念联想';
 if(!exact){for(var i=0;i<rules.length;i++){if(rules[i][0].test(meaning||'')){kind=rules[i][1];label=rules[i][2];break}}}
 var variants=senseVariants(word,meaning),old=el.querySelector('.word-svg-memory');if(old)old.remove();
 var card=document.createElement('section');card.className='word-svg-memory';
 var artHtml='';
 if(variants.length>1){
  for(var v=0;v<variants.length;v++){
   var scene=variants[v].scene,svg=buildSvg(word,variants[v].meaning);
   artHtml+='<div class="word-svg-sense"><div class="word-svg-heading"><span>词义场景 '+(v+1)+'</span><span class="word-svg-kind">'+esc(scene[1])+'</span></div><div class="word-svg-art">'+svg+'</div><div class="word-svg-caption"><strong>'+esc(word)+'</strong><span>'+esc(variants[v].meaning)+'</span></div></div>';
  }
 }else{
  var svg=buildSvg(word,meaning);
  artHtml='<div class="word-svg-heading"><span>视觉记忆 · 本地 SVG 插画</span><span class="word-svg-kind">'+esc(label)+'</span></div><div class="word-svg-art">'+svg+'</div><div class="word-svg-caption"><strong>'+esc(word)+'</strong><span>'+esc(meaning||'观察画面，联想单词含义')+'</span></div>';
 }
 card.innerHTML=artHtml+'<div class="word-svg-tip">同一单词的不同词义分别展示对应场景。先看图回忆词义，再核对释义；插画由本地 SVG 生成，无需联网。</div>';
 el.insertBefore(card,el.firstChild);
}
var original=window.loadWordEnrichment;
if(typeof original==='function'){window.loadWordEnrichment=function(word){original(word);render(word)}}
document.addEventListener('DOMContentLoaded',function(){var q=Array.isArray(window.Q)&&window.Q.length?window.Q[window.C]:null;if(q)render(q.w)});
})();