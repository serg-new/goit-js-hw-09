const t={stopBtn:document.querySelector("button[data-stop]"),startBtn:document.querySelector("button[data-start]")};let e=null;t.startBtn.addEventListener("click",(()=>{e=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`,t.startBtn.disabled=!0,t.stopBtn.disabled=!1}),1e3)})),t.stopBtn.addEventListener("click",(()=>{clearInterval(e),t.stopBtn.disabled=!0,t.startBtn.disabled=!1}));
//# sourceMappingURL=01-color-switcher.fcbc8a4b.js.map
