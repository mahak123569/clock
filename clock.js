const clock = document.querySelector(".clock");
const hands = clock?.querySelectorAll(".hand");

if (clock && hands?.length === 3) {
  const [hourHand, minuteHand, secondHand] = hands;

  hourHand.style.setProperty("--h", "90px");
  minuteHand.style.setProperty("--h", "120px");
  secondHand.style.setProperty("--h", "145px");

  hourHand.querySelector("i").style.height = "90px";
  minuteHand.querySelector("i").style.height = "120px";
  secondHand.querySelector("i").style.height = "145px";

  function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds() + now.getMilliseconds() / 1000;
    const minutes = now.getMinutes() + seconds / 60;
    const hours = (now.getHours() % 12) + minutes / 60;

    const secDeg = seconds * 6;
    const minDeg = minutes * 6;
    const hourDeg = hours * 30;

    secondHand.style.transform = `rotate(${secDeg}deg)`;
    minuteHand.style.transform = `rotate(${minDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
  }

  updateClock();
  setInterval(updateClock, 1000);
}
