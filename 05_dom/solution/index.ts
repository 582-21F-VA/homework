/**
 * Return the node matching the given language.
 *
 * @example
 * findNode("JavaScript") // => <td>JavaScript</td>
 * findNode("Bob") // => null
 */
function findNode(language: string): HTMLTableCellElement | null {
    const tds = Array.from(document.querySelectorAll("td"));
    return tds.find((td) => td.textContent === language) ?? null;

    // alternative:
    //
    // for (const td of tds) {
    //     if (td.textContent === language) return td;
    // }
    // return null;
}

/**
 * Determine if the given languages are in the same row.
 *
 * @example
 * areInSameRow(["Python", "JavaScript"]) // => true
 * areInSameRow(["Python", "Rust"]) // => false
 * areInSameRow(["Python"]) // => true
 * areInSameRow(["Bob"]) // => false
 */
function areInSameRow(languages: Array<string>): boolean {
    const tds = languages.map((lang) => findNode(lang));
    if (tds.includes(null)) return false;
    const parents = tds.map((td) => td?.parentElement);
    const firstParent = parents[0];
    return parents.every((parent) => parent === firstParent);
}
