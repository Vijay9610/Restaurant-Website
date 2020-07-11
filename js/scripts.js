$(document).ready(function(){
    $("#mycarousel").carousel({ interval: 2000 });
    $("#carouselButton").click(function(){
        if($("#carouselButton").children('span').hasClass('fa-pause')){
            $("#mycarousel").carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else{
            $("#mycarousel").carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
        
    });
   
});

// JQuery code for controlling modals
$(document).ready(function(){
    //JQuery code for login modal buttons
    $("#login").click(function(){
        $("#loginModal").modal('toggle');
    });
    $("#login_cancel").click(function(){
        $("#loginModal").modal('hide');
    });
    
    //JQuery code for close button
    $(".close").click(function(){
        $("#loginModal").modal('hide');
        $("#reserve_table").modal('hide');
    });

    //JQuery code for reserve table modal buttons
    $("#reserve_button").click(function(){
        $("#reserve_table").modal('toggle');
    });

    $("#reserve_cancel").click(function(){
        $("#reserve_table").modal('hide');
    });
});