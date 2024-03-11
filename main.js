document.addEventListener('DOMContentLoaded', function() {
    var place_click = document.querySelector('.cover');
    var click_count = 0;
    var devices = window.screen
    var content_place_l = document.querySelector('.content_tray_l')
    var content_place_r = document.querySelector('.content_tray_r')
    
    content_place_l.addEventListener('mouseover',function(){
        content_place_l.style.opacity = 1;
    })
    content_place_l.addEventListener('mouseout',function(){
        content_place_l.style.opacity = 0;
    })
    content_place_r.addEventListener('mouseover',function(){
        content_place_r.style.opacity = 1;
    })
    content_place_r.addEventListener('mouseout',function(){
        content_place_r.style.opacity = 0;
    })

    place_click.addEventListener('click', function OpenImg() {
        click_count++;
        if (click_count === 3) {
            var input_pass = prompt('Input Password To Continue:')
        click_count = 0
            if (input_pass != null){
                userInput = input_pass.toLowerCase();
                if (userInput == 'damkhanh'){
                    window.location.href = 'https://damkhanh307.github.io/Home/IMG/'
                }
                else{
                    if (devices.width >= 900){
                        window.location.href = 'https://damkhanh307.github.io/Home/404-not-found/'
                    }
                    else{
                        window.location.href = 'https://damkhanh307.github.io/Home/404'
                    }
                }
            }
        }
    });
});
