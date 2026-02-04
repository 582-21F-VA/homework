import { expect } from "bun:test";

/** Return the greeting for the given language. */
function greet(lang: string): string {
    const greetings = new Map([
        ["English", "hello"],
        ["Spanish", "hola"],
    ]);
    const greeting = greetings.get(lang);
    if (greeting === undefined) return "bonjour";
    else return greeting;
}

expect(greet("English")).toBe("hello");
expect(greet("Spanish")).toBe("hola");
expect(greet("Boo")).toBe("bonjour");

/** Return the number of repeated characters in the given string. */
function repeatedCharCount(str: string) {
    const chars = str.split("");
    const uniqueChars = new Set(chars);
    return chars.length - uniqueChars.size;
}

expect(repeatedCharCount("aab")).toBe(1);
expect(repeatedCharCount("abbb")).toBe(2);
expect(repeatedCharCount("ab")).toBe(0);
expect(repeatedCharCount("banana")).toBe(3);

/** Add the given event to the provided calendar. */
function addEvent(
    calendar: Array<{ date: Date; name: string }>,
    event: { date: Date; name: string },
): Array<{ date: Date; name: string }> {
    return calendar.concat([event]);
}

expect(
    addEvent([], { date: new Date("2026/02/09"), name: "Birthday" }),
).toEqual(
    [{ date: new Date("2026/02/09"), name: "Birthday" }],
);
expect(
    addEvent(
        [{ date: new Date("2026/02/09"), name: "Birthday" }],
        { date: new Date("2026/02/10"), name: "Dentist" },
    ),
).toEqual(
    [
        { date: new Date("2026/02/09"), name: "Birthday" },
        { date: new Date("2026/02/10"), name: "Dentist" },
    ],
);
