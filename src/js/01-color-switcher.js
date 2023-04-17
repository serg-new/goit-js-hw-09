
const refs = {
  stopBtn: document.querySelector("button[data-stop]"),
  startBtn: document.querySelector("button[data-start]"),
};
let timerId = null;

refs.startBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
  }, 1000);
});
 
 refs.stopBtn.addEventListener("click", () =>{
  clearInterval(timerId);
  refs.stopBtn.disabled = true;
  refs.startBtn.disabled = false;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
