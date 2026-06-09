
const g=document.querySelector('.gallery');
if(g){
const f=g.dataset.folder,c=+g.dataset.count;
for(let i=1;i<=c;i++){
let n=String(i).padStart(2,'0');
let d=document.createElement('figure');
d.className='figure';
d.innerHTML=`<img loading="lazy" src="images/${f}/${n}.jpg"><figcaption class="caption">FIG. ${n}</figcaption>`;
g.appendChild(d);
}
}
const lb=document.getElementById('lightbox');
const lbi=document.getElementById('lightboxImg');
document.addEventListener('click',e=>{
if(e.target.closest('.figure img')){lb.style.display='flex';lbi.src=e.target.src;}
});
if(lb){lb.onclick=()=>lb.style.display='none';}
window.addEventListener('scroll',()=>{
const h=document.documentElement.scrollHeight-innerHeight;
const b=document.getElementById('bar'); if(b) b.style.width=(scrollY/h*100)+'%';
});
