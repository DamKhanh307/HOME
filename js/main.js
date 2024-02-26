document.addEventListener('DOMContentLoaded', function () {
    var over_play = document.querySelector('.over-play');
    var menu = document.querySelector('h3');
    var content = document.querySelector('.pop-up-content');
    var popup = document.querySelector('.pop-up');

    var images = ["css/nino1.png", "css/nino3.png"];

    menu.addEventListener('click', function menu() {
        content.style.opacity = 1;
        over_play.style.opacity = 1;
        over_play.style.pointerEvents = 'auto';
    });

    popup.addEventListener('click', function close_pop_up() {
        content.style.opacity = 0;
        over_play.style.opacity = 0;
        over_play.style.pointerEvents = 'none';
    });

    function checkDeviceType() {
        var check_mobile = screen.width;
        if (check_mobile <= 900) {
            console.log('Mobile Device');
            // Set random background
            var randomIndex = Math.floor(Math.random() * images.length);
            
            console.log(Math.floor(Math.random()))
            document.body.style.backgroundImage = "url('" + images[randomIndex] + "')";
        } else {
            window.location.href = 'https://damkhanh307.github.io/Home/404-not-found/';
        }
    }
    checkDeviceType();
});
