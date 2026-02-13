/** Set the text content of parentEl to the current time. */
function showTime(now: Date, parentEl: HTMLElement): void {
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const currentTime = `${hours}:${minutes}:${seconds}`;
    parentEl.textContent = currentTime;
}

/** Set dark class if now is during the night. */
function setDarkmode(now: Date, targetEl: HTMLElement): void {
    const hours = now.getHours();
    if (hours >= 18 || hours < 6) {
        targetEl.classList.add("dark");
    } else {
        targetEl.classList.remove("dark");
    }
}

function main(): void {
    const timeEl = document.querySelector("time");
    if (timeEl === null) return;
    setInterval(() => {
        const now = new Date();
        showTime(now, timeEl);
        setDarkmode(now, document.body);
    }, 1000);
}

main();
