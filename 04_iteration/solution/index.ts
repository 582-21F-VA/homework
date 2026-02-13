import { expect } from "bun:test";

/** Uppercase all the strings in the given array. */
function toUppercase(strings: Array<string>): Array<string> {
    const results = [];
    for (const s of strings) results.push(s.toUpperCase());
    return results;

    // alternative:
    // return results.map(s => s.toUpperCase());
}

expect(toUppercase(["a", "b"])).toEqual(["A", "B"]);
expect(toUppercase(["c"])).toEqual(["C"]);

/** Return the number of vowels in the given word. */
function vowelCount(word: string): number {
    const vowels = ["a", "e", "o", "i", "u", "y"];
    const letters = word.split("");

    let count = 0;
    letters.forEach(letter => {
        if (vowels.includes(letter)) count++;
    });

    return count;

    // alternative:
    // const vowelsInWord = letters.filter(letter => vowels.includes(letter));
    // return vowelsInWord.length
}

expect(vowelCount("abc")).toBe(1);
expect(vowelCount("yellow")).toBe(3);

/** Determine if all numbers from the first array are in the second. */
function isSuperset(arr1: Array<number>, arr2: Array<number>): boolean {
    for (const number of arr1) {
        const isIncluded = arr2.includes(number);
        if (!isIncluded) return false;
    }
    return true;

    // alternative:
    // return arr1.every(number => arr2.includes(number));
}

expect(isSuperset([1, 2], [1, 2, 3])).toBe(true);
expect(isSuperset([1, 2, 3], [1, 2])).toBe(false);
expect(isSuperset([0, 1], [1, 2])).toBe(false);

/** Return the average of the given numbers. */
function avg(numbers: Array<number>): number {
    let sum = 0;
    for (const number of numbers) sum += number;

    // alternative:
    // const sum = numbers.reduce((acc, number) => acc + number, 0)

    return sum / numbers.length;
}

expect(avg([1, 2, 3])).toBe(2);
expect(avg([1, 2])).toBe(1.5);
expect(avg([1.75, 1.25])).toBe(1.5);

/** Transform the given strings into an HTML ordered list. */
function orderedList(strings: Array<string>): string {
    let result = "<ol>";
    for (const s of strings) result += "<li>" + s + "</li>";
    result += "</ol>";
    return result;

    // alternative:
    // const lis = strings.map(s => "<li>" + s + "</li>");
    // return "<ol>" + lis.join("") + "</ol>";
}

expect(orderedList(["a", "b"])).toBe("<ol><li>a</li><li>b</li></ol>");
expect(orderedList([])).toBe("<ol></ol>");

/** Reverse the order of the characters in the given string. */
function reverse(str: string): string {
    let result = "";
    for (const char of str) result = char + result;
    return result;

    // alternative:
    // const characters = str.split("");
    // characters.reverse();
    // return characters.join("");
}

expect(reverse("abc")).toBe("cba");
expect(reverse("hello")).toBe("olleh");
