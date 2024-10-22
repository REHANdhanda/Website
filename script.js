// Handle the newsletter subscription form
document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for subscribing!');
    document.querySelector('input[type="email"]').value = '';
});

// Handle adding items to cart (for demo purposes)
const cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const product = this.closest('.product').querySelector('h4').innerText;
        cart.push(product);
        alert(product + ' added to cart');
    });
});
document.getElementById('shop-now-button').addEventListener('click', function() {
    // Scroll to the shop section
    document.getElementById('shop-section').scrollIntoView({ behavior: 'smooth' });
    
    // After scrolling, add the visible class to the section for the fade-in effect
    setTimeout(function() {
        document.getElementById('shop-section').classList.add('visible');
    }, 500); // Slight delay to allow the scroll to happen first
});
