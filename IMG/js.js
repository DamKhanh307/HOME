document.addEventListener("DOMContentLoaded", function () {
    var referrer = document.referrer;
    var isLocalhost = window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost";

    if (isLocalhost || referrer.includes("https://damkhanh307.github.io/Home") || referrer.includes('http://127.0.0.1:5500')) {
        console.log("Redirect Done");
    } else if (screen.width < 900) {
        window.location.href = "https://damkhanh307.github.io/Home/404";
    } else {
        window.location.href = "https://damkhanh307.github.io/Home/404-not-found/";
    }

    function fetchData(callback) {
        fetch('https://api.github.com/repos/Vande541/Di/contents/Asset').then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        }).then(data => {
            globalData = data;
            downloadUrls = getDownloadUrls();
            callback(downloadUrls);
        }).catch(error => {
            console.error("There was a problem with the fetch operation:", error);
        });
    }

    function getDownloadUrls() {
        let urls = [];
        globalData.forEach(item => {
            urls.push(item.download_url);
        });
        return urls;
    }

    function displayImages(urls, callback) {
        let loadedImages = 0;
        let container = document.querySelector(".root");

        urls.forEach(url => {
            let anchorElement = document.createElement("a");
            anchorElement.href = url;
            anchorElement.setAttribute("data-fancybox", "gallery");
            anchorElement.setAttribute("data-caption", `Image ${urls.indexOf(url) + 1}`);

            let imgElement = document.createElement("img");
            imgElement.src = url;
            imgElement.onload = function () {
                loadedImages++;
                if (loadedImages === urls.length) {
                    callback();
                }
            };
            imgElement.onerror = function () {
                console.log(`Image not found: ${imgElement.src}`);
                imgElement.remove(); 
            };

            anchorElement.appendChild(imgElement);
            container.appendChild(anchorElement);
        });
    }

    fetchData(function (downloadUrls) {
        displayImages(downloadUrls, checkAndRemoveBrokenImages);
    });

    function checkAndRemoveBrokenImages() {
    }
    Fancybox.bind("[data-fancybox]", {});
    
});
