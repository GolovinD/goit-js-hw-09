const e=document.querySelector(".form");function t(e,t){const o=Math.random()>.3;new Promise(((n,l)=>{setTimeout((()=>{o?n(`Fulfilled promise ${e} in ${t}ms`):l(`Rejected promise ${e} in ${t}ms`)}),t)})).then((e=>{console.log(e)})).catch((e=>{console.log(e)}))}e.addEventListener("submit",(function(o){o.preventDefault();let n=Number(e.delay.value);const l=Number(e.step.value),u=Number(e.amount.value);for(let e=1;e<=u;e+=1)t(e,n),n+=l}));
//# sourceMappingURL=03-promises.2cba50c9.js.map