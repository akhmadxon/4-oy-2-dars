var mablag = parseInt(prompt("Iltimos, mehmonhonada olinadigan mablag'ni kiriting:"));

if (mablag >= 1000) {
    console.log("Siz " + mablag + " mablag'ini berib, lux mehmonhona turini tanladingiz.");
} else if (mablag >= 500) {
    console.log("Siz " + mablag + " mablag'ini berib, yarim lux mehmonhona turini tanladingiz.");
} else if (mablag >= 200) {
    console.log("Siz " + mablag + " mablag'ini berib, odiy mehmonhona turini tanladingiz.");
} else {
    console.log("Kechirasiz, " + mablag + " mablag'ini berib, mehmonhona joyi mavjud emas.");
}
