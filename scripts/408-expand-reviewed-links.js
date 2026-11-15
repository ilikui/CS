const fs = require('fs');
const vm = require('vm');

const REVIEWED = [
  {topic:'顺序表折半查找比较次数',card:'线性表与顺序表',subject:'数据结构',year:2010,index:9,answer:'B',analysis:'长度为16的有序表进行折半查找，最深的失败查找路径最多比较5次。也可按折半判定树高度计算，结果为5次，因此选B。',steps:['折半查找每次将当前区间缩小到约一半。','对16个元素，最坏路径需要 ceil(log2(16+1))=5 次关键字比较。','因此最多比较5次，选B。']},
  {topic:'最小生成树性质判断',card:'最小生成树与最短路径',subject:'数据结构',year:2012,index:8,answer:'A',analysis:'最小生成树的总权值（代价）相同，但边集不一定唯一。Prim从不同起点可能得到不同的最小生成树；Prim与Kruskal也可能得到同一棵树。因此只有Ⅰ正确，选A。',steps:['最小生成树的最小总代价是唯一的。','权值相同或存在替代边时，最小生成树的边集可能不唯一。','Prim起点不同或算法不同，不保证生成相同边集；只有Ⅰ正确。']},
  {topic:'Kruskal算法构造最小生成树',card:'最小生成树与最短路径',subject:'数据结构',year:2020,index:7,answer:'A',analysis:'Kruskal算法按边权从小到大考察边，只有连接两个不同连通分量且不会形成回路的边才加入生成树。按题图边权排序并逐条用并查集判环，可得到选项A的加入顺序。',steps:['将所有边按权值升序排列。','依次选择当前最小且不会形成回路的边。','用并查集维护连通分量，直到选出 n−1 条边；对应A。']},
  {topic:'每趟排序确定最终位置',card:'内部排序与稳定性',subject:'数据结构',year:2012,index:10,answer:'A',analysis:'简单选择排序每趟将最小（或最大）元素放到最终位置；快速排序每趟确定枢轴位置；堆排序每趟确定堆顶元素的最终位置。希尔排序和二路归并排序不保证每趟都确定至少一个元素的最终位置。',steps:['简单选择排序每趟确定一个极值元素的位置。','快速排序每趟确定枢轴元素的最终位置。','堆排序每趟输出堆顶极值并放到最终位置；Ⅰ、Ⅲ、Ⅳ正确，选A。']},
  {topic:'排序算法选择因素',card:'内部排序与稳定性',subject:'数据结构',year:2019,index:7,answer:'D',analysis:'选择排序算法时，除时间和空间效率外，还应综合考虑数据规模、数据存储方式、稳定性以及初始状态。四项均属于算法选择因素，选D。',steps:['数据规模影响算法复杂度和常数开销。','存储方式影响随机访问、移动和辅助空间成本。','稳定性及初始状态也会影响业务正确性与实际性能；Ⅰ至Ⅳ均应考虑。']},
  {topic:'突发总线事务',card:'总线与总线事务',subject:'计算机组成原理',year:2014,index:20,answer:'C',analysis:'主设备只给出首地址，随后从设备自动访问连续多个单元并连续传输多个数据，这种一次启动、连续传输的总线事务称为突发传输。',steps:['识别“给出一个首地址”。','识别“连续多个单元读出或写入多个数据”。','这正是突发传输（Burst Transfer），选C。']},
  {topic:'直接寻址范围计算',card:'指令系统与寻址方式',subject:'计算机组成原理',year:2020,index:16,answer:'A',analysis:'48条指令至少需要6位操作码；4种寻址方式需要2位寻址方式字段。16位指令剩余8位作为直接地址，因此可寻址范围为0～255，选A。',steps:['操作码位数至少为 ceil(log2 48)=6 位。','寻址方式字段需要 log2 4=2 位。','地址字段剩余16−6−2=8位，直接地址范围为0～2^8−1，即0～255。']},
  {topic:'文件系统逻辑格式化',card:'文件系统与目录',subject:'操作系统',year:2017,index:29,answer:'B',analysis:'磁盘逻辑格式化用于建立文件系统的数据结构，包括建立根目录以及初始化空闲磁盘块管理结构。磁盘分区属于更低层的分区操作，扇区校验码位数也不是逻辑格式化的工作。',steps:['逻辑格式化建立文件系统的组织结构。','建立根目录，并初始化空闲空间管理数据结构。','对应Ⅱ、Ⅳ，选B。']},
  {topic:'定长子网划分计算',card:'IP 地址与子网划分',subject:'计算机网络',year:2010,index:37,answer:'B',analysis:'原网络为/24，子网掩码255.255.255.248对应/29。借用5位作为子网号，可划分2^5=32个子网；主机号剩3位，每个子网可分配2^3−2=6个主机地址，选B。',steps:['255.255.255.248对应前缀长度/29。','从/24借用5位作子网号，子网数为2^5=32。','主机位剩3位，可用地址数为2^3−2=6。']},
  {topic:'CSMA_CA信道预约',card:'CSMA/CA 与无线局域网',subject:'计算机网络',year:2018,index:35,answer:'D',analysis:'IEEE 802.11 的CSMA/CA可通过RTS/CTS帧进行信道预约。发送方先发RTS，接收方响应CTS，其他站点据此设置网络分配向量并延迟发送。',steps:['CSMA/CA通过虚拟载波侦听降低隐藏站冲突。','RTS请求发送，CTS允许发送并公布预约时长。','因此信道预约方式是交换RTS与CTS，选D。']},
  {topic:'交换机转发地址',card:'交换机自学习与转发',subject:'计算机网络',year:2009,index:36,answer:'A',analysis:'以太网交换机依据目的MAC地址查找转发表并决定转发端口；源MAC地址用于学习和更新转发表，IP地址不用于二层交换机的普通转发决策。',steps:['区分二层交换与三层路由。','交换机根据目的物理地址（目的MAC）查表转发。','源MAC用于地址学习，选A。']},
  {topic:'ICMP拥塞差错报告',card:'ICMP 差错报告与诊断',subject:'计算机网络',year:2010,index:36,answer:'C',analysis:'按该历年题库所采用的经典ICMP类型，路由器因拥塞丢弃IP分组时对应源点抑制报文（Source Quench），选C。该报文类型后来已被弃用，复习时应区分考试历史口径与现代网络实践。',steps:['题目考查经典ICMP差错/控制报文类型。','拥塞时的历史性反馈类型为源点抑制。','选C；注意Source Quench已在现代标准中弃用。']},
  {topic:'TCP快速重传触发条件',card:'TCP 超时重传与快速重传',subject:'计算机网络',year:2019,index:38,answer:'C',analysis:'快速重传通常由连续收到3个重复ACK触发，不必等待重传计时器超时。根据题图，第三个重复确认到达的时刻为t3，因此选C。',steps:['发送段丢失后，接收方对后续失序段重复确认同一累计确认号。','发送方收到3个重复ACK后触发快速重传。','题图对应t3，选C。']},
  {topic:'选择重传窗口边界',card:'TCP 接收窗口与滑动窗口',subject:'计算机网络',year:2019,index:35,answer:'B',analysis:'序号空间大小为2^3=8。选择重传协议要求发送窗口与接收窗口之和不超过序号空间，发送窗口已为5，因此接收窗口最大为8−5=3，选B。',steps:['3位序号的编号空间为8。','选择重传为避免新旧帧混淆，发送窗口与接收窗口之和不超过8。','接收窗口最大为8−5=3，选B。']},
  {topic:'NAT下UDP首部字段变化',card:'UDP 首部与校验和',subject:'计算机网络',year:2025,index:37,answer:'B',analysis:'端口地址转换会修改UDP源端口；由于UDP校验和覆盖UDP首部、数据以及IP伪首部，源地址或端口改变后需要调整校验和。IP总长度不属于UDP首部字段，选B。',steps:['区分UDP首部字段与IP首部字段。','NAPT可能改写源端口号。','源IP/端口变化会影响UDP校验和；总长度是IP首部字段，选B。']},
  {topic:'UDP服务特性',card:'UDP 首部与校验和',subject:'计算机网络',year:2014,index:39,answer:'B',analysis:'UDP提供无连接服务，并通过端口实现复用和分用。UDP校验和用于差错检测，不提供重传、按序交付等可靠传输保障，因此Ⅲ错误，选B。',steps:['UDP无连接，不建立连接状态。','UDP端口支持应用进程复用与分用。','校验和只能检测差错，不能保证可靠交付；Ⅰ、Ⅱ正确，选B。']},
  {topic:'UDP分用端口字段',card:'UDP 首部与校验和',subject:'计算机网络',year:2018,index:39,answer:'B',analysis:'接收端UDP根据目的端口号将数据报交付给相应的套接字/应用进程；源端口通常用于接收方回复。选B。',steps:['UDP接收数据报时需要定位目标应用进程。','目的端口号用于分用到对应套接字。','选B。']},
  {topic:'FTP控制连接',card:'FTP 与电子邮件协议',subject:'计算机网络',year:2009,index:40,answer:'A',analysis:'FTP使用TCP控制连接传递命令和响应；数据连接用于文件数据传输。控制连接与数据连接用途不同，选A。',steps:['FTP同时使用控制连接和数据连接。','控制连接承载命令与响应，基于TCP。','选A。']},
  {topic:'FTP连接管理',card:'FTP 与电子邮件协议',subject:'计算机网络',year:2017,index:40,answer:'C',analysis:'FTP控制连接通常使用服务器TCP 21端口；主动模式数据连接由服务器TCP 20端口发起，不能笼统表述为服务器与客户端双方都使用TCP 20端口建立数据连接。按题库答案选C。',steps:['控制连接使用服务器TCP 21端口。','主动模式数据连接由服务器TCP 20端口发起，客户端使用临时端口。','题干C项对两端端口的描述不正确，选C。']},
  {topic:'P2P与客户服务器模型',card:'P2P 与客户服务器模型',subject:'计算机网络',year:2019,index:40,answer:'B',analysis:'客户/服务器模型中客户向服务器发起请求，服务器提供服务；客户之间通常不直接建立该模型定义下的服务关系。P2P节点具有对等性，可同时提供和获取服务，因此B项错误。',steps:['C/S模型以服务器为服务提供方、客户为请求方。','P2P节点之间是对等关系。','“C/S模型中客户与客户之间可以直接通信”不是该模型的典型定义，选B。']},
  {topic:'HDLC比特填充',card:'组帧与透明传输',subject:'计算机网络',year:2013,index:37,answer:'A',analysis:'HDLC使用01111110作为帧定界标志。为避免数据中出现与标志相同的比特模式，发送端在数据字段连续出现5个1后插入0；接收端再删除该0。',steps:['识别HDLC标志字段01111110。','数据字段连续出现5个1时，发送端插入一个0。','按题目比特串逐位执行填充，结果对应A。']},
  {topic:'GBN发送窗口序号位数',card:'GBN 后退 N 帧协议',subject:'计算机网络',year:2012,index:36,answer:'B',analysis:'帧长取最小值128B时，发送时间为1024/16000=64ms；单向传播时延270ms，a=270/64≈4.22。为使窗口足以覆盖管道，需W≥1+2a≈9.44；GBN窗口最大为2^k−1，k=4时最大15，满足要求，选B。',steps:['取最小帧长128B，发送时间为64ms。','a=传播时延/发送时延=270/64≈4.22，满利用率要求W≥1+2a≈9.44。','GBN最大窗口W=2^k−1，最小满足条件的k为4，选B。']},
  {topic:'CSMA_CA确认机制',card:'CSMA/CA 与无线局域网',subject:'计算机网络',year:2011,index:36,answer:'D',analysis:'CSMA/CA在成功接收数据帧后由接收方发送ACK确认；CSMA/CD通过冲突检测和重传机制工作，不使用这种逐帧ACK确认方式。',steps:['区分CSMA/CD与CSMA/CA。','无线局域网CSMA/CA通过ACK确认正确接收的数据帧。','选D。']},
  {topic:'广播风暴与网络设备',card:'网桥与交换机的冲突域广播域',subject:'计算机网络',year:2010,index:38,answer:'D',analysis:'中继器、集线器和网桥不会隔离二层广播域；路由器在三层转发，默认不转发二层广播，因此能够隔离广播域并抑制广播风暴，选D。',steps:['中继器和集线器工作在物理层。','网桥/二层交换机转发广播帧，不能隔离广播域。','路由器隔离广播域，选D。']},
  {topic:'交换机与网桥关系',card:'网桥与交换机的冲突域广播域',subject:'计算机网络',year:2015,index:37,answer:'A',analysis:'以太网交换机本质上是多端口网桥。交换机每个端口隔离冲突域，但同一VLAN内通常仍属于同一广播域，因此B、C错误；二层交换机也不负责不同网络层协议互联。',steps:['交换机通过MAC地址表进行二层转发。','从功能本质看，以太网交换机是多端口网桥。','端口隔离冲突域，不自动隔离广播域，选A。']},
  {topic:'CSMA_CD最小帧长与距离',card:'以太网 CSMA/CD',subject:'计算机网络',year:2009,index:37,answer:'D',analysis:'CSMA/CD要求最小帧发送时间不小于往返传播时延。最小帧长度减少800bit、速率1Gbps，对应往返时延减少0.8μs；单向传播时延减少0.4μs，距离变化为200000km/s×0.4μs=80m，因此最远距离至少减少80m，选D。',steps:['最小帧长度变化量对应发送时间Δt=800/10^9=0.8μs。','CSMA/CD约束的是往返传播时延，单程时延变化为0.4μs。','距离变化量=200000km/s×0.4μs=80m，需减少80m，选D。']}
];

function htmlText(s) {
  return String(s || '').replace(/<script[\s\S]*?<\/script>/gi,' ').replace(/<style[\s\S]*?<\/style>/gi,' ')
    .replace(/<[^>]*>/g,' ').replace(/&nbsp;|&#160;/gi,' ').replace(/&amp;/gi,'&')
    .replace(/&lt;/gi,'<').replace(/&gt;/gi,'>').replace(/&quot;/gi,'"').replace(/&#39;|&apos;/gi,"'")
    .replace(/&#(\d+);/g,(_,n)=>String.fromCodePoint(Number(n))).replace(/&#x([0-9a-f]+);/gi,(_,n)=>String.fromCodePoint(parseInt(n,16)))
    .replace(/\s+/g,' ').trim().replace(/^\d{4}-(?:第\d+题-题目|Question-\d+-questions)\s*/,'').replace(/408真题系统/g,'').trim();
}
const context = {};
const source = fs.readFileSync('data/408/questions_data.js','utf8');
vm.runInNewContext(source + String.fromCharCode(10) + ';globalThis.__QUESTIONS_DATA__ = QUESTIONS_DATA;',context,{timeout:120000});
const data = context.__QUESTIONS_DATA__ || context.QUESTIONS_DATA || (context.window && context.window.QUESTIONS_DATA);
if (!Array.isArray(data)) throw new Error('QUESTIONS_DATA export not found');
const mapContext = {window:{}};
vm.runInNewContext(fs.readFileSync('public/opensource-22408/408/cards-questions.js','utf8'),mapContext,{timeout:30000});
const map = mapContext.window.CARD_QUESTION_MAP || {};
const topicMap = mapContext.window.CARD_EXAM_TOPIC_MAP || {};
const byKey = new Map(data.map(q=>[String(q.year)+'-'+String(q.index),q]));
const added = [];
for (const item of REVIEWED) {
  if (map[item.topic]) throw new Error('Mapping key already exists: '+item.topic);
  if (topicMap[item.topic]) throw new Error('Topic map key already exists: '+item.topic);
  const q = byKey.get(String(item.year)+'-'+String(item.index));
  if (!q) throw new Error('Question missing: '+item.year+'-'+item.index);
  if (String(q.answer || '').trim().toUpperCase() !== item.answer) throw new Error('Answer key mismatch for '+item.year+'-'+item.index+': source='+q.answer+' expected='+item.answer);
  const question = htmlText(q.question);
  if (!question || question.length < 30) throw new Error('Question text incomplete: '+item.year+'-'+item.index);
  const rec = {
    year:item.year,index:item.index,id:q.id,typeName:q.typeName||'选择题',score:q.score||2,
    answer:q.answer,question:question,analysis:item.analysis,steps:item.steps,stepsSource:'teaching',
    topic:item.subject,matchKind:'direct-concept',
    teachingSteps:item.steps,
    audit:{status:'source-linked-answer-key',note:'年份、题号、ID与 data/408/questions_data.js 对齐；参考答案直接取原始题库 answer 字段。analysis/teachingSteps 为补充教学解析，不冒充原始官方解析。'}
  };
  if (q.analysis) rec.sourceAnalysis = htmlText(q.analysis);
  map[item.topic] = rec;
  topicMap[item.topic] = item.card;
  added.push({topic:item.topic,card:item.card,year:item.year,index:item.index,id:q.id,answer:q.answer});
}
const output = '/* 真题题干与答案来自 data/408/questions_data.js；教学解析为补充内容，核验状态见 audit。 */\nwindow.CARD_QUESTION_MAP = '+JSON.stringify(map,null,2)+';\n\nwindow.CARD_EXAM_TOPIC_MAP = '+JSON.stringify(topicMap,null,2)+';\n';
fs.writeFileSync('public/opensource-22408/408/cards-questions.js',output);
fs.mkdirSync('reports',{recursive:true});
fs.writeFileSync('reports/408-new-links-report.json',JSON.stringify({addedCount:added.length,added},null,2));
console.log(JSON.stringify({addedCount:added.length,totalMappings:Object.keys(map).length,added}));
