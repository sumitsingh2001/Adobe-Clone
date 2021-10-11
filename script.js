
const subNav = document.querySelector('.subContainer')
const subNavOffsetTop = subNav.offsetTop
 
window.addEventListener('scroll',() => {
    if(window.pageYOffset >= subNavOffsetTop){
        subNav.classList.add('sticky')
    }
    else{
        subNav.classList.remove('sticky')
    }
    
})

