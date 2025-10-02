let isSpinning = false; 

function toggleWheel() {
  const wheel = document.getElementById("wheel");
  const status = document.getElementById("status");
  const btn = document.getElementById("toggleBtn");

  if (isSpinning) {
    wheel.classList.remove("spin");
    status.innerText = "Wheel is Stopped";
    btn.innerText = "Start";
    btn.style.backgroundColor = "green";
    isSpinning = false;
  } else {
    wheel.classList.add("spin");
    status.innerText = "Wheel is Spinning...";
    btn.innerText = "Stop";
    btn.style.backgroundColor = "red";
    isSpinning = true;
  }
}