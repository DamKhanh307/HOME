let allEntries = new Map();
async function loadData() {
    const response = await fetch('./database.txt');
    const data = await response.text();
    data.split(/(?=●|○)/).forEach(entry => {
        const id = entry.slice(1, entry.indexOf('\n')); // Giả sử ID là dòng đầu tiên sau ký tự ● hoặc ○
        allEntries.set(id, entry);
    });
}

// Hàm tìm kiếm ID với debounce
function searchID() {
    const input = document.getElementById('searchInput').value;
    const results = document.getElementById('results');
    results.innerHTML = ''; // Xóa kết quả trước đó

    if (input.trim() === '') {
        return; // Nếu không có gì được nhập, không hiển thị gì cả
    }

    const entry = allEntries.get(input);
    if (entry) {
        const li = document.createElement('li');
        li.textContent = entry;
        results.appendChild(li);
    }
}

// Debounce function
function debounce(func, timeout = 300){
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}
