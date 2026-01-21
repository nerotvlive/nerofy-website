addEventListener("DOMContentLoaded", () => {
    initFooter();
});

function initFooter() {
    let footer = document.getElementById("footer-en");
    if(footer) {
        styleFooter(footer);
        footer.innerHTML += "<a href='https://nerofy.de/rechtliches.html' target='_blank'>Imprint and privacy declarion</a><br>©copyright <a href='https://nerofy.de'>Nerofy Network</a>. All rights reserved."
    }
    footer = document.getElementById("footer-de");
    if(footer) {
        styleFooter(footer);
        footer.innerHTML += "<a href='https://nerofy.de/rechtliches.html' target='_blank'>Impressum und Datenschutzerklärung</a><br>©copyright <a href='https://nerofy.de'>Nerofy Netzwerk</a>. Alle Rechte vorbehalten."
    }
}

function styleFooter(footer) {
    footer.className = "footer2"
    footer.style.position = "relative";
    footer.style.width = "100%";
    footer.style.backgroundColor = "#000000";
    footer.style.color = "#ffffff";
    footer.style.textAlign = "center";
    footer.style.userSelect = "none";
    footer.style.padding = "2rem 0"
    footer.innerHTML = "<style>.footer2 { color: #ffffff90 !important; a { color: white; text-decoration: none;} a:hover { text-decoration: underline; color: dodgerblue; }}</style>";
}