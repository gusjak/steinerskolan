const navMenu = document.querySelector(".nav-menu");
const openNavMenu = document.querySelector(".open-nav-menu");
const closeNavMenu = document.querySelector(".close-nav-menu");
const menuOverlay = document.querySelector(".menu-overlay");
const mediaSize = 1023;

navMenu.addEventListener("click", (e) => {
    if(e.target.hasAttribute("data-toggle") && 
        window.innerWidth <= mediaSize){
        // Prevent default behaviour on parent link in mobile
        e.preventDefault();
        
        const menuItemHasChildren = e.target.parentElement;
        
        if(menuItemHasChildren.classList.contains("active")){
            collapseSubMenu();
        } else {
            if(navMenu.querySelector(".menu-item-has-children.active")){
                collapseSubMenu();
            }
            // Expand parent menu containing children
            menuItemHasChildren.classList.add("active");
            
            const subMenu = menuItemHasChildren.querySelector(".sub-menu");
            subMenu.style.maxHeight = subMenu.scrollHeight + "px";
        }
    }
});

const toggleNav = () => {
    navMenu.classList.toggle("open");
    menuOverlay.classList.toggle("active");
}

openNavMenu.addEventListener("click", toggleNav);
closeNavMenu.addEventListener("click", toggleNav);
menuOverlay.addEventListener("click", toggleNav);


const collapseSubMenu = () => {
    navMenu.querySelector(".menu-item-has-children.active .sub-menu")
    .removeAttribute("style");
    navMenu.querySelector(".menu-item-has-children.active")
    .classList.remove("active");
}

function resizeFix() {
     if(navMenu.classList.contains("open")){
         toggleNav();
     }
     if(navMenu.querySelector(".menu-item-has-children.active")){
         collapseSubMenu();
   }
}

window.addEventListener("resize", () => {
   if(this.innerWidth > mediaSize){
       resizeFix();
   }
});
