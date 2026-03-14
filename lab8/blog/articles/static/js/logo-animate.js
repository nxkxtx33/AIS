$(document).ready(function() {
    
    $logo.hover(
        function() {
            // При наведении
            $(this).stop().animate({
                width: '+=30px',
                height: '+=30px',
                opacity: 0.8
            }, 300);
            $(this).css('box-shadow', '0 0 30px rgba(255,255,255,0.9)');
            console.log("  Комбинированный эффект: увеличение + свечение");
        },
        function() {
            // При убирании
            $(this).stop().animate({
                width: '-=30px',
                height: '-=30px',
                opacity: 1
            }, 300);
            $(this).css('box-shadow', 'none');
        }
    );
});

console.log("\n✅ Скрипт logo-animate.js загружен!");