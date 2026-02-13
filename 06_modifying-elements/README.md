# Homework: Modifying elements

When called without arguments, the `Date` constructor function returns a
`Date` object that represents the current date. The `getSeconds`,
`getMinutes` and `getHours` methods can then be used to get the seconds,
minutes and hours of the current time.

Let's say the following code is executed at 2:40 PM sharp:

```ts
const now = new Date();
console.log(now.getHours()); // => 14
console.log(now.getMinutes()); // => 40
console.log(now.getSeconds()); // => 00
```

For this assignment, your task is to create a website that displays the
current time when it is first rendered by the browser. If it is between
18:00 and 6:00, make it so the website's background color is black, and
the clock white.

Then, make it so the current time is updated _every second_. To do so,
use the native `setInterval` function, which repeatedly calls a given
function with a fixed time delay in milliseconds between each call.

```ts
setInterval(() => console.log("ping"), 1000);
```
