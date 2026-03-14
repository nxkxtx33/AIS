
var groupmates = [
    {
        "name": "Василий",
        "group": "912-2",
        "age": 19,
        "marks": [4, 3, 5, 5, 4]
    },
    {
        "name": "Анна",
        "group": "912-1",
        "age": 18,
        "marks": [3, 2, 3, 4, 3]
    },
    {
        "name": "Георгий",
        "group": "912-2",
        "age": 19,
        "marks": [3, 5, 4, 3, 5]
    },
    {
        "name": "Валентина",
        "group": "912-1",
        "age": 18,
        "marks": [5, 5, 5, 4, 5]
    },
    {
        "name": "Дмитрий",
        "group": "912-2",
        "age": 20,
        "marks": [4, 4, 4, 5, 4]
    }
];

console.log("Массив groupmates создан, количество элементов:", groupmates.length);
console.log("Первый студент:", groupmates[0]);

// 2.2. Функция для форматирования строки (аналог ljust из Python)
function rpad(str, length) {
    str = String(str); // преобразование в строку
    while (str.length < length) {
        str = str + ' ';
    }
    return str;
}

// 2.3. Функция для вывода студентов в виде таблицы
function printStudents(students) {
    console.log("\n" + 
        rpad("Имя студента", 15) + " " +
        rpad("Группа", 8) + " " +
        rpad("Возраст", 8) + " " +
        rpad("Оценки", 20)
    );
    console.log("-".repeat(60));
    
    for (var i = 0; i < students.length; i++) {
        var student = students[i];
        var marksStr = student.marks.join(", ");
        
        console.log(
            rpad(student.name, 15) + " " +
            rpad(student.group, 8) + " " +
            rpad(student.age, 8) + " " +
            rpad(marksStr, 20)
        );
    }
    console.log("\n");
}

// Вывод всех студентов
console.log("\n--- Все студенты ---");
printStudents(groupmates);

// 2.4. Функция фильтрации по группе (ЗАДАНИЕ ИЗ ЛАБОРАТОРНОЙ)
function filterByGroup(students, group) {
    var result = [];
    for (var i = 0; i < students.length; i++) {
        if (students[i].group === group) {
            result.push(students[i]);
        }
    }
    return result;
}

console.log("\n--- Студенты группы 912-2 ---");
var group9122 = filterByGroup(groupmates, "912-2");
printStudents(group9122);

function calculateAverage(marks) {
    var sum = 0;
    for (var i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return sum / marks.length;
}

function filterByAverage(students, minAverage) {
    var result = [];
    for (var i = 0; i < students.length; i++) {
        var avg = calculateAverage(students[i].marks);
        if (avg >= minAverage) {
            result.push(students[i]);
        }
    }
    return result;
}

console.log("\n--- Студенты со средним баллом >= 4.0 ---");
var goodStudents = filterByAverage(groupmates, 4.0);
printStudents(goodStudents);