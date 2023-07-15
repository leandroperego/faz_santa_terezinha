liNossoTrabalho = document.querySelector("#li-nt");
dropboxLiNossoTrabalho = document.querySelector("#nosso_trabalho_dropdown");
iconMenu = document.querySelector("#icon-menu");
navList = document.querySelector(".nav-lista");
ntIcon = document.querySelector("#nt-icon-drop");

let width_desktop = window.innerWidth > 1024;

window.addEventListener("resize", function(){

    width_desktop = window.innerWidth > 1024
    retirar_evento_liNossoTrabalho();

    if (iconMenu.classList.contains("open")){
        iconMenu.classList.remove("open");
        navList.style.display = "none";
        if (!dropboxLiNossoTrabalho.classList.contains("invisible")){
            dropboxLiNossoTrabalho.classList.toggle("invisible");
        }
    }

    if (width_desktop){
        navList.style.display = "flex";
        liNossoTrabalho.addEventListener("mouseenter", exibir_div_dropDown);
        liNossoTrabalho.addEventListener("mouseleave", exibir_div_dropDown);
    }else{
        navList.style.display = "none";
        liNossoTrabalho.addEventListener("click", exibir_div_dropDown);
    }

})

iconMenu.addEventListener('click', function(){
    navList.style.display = "block";
    if (iconMenu.classList.contains("open")){
        iconMenu.classList.remove("open");
        navList.style.display = "none";
    } else{
        iconMenu.classList.add("open");
    }
})

if (!width_desktop){
    liNossoTrabalho.addEventListener("click", exibir_div_dropDown);
}else{
    liNossoTrabalho.addEventListener("mouseenter", exibir_div_dropDown);
    liNossoTrabalho.addEventListener("mouseleave", exibir_div_dropDown);
}

function retirar_evento_liNossoTrabalho(){
    liNossoTrabalho.removeEventListener("click", exibir_div_dropDown);
    liNossoTrabalho.removeEventListener("mouseenter", exibir_div_dropDown);
    liNossoTrabalho.removeEventListener("mouseleave", exibir_div_dropDown);
}

function exibir_div_dropDown(){
    dropboxLiNossoTrabalho.classList.toggle("invisible");
    if (ntIcon.classList.contains("fa-chevron-down")){
        ntIcon.classList.remove("fa-chevron-down");
        ntIcon.classList.add("fa-chevron-up");
    } else{
        ntIcon.classList.remove("fa-chevron-up");
        ntIcon.classList.add("fa-chevron-down");
    }
}