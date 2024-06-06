$(function() {
    $('button').on('click', function() {
        // $(this).toggleClass('active');
        $('.hamburger').toggle();
        $('.close').toggle();
        $('.menu').toggleClass('showmenu');
    });
});



// $(document).ready(function(){
//     $('button').click(function() {
//           $(this).toggleClass('active');
//        $('.hamburger').toggle();
//        $('.close').toggle();
//        $('showmenu').toggleClass('active');
//     });
//   });