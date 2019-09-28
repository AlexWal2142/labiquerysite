$(document).ready(function(){
    $("#alex").click(function(){
        $("#hide").fadeOut()
    });
    $("#hide").wrap($('<a>',{
   href: 'https://fractalsoftworks.com/'
    }));
    $("#hide").hover(function() {
    alert("Clicking me will leave the page");
    });
    $("#walker").click(function(){
        $("#hide2").removeAttr('hidden');
    });
    $("#hide2").wrap($('<a>',{
   href: 'https://fractalsoftworks.com/'
    }));
    $('.audio').prop("volume", 0.5);
    $('#music').click(function(){
        $("#G")[0].play();
    });
    });
