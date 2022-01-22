var x = true;
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function(){
    this.classList.toggle('is-active');
    if(x){
        x = false;
        document.querySelector('.menu').style.display = "grid";
        document.querySelector('.menu').style.animation = 'showMenu 500ms none';
    }        

    else{
        x = true;
        document.querySelector('.menu').style.animation = 'hideMenu 500ms none';
        setTimeout(hide, 500)
    }
})

function hide(){
    document.querySelector('.menu').style.display = 'none';
}