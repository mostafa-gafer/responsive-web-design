$(document).ready(function(){
    $('.carousel').carousel({
        interval:5000 
    })
    //show color option div when click on the gear
    $('.option-box .gear-check').click(function(){
        $('.option-box .optoin-color').fadeToggle();
        $(".option-box li").each(function(i) {
        $(this).delay(100 * i).fadeIn(500);
    });
        });
        //change theme color on click
    var colorLi = $('.option-box .optoin-color ul li');
        colorLi    
           .eq(0).css("backgroundColor","#d9534f").end()
           .eq(1).css("backgroundColor","#da74e2").end()
           .eq(2).css("backgroundColor","#2d49d6").end()
           .eq(3).css("backgroundColor","#d9bc4f").end()
           .eq(4).css("backgroundColor","#4fd97491").end()
           .eq(5).css("backgroundColor","#4fd2d9").end();
        
        colorLi.click(function(){
           $("link[href*='theme']").attr("href", $(this).attr("data-value")); 
        });
    //caching the scroll top 
    var scrollButton = $('#scroll_top');
    $(window).scroll(function(){
        if($(this).scrollTop() >= 700)
        {
            scrollButton.show();
        }
        else
        {
            scrollButton.hide();
        }
        
    });
    // to make action on button
    //shoud be out of window scroll function
        scrollButton.click(function(){
            $("html,body").animate({scrollTop : 0},600);
        });
    

});
//to make loading screen
//why not load ????
$(window).on('load',function(){
   $(".load_overlay .sk-cube-grid").fadeOut(2000,
      function(){
         $(this).parent().fadeOut(2000,
            function(){
               $(this).remove();
            });
         $("body").css("overflow","auto");
       });
});