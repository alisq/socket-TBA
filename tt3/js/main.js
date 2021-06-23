$("#circle").draggable({
    containment: "#wrapper", scroll: false,
    
    drag: function() {
    
        var offset = $(this).offset();
        var xPos = offset.left+25;
        var yPos = offset.top+25;
        frameDirection(xPos,yPos)
  }
}).click(function(){
    $(this).css({
        "top":$(window).height()/2,
        "left":$(window).width()/2
    })
    frameDirection($(window).width()/2,$(window).height()/2)
})




function frameDirection(xPos,yPos) {
    $("#direction__1").css({
        "width": xPos,
        "height":yPos
    })


    $("#direction__2").css({
        "width": $(window).width()-xPos,
        "height":yPos,
        "left":xPos
    })


    $("#direction__3").css({
        "width": xPos,
        "height":$(window).height()-yPos,
        "top":yPos
    })

    $("#direction__4").css({
        "width": $(window).width()-xPos,
        "height":$(window).height()-yPos,
        "top":yPos,
        "left":xPos
    })
}