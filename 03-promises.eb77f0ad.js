function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequire3ec5;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},t.parcelRequire3ec5=r);var u=r("eWCmQ");const i={form:document.querySelector(".form"),delay:document.querySelector('input[name="delay"]'),step:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]'),btnSubmit:document.querySelector('button[type="submit"]')};function l(e,t){return new Promise(((o,n)=>{setTimeout((()=>{Math.random()>.3?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}i.btnSubmit.addEventListener("submit",(function(t){t.preventDefault();let o=Number(t.currentTarget.delay.value);const n=Number(t.currentTarget.step.value),r=Number(t.currentTarget.amount.value);if(console.log(Number(i.delayInput.value)),console.log(n),console.log(r),o>=0&&n>=0&&r>=0)for(let t=1;t<=r;t+=1)o+=n,l(t,o).then((({position:t,delay:o})=>{e(u).Notify.failure(`✅ Fulfilled promise ${t} in ${o}ms`,{position:"center-top"})})).catch((({position:t,delay:o})=>{e(u).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`,{position:"center-top"})}));else e(u).Notify.failure("Please put values > 0",{position:"center-top"})})),console.log(i.btnSubmit);
//# sourceMappingURL=03-promises.eb77f0ad.js.map