!function(){var t={stopBtn:document.querySelector("button[data-stop]"),startBtn:document.querySelector("button[data-start]")},n=null;t.startBtn.addEventListener("click",(function(){n=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)),t.startBtn.disabled=!0,t.stopBtn.disabled=!1}),1e3)})),t.stopBtn.addEventListener("click",(function(){clearInterval(n),t.stopBtn.disabled=!0,t.startBtn.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.3fa2ec75.js.map