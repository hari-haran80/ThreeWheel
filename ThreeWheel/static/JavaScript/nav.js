// Script for changing the button to open and close
const Button = document.getElementById('buttonToggle');
const blackScreen = document.querySelector('.nav');
const mainScreen = document.querySelector('.nav-list');

Button.addEventListener("click", () => {
    if (Button.classList.contains('fa-bars')) {
        Button.classList.remove('fa-bars');
        Button.classList.add('fa-x');
        blackScreen.style.right = "-8px";
        mainScreen.style.right = "-8px";
    } else {
        Button.classList.remove('fa-x');
        Button.classList.add('fa-bars');
        blackScreen.style.right = "-100%";
        mainScreen.style.right = "-100%";
    }
});


//  Script for adding the class active to the Nav Links

const activePage = window.location.pathname;
const navLink = document.querySelectorAll('.Nav-link').forEach(link =>{
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
    }
})
