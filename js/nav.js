

const navBar = document.getElementById('bar');
const navLinks = document.getElementById('menu');


navBar.addEventListener('click', ()=>{

    navLinks.classList.toggle('active');

    if(navBar.classList.contains('bar')){

        navBar.classList.remove('bar');
        navBar.classList.add('fa-xmark')
    }

    else{

        navBar.classList.remove('fa-xmark');
        navBar.classList.add('bar')
    }

})


