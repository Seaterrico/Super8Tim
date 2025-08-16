const base = window.location.pathname.includes("/pages/") ? ".." : ".";

document.addEventListener("DOMContentLoaded", () => {
    // Load header
    fetch(`${base}/components/header.html`)
        .then(response => response.text())
        .then(data => {
            const headerContainer = document.getElementById("header-container");
            headerContainer.innerHTML = data;

            const isInPages = window.location.pathname.includes("/pages/");
            const prefix = isInPages ? ".." : ".";

            document.getElementById("home-link").setAttribute("href", `${prefix}/index.html`);
            document.getElementById("logo-link").setAttribute("href", `${prefix}/index.html`);
            document.getElementById("package-link").setAttribute("href", `${prefix}/pages/packages.html`);
            document.getElementById("contact-link").setAttribute("href", `${prefix}/pages/contact.html`);
        });

    // Load footer
    fetch(`${base}/components/footer.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-container").innerHTML = data;
        });
});