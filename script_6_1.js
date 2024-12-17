// Функция для проверки наличия однофамильцев
function checkForSameSurnames() {
    const input = document.getElementById("studentsInput").value;
    let students;

    try {
        students = JSON.parse(input);
    } catch (e) {
        alert("Ошибка: введите корректный JSON.");
        return;
    }

    if (!Array.isArray(students) || students.length === 0) {
        alert("Ошибка: введите массив объектов с данными об учениках.");
        return;
    }

    const surnames = {};
    let hasSameSurnames = false;

    students.forEach(student => {
        const { surname } = student;
        if (surname in surnames) {
            hasSameSurnames = true;
        } else {
            surnames[surname] = true;
        }
    });

    document.getElementById("result").textContent = hasSameSurnames ? "Однофамильцы есть" : "Однофамильцев нет";
}

// Функция для запуска тестов
function runTest(testNumber) {
    let testInput, expectedResult;

    if (testNumber === 1) {
        testInput = '[{"name": "Иван", "surname": "Иванов", "class": "5А"}, {"name": "Петр", "surname": "Петров", "class": "6Б"}, {"name": "Иван", "surname": "Иванов", "class": "7В"}]';
        expectedResult = "Однофамильцы есть";
    } else if (testNumber === 2) {
        testInput = '[{"name": "Иван", "surname": "Иванов", "class": "5А"}, {"name": "Петр", "surname": "Петров", "class": "6Б"}]';
        expectedResult = "Однофамильцев нет";
    } else if (testNumber === 3) {
        testInput = '[]';
        expectedResult = "Однофамильцев нет";
    }

    document.getElementById("studentsInput").value = testInput;
    checkForSameSurnames();

    const actualResult = document.getElementById("result").textContent;
    const testResult = actualResult === expectedResult ? "Успешно" : "Ошибка";

    const testResultDiv = document.createElement("div");
    testResultDiv.innerHTML = `<b>Тест ${testNumber}:</b> ${testResult}`;
}
function openCode() {
    window.open("https://github.com/roslyncl/-/blob/main/lab_6_1.html", "_blank");
}
