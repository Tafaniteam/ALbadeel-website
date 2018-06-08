//animate smooth scroll
$('#our-services').on('click', function() {
    const text = $('#tint').position().top;

    $('html,body').animate(
     {
        scrolltop: text
     },
     500
    );
});