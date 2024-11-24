document.addEventListener("DOMContentLoaded", function () {
    const hamburgerButton = document.getElementById("icon");
    const navMenu = document.getElementById("nav-menu");
  
    hamburgerButton.addEventListener("click", function () {
      navMenu.classList.toggle("menu-sm");

      if (navMenu.classList.contains("menu-sm")) {
       
        navMenu.classList.remove("menu");
      }
      else{
        navMenu.classList.add("menu");
      }
      console.log('hello');
      
    });
  });