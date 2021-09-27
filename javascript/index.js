$(".projectText").mouseenter(function () {
    //stuff to do on mouse enter
    if($(this).parent().hasClass("pravel") && ($(window).width()>1000)){
        $(".pravel").css("background-image", "url('https://thysreg.github.io/portfoliohtml/images/pravel-portada-480.jpg')");
    } 
    else if ($(this).parent().hasClass("usda") && ($(window).width()>1000)){
        $(".usda").css("background-image", "url('https://thysreg.github.io/portfoliohtml/images/usda-portada-480.jpg')");
    }
    else if ($(this).parent().hasClass("vent") && ($(window).width()>1000)){
        $(".vent").css("background-image", "url('https://thysreg.github.io/portfoliohtml/images/ven-t-portada-480.jpg')");
    }
    else if ($(this).parent().hasClass("otherProjects") && ($(window).width()>1000)){
        $(".otherProjects").css("background-image", "url('https://thysreg.github.io/portfoliohtml/images/combo-other-projects-480.jpg')");
    }
},); 
$(".projectText").mouseleave(function () {
    //stuff to do on mouse leave
    if($(this).parent().hasClass("pravel") && ($(window).width()>1000)){
    $(".pravel").css("background-image", "none");
    }
    else if ($(this).parent().hasClass("usda") && ($(window).width()>1000)){
        $(".usda").css("background-image", "none");
    }
    else if ($(this).parent().hasClass("vent") && ($(window).width()>1000)){
        $(".vent").css("background-image", "none");
    }
    else if ($(this).parent().hasClass("otherProjects") && ($(window).width()>1000)){
        $(".otherProjects").css("background-image", "none");
    }
});

/* Not usefull but want to know why it did not work

$(document).ready(function() {
    checkSize();
    $(window).resize(checkSize);
})
function checkSize () {
if($(".project").hasClass("col-3") ){
    $(".project").removeClass("col-3");
} 
}
*/