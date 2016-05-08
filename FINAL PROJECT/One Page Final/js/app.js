
//burger



//changes while scrolling in CSS

$(document).ready(function () {

    $(window).scroll(function (){
        var scrollTop = $(window).scrollTop()
        
        if (scrollTop > 1500) {
            $('header').css('background', 'white')
        } else {
           $('body').css('background', 'white')
        }
    })
})

 

// carousel

$('#burger').click(function () {
    $('navOne').slideToggle();
        display: inline;

});

//gallery

 $(function(){
        var scroller = $('#scroller div.innerScrollArea');
        var scrollerContent = scroller.children('ul');
        scrollerContent.children().clone().appendTo(scrollerContent);
        var curX = 0;
        scrollerContent.children().each(function(){
            var $this = $(this);
            $this.css('left', curX);
            curX += $this.outerWidth(true);
        });
        var fullW = curX / 2;
        var viewportW = scroller.width();

        // scroll speed 
        var controller = {curSpeed:0, fullSpeed:2};
        var $controller = $(controller);
        var tweenToNewSpeed = function(newSpeed, duration)
        {
            if (duration === undefined)
                duration = 600;
            $controller.stop(true).animate({curSpeed:newSpeed}, duration);
        };

        // pause on hover
        scroller.hover(function(){
            tweenToNewSpeed(0);
        }, function(){
            tweenToNewSpeed(controller.fullSpeed);
        });

        // start automatic scrolling
        var doScroll = function()
        {
            var curX = scroller.scrollLeft();
            var newX = curX + controller.curSpeed;
            if (newX > fullW*2 - viewportW)
                newX -= fullW;
            scroller.scrollLeft(newX);
        };
        setInterval(doScroll, 20);
        tweenToNewSpeed(controller.fullSpeed);
    });


// Grid//

$('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: 625
});


// scroll through//

$(document).ready( function() {
    $('.navOne').smint();
});


// carousel

$('.carousel').slick({
});
// burger







    
