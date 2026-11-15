const fs = require('fs');
const vm = require('vm');
const REVIEWED = [
 {topic:'单周期处理器数据通路',card:'CPU 指令执行过程',subject:'计算机组成原理',year:2016,index:20,answer:'A',analysis:'单周期处理器要求每条指令在一个时钟周期内完成。单总线数据通路通常无法在同一周期内完成指令所需的多个并行数据传送，因此A项错误；单周期处理器CPI为1。',steps:['单周期处理器每条指令只占一个时钟周期。','指令执行中可能需要同时读寄存器、访问存储器并写回结果。','单总线无法满足这些并行传送要求，A项错误。']},
 {topic:'系统调用接口',card:'系统调用与用户态内核态',subject:'操作系统',year:2010,index:23,answer:'A',analysis:'操作系统通过系统调用向应用程序提供受控的内核服务接口。中断是进入内核的机制，库函数是用户态程序库接口，原语是内核中不可分割的操作。',steps:['区分应用程序可见的操作系统接口与底层执行机制。','系统调用是应用程序请求内核服务的接口。','中断是控制转移机制，原语是内核操作，选A。']},
 {topic:'磁盘I_O系统调用流程',card:'系统调用与用户态内核态',subject:'操作系统',year:2011,index:26,answer:'B',analysis:'用户程序发起磁盘I/O请求时，先通过系统调用进入内核，由系统调用处理程序检查并组织请求，再调用设备驱动程序启动设备；设备完成操作后通过中断处理程序通知CPU。',steps:['用户程序发出I/O请求，通过系统调用进入内核。','系统调用处理程序调用设备驱动程序启动I/O。','设备完成后产生中断，由中断处理程序处理；顺序为B。']},
 {topic:'GBN协议吞吐率计算',card:'GBN 后退 N 帧协议',subject:'计算机网络',year:2014,index:36,answer:'C',analysis:'单帧发送时间为1000×8/100Mbps=0.08ms，单向传播时延为50ms，a=50/0.08=625。GBN窗口为1000，理想信道利用率约为W/(1+2a)=1000/1251≈0.799，吞吐率约80Mbps，选C。',steps:['单帧发送时延=8000bit/100Mbps=0.08ms。','a=50ms/0.08ms=625，GBN满窗口利用率约为1000/(1+2×625)。','吞吐率约100×0.799=80Mbps，选C。']},
 {topic:'SR选择重传超时处理',card:'SR 选择重传协议',subject:'计算机网络',year:2011,index:35,answer:'B',analysis:'选择重传协议对每个数据帧分别确认和计时。1号帧已经确认，不需重传；0号和2号帧分别超时且未确认，只需重传这两帧，共2帧，选B。',steps:['SR对每个帧独立确认。','1号帧已确认，排除；0号和2号帧超时且未确认。','只重传0号和2号，共2帧，选B。']},
 {topic:'TCP累计确认序号计算',card:'TCP 序号确认与累计确认',subject:'计算机网络',year:2009,index:38,answer:'D',analysis:'TCP确认号表示接收方下一步期望收到的字节序号。第一个段从序号200开始，载荷300字节；第二个段紧接其后载荷500字节，因此下一个期望字节序号为200+300+500=1000，选D。',steps:['TCP序号按字节编号。','两个连续段总载荷为300+500=800字节。','累计确认号=200+800=1000，选D。']},
 {topic:'TCP发送窗口受限计算',card:'TCP 接收窗口与滑动窗口',subject:'计算机网络',year:2010,index:39,answer:'A',analysis:'TCP实际发送窗口受拥塞窗口和接收窗口共同限制，取min(cwnd,rwnd)=min(4000,2000)=2000B。已发送两个1000B段，收到第一个段的确认后仍有1000B未确认，因此还能发送2000−1000=1000B，选A。',steps:['实际发送窗口=min(cwnd,rwnd)=2000B。','已发送2000B，收到第一个段ACK后，未确认数据还剩1000B。','可继续发送2000−1000=1000B，选A。']},
 {topic:'慢开始与接收窗口共同限制',card:'TCP 拥塞控制',subject:'计算机网络',year:2015,index:39,answer:'A',analysis:'慢开始阶段拥塞窗口按RTT近似翻倍：1、2、4、8、16KB。前4个RTT内累计接收并缓存的数据为1+2+4+8=15KB，接收缓存总量16KB，故此时接收窗口仅剩1KB。发送窗口取拥塞窗口与接收窗口的较小值，为1KB，选A。',steps:['慢开始拥塞窗口依次为1、2、4、8、16KB。','前4个RTT累计送达并缓存1+2+4+8=15KB。','接收缓存16KB仅余1KB，发送窗口=min(16KB,1KB)=1KB。']},
 {topic:'TCP拥塞窗口与接收窗口计算',card:'TCP 拥塞控制',subject:'计算机网络',year:2025,index:38,answer:'A',analysis:'t0时拥塞窗口为2个MSS，已发送两个1000B段。t1收到ack_seq=3001，确认第一个段，慢开始使拥塞窗口增加一个MSS至3000B；接收窗口为4000B，故发送窗口为3000B。扣除仍未确认的第二个1000B段，还可继续发送2000B，即2个段，选A。',steps:['ack_seq=3001累计确认序号2001起始的第一个1000B段。','慢开始下拥塞窗口增加一个MSS，变为3000B；接收窗口4000B，不构成更小限制。','减去仍在途的1000B，可再发送2000B，即2段，选A。']},
 {topic:'DHCP请求报文广播地址',card:'DHCP 地址租约过程',subject:'计算机网络',year:2025,index:36,answer:'C',analysis:'新主机尚未完成地址配置时，源IP地址为0.0.0.0；在选择/确认租约阶段发送DHCPREQUEST时通常采用广播，以便服务器和同一链路上的DHCP服务端接收，目的IP为255.255.255.255，选C。',steps:['客户端尚未正式配置地址，源IP使用0.0.0.0。','DHCPREQUEST在该阶段以受限广播发送。','目的IP为255.255.255.255，源IP为0.0.0.0，选C。']},
 {topic:'NAT源地址转换',card:'NAT 与端口映射',subject:'计算机网络',year:2023,index:38,answer:'A',analysis:'NAT路由器转发内网主机发往Internet的IP分组时，会把源IP地址转换为其外网接口/映射使用的地址。按题图，转换后的源地址为192.168.0.33，选A。',steps:['识别内网主机发出的分组，其源地址是私有地址。','经过执行NAT的R2后，源地址替换为R2对应的外部映射地址。','根据题图映射地址为192.168.0.33，选A。']}
];
function htmlText(s) {
 return String(s||'').replace(/<script[\s\S]*?<\/script>/gi,' ').replace(/<style[\s\S]*?<\/style>/gi,' ').replace(/<[^>]*>/g,' ')
 .replace(/&nbsp;|&#160;/gi,' ').replace(/&amp;/gi,'&').replace(/&lt;/gi,'<').replace(/&gt;/gi,'>').replace(/&quot;/gi,'"').replace(/&#39;|&apos;/gi,"'")
 .replace(/&#(\d+);/g,(_,n)=>String.fromCodePoint(Number(n))).replace(/&#x([0-9a-f]+);/gi,(_,n)=>String.fromCodePoint(parseInt(n,16)))
 .replace(/\s+/g,' ').trim().replace(/^\d{4}-(?:第\d+题-题目|Question-\d+-questions)\s*/,'').replace(/408真题系统/g,'').trim();
}
const ctx={},src=fs.readFileSync('data/408/questions_data.js','utf8');
vm.runInNewContext(src+String.fromCharCode(10)+';globalThis.__QUESTIONS_DATA__=QUESTIONS_DATA;',ctx,{timeout:120000});
const data=ctx.__QUESTIONS_DATA__||ctx.QUESTIONS_DATA||(ctx.window&&ctx.window.QUESTIONS_DATA);
if(!Array.isArray(data))throw new Error('QUESTIONS_DATA export not found');
const mc={window:{}};
vm.runInNewContext(fs.readFileSync('public/opensource-22408/408/cards-questions.js','utf8'),mc,{timeout:30000});
const map=mc.window.CARD_QUESTION_MAP||{},tm=mc.window.CARD_EXAM_TOPIC_MAP||{};
const byKey=new Map(data.map(q=>[String(q.year)+'-'+String(q.index),q]));
const added=[];
for(const x of REVIEWED){
 if(map[x.topic])throw new Error('duplicate topic '+x.topic);
 const q=byKey.get(String(x.year)+'-'+String(x.index));
 if(!q)throw new Error('missing '+x.year+'-'+x.index);
 if(String(q.answer||'').trim().toUpperCase()!==x.answer)throw new Error('answer mismatch '+x.year+'-'+x.index+' source '+q.answer);
 const question=htmlText(q.question);
 if(question.length<25)throw new Error('incomplete question '+x.year+'-'+x.index);
 map[x.topic]={year:x.year,index:x.index,id:q.id,typeName:q.typeName||'选择题',score:q.score||2,answer:q.answer,question,analysis:x.analysis,steps:x.steps,stepsSource:'teaching',topic:x.subject,matchKind:'direct-concept',teachingSteps:x.steps,audit:{status:'source-linked-answer-key',note:'年份、题号、ID与 data/408/questions_data.js 对齐；参考答案取原始题库 answer 字段。教学解析为补充讲解，不冒充官方原始解析。'}};
 if(q.analysis)map[x.topic].sourceAnalysis=htmlText(q.analysis);
 tm[x.topic]=x.card;added.push({topic:x.topic,card:x.card,year:x.year,index:x.index,id:q.id,answer:q.answer});
}
if(tm['顺序表折半查找比较次数']!=='线性表与顺序表')throw new Error('unexpected prior card target');
tm['顺序表折半查找比较次数']='查找算法与散列表';
const output='/* 真题题干与答案来自 data/408/questions_data.js；教学解析为补充内容，核验状态见 audit。 */\nwindow.CARD_QUESTION_MAP = '+JSON.stringify(map,null,2)+';\n\nwindow.CARD_EXAM_TOPIC_MAP = '+JSON.stringify(tm,null,2)+';\n';
fs.writeFileSync('public/opensource-22408/408/cards-questions.js',output);
fs.mkdirSync('reports',{recursive:true});
fs.writeFileSync('reports/408-new-links-round2.json',JSON.stringify({addedCount:added.length,added,retargeted:{topic:'顺序表折半查找比较次数',from:'线性表与顺序表',to:'查找算法与散列表'}},null,2));
console.log(JSON.stringify({addedCount:added.length,totalMappings:Object.keys(map).length,added}));
