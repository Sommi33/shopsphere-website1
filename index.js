let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');

//open cart
cartIcon.addEventListener('click', () =>{
    cart.classList.add("active");
    cartIcon.style.display = 'none';
});
//close cart
closeCart.addEventListener('click', () => {
    cart.classList.remove('active');
    cartIcon.style.display = 'block';
});

// Cart working JS
if(document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

//Function
function ready(){
    var removeCartButtons = document.getElementsByClassName('cart-remove');
    console.log(removeCartButtons);
    for (var i = 0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem);
    }
}

// Remove Items From Cart
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
}

//About US
let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-links");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-links");
    document.getElementById(tabname).classList.add("active-tab");
};
//Sidemenu
let sidemenu = document.getElementById("sidemenu");
let menu = document.querySelector('.fa-solid2');

function openmenu(){
    sidemenu.style.right = '0';
    menu.style.display = 'none';
}
function closemenu(){
    sidemenu.style.right = '-200px';
    menu.style.display = 'block';
}
//Feedback
document.getElementById('feedback').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === "" || email === "" || message === ""){
        alert("Please fill in all fields before submitting.");
        event.preventDefault();
    }
});