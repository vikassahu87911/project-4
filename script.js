function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
(function welcome(){
const   write = prompt("Enter your name:");
const welcomeNote = document.querySelector('.welcome-note p');
if (write!=='') {
    welcomeNote.innerHTML = `Welcome, ${write}!`;
}
else{
    alert("Required!! Please enter your name.");
    welcome();
}

})();

let cart = [];

function addToCart(serviceName, price) {
    const item = { name: serviceName, price: price };
    if(cart.find(existingItem => existingItem.name === serviceName)){
        cart = cart.filter(existingItem => existingItem.name !== serviceName);
         if(item.name === "Dry Cleaning") 
         {
                document.querySelector('.dryClean').innerHTML = "Add to Cart";
         }
         if(item.name === "Wash & Fold")
         {
        document.querySelector('.wash').innerHTML = "Add to Cart";
        }
         if(item.name === "Ironing")
         {
        document.querySelector('.iron').innerHTML = "Add to Cart";
        }
         if(item.name === "Wash & Fold")
         {
        document.querySelector('.wash').innerHTML = "Add to Cart";
        }
         if(item.name === "Stain Removal")
         {
        document.querySelector('.stain').innerHTML = "Add to Cart";
        }
         if(item.name === "Leather and Suede Cleaning")
         {
        document.querySelector('.leather').innerHTML = "Add to Cart";
        }
         if(item.name === "Wedding Dress Cleaning")
         {
        document.querySelector('.wedding').innerHTML = "Add to Cart";
        }
        updateCartDisplay();
    }
    else{
    cart.push(item);
    alert(`${serviceName} added to cart!`);
    updateCartDisplay();
     if(item.name === "Dry Cleaning") 
    {
        document.querySelector('.dryClean').innerHTML = "Remove from Cart";

    }
   
     if(item.name === "Wash & Fold") 
    {
        document.querySelector('.wash').innerHTML = "Remove from Cart";

    }
     if(item.name === "Stain Removal") 
    {
        document.querySelector('.stain').innerHTML = "Remove from Cart";

    }
     if(item.name === "Leather and Suede Cleaning") 
    {
        document.querySelector('.leather').innerHTML = "Remove from Cart";

    }
     if(item.name === "Wedding Dress Cleaning") 
    {
        document.querySelector('.wedding').innerHTML = "Remove from Cart";

    }
     if(item.name === "Ironing") 
    {
        document.querySelector('.iron').innerHTML = "Remove from Cart";

    }
   

    }}



function updateCartDisplay() {
    const cartItemsDiv = document.querySelector('.cart-items');
    const cartTotalSpan = document.getElementById('cart-total');
    
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>No items in cart</p>';
        cartTotalSpan.textContent = '0.00';
        return;
    }
    
    let html = '';
    let total = 0;
    
    cart.forEach(item => {
        html += `
            <div class="cart-item">
                <span>${cart.findIndex(existingItem => existingItem.name === item.name) + 1}</span>
                <span>${item.name}</span>
                <div>
                    <span>$${item.price.toFixed(2)}</span>
                    
                </div>
            </div>
        `;
        total += item.price;
    });
    
    cartItemsDiv.innerHTML = html;
    cartTotalSpan.textContent = total.toFixed(2);
}

(function() {
    emailjs.init("_0Y3LVrgKeaCAbDi3");
})();

document.getElementById('book_now').addEventListener('click', function() {

const username = document.getElementById('username');
const uemail = document.getElementById('useremail');
const phone = document.getElementById('userphone'); 

const emailparams = {
    user_name: username.value,
    email_id: uemail.value,
    message : `Thank you for choosing us! Your booking has been confirmed. We will contact you soon at ${phone.value}`
};

emailjs.send('service_io8io9f', 'template_50h97qo', emailparams)
.then(alert('Your booking has been confirmed! A confirmation email has been sent to you.')
,
    username.value = '',
    uemail.value = '',
    phone.value = '',
    cart = [],
    updateCartDisplay()
    // location.reload()


);
});

document.getElementById('subscribe').addEventListener('click', function() {

const subscriberName = document.getElementById('subscriber-name').value;
const subscriberEmail = document.getElementById('subscriber-email').value;

const subscriptionParams = {
    to_email: subscriberEmail,
    message : `Thank you for subscribing to our newsletter, ${subscriberName}! You will receive updates and promotions at ${subscriberEmail}.`
};

emailjs.send('service_io8io9f', 'template_qf1q5er', subscriptionParams)
.then(alert('You have successfully subscribed to our newsletter!')
)

});
