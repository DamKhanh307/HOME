function createGhost() {
    // Tạo và chèn CSS cho con ma vào trang
    const style = document.createElement('style');
    style.textContent = `
        .ghost {
            position: fixed;
            width: 80px; /* Giảm kích thước con ma */
            height: 90px;
            background: #f2f2f2;
            border-radius: 40px 40px 0 0;
            z-index: 9999;
            pointer-events: none;
            transition: transform 2s ease-in-out; /* Thêm chuyển động mượt */
        }
        
        .ghost .face {
            width: 60px;
            position: absolute;
            top: 20px;
            left: calc(50% - 30px);
        }
        
        .ghost .eyes {
            height: 12px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            margin-bottom: 10px;
        }
        
        .ghost .eyes span {
            width: 12px;
            height: 12px;
            background: #20262a;
            border-radius: 50%;
        }
        
        .ghost .mouth span {
            width: 20px;
            height: 10px;
            background: #20262a;
            border-radius: 0 0 10px 10px;
        }
        
        .ghost .hands {
            width: 110px;
            position: absolute;
            left: -15px;
            top: 45px;
            display: flex;
            justify-content: space-between;
        }
        
        .ghost .hands span {
            width: 15px;
            height: 15px;
            background: #f2f2f2;
            animation: shake 4s linear infinite;
        }
        
        @keyframes shake {
            50% {
                transform: translateY(3px);
            }
        }
        
        .ghost .feet {
            width: 100%;
            display: flex;
            position: absolute;
            bottom: -10px;
        }
        
        .ghost .feet span {
            flex: 1;
            height: 12px;
            background: #f2f2f2;
            border-radius: 0 0 10px 10px;
        }
    `;
    document.head.appendChild(style);

    // Tạo phần tử con ma
    const ghost = document.createElement('div');
    ghost.className = 'ghost';

    // Tạo phần tử mặt
    const face = document.createElement('div');
    face.className = 'face';

    // Tạo phần tử mắt
    const eyes = document.createElement('div');
    eyes.className = 'eyes';
    const eye1 = document.createElement('span');
    const eye2 = document.createElement('span');
    eyes.appendChild(eye1);
    eyes.appendChild(eye2);

    // Tạo phần tử miệng
    const mouth = document.createElement('div');
    mouth.className = 'mouth';
    const mouthPart = document.createElement('span');
    mouth.appendChild(mouthPart);

    face.appendChild(eyes);
    face.appendChild(mouth);
    ghost.appendChild(face);

    // Tạo phần tử tay
    const hands = document.createElement('div');
    hands.className = 'hands';
    const hand1 = document.createElement('span');
    const hand2 = document.createElement('span');
    hands.appendChild(hand1);
    hands.appendChild(hand2);
    ghost.appendChild(hands);

    // Tạo phần tử chân
    const feet = document.createElement('div');
    feet.className = 'feet';
    for (let i = 0; i < 5; i++) {
        const foot = document.createElement('span');
        feet.appendChild(foot);
    }
    ghost.appendChild(feet);

    // Thêm con ma vào body
    document.body.appendChild(ghost);

    // Gọi hàm để tạo hiệu ứng di chuyển
    makeGhostFloat(ghost);
}

// Hàm để di chuyển con ma trong màn hình một cách mượt mà
function makeGhostFloat(ghostElement) {
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;

    function randomPosition() {
        const randomX = Math.random() * (containerWidth - ghostElement.clientWidth);
        const randomY = Math.random() * (containerHeight - ghostElement.clientHeight * 1.5); // Giữ khoảng cách nhỏ so với đáy
        return { x: randomX, y: randomY };
    }

    function moveGhost() {
        const { x, y } = randomPosition();
        ghostElement.style.transform = `translate(${x}px, ${y}px)`;
    }

    // Di chuyển con ma mỗi 3 giây
    setInterval(moveGhost, 3000);
}

// Tạo con ma khi trang đã tải
document.addEventListener('DOMContentLoaded', createGhost);
