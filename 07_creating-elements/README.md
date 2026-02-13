# Homework: Creating elements

You will find below a dataset about mountains in which each mountain is
represented by an array with the mountain's name, its height and its
country.

```ts
const mountains = [
    ["Kilimanjaro", 5895, "Tanzania"],
    ["Everest", 8848, "Nepal"],
    ["Mount Fuji", 3776, "Japan"],
    ["Vaalserberg", 323, "Netherlands"],
    ["Denali", 6168, "United States"],
    ["Popocatepetl", 5465, "Mexico"],
    ["Mont Blanc", 4808, "Italy/France"],
];
```

Using JavaScript, generate the DOM structure for an [HTML table] that
enumerates the mountains, then show the resulting table in the document
by appending it to `<body>`. Once you have this working, right-align
cells that contain numeric values by setting their `style.textAlign`
property to `"right"`.

[HTML table]: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics
