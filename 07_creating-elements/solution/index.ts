/** Render the given mountains into an HTML table. */
function toTable(mountains: Array<Array<string | number>>): HTMLTableElement {
    const table = document.createElement("table");

    const trs = mountains.map(toRow);
    table.append(...trs);

    // alternative:
    // for (const mountain of mountains) {
    //     const tr = toRow(mountain);
    //     table.append(tr);
    // }

    return table;
}

/** Render the given mountain into an HTML table row. */
function toRow(mountain: Array<string | number>): HTMLTableRowElement {
    const tr = document.createElement("tr");
    const tds = mountain.map(toCell);
    tr.append(...tds);
    return tr;
}

/** Render the given datum into an HTML table cell. */
function toCell(datum: string | number): HTMLTableCellElement {
    const td = document.createElement("td");
    td.textContent = String(datum);
    if (typeof datum === "number") td.style.textAlign = "right";
    return td;
}

function main(): void {
    const mountains = [
        ["Kilimanjaro", 5895, "Tanzania"],
        ["Everest", 8848, "Nepal"],
        ["Mount Fuji", 3776, "Japan"],
        ["Vaalserberg", 323, "Netherlands"],
        ["Denali", 6168, "United States"],
        ["Popocatepetl", 5465, "Mexico"],
        ["Mont Blanc", 4808, "Italy/France"],
    ];
    const table = toTable(mountains);
    document.body.append(table);
}

main();
