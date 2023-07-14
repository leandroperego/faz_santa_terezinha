liNossoTrabalho = document.querySelector("#li-nt");
dropboxLiNossoTrabalho = document.querySelector("#nt-dropdown");
iconMenu = document.querySelector("#icon-menu");
navList = document.querySelector("#nav-list");
ntIcon = document.querySelector("#nt-icon-drop");

iconMenu.addEventListener('click', function(){
    navList.classList.toggle("invisible");
    if (iconMenu.classList.contains("open")){
        iconMenu.classList.remove("open");
    } else{
        iconMenu.classList.add("open");
    }
})

liNossoTrabalho.addEventListener("click", function(){
    dropboxLiNossoTrabalho.classList.toggle("invisible");
})

ntIcon.addEventListener("click", function(){
    if (ntIcon.classList.contains("fa-chevron-down")){
        ntIcon.classList.remove("fa-chevron-down");
        ntIcon.classList.add("fa-chevron-up");
    } else{
        ntIcon.classList.remove("fa-chevron-up");
        ntIcon.classList.add("fa-chevron-down");
    }
})