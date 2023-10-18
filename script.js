// afficher une barre latterale : 

let barreLaterale = document.getElementById("liens");
let boutonMenu = document.getElementById("btnMenu");


    boutonMenu.addEventListener("click",()=>
    barreLaterale.classList.toggle("nav-active"),
    );
// charnger l'icon du bouton menu

let icon = document.getElementById("iconMenu");
    boutonMenu.addEventListener("click", ()=>{
        if(icon.textContent==="menu"){
            icon.textContent = "close"
        }else{
            icon.textContent = "menu" 
        }
    })

 // afficher et cacher un contenu  d'apropos
 
 let contenu = document.getElementById("contenuCacher");
    
    
 let boutonApropos = document.getElementById("btnApropos");
 

    boutonApropos.addEventListener("click",()=>{
        contenu.classList.toggle("afficher")
    }
    )

// changer lire plus en lire moins : 

    boutonApropos.addEventListener("click",()=>{
        if(boutonApropos.textContent == "Lire plus"){
            boutonApropos.textContent ="Lire moins"
        }else{
            boutonApropos.textContent="Lire plus"
        }
    }
    )