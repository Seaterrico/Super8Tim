const base = window.location.pathname.includes("/pages/") ? ".." : ".";

document.addEventListener("DOMContentLoaded", () => {
    fetch(`${base}/components/header.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-container").innerHTML = data;
        });
});

document.addEventListener("DOMContentLoaded", () => {
    fetch(`${base}/components/footer.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-container").innerHTML = data;
        });
});