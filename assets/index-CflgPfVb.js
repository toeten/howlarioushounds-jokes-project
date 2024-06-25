(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const l=async()=>{try{const e=await fetch("https://official-joke-api.appspot.com/random_joke");if(!e.ok)throw new Error("Network response was not ok");if(!e.ok)throw new Error("Network response was not ok");return await e.json()}catch(e){console.warn("Fetching singular joke failed:",e)}},k=async()=>{try{const e=await fetch("https://official-joke-api.appspot.com/random_ten");if(!e.ok)throw new Error("Network response was not ok");return await e.json()}catch(e){return console.warn("Fetch ten jokes failed:",e),null}},h=async e=>{try{const t=await fetch(`https://official-joke-api.appspot.com/jokes/${e}/random`);if(!t.ok)throw new Error("Network response was not ok");return await t.json()}catch(t){console.warn(`Fetch jokes by type ${e} failed:`,t)}},u=async()=>{try{const e=await fetch("https://dog.ceo/api/breeds/image/random");if(!e.ok)throw new Error("Network response was not ok");return await e.json()}catch(e){console.warn("Fetch random dog failed:",e)}},f=e=>{const t=document.querySelector(".starter-joke article");t.innerHTML="";const r=document.createElement("p");r.id="starter-joke-setup",r.textContent=e.setup;const c=document.createElement("p");c.id="starter-joke-punchline",c.textContent=e.punchline,t.appendChild(r),t.appendChild(c)},j=e=>{const t=document.getElementById("joke-container");t.innerHTML="",e.forEach(r=>{const c=document.createElement("p");c.textContent=r.setup,t.appendChild(c);const o=document.createElement("p");o.textContent=r.punchline,t.appendChild(o)})},y=e=>{const t=document.getElementById("joke-container");t.innerHTML="",e.forEach(o=>{const n=document.createElement("p");n.textContent=o.setup,t.appendChild(n);const s=document.createElement("p");s.textContent=o.punchline,t.appendChild(s)});const r=document.getElementById("starter-joke-setup");r.textContent=joke.setup;const c=document.getElementById("starter-joke-punchline");c.textContent=joke.punchline},m=e=>{const t=document.getElementById("dog-pic");t.src=e.message,t.alt="Random Dog"},w=async()=>{const e=await u();e&&m(e),document.getElementById("fetch-dog").addEventListener("click",async()=>{const n=await u();m(n)});const t=await l();f(t),document.getElementById("joke-form").addEventListener("submit",async n=>{n.preventDefault();const s=n.target,d=new FormData(s),i=d.get("joke-option"),p=d.get("joke-type-option");if(i==="better"){const a=await l();f(a)}else if(i==="ten"){const a=await k();j(a)}else if(i==="type"&&p){const a=await h(p);a?y(a):console.warn("No jokes were fetched.")}});const r=document.querySelectorAll('input[name="joke-option"]'),c=document.querySelectorAll('input[name="joke-type-option"]');function o(n){c.forEach(s=>{s.disabled=n})}r.forEach(n=>{n.addEventListener("change",function(){this.value==="type"?o(!1):o(!0)})})};document.addEventListener("DOMContentLoaded",w);
