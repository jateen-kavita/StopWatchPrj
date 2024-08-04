// Calling and assigning required variables for DOM dynamic requirement
const hours = document.querySelector(".hour-container");
const minutes = document.querySelector(".minute-container");
const second = document.querySelector(".second-container");
const startbtn = document.querySelector(".start-btn");
const pausebtn = document.querySelector(".pause-btn");
const resetbtn = document.querySelector(".reset-btn");
const slider = document.querySelector(".slider");
const togglebtn = document.querySelector(".theme-bg");


// Toggle theme

let darkMode = "darkMode";
let lightMode = "lightMode";

// Toggle Theme logic goes here

const slide = (switchbtn) => {
  switchbtn.addEventListener("click", () => {
    if (slider.classList.contains(darkMode)) {
      slider.style.transform = "translateX(25px)";
      togglebtn.style.backgroundColor = 'rgba(255, 255, 255, 0.75)'
    } else {
      slider.style.transform = "translateX(0px)";
      togglebtn.style.backgroundColor = 'rgba(17, 25, 40, 0.75)'
    }
    document.querySelectorAll('.lightMode, .darkMode').forEach(theme => {
      if (theme.classList.contains(lightMode)) {
        theme.classList.remove(lightMode);   
        theme.classList.add(darkMode);
      } else {
        theme.classList.remove(darkMode);
        theme.classList.add(lightMode);
      }
    });
  });
};
slide(togglebtn);


//stopwatch Logic
let [hrs, min, sec] = [0, 0, 0];

let timer = 0;

const stopwatch = () => {
  sec++;
  if (sec === 60) {
    sec = 0;
    min++;
    if (min === 60) {
      min = 0;
      hrs++;
    }
  }
  second.textContent = sec;
  minutes.textContent = min;
  hours.textContent = hrs;
};

// impletementing logic & making buttons work dynamically

const start = (startTime) => {
  startTime.addEventListener("click", () => {
    if (!timer) {
      timer = setInterval(stopwatch, 1000);
    }
  });
};

const pause = (pauseTime) => {
  pauseTime.addEventListener("click", () => {
    second.textContent = sec;
    minutes.textContent = min;
    hours.textContent = hrs;
    clearInterval(timer);
    timer = null;
  });
};

const reset = (resetTime) => {
  resetTime.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
    [hrs, min, sec] = [0, 0, 0];
    second.textContent = sec;
    minutes.textContent = min;
    hours.textContent = hrs;
  });
};

start(startbtn);
pause(pausebtn);
reset(resetbtn);

