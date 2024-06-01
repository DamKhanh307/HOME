document.addEventListener('DOMContentLoaded', function () {
    var place_click = document.querySelector('.avatar');
    var click_count = 0;
    var list_bg = ["../IMG/bg1.jpg", "../IMG/bg2.jpg", "../IMG/bg3.jpg", "../IMG/bg4.jpg", "../IMG/bg5.jpeg","../IMG/bg6.jpg"];
    var devices = window.screen;

    function getRandomImage() {
        const randomIndex = Math.floor(Math.random() * list_bg.length);
        return list_bg[randomIndex];
    }

    document.body.style.backgroundImage = `url(${getRandomImage()})`;

    place_click.addEventListener('click', function OpenImg() {
        click_count++;
        if (click_count === 3) {
            var input_pass = prompt('Input Password To Continue:');
            click_count = 0;
            if (input_pass != null) {
                userInput = input_pass.toLowerCase();
                if (userInput == 'damkhanh') {
                    window.location.href = 'https://damkhanh307.github.io/Home/IMG/';
                } else {
                    if (devices.width >= 900) {
                        window.location.href = 'https://damkhanh307.github.io/Home/404-not-found/';
                    } else {
                        window.location.href = 'https://damkhanh307.github.io/Home/404';
                    }
                }
            }
        }
    });
});
