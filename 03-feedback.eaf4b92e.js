var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("kEUo3");const a=document.querySelector('input, [name="email"]'),l=document.querySelector('textarea, [name="message"]'),s=document.querySelector("form.feedback-form");let i="",c="";const u={email:i,message:c},d=function(){const e=localStorage.getItem("feedback-form-state");return e?JSON.parse(e):u},f=d();a.setAttribute("value",f.email),l.insertAdjacentText("beforeend",f.message);const m=function(e,t){const n=d();"message"===t?n.message=e:n.email=e,localStorage.setItem("feedback-form-state",JSON.stringify(n))};a.addEventListener("input",(0,r.throttle)((function(e){i=e.target.value,m(i,"email")}),1500)),l.addEventListener("input",(0,r.throttle)((function(e){c=e.target.value,m(c,"message")}),1500)),s.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),localStorage.clear(),s.reset()}));
//# sourceMappingURL=03-feedback.eaf4b92e.js.map
