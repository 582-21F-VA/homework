# DOM

You will find below an HTML table with the names of programming
languages. Copy it in the "index.html" file of your project. Then,
implement the following functions:

- A `findNode` function that takes the name of a programming language,
  and returns a reference to the table cell element in which the
  language can be found. If the table does not contain the given name,
  your function should return `null`. You can use the [textContent]
  property of a node to get the text content of the node and its
  descendants.

- A `areInSameRow` function that takes a list of names, and returns
  `true` if the names are all in the same row.

[textContent]: https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent

```html
<table border="1">
    <tr>
        <td>Python</td>
        <td>JavaScript</td>
        <td>Java</td>
        <td>C++</td>
        <td>Ruby</td>
    </tr>
    <tr>
        <td>Go</td>
        <td>Rust</td>
        <td>TypeScript</td>
        <td>Swift</td>
        <td>Kotlin</td>
    </tr>
    <tr>
        <td>PHP</td>
        <td>Scala</td>
        <td>Scheme</td>
        <td>R</td>
        <td>Dart</td>
    </tr>
    <tr>
        <td>C#</td>
        <td>Lua</td>
        <td>Perl</td>
        <td>COBOL</td>
        <td>Haskell</td>
    </tr>
    <tr>
        <td>SQL</td>
        <td>Matlab</td>
        <td>OCaml</td>
        <td>Erlang</td>
        <td>Clojure</td>
    </tr>
</table>
```
