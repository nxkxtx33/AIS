groupmates = [
 {
 "name": u"Василий",
 "group": "912-2",
 "age": 19,
 "marks": [4, 3, 5, 5, 4]
 },
 {
 "name": u"Анна",
 "group": "912-1",
 "age": 18,
 "marks": [3, 2, 3, 4, 3]
 },
 {
 "name": u"Георгий",
 "group": "912-2",
 "age": 19,
 "marks": [3, 5, 4, 3, 5]
 },
 {
 "name": u"Валентина",
 "group": "912-1",
 "age": 18,
 "marks": [5, 5, 5, 4, 5]
 }
]

def print_students(students):
    print("Имя студента".ljust(15), "Группа".ljust(8), "Возраст".ljust(8), "Оценки".ljust(20))
    for student in students:
        print(student["name"].ljust(15), student["group"].ljust(8), str(student["age"]).ljust(8), str(student["marks"]).ljust(20))
    print("\n")

def filter_by_avg_mark(students, min_avg):
    return [student for student in students if sum(student["marks"])/len(student["marks"]) >= min_avg]

if __name__ == "__main__":
    print("Все студенты:")
    print_students(groupmates)
    print("Студенты со средним баллом >= 4:")
    print_students(filter_by_avg_mark(groupmates, 4))
