// Функция для проверки массива
function checkArray() {
    // Получаем строку с числовыми значениями
    const input = document.getElementById('arrayInput').value;
    // Преобразуем строку в массив чисел
    const arr = input.split(',').map(num => parseFloat(num.trim()));

    // Проверка на правильность ввода
    if (arr.some(isNaN)) {
        alert("Пожалуйста, введите корректные числа.");
        return;
    }

    // Проверяем, упорядочен ли массив по убыванию
    let isDescending = true;
    let firstViolationIndex = -1;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) {
            isDescending = false;
            firstViolationIndex = i;
            break;
        }
    }

    // Если массив упорядочен по убыванию
    if (isDescending) {
        // Выводим массив в обратном порядке
        document.getElementById('result').textContent = arr.reverse().join(', ');
    } else {
        // Выводим индекс первого элемента, нарушающего порядок
        document.getElementById('result').textContent = `Нарушение на индексе: ${firstViolationIndex}`;
    }

}
// Функция для запуска тестов
function runTest(testInput) {
    // Устанавливаем значения в поле ввода
    document.getElementById('arrayInput').value = testInput;

    // Запускаем вычисление
    checkArray();
}
function openCode(){
    window.open("https://github.com/roslyncl/-/blob/main/lab_5_1.html", "_blank");
}

