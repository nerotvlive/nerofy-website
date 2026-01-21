function initMenu() {
    const menu = document.getElementById("menu");
    if(innerWidth>1000) {
        if(!menu.classList.contains("active")) {
            menu.classList.add("active");
        }
        if(menu.classList.contains("collapsed")) {
            menu.classList.remove("collapsed");
        }
    } else if(innerWidth>640) {
        if(menu.classList.contains("active")) {
            menu.classList.remove("active");
        }
        if(menu.classList.contains("collapsed")) {
            menu.classList.remove("collapsed");
        }
    } else {
        if(!menu.classList.contains("collapsed")) {
            menu.classList.add("collapsed");
        }
        if(menu.classList.contains("active")) {
            menu.classList.remove("active");
        }
    }
}

function toggleMenu() {
    const toggle = document.getElementById("menu").querySelector(".toggle");
    const links = document.getElementById("menu").querySelector(".links");
    if(links.classList.contains("active")) {
        links.classList.remove("active");
        if(toggle.classList.contains("bx-x")) {
            toggle.classList.remove("bx-x");
        }
        if(!toggle.classList.contains("bx-menu")) {
            toggle.classList.add("bx-menu");
        }
    } else {
        links.classList.add("active");
        if(!toggle.classList.contains("bx-x")) {
            toggle.classList.add("bx-x");
        }
        if(toggle.classList.contains("bx-menu")) {
            toggle.classList.remove("bx-menu");
        }
    }
}

addEventListener("DOMContentLoaded", () => {
    initMenu();
});

addEventListener('resize', function() {
    initMenu();
});

addEventListener('contextmenu',function(e){
    e.preventDefault();
});

addEventListener('dragstart', function(e){
    e.preventDefault();
});