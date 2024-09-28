let allEntries = new Map();

async function loadData() {
    try {
        const response = await fetch('./database.txt');
        const data = await response.text();
        
        // Split entries and store them in the Map
        data.split('Decimal_ID: ').forEach(entry => {
            if (entry.trim()) {
                const id = entry.slice(0, entry.indexOf('\n')).trim();
                allEntries.set(id, entry.trim());
            }
        });
    } catch (error) {
        console.error('Error loading data:', error);
    }
}

// Hàm tìm kiếm ID với debounce
function searchID() {
    const input = document.getElementById('searchInput').value.trim();
    const results = document.getElementById('results');
    results.innerHTML = ''; // Clear previous results

    if (input === '') {
        return; // Do nothing if the input is empty
    }

    const entry = allEntries.get(input);
    if (entry) {
        const li = document.createElement('li');
        li.textContent = entry;
        results.appendChild(li);
    } else {
        const li = document.createElement('li');
        li.textContent = 'No results found';
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

// Initialize debounce on the searchID function
const debouncedSearch = debounce(searchID, 300);

// Add event listener to the search input
document.getElementById('searchInput').addEventListener('input', debouncedSearch);

// Load data when the window loads
window.onload = loadData;
