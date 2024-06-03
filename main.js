document.addEventListener('DOMContentLoaded', function () {
    var place_click = document.querySelector('.avatar');
    var click_count = 0;
    var list_bg_desktop = ["./IMG/bg1.jpg", "./IMG/bg2.jpg", "./IMG/bg3.jpg", "./IMG/bg4.jpg", "./IMG/bg5.jpeg", "./IMG/bg6.jpg"];
    var list_bg = ["./IMG/BG_Mobile_1.jpg", "./IMG/BG_Mobile_2.jpg", "./IMG/BG_Mobile_3.jpg", "./IMG/BG_Mobile_4.jpg", "./IMG/BG_Mobile_5.jpg"]
    var devices = window.screen;
    const allAudios = document.querySelectorAll('audio');

    var close_nav = document.getElementsByClassName('fa-xmark')[0]
    var nav = document.getElementsByClassName('nav')[0]
    var setting = document.getElementsByClassName('settings_music')[0]

    document.querySelectorAll('.element_music').forEach(item => {
        const songTitle = item.querySelector('span');
        const originalTitle = songTitle.innerText;

        item.addEventListener('click', function () {
            const audio = this.querySelector('audio');

            allAudios.forEach(a => {
                if (a !== audio) {
                    a.pause();
                    a.currentTime = 0;
                    const siblingSongTitle = a.closest('.element_music').querySelector('span');
                    siblingSongTitle.innerText = siblingSongTitle.dataset.originalTitle;
                }
            });

            if (audio) {
                if (audio.paused) {
                    audio.play();
                    showToast(`Playing: ${originalTitle}`);
                    songTitle.innerText = 'Đang Phát...';
                } else {
                    audio.pause();
                    showToast(`Paused: ${originalTitle}`);
                    songTitle.innerText = originalTitle;
                }
            }
        });

        // Store original title in a data attribute for later use
        songTitle.dataset.originalTitle = originalTitle;
    });

    function showToast(message) {
        const toast = document.getElementById("toast");
        toast.innerText = message;
        toast.className = "toast show";
        setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 3000);
    }

    setting.addEventListener('click', function () {
        nav.style.opacity = '1';
        document.body.style.overflow = 'visible';
        nav.style['pointer-events'] = 'auto';
    })

    close_nav.addEventListener('click', function () {
        nav.style.opacity = '0';
        document.body.style.overflow = 'hidden';
        nav.style['pointer-events'] = 'none';
    })
    function getRandomImage() {
        const randomIndex = Math.floor(Math.random() * list_bg_desktop.length);
        return list_bg_desktop[randomIndex];
    }
    function getRandomImage_Mobile() {
        const randomIndex = Math.floor(Math.random() * list_bg.length);
        return list_bg[randomIndex];
    }

    if (devices.width >= 900) {
        document.body.style.backgroundImage = `url(${getRandomImage()})`;
    } else {
        document.body.style.backgroundImage = `url(${getRandomImage_Mobile()})`;
    }

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
