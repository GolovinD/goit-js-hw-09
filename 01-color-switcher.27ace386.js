!function(){var t=document.querySelector("body"),e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),o=null,r=function(){var e="#".concat(Math.floor(16777215*Math.random()).toString(16));t.style.backgroundColor=e};e.addEventListener("click",(function(){e.setAttribute("disabled",!0),r(),o=setInterval((function(){r()}),1e3)})),n.addEventListener("click",(function(){clearInterval(o),e.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.27ace386.js.map