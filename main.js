var showHamburgerMenu = $('.fa-bars');
showHamburgerMenu.click(function() {
    $('.hamburger-menu').show(500);
});

var hideHamburgerMenu = $('.fa-times');
hideHamburgerMenu.click(function() {
    $('.hamburger-menu').hide(500);
});