var son = parseInt(prompt("Iltimos, ikki xonali son kiriting:"));

if (son >= 10 && son <= 99) {
    console.log("Kiritilgan son ikki xonali son.");
    var birlar = son % 10; 
    var unlar = Math.floor(son / 10); 
    var o_son = birlar * 10 + unlar; 
    console.log("O'sish tartibida joylashtirilgan son: " + o_son);
} else {
    console.log("Kiritilgan son ikki xonali son emas.");
}
