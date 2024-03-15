var balingiz = parseFloat(prompt("Iltimos, o'quvchi balingizni kiriting (%):"));

if (balingiz >= 70) {
    console.log("Sizning o'qishga kirgan mavqeingiz: Budjet");
} else if (balingiz >= 50) {
    console.log("Sizning o'qishga kirgan mavqeingiz: Contract");
} else {
    console.log("Sizning o'qishga kirgan mavqeingiz: Yeqildi");
}
