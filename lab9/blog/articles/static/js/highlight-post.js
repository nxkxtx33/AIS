
$(document).ready(function() {

    // Проверяем, есть ли посты на странице
    var postsCount = $('.one-post').length;
    console.log("Найдено постов для подсветки:", postsCount);
    
    if (postsCount === 0) {
        console.log("Нет постов для подсветки");
        return;
    }
    
    $('.one-post').hover(
        function() {
            // Наведение
            $(this).stop().animate({
                backgroundColor: '#1abc9c',
                boxShadow: '0 15px 30px rgba(0,0,0,0.4)'
            }, 300);
            $(this).find('.one-post-shadow').stop().animate({
                opacity: 0.2
            }, 300);
            $(this).find('.post-title a').stop().animate({
                fontSize: '28px'
            }, 300);
        },
        function() {
            // Убирание
            $(this).stop().animate({
                backgroundColor: '#16a085',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }, 300);
            $(this).find('.one-post-shadow').stop().animate({
                opacity: 0
            }, 300);
            $(this).find('.post-title a').stop().animate({
                fontSize: '24px'
            }, 300);
        }
    );
    
});

console.log("\n✅ Скрипт highlight-post.js загружен!");