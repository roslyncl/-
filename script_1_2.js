function checkInterval() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let num3 = parseFloat(document.getElementById("num3").value);
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("Пожалуйста, введите корректные числа.");
        return;
    }
    let validNumbers = [];
    if (num1 > 1 && num1 < 3) validNumbers.push(num1);
    if (num2 > 1 && num2 < 3) validNumbers.push(num2);
    if (num3 > 1 && num3 < 3) validNumbers.push(num3);
    let output = validNumbers.length > 0 ?
        "Числа, принадлежащие интервалу (1, 3): " + validNumbers.join(", ") :
        "Нет чисел, принадлежащих интервалу (1, 3).";

    document.getElementById("output").innerText = output;
}

function runTest(num1, num2, num3) {
    document.getElementById("num1").value = num1;
    document.getElementById("num2").value = num2;
    document.getElementById("num3").value = num3;
    checkInterval();
}
function openCode(){
    window.open("https://github.com/roslyncl/-/blob/main/lab_1_2.html", "_blank");
}
