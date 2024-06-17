

// const display = document.querySelector('#time-left');
// const startBtn = 
//   document.querySelector('#start-stop-btn');
// function startTimer(duration){}
let interval



const startStudyBtn = document.getElementById('study-btn');
const startBreakBtn = document.querySelector('#break-btn');

const studyCount = document.getElementById('study-count');

const breakCount = document.getElementById('break-count');

function upTimerDisplay(minutes, seconds, interval) {
  
  const breakDisplay = document.getElementById('time-left');

  // Format seconds to always have two digits
  let formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  // Update the display
  breakDisplay.textContent = `${minutes}:${formattedSeconds}`;
  
  if (seconds === 0) {
    minutes--;
    seconds = 59
  }else{
    seconds--
  }

  if (minutes === 0 && seconds === 0) {
    clearInterval(interval);
  }

  return [minutes, seconds]
}

function addStudy() {
  clearInterval(interval)
  studyCount.textContent = parseInt(studyCount.textContent) + 1;
  let minutes = 25;
  let seconds = 0;
  interval = setInterval(() => {
    let arr = upTimerDisplay(minutes, seconds);
    minutes = arr[0];
    seconds = arr[1];
  }, 1000);

}

function addBreak() {
  clearInterval(interval)
  breakCount.textContent = parseInt(breakCount.textContent) + 1;
  let minutes = 5;
  let seconds = 0;
  interval = setInterval(() => {
    let arr = upTimerDisplay(minutes, seconds);
    minutes = arr[0];
    seconds = arr[1];
    console.log(minutes, seconds)
  }, 1000);

}
startStudyBtn.addEventListener('click', addStudy)

startBreakBtn.addEventListener('click', addBreak)