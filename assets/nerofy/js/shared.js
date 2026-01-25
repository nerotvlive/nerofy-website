const urlParams = new URLSearchParams(window.location.search);

async function initMenu() {
    if(!document.getElementById("menu")) {
        if(document.querySelector(".content")) {
            const content = document.querySelector(".content");
            let menu = "<div id='menu' class='navbar navbar-expand-lg'><div class='container-fluid container-lg'><a class='navbar-brand excluded' href='/'>NEROFY</a><button class='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'><span class='navbar-toggler-icon'></span></button><div class='collapse navbar-collapse' id='navbarSupportedContent'><ul class='navbar-nav me-auto mb-2 mb-lg-0'>%1</ul>%2</div></div></div>";
            let menuEnd = "<div class='d-flex gap-2'>%</div>"

            let menuContent = "<li class='nav-item'><a class='index-link btn btn-transparent' aria-current='page' href='/'>Start</a></li>";
            menuContent += "<li class='nav-item'><a class='creators-link btn btn-transparent' aria-current='page' href='/creators.html'>Creators</a></li>";
            menuContent += "<li class='nav-item'><a class='network-link btn btn-transparent' aria-current='page' href='/network.html'>Network</a></li>";

            let menuContent2 = "<a type='button' class='btn btn-secondary' href='https://wolkenspeicher.cloud' target='_blank'><i class=\"bi bi-cloud-haze2-fill\"></i></a>"
            menuContent2 += "<a type='button' class='btn btn-secondary' href='https://discord.gg/hXSzqJEsSk' target='_blank'><i class=\"bi bi-discord\"></i></a>";
            //menuContent2 += "<a type='button' class='btn btn-primary' href='https://discord.gg/hXSzqJEsSk' target='_blank'>Mitglied werden</a>";


            menu = menu.replace("%1",menuContent).replace("%2",menuEnd.replace("%",menuContent2));
            content.innerHTML = menu + content.innerHTML;
        }
    }
}

function addFooter() {
    if(!document.getElementById("menu")) {
        const content = document.querySelector(".content");
        let footer = "";
        content.innerHTML += footer;
    }
}
//addFooter();