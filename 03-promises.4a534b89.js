function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var l=r("7Y9D8");const u={form:document.querySelector(".form"),submit:document.querySelector(".submit")};u.form.addEventListener("submit",(function(e){e.preventDefault();const t=e.currentTarget.elements.delay.value,n=e.currentTarget.elements.step.value,o=e.currentTarget.elements.amount.value;u.submit.setAttribute("disabled","disabled");let r=0;setTimeout((()=>{r+=1,console.log(r),i.then(s(o,t,n)),setInterval((()=>{o>r&&(r+=1,console.log(r),i.then(s(o,t,n)).finally(u.submit.removeAttribute("disabled","disabled")))}),n)}),t)}));const i=new Promise(((e,t)=>{}));function s(t,n,o){Math.random()>.3?(console.log(n),e(l).Notify.success("True")):e(l).Notify.failure("False")}
//# sourceMappingURL=03-promises.4a534b89.js.map
