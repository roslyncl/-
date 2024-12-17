// Функция для вычисления матрицы [cij]
function calculateMatrix() {
    // Получаем значения из полей ввода
    const n = parseInt(document.getElementById("n").value, 10);
    const aInput = document.getElementById("a").value;
    const bInput = document.getElementById("b").value;

    // Преобразуем входные строки в массивы чисел
    const a = aInput.split(",").map(Number);
    const b = bInput.split(",").map(Number);

    // Проверяем корректность введенных данных
    if (a.length !== n || b.length !== n || isNaN(n) || n < 1) {
        alert("Ошибка: введите корректные данные. Убедитесь, что n соответствует количеству элементов в a и b.");
        return;
    }

    // Создаем матрицу [cij]
    const matrix = [];
    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j < n; j++) {
            const cij = (a[i] + b[j]) / Math.sqrt(Math.abs(a[i]) + Math.abs(b[j]));
            row.push(cij.toFixed(4)); // Округляем до 4 знаков после запятой
        }
        matrix.push(row);
    }

    // Выводим результат в виде таблицы
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "<h3>Матрица [cij]:</h3>";
    const table = document.createElement("table");
    const headerRow = document.createElement("tr");
    headerRow.innerHTML = "<th></th>" + b.map((_, j) => `<th>b${j + 1}</th>`).join("");
    table.appendChild(headerRow);

    matrix.forEach((row, i) => {
        const rowElement = document.createElement("tr");
        rowElement.innerHTML = `<th>a${i + 1}</th>` + row.map(cell => `<td>${cell}</td>`).join("");
        table.appendChild(rowElement);
    });

    resultDiv.appendChild(table);
}

// Функция для запуска тестов
function runTest(n, a, b) {
    // Устанавливаем значения в поля ввода
    document.getElementById("n").value = n;
    document.getElementById("a").value = a;
    document.getElementById("b").value = b;

    // Запускаем вычисление
    calculateMatrix();
}

// Функция для открытия кода
function openCode() {
    window.open("https://github.com/roslyncl/-/blob/main/lab_5_2.html", "_blank");
}
