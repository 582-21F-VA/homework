import { expect } from "bun:test";

/** Return the resell value for the given price and age. */
function resellValue(price: number, age: number): number {
    if (age < 3) return price * 0.8;
    else if (age >= 3 && age <= 10) return price * 0.7;
    else if (age > 10) return price * 0.5;
    else return 0;
}

expect(resellValue(100, 1)).toBe(80);
expect(resellValue(100, 11)).toBe(50);
expect(resellValue(100, 5)).toBe(70);

/** Validate the given password. */
function validatePassword(password: string): string {
    const minLenght = 8;
    const isLongEnough = password.length >= minLenght;
    const hasSpecialChar = password.includes("!") || password.includes("?");

    if (!isLongEnough) return "Must contain at least 8 characters.";
    else if (!hasSpecialChar) return "Must contain a ! or ?";
    else return "";
}

expect(validatePassword("abcdefgh?")).toBe("");
expect(validatePassword("abc?")).toBe("Must contain at least 8 characters.");
expect(validatePassword("abcdefgh")).toBe("Must contain a ! or ?");
