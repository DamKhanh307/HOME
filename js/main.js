document.addEventListener('DOMContentLoaded',function(){
    var over_play = document.querySelector('.over-play')
    var menu = document.querySelector('h3')
    var content = document.querySelector('.pop-up-content')
    var popup = document.querySelector('.pop-up')

    menu.addEventListener('click', function menu(){
        content.style.opacity = 1;
        over_play.style.opacity = 1;
        over_play.style.pointerEvents = 'auto';
    })

    popup.addEventListener('click', function close_pop_up() {
        content.style.opacity = 0;
        over_play.style.opacity = 0;
        over_play.style.pointerEvents ='none';
    });

    function checkDeviceType() {
        var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if (isMobile) {
            console.log('Mobile Device')
        } else {
            window.location.href ='https://damkhanh307.github.io/Home/404-not-found/'
        }
    }
    checkDeviceType()
})