$(document).ready(function() {
    $('#toggle-top-menu').click(function() {
        $("div.down-arrow").toggleClass('rotate');
        $('.top-nav').toggleClass("show-top-nav");
    });
});


// $(document).ready(function() {
//     $('#toggle_bottom_menu').click(function() {
//         $(this).toggleClass('rotate');
//         $('.bottom_nav').toggleClass("show_bottom_nav");
//     });
// });