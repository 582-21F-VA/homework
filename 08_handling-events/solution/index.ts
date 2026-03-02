/** Create one tab per section. */
function createTabs(sections: Array<HTMLElement>): Array<HTMLElement> {
    return sections.map((section, i) => {
        const label = document.createElement("label");
        const tabName = section.getAttribute("tab-title") ?? String(i + 1);
        label.textContent = tabName;
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "tab";
        label.append(input);

        label.addEventListener(
            "click",
            () => showOneSection(sections, section),
        );

        return label;
    });
}

/** Show one section and hide the others. */
function showOneSection(
    sections: Array<HTMLElement>,
    sectionToShow: HTMLElement,
): void {
    for (const section of sections) {
        if (section === sectionToShow) section.style.display = "block";
        else section.style.display = "none";
    }
}

/** Transform sections in the container into a tabbed interface. */
function makeTabInterface(container: HTMLElement): void {
    const sections = Array.from(container.querySelectorAll("section"));
    const tabs = createTabs(sections);
    container.prepend(...tabs);
    const firstSection = sections[0];
    if (!firstSection) return;
    showOneSection(sections, firstSection);
}

function main(): void {
    const div = document.querySelector("div.tabs");
    if (!(div instanceof HTMLElement)) return;
    makeTabInterface(div);
}

main();
