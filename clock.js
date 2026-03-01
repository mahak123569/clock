const clock = document.querySelector(".clock");
const hourHand = clock?.querySelector(".hand-hour");
const minuteHand = clock?.querySelector(".hand-minute");
const secondHand = clock?.querySelector(".hand-second");
const digitalTime = document.querySelector("[data-digital-time]");
const digitalDate = document.querySelector("[data-digital-date]");

if (clock && hourHand && minuteHand && secondHand) {
  const timeFormatter = new Intl.DateTimeFormat([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  });

  const dateFormatter = new Intl.DateTimeFormat([], {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  function renderClock() {
    const now = new Date();
    const seconds = now.getSeconds() + now.getMilliseconds() / 1000;
    const minutes = now.getMinutes() + seconds / 60;
    const hours = (now.getHours() % 12) + minutes / 60;

    secondHand.style.transform = `rotate(${seconds * 6}deg)`;
    minuteHand.style.transform = `rotate(${minutes * 6}deg)`;
    hourHand.style.transform = `rotate(${hours * 30}deg)`;

    if (digitalTime && digitalDate) {
      digitalTime.textContent = timeFormatter.format(now);
      digitalDate.textContent = dateFormatter.format(now);
    }

    requestAnimationFrame(renderClock);
  }

  renderClock();
}
