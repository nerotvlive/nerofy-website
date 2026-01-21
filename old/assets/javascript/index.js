function initContent() {
    const creatorContents = document.getElementsByClassName('creator-content');
    if(innerWidth>1000) {
        for (let i = 0; i < creatorContents.length; i++) {
            const content = creatorContents[i];
            if(content.classList.contains("active")) {
                content.classList.remove("active");
            }
        }
    } else {
        for (let i = 0; i < creatorContents.length; i++) {
            const content = creatorContents[i];
            if(!content.classList.contains("active")) {
                content.classList.add("active");
            }
        }
    }
}

addEventListener("DOMContentLoaded", () => {
    initContent();
});

addEventListener('resize', function() {
    initContent();
});