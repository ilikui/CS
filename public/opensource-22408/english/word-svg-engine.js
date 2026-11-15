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
function matchSenseScene(word,meaning){
 var entries=multiSenseScenes[String(word||'').toLowerCase()];
 if(!entries)return null;
 var gloss=String(meaning||'');
 for(var i=0;i<entries.length;i++){if(entries[i][0].test(gloss))return entries[i][1]}
 return null;
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
window.createWordMemorySvg=function(word,meaning){return buildSvg(String(word||''),String(meaning||''))};
function render(word){
 var el=$('word-enrichment');if(!el)return;
 var q=Array.isArray(window.Q)&&window.Q.length?window.Q[window.C]:null;
 var meaning=q&&q.w===word?q.d:'';
 var exact=sceneFor(word,meaning),kind=exact?exact[0]:'idea',label=exact?exact[1]:'概念联想';
 if(!exact){for(var i=0;i<rules.length;i++){if(rules[i][0].test(meaning||'')){kind=rules[i][1];label=rules[i][2];break}}}
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