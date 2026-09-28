(function(){
var b=document.body,l=document.getElementById("logo"),imgs=[].slice.call(document.images);
document.getElementById("yr").textContent=new Date().getFullYear();
var wait=function(ms){return new Promise(function(r){setTimeout(r,ms)})};
var loaded=Promise.all(imgs.map(function(i){
 return i.decode?i.decode().catch(function(){}):new Promise(function(r){i.complete?r():(i.onload=i.onerror=r)})}));
requestAnimationFrame(function(){requestAnimationFrame(function(){l.classList.add("in")})});
Promise.all([loaded,wait(3000)]).then(function(){
 l.classList.remove("in");l.classList.add("out");
 return wait(500)}).then(function(){
 b.classList.add("go");l.style.display="none"});
})();
