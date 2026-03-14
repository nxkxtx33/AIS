// ============================================
// ЛАБОРАТОРНАЯ РАБОТА №9 - ЭФФЕКТ ПАРАЛЛАКСА
// (строго по методичке)
// ============================================

$(document).ready(function() {
    console.log("=== Лабораторная работа №9 - Параллакс ===");
    
    // Инициализация переменных (как в методичке)
    var scrolled = 0;
    var $parallaxElements = $('.icons-for-parallax img');
    
    console.log("Найдено элементов для параллакса:", $parallaxElements.length);
    
    // Сохраняем начальные позиции
    $parallaxElements.each(function(index) {
        $(this).data('initial-top', $(this).position().top);
        $(this).data('index', index);
        console.log("Элемент", index + 1, "начальная позиция:", $(this).position().top);
    });
    
    // Обработчик события прокрутки (как в методичке)
    $(window).scroll(function() {
        // Получаем количество прокрученных пикселей
        scrolled = $(window).scrollTop();
        
        // Применяем эффект к каждому элементу
        for (var i = 0; i < $parallaxElements.length; i++) {
            // Вычисляем смещение: scrolled * 0.15 * (i + 1)
            // (как в методичке: yPosition = (scrolled * 0.15*(i + 1)))
            var yPosition = scrolled * 0.15 * (i + 1);
            
            // Устанавливаем новую позицию
            $parallaxElements.eq(i).css({ top: yPosition });
        }
    });
    
    console.log("✅ Эффект параллакса активирован");
});

console.log("✅ Скрипт parallax.js загружен");