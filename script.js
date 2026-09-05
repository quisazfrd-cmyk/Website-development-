
const header=document.getElementById('header');
addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>30));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(x=>io.observe(x));
function book(e){e.preventDefault();const f=e.target;const name=f.querySelectorAll('input')[4].value||'Guest';showToast('Thank you, '+name+' — reservation request received ✓');f.reset()}
function showToast(t){const x=document.getElementById('toast');x.textContent=t;x.classList.add('show');setTimeout(()=>x.classList.remove('show'),3200)}


if ('serviceWorker' in navigator) { window.addEventListener('load', () => navigator.serviceWorker.register('service-worker.js').catch(() => {})); }
