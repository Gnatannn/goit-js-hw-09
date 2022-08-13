// Описан в документации
import flatpickr from 'flatpickr';
// import Notiflix from 'notiflix';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  input: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  timer: document.querySelector('.timer'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

refs.startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    refs.startBtn.disabled = true;
    // console.log(selectedDates[0]);
    const dateNow = new Date();
    const dateStart = selectedDates[0];
    // console.log(dateNow.getTime());
    // console.log(dateStart.getTime());

    if (dateNow.getTime() < dateStart.getTime()) {
      refs.startBtn.disabled = false;
    } else {
      window.alert('Please choose a date in the future');
    }
  },
};

const calendar = flatpickr(refs.input, options);

refs.startBtn.addEventListener('click', onClickStartTimer);

function onClickStartTimer() {
  refs.startBtn.disabled = true;
  const userDate = calendar.latestSelectedDateObj;

  setInterval(() => {
    const dateNow = new Date();
    const deltaTime = userDate - dateNow;
    const time = convertMs(deltaTime);
    updateTimerMarkup(time);

    console.log(convertMs(deltaTime));
    // console.log(userDate);
    // console.log(dateNow);
    // console.log(userDate - dateNow);
  }, 1000);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function updateTimerMarkup({ days, hours, minutes, seconds }) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.minutes.textContent = `${minutes}`;
  refs.seconds.textContent = `${seconds}`;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
