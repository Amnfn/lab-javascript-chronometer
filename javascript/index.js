const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  minUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[1];
  minDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[0];
}

function printSeconds() {
  secUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[1];
  secDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[0];
}

// ==> BONUS
function printMilliseconds() {
  milUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds())[1];
  milDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds())[0];
}

function printSplit() {
  let li = document.createElement("li");
  li.innerHTML = chronometer.split();
  splits.appendChild(li);
}

function clearSplits() {
  splits.innerHTML = '';
}

function setStopBtn() {
  btnLeft.className = 'btn stop';
  btnLeft.textContent = 'STOP';
}

function setSplitBtn() {
  btnRight.className = 'btn split';
  btnRight.textContent = 'SPLIT';
}

function setStartBtn() {
  btnLeft.className = 'btn start';
  btnLeft.textContent = 'START';
}

function setResetBtn() {
  btnRight.className = 'btn reset';
  btnRight.textContent = 'RESET';
}

/* function setTimer(getMinutes, getSeconds) {
  return console.log(setTimer);
} */

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeft.classList.contains('start')) {
    chronometer.start(printTime);
    setStopBtn();
    setSplitBtn();
  } else {(btnLeft.classList.contains('stop'))
    chronometer.stop(() => {
      clearInterval();
    });
    setStartBtn();
    setResetBtn();
  } 
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRight.classList.contains('reset')) {
    chronometer.reset();
    clearSplits();
    printTime();
  } else {
    printSplit();
  }
});
