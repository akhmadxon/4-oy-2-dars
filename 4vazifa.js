var son1 = parseFloat(prompt("Iltimos, birinchi sonni kiriting:"));
var son2 = parseFloat(prompt("Iltimos, ikkinchi sonni kiriting:"));

if (son1 > son2) {
    console.log(son1 + " katta son.");
} else if (son2 > son1) {
    console.log(son2 + " katta son.");
} else {
    console.log("Kiritilgan sonlar o'zaro teng.");
}
