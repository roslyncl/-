function findGCD() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    if (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0) {
        alert("Пожалуйста, введите два положительных числа.");
        return;
    }
    while (num2 !== 0) {
        let remainder = num1 % num2;  
        num1 = num2;
        num2 = remainder;
    }
    document.getElementById("output").innerText = "НОД: " + num1;
}
function runTest(num1, num2) {
    document.getElementById("num1").value = num1;
    document.getElementById("num2").value = num2;
    findGCD();
}
function openCode(){
    window.open("https://github.com/roslyncl/-/blob/main/lab_2_1.html", "_blank");
}
