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

  let lastSecond = -1;
  let lastDateKey = "";

  function renderClock() {
    const now = new Date();
    const seconds = now.getSeconds() + now.getMilliseconds() / 1000;
    const minutes = now.getMinutes() + seconds / 60;
    const hours = (now.getHours() % 12) + minutes / 60;

    secondHand.style.transform = `rotate(${seconds * 6}deg)`;
    minuteHand.style.transform = `rotate(${minutes * 6}deg)`;
    hourHand.style.transform = `rotate(${hours * 30}deg)`;

    const wholeSecond = now.getSeconds();
    if (digitalTime && wholeSecond !== lastSecond) {
      digitalTime.textContent = timeFormatter.format(now);
      lastSecond = wholeSecond;
    }

    if (digitalDate) {
      const dateKey = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;
      if (dateKey !== lastDateKey) {
        digitalDate.textContent = dateFormatter.format(now);
        lastDateKey = dateKey;
      }
    }

    if (digitalDate && !digitalDate.textContent.trim()) {
      digitalDate.textContent = dateFormatter.format(now);
    }

    requestAnimationFrame(renderClock);
  }

  renderClock();
}
