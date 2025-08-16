const base = window.location.pathname.includes("/pages/") ? ".." : ".";

document.addEventListener("DOMContentLoaded", () => {
    fetch(`${base}/components/header.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-container").innerHTML = data;
        });
    fixHeaderLinks();
});

document.addEventListener("DOMContentLoaded", () => {
    fetch(`${base}/components/footer.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-container").innerHTML = data;
        });
});

function fixHeaderLinks() {
    const isInPages = window.location.pathname.includes("/pages/");
    const prefix = isInPages ? ".." : ".";

    document.getElementById("home-link").setAttribute("href", `${prefix}/index.html`);
    document.getElementById("packages-link").setAttribute("href", `${prefix}/pages/packages.html`);
    document.getElementById("contact-link").setAttribute("href", `${prefix}/pages/packages.html`);
}