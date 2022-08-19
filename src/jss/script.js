window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.mmenu'),
    menuItem = document.querySelectorAll('.mmenu_item'),
    hamburger = document.querySelector('.bigmack');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('bigmack_active');
        menu.classList.toggle('mmenu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('bigmack_active');
            menu.classList.toggle('mmenu_active');
        })
    })
})