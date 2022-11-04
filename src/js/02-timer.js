import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

let getEl = selector => document.querySelector(selector);
const inputRef = getEl('#datetime-picker');
const daysRef = getEl('span[data-days]');
const hoursRef = getEl('span[data-hours]');
const minutesRef = getEl('span[data-minutes]');
const secondsRef = getEl('span[data-seconds]');
const btnStartRef = getEl('button[data-start]')

btnStartRef.setAttribute('disabled', true);

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] <= new Date()) {
            window.alert("Please choose a date in the future")
            return
        };

        let endTime = selectedDates[0];
        btnStartRef.removeAttribute('disabled');
        
        function getTimeLeft() {
            if (endTime > new Date()) {
                return endTime - new Date();
            }
            return 0; 
        };
             
        btnStartRef.addEventListener('click', () => {
            btnStartRef.setAttribute('disabled', true);
            inputRef.setAttribute('disabled', true);
            showTimer(getTimeLeft());
            intervalId = setInterval(() => {
                if (getTimeLeft() === 0) {
                    return
                }
                showTimer(getTimeLeft());  
            }, 1000); 
        }) 
    },
};

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function showTimer(time) {
    const { days, hours, minutes, seconds } = convertMs(time);
    daysRef.textContent = addLeadingZero(days);
    hoursRef.textContent = addLeadingZero(hours);
    minutesRef.textContent = addLeadingZero(minutes);
    secondsRef.textContent = addLeadingZero(seconds);
}
    
flatpickr(inputRef, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };   
}