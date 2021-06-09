$(document).ready(function(){

$(".menu").click(function(){
    a = "#"+$(this).attr("id").replace("menu-","");
    $.scrollTo(a,200);

    $(".menu").removeClass("active");
    $(this).addClass("active")
});



$(".participant").click(function(){
    if ($(this).hasClass("active")) {
        $(".participant.active").removeClass("active");        
    } else {
        $(".participant.active").removeClass("active");    
    $(this).addClass("active");    
    }
    
});

    $(document).scroll(function(){


        $(".section").each(function(){

            var docViewTop = $(document).scrollTop();
            var docViewBottom = docViewTop + $(window).height();
            var elemTop = $(this).offset().top;
            var elemBottom = elemTop + $(this).height();
            
                if (docViewTop >= elemTop) {
                     $(".menu").removeClass("active");
                     $("#menu-"+$(this).attr("id")).addClass("active") ;
                }

            })


        
        // $(".section").each(function(){
        //     var docViewTop = $(document).scrollTop();
        //     var docViewBottom = docViewTop + $(window).height();

        //     var elemTop = $(this).offset().top;
        //     var elemBottom = elemTop + $(this).height();

        //     if ((elemBottom <= docViewBottom) && (elemTop >= docViewTop)) {
        //         console.log("f");
        //     }
        // })

    });

})

