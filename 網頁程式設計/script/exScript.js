let score = prompt('請輸入您的分數!', '0');
if (score >= 60 && score <= 80) {
    document.write('通過!');
}
else if (score > 80 && score <= 100) {
    document.write('GOOD!');
}
else if (score >= 0 && score < 60) {
    document.write('不及格!');
}
else {
    document.write('資料錯誤!');
}
/*
這是註解
switch case
*/
switch (score) {
    case '100':
        document.write('滿分!!!');
        break;
    case '60':
        document.write('剛剛好!!!');
        break;
    default:
        document.write('再努力!!!');
}
function f1() {
    document.getElementById('p1').innerHTML = "Hello HTML+CSS";
}