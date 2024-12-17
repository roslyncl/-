function calculate() {
    let catet1 = parseFloat(document.getElementById("catet1").value);
    let catet2 = parseFloat(document.getElementById("catet2").value);
    if (isNaN(catet1) || isNaN(catet2) || catet1 <= 0 || catet2 <= 0) {
        alert("Пожалуйста, введите положительные значения для обоих катетов.");
        return;
    }
    let hypotenuse = Math.sqrt(catet1 * catet1 + catet2 * catet2);
    let area = (catet1 * catet2) / 2;
    document.getElementById("hypotenuse").innerText = hypotenuse.toFixed(2);
    document.getElementById("area").innerText = area.toFixed(2);
}
function runTest(catet1, catet2) {
    document.getElementById("catet1").value = catet1;
    document.getElementById("catet2").value = catet2;
    calculate();
}
function openCode(){
    window.open("https://github.com/roslyncl/-/blob/main/lab_1_1.html", "_blank");
}
