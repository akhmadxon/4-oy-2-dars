var son = parseInt(prompt("Iltimos, bir son kiriting:"));

if (son % 4 === 0 || son % 6 === 0) {
    console.log(son + " soni 4 ga yoki 6 ga bo'linadi.");
} else {
    console.log(son + " soni 4 ga yoki 6 ga bo'linmaydi.");
}
