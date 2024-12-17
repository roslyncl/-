function countDigits(n) {
    if (n < 10) {
        return 1;
    } else {
        return 1 + countDigits(Math.floor(n / 10));
    }
}

function findDigitCount() {
    const num = parseInt(document.getElementById('num').value);
    if (isNaN(num) || num <= 0) {
        alert("Пожалуйста, введите натуральное число.");
        return;
    }
    const result = countDigits(num); 
    document.getElementById('result').textContent = result; 
}
function runTest(num) {
    document.getElementById('num').value = num;
    findDigitCount();
}
function openCode(){
    window.open("https://github.com/roslyncl/-/blob/main/lab_3_2.html", "_blank");
}
