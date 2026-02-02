import { expect } from "bun:test";

/** Return the day of the week for the given Date. */
function weekday(date: Date): string {
    if (date.getDay() === 0) return "Sunday";
    else if (date.getDay() === 1) return "Monday";
    else if (date.getDay() === 2) return "Tuesday";
    else if (date.getDay() === 3) return "Wednesday";
    else if (date.getDay() === 4) return "Thursday";
    else if (date.getDay() === 5) return "Friday";
    else if (date.getDay() === 6) return "Saturday";
    else return "Impossible date";
}

expect(weekday(new Date("2026/02/02"))).toBe("Monday");
expect(weekday(new Date("2026/02/03"))).toBe("Tuesday");
expect(weekday(new Date("my birthday"))).toBe("Impossible date");
