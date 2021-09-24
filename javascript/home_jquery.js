$(".pravel").hover(function () {
    //stuff to do on mouse enter
    
}, 
function () {
    //stuff to do on mouse leave
    
});

$(".projectText").hover(function () {
    //stuff to do on mouse enter
    if($(parent).hasClass("pravel")){
        $(".pravel").css("background-image", "/images/pravel-portada-480.jpg");
    } 
    else if ($(parent).hasClass("usda")){
        $(".usda").css("background-image", "/images/usda-portada-480.jpg");
    }
    else if ($(parent).hasClass("vent")){
        $(".vent").css("background-image", "/images/ven-t-portada-480.jpg");
    }
    else if ($(parent).hasClass("otherProjects")){
        $(".otherProjects").css("background-image", "/images/combo-other-projects-480.jpg");
    }
}, 
function () {
    //stuff to do on mouse leave
    if($(parent).hasClass("pravel")){
    $(".pravel").css("background-image", "none");
    }
    else if ($(parent).hasClass("usda")){
        $(".usda").css("background-image", "none");
    }
    else if ($(parent).hasClass("vent")){
        $(".vent").css("background-image", "none");
    }
    else if ($(parent).hasClass("otherProjects")){
        $(".otherProjects").css("background-image", "none");
    }
});