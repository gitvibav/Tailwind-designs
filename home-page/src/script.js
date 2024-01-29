var sec = document.getElementById('sec');

function dropdown() {
    if (sec.classList.contains('opacity-0')) {
        sec.style.height = sec.scrollHeight + "px";
        sec.classList.remove('opacity-0');
        sec.classList.add('opacity-100');
    } else {
        sec.classList.remove('opacity-100');
        sec.classList.add('opacity-0');
    }
}

var cart = document.getElementById('cart');

function cartClick(){
    if(cart.classList.contains('opacity-0')){
        cart.style.height = cart.scrollHeight + "px";
        cart.classList.remove('opacity-0');
        cart.classList.add('opacity-100');
    }
    
    else{
        cart.classList.remove('opacity-100');
        cart.classList.add('opacity-0');
    }
}
