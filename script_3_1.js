
function calculateSumOfSquares() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let num3 = document.getElementById('num3') ? parseFloat(document.getElementById('num3').value) : null;
    if (isNaN(num1)) {
        alert("Пожалуйста, введите хотя бы одно число.");
        return;
    }

    let sumOfSquares = 0;

    sumOfSquares += num1 * num1;

    if (!isNaN(num2)) {
        sumOfSquares += num2 * num2;
    }

    if (num3 !== null && !isNaN(num3)) {
        sumOfSquares += num3 * num3;
    }

    document.getElementById('result').textContent = sumOfSquares;
}

function runTest(num1, num2 = null, num3 = null) {
    document.getElementById('num1').value = num1;
    document.getElementById('num2').value = num2 || '';
    document.getElementById('num3').value = num3 || '';
    calculateSumOfSquares();
}
function openCode(){
    window.open("https://github.com/roslyncl/-/blob/main/lab_3_1.html", "_blank");
}


