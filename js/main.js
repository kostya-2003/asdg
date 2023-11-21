const timer = document.getElementById("timer");
console.log(timer);

const countDown = new Date("dec 23, 2023 0:0:0").getTime();

const update = setInterval(function () {
  const now = new Date().getTime();

  let diff = countDown - now;

  //now we are calculating time in days, hrs, minutes, and seconds.
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hrs = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  timer.innerHTML = `
    <div class="item">
        <h2>${days}</h2>
        <span>D</span>
    </div>
    <div class="item">
        <h2>:</h2>
    </div>
    <div class="item">
        <h2>${hrs}</h2>
        <span>H</span>
    </div>
    <div class="item">
        <h2>:</h2>
    </div>
    <div class="item">
        <h2>${minutes}</h2>
        <span>M</span>
    </div>
    <div class="item">
        <h2>:</h2>
    </div>
    <div class="item">
        <h2>${seconds}</h2>
        <span>S</span>
    </div>
   `;

  if (days < 0 && hrs < 0 && minutes < 0 && seconds < 0) {
    clearInterval(update);
    
    timer.innerHTML = `
    <div class="item">
        <h2>0</h2>
        <span>D</span>
    </div>
    <div class="item">
        <h2>0</h2>
        <span>H</span>
    </div>
    <div class="item">
        <h2>0</h2>
        <span>M</span>
    </div>
    <div class="item">
        <h2>0</h2>
        <span>S</span>
    </div>
   `;
  }
}, 1000);
