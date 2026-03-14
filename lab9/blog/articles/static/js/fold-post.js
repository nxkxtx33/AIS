
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM полностью загружен, начинаем работу...");
    
    // Находим все кнопки сворачивания
    var foldBtns = document.getElementsByClassName("fold-button");
    console.log("Найдено кнопок для варианта 1:", foldBtns.length);
    
    // Добавляем обработчик для каждой кнопки
    for (var i = 0; i < foldBtns.length; i++) {
        // Используем замыкание для сохранения индекса
        (function(index) {
            foldBtns[index].addEventListener("click", function(event) {
                // Предотвращаем всплытие события
                event.stopPropagation();
                
                console.log("Вариант 1: Клик по кнопке", index);
                
                // Получаем родительский пост (поднимаемся на 2 уровня вверх)
                var post = this.parentElement.parentElement;
                
                // Находим элементы внутри поста
                var author = post.getElementsByClassName('article-author')[0];
                var date = post.getElementsByClassName('article-created-date')[0];
                var text = post.getElementsByClassName('article-text')[0];
                
                // Проверяем текущее состояние по тексту кнопки
                if (this.innerHTML === "Свернуть") {
                    console.log("  Сворачиваем пост");
                    
                    // Скрываем элементы
                    author.style.display = "none";
                    date.style.display = "none";
                    text.style.display = "none";
                    
                    // Меняем текст кнопки
                    this.innerHTML = "Развернуть";
                } else {
                    console.log("  Разворачиваем пост");
                    
                    // Показываем элементы
                    author.style.display = "block";
                    date.style.display = "block";
                    text.style.display = "block";
                    
                    // Меняем текст кнопки
                    this.innerHTML = "Свернуть";
                }
            });
        })(i);
    }
    
});

console.log("\n✅ Скрипт fold-post.js полностью загружен!");