
let navBar = document.querySelector('#header');

document.addEventListener('scroll', () => {
    let scrollTop = window.scrollY

    if(scrollTop > 0) {
        navBar.classList.add('scroll');
    } else {
         navBar.classList.remove('scroll');
    }

})