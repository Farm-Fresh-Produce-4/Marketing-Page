// MOBILE MENU FUNCTIONALITY

const mobileMenu = document.getElementById('hamburger-menu');
mobileMenu.onclick = function () {
    const menuItems = document.getElementById('mobile-menu-items');
    const shoppingCart = document.getElementById('shopping-cart');
    if (menuItems.style.display == 'none') {
        menuItems.style.display = 'block';
        shoppingCart.style.display = 'none';
    } else {
        menuItems.style.display = 'none';
        shoppingCart.style.display = 'block';
    }

    const navBackground = document.getElementById('mobile-nav');
    if (menuItems.style.display == 'block') {
        navBackground.style.backgroundColor = '#1F2A4C';
        mobileMenu.style.color = 'white';
    } else {
        navBackground.style.backgroundColor = 'white';
        mobileMenu.style.color = 'black';
    }
}