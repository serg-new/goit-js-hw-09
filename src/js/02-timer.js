import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";


const dateTimePicker = new Date();
const startButton = document.querySelector('[data-start]');

let selectedDates = null;
let intervalId = null;

startButton.setAttribute('disabled', 'true');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selected) {
    selectedDates = selected;
    if (dateTimePicker.getTime() >= selectedDates[0].getTime()) {
      window.alert('Please choose a date in the future');
    } else {
      startButton.removeAttribute('disabled');
    }
  },
};

flatpickr('input#datetime-picker', options);

startButton.addEventListener('click', updateTime);



function addZero(value) {

  return value.toString().padStart(2, 0);
}

function updateTime() {
  startButton.setAttribute('disabled', 'true');
  const intervalId = setInterval(() => {
      const ms = selectedDates[0].getTime() - new Date().getTime();
      
    if (Math.floor(ms / 1000) === 0) {
      clearInterval(intervalId);
    }
    convertMs(ms);
    updateTimer(convertMs(ms));
  }, 1000);
}


function updateTimer({ days, hours, minutes, seconds }) {
  const elements = {
    days: document.querySelector('span[data-days]'),
    hours: document.querySelector('span[data-hours]'),
    minutes: document.querySelector('span[data-minutes]'),
    seconds: document.querySelector('span[data-seconds]'),
  };
  elements.days.textContent = addZero(days);
  elements.hours.textContent = addZero(hours);
  elements.minutes.textContent = addZero(minutes);
  elements.seconds.textContent = addZero(seconds);
}

function convertMs(ms) {
  
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
 
  const hours = Math.floor((ms % day) / hour);
 
  const minutes = Math.floor(((ms % day) % hour) / minute);

  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
