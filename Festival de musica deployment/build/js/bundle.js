function navegacionFija(){const e=document.querySelector(".header");new IntersectionObserver((function(t){t[0].isIntersecting?e.classList.remove("fijo"):e.classList.add("fijo")})).observe(document.querySelector(".sobre-festival"))}function scrollNav(){document.querySelectorAll(".navegacion-principal a").forEach(e=>{e.addEventListener("click",(function(e){e.preventDefault();document.querySelector(e.target.attributes.href.value).scrollIntoView({behavior:"smooth"})}))})}function crearGaleria(){const e=document.querySelector(".galeria-imagenes");for(i=1;i<=12;i++){const t=document.createElement("IMG");t.src=`build/img/thumb/${i}.webp`,t.dataset.imagenId=i,t.onclick=mostrarImagen;const n=document.createElement("LI");n.appendChild(t),e.appendChild(n)}}function mostrarImagen(e){const t=parseInt(e.target.dataset.imagenId),n=document.createElement("IMG");n.src=`build/img/grande/${t}.webp`;const c=document.createElement("DIV");c.appendChild(n),c.classList.add("overlay");const a=document.createElement("P");a.textContent="X",a.classList.add("btn-cerrar"),c.appendChild(a),c.onclick=function(){c.remove()},a.onclick=function(){c.remove()};const o=document.querySelector("BODY");o.appendChild(c),o.classList.add("fijar-body")}document.addEventListener("DOMContentLoaded",(function(){scrollNav(),navegacionFija()})),document.addEventListener("DOMContentLoaded",(function(){crearGaleria()}));
//# sourceMappingURL=bundle.js.map
