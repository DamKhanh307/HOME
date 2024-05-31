var sakura = "https://i.ibb.co/mN296Wb/thanhdieu.png";
var img = new Image();
img.src = sakura;

img.onload = function () {
    startSakura();
};

function startSakura() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
    var canvas = document.createElement("canvas");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    canvas.setAttribute("style", "position: fixed; left: 0; top: 0; pointer-events: none; z-index: 8888;");
    canvas.setAttribute("id", "canvas_sakura");
    document.body.appendChild(canvas);

    var ctx = canvas.getContext("2d");

    function getRandom(option) {
        switch (option) {
            case 'x': return Math.random() * window.innerWidth;
            case 'y': return Math.random() * window.innerHeight;
            case 'r': return Math.random() * Math.PI * 2;
            case 's': return Math.random();
            case 'fnx': return Math.random() * 0.6 - 0.3;
            case 'fny': return Math.random() * 1 + 0.5;
            case 'fnr': return Math.random() * 0.02 - 0.01;
        }
    }

    function Sakura(x, y, s, r, fn) {
        this.x = x;
        this.y = y;
        this.s = s;
        this.r = r;
        this.fn = fn;
        this.draw = function (cxt) {
            cxt.save();
            cxt.translate(this.x, this.y);
            cxt.rotate(this.r);
            cxt.drawImage(img, 0, 0, 30 * this.s, 30 * this.s);
            cxt.restore();
        };
        this.update = function () {
            this.x = this.fn.x(this.x, this.y);
            this.y = this.fn.y(this.y, this.y);
            this.r = this.fn.r(this.r);
            if (this.x > window.innerWidth || this.x < 0 || this.y > window.innerHeight || this.y < 0) {
                this.r = getRandom("fnr");
                if (Math.random() > 0.4) {
                    this.x = getRandom("x");
                    this.y = 0;
                    this.s = getRandom("s");
                    this.r = getRandom("r");
                } else {
                    this.x = window.innerWidth;
                    this.y = getRandom("y");
                    this.s = getRandom("s");
                    this.r = getRandom("r");
                }
            }
        };
    }

    function SakuraList() {
        this.list = [];
        this.push = function (sakura) {
            this.list.push(sakura);
        };
        this.update = function () {
            for (var i = 0; i < this.list.length; i++) {
                this.list[i].update();
            }
        };
        this.draw = function (cxt) {
            for (var i = 0; i < this.list.length; i++) {
                this.list[i].draw(cxt);
            }
        };
    }

    var sakuraList = new SakuraList();
    for (var i = 0; i < 10; i++) {
        var x = getRandom("x");
        var y = getRandom("y");
        var r = getRandom("r");
        var s = getRandom("s");
        var fnx = getRandom("fnx");
        var fny = getRandom("fny");
        var fnr = getRandom("fnr");
        var sakura = new Sakura(x, y, s, r, { x: fnx, y: fny, r: fnr });
        sakuraList.push(sakura);
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        sakuraList.update();
        sakuraList.draw(ctx);
        requestAnimationFrame(animate);
    }

    animate();
}

function stopp() {
    var canvas = document.getElementById("canvas_sakura");
    if (canvas) {
        canvas.parentNode.removeChild(canvas);
        window.cancelAnimationFrame(animate);
    } else {
        startSakura();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var place_click = document.querySelector('.avatar');
    var click_count = 0;
    var list_bg = ["/IMG/bg1.jpg", "/IMG/bg2.jpg", "/IMG/bg3.jpg", "../IMG/bg4.jpg", "../IMG/bg5.jpeg"];
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
