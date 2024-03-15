var son = parseInt(prompt("Iltimos, bir son kiriting:"));

if (son % 3 === 0 && son % 5 === 0) {
    console.log("Fizz-Buzz");
} else if (son % 3 === 0) {
    console.log("Fizz");
} else if (son % 5 === 0) {
    console.log("Buzz");
} else {
    console.log(son);
}
