document.addEventListener("DOMContentLoaded", () => {
    fetch("../components/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-container").innerHTML = data;
        });
});

document.addEventListener("DOMContentLoaded", () => {
    fetch("../components/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-container").innerHTML = data;
        });
});