/* Curated syllable and lexical-stress guide. Entries are reviewed dictionary-style references, not generated guesses. */
(function(){
'use strict';
const DATA={
 abandon:{syllables:['a','ban','don'],stressIndex:1,ipa:'əˈbæn.dən'},
 ability:{syllables:['a','bil','i','ty'],stressIndex:1,ipa:'əˈbɪl.ə.ti'},
 accept:{syllables:['ac','cept'],stressIndex:1,ipa:'əkˈsept'},
 access:{syllables:['ac','cess'],stressIndex:0,ipa:'ˈæk.ses'},
 achieve:{syllables:['a','chieve'],stressIndex:1,ipa:'əˈtʃiːv'},
 across:{syllables:['a','cross'],stressIndex:1,ipa:'əˈkrɒs'},
 action:{syllables:['ac','tion'],stressIndex:0,ipa:'ˈæk.ʃən'},
 active:{syllables:['ac','tive'],stressIndex:0,ipa:'ˈæk.tɪv'},
 activity:{syllables:['ac','tiv','i','ty'],stressIndex:1,ipa:'ækˈtɪv.ə.ti'},
 advantage:{syllables:['ad','van','tage'],stressIndex:1,ipa:'ədˈvɑːn.tɪdʒ'},
 affect:{syllables:['af','fect'],stressIndex:1,ipa:'əˈfekt'},
 afford:{syllables:['af','ford'],stressIndex:1,ipa:'əˈfɔːd'},
 agree:{syllables:['a','gree'],stressIndex:1,ipa:'əˈɡriː'},
 amount:{syllables:['a','mount'],stressIndex:1,ipa:'əˈmaʊnt'},
 analysis:{syllables:['a','nal','y','sis'],stressIndex:1,ipa:'əˈnæl.ə.sɪs'},
 ancient:{syllables:['an','cient'],stressIndex:0,ipa:'ˈeɪn.ʃənt'},
 appear:{syllables:['ap','pear'],stressIndex:1,ipa:'əˈpɪə'},
 approach:{syllables:['ap','proach'],stressIndex:1,ipa:'əˈprəʊtʃ'},
 argument:{syllables:['ar','gu','ment'],stressIndex:0,ipa:'ˈɑːɡ.jə.mənt'},
 attention:{syllables:['at','ten','tion'],stressIndex:1,ipa:'əˈten.ʃən'}
};
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function html(word){const d=DATA[String(word||'').toLowerCase()];if(!d)return '';const syll=d.syllables.map((x,i)=>'<span class="syllable'+(i===d.stressIndex?' stressed':'')+'">'+esc(x)+(i===d.stressIndex?'<sup>ˈ</sup>':'')+'</span>').join('<i class="syllable-dot">·</i>');return '<div class="syllable-guide" title="词典式音节与主重音参考"><div class="syllable-row">'+syll+'</div><div class="syllable-meta">音节 '+d.syllables.length+' 个 · 主重音第 '+(d.stressIndex+1)+' 音节 · /'+esc(d.ipa)+'/</div></div>';}
function paintMain(){const word=document.getElementById('dw')?.textContent?.trim(),ipa=document.getElementById('word-ipa');if(!ipa)return;let box=document.getElementById('word-syllable-guide');if(!box){box=document.createElement('div');box.id='word-syllable-guide';ipa.insertAdjacentElement('afterend',box);}box.innerHTML=html(word);}
function paintBrowse(){document.querySelectorAll('#bc .bw-item').forEach(card=>{const word=card.querySelector('.bw-w')?.childNodes?.[0]?.textContent?.trim();if(!word||card.querySelector('.syllable-guide'))return;const markup=html(word);if(!markup)return;const ipa=card.querySelector('.bw-ipa');if(ipa)ipa.insertAdjacentHTML('afterend',markup);});}
const base=window.renderW;if(typeof base==='function')window.renderW=function(){base();paintMain();};
const browse=window.renderB;if(typeof browse==='function')window.renderB=function(){browse();paintBrowse();};
document.addEventListener('DOMContentLoaded',()=>{paintMain();paintBrowse();});
window.EnglishSyllableGuide={lookup:w=>DATA[String(w||'').toLowerCase()]||null,count:Object.keys(DATA).length};
})();