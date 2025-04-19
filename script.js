function updateClock() {
  let date = new Date();
  clock.textContent = date.toLocaleTimeString();
}

updateClock(); 
setInterval(updateClock, 1000);

