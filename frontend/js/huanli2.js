function chooseHeroLeft(thisHero) {
    var img_path = thisHero.src.split("/");
    var img_name = img_path[img_path.length - 1].split(".")[0];
    var gif_path = "img/hero_compare_gif/" + img_name + ".gif";
    var id = thisHero.id;
    $('#' + id).css("-webkit-filter", "grayscale(0%)")
            .css("-moz-filter", "grayscale(0%)")
            .css("-ms-filter", "grayscale(0%)")
            .css("-o-filter", "grayscale(0%)")
            .css("filter", "grayscale(0%)");
    /*d3.select("#" + id)
        .style("filter", "grayscale(0)");*/
    if (id != "hr_cmp_1") {
        /*d3.select("#hr_cmp_1")
            .style("webkitFilter", "grayscale(100%)")
            .style("mozFilter", "grayscale(100%)")
            .style("msFilter", "grayscale(100%)")
            .style("oFilter", "grayscale(100%)")
            .style("filter", "grayscale(100%)");*/
        $('#hr_cmp_1').css("-webkit-filter", "grayscale(100%)")
            .css("-moz-filter", "grayscale(100%)")
            .css("-ms-filter", "grayscale(100%)")
            .css("-o-filter", "grayscale(100%)")
            .css("filter", "grayscale(100%)");
    }
    if (id != "hr_cmp_2") {
        $('#hr_cmp_2').css("-webkit-filter", "grayscale(100%)")
            .css("-moz-filter", "grayscale(100%)")
            .css("-ms-filter", "grayscale(100%)")
            .css("-o-filter", "grayscale(100%)")
            .css("filter", "grayscale(100%)");
    }
    if (id != "hr_cmp_3") {
        $('#hr_cmp_3').css("-webkit-filter", "grayscale(100%)")
            .css("-moz-filter", "grayscale(100%)")
            .css("-ms-filter", "grayscale(100%)")
            .css("-o-filter", "grayscale(100%)")
            .css("filter", "grayscale(100%)");
    }
    if (id != "hr_cmp_4") {
        $('#hr_cmp_4').css("-webkit-filter", "grayscale(100%)")
            .css("-moz-filter", "grayscale(100%)")
            .css("-ms-filter", "grayscale(100%)")
            .css("-o-filter", "grayscale(100%)")
            .css("filter", "grayscale(100%)");
    }
    if (id != "hr_cmp_5") {
        $('#hr_cmp_5').css("-webkit-filter", "grayscale(100%)")
            .css("-moz-filter", "grayscale(100%)")
            .css("-ms-filter", "grayscale(100%)")
            .css("-o-filter", "grayscale(100%)")
            .css("filter", "grayscale(100%)");
    }
    d3.select(".hero_show_left")
        .attr("src", gif_path);
    var img_name_show = img_name.replace("-", " ").toUpperCase();
    d3.select(".hero_left")
        .select(".hero_name")
        .text(img_name_show);
}

function chooseHeroRight(thisHero) {
    var img_path = thisHero.src.split("/");
    var img_name = img_path[img_path.length - 1].split(".")[0];
    var gif_path = "img/hero_compare_gif/" + img_name + ".gif";
    var id = thisHero.id;
    $('#' + id).css("-webkit-filter", "grayscale(0%)")
            .css("-moz-filter", "grayscale(0%)")
            .css("-ms-filter", "grayscale(0%)")
            .css("-o-filter", "grayscale(0%)")
            .css("filter", "grayscale(0%)");
    if (id != "hr_cmp_6") {
        /*d3.select("#hr_cmp_1")
            .style("webkitFilter", "grayscale(100%)")
            .style("mozFilter", "grayscale(100%)")
            .style("msFilter", "grayscale(100%)")
            .style("oFilter", "grayscale(100%)")
            .style("filter", "grayscale(100%)");*/
        $('#hr_cmp_6').css("-webkit-filter", "grayscale(100%)")
            .css("-moz-filter", "grayscale(100%)")
            .css("-ms-filter", "grayscale(100%)")
            .css("-o-filter", "grayscale(100%)")
            .css("filter", "grayscale(100%)");
    }
    if (id != "hr_cmp_7") {
        $('#hr_cmp_7').css("-webkit-filter", "grayscale(100%)")
            .css("-moz-filter", "grayscale(100%)")
            .css("-ms-filter", "grayscale(100%)")
            .css("-o-filter", "grayscale(100%)")
            .css("filter", "grayscale(100%)");
    }
    if (id != "hr_cmp_8") {
        $('#hr_cmp_8').css("-webkit-filter", "grayscale(100%)")
            .css("-moz-filter", "grayscale(100%)")
            .css("-ms-filter", "grayscale(100%)")
            .css("-o-filter", "grayscale(100%)")
            .css("filter", "grayscale(100%)");
    }
    if (id != "hr_cmp_9") {
        $('#hr_cmp_9').css("-webkit-filter", "grayscale(100%)")
            .css("-moz-filter", "grayscale(100%)")
            .css("-ms-filter", "grayscale(100%)")
            .css("-o-filter", "grayscale(100%)")
            .css("filter", "grayscale(100%)");
    }
    if (id != "hr_cmp_10") {
        $('#hr_cmp_10').css("-webkit-filter", "grayscale(100%)")
            .css("-moz-filter", "grayscale(100%)")
            .css("-ms-filter", "grayscale(100%)")
            .css("-o-filter", "grayscale(100%)")
            .css("filter", "grayscale(100%)");
    }
    d3.select(".hero_show_right")
        .attr("src", gif_path);
    var img_name_show = img_name.replace("-", " ").toUpperCase();
    d3.select(".hero_right")
        .select(".hero_name")
        .text(img_name_show);
}
/*$(".pick_hero_icon").tooltip({ content: '<img src="img/hero_gif/abaddon.gif" />' }); */
/*$(function(){
    var offsetX=20-$(".pick_group").offset().left;
    var offsetY=20-$(".pick_group").offset().top;
    var size=1.2*$('.pick_hero_icon').width();
    $(".pick_hero_icon").mouseover(function(event) {
        var $target=$(event.target);
        if($target.is('img')) {
            var file_path = $target.attr("src").split("/");
            var file_name = file_path[file_path.length - 1].split(".")[0];
            var gif_path = "img/hero_gif/" + file_name + ".gif";
            $("<img id='tip' src='"+gif_path+"'>").css({
                "top":event.pageX,
                "left":event.pageY,
            }).appendTo(".pick_hero_icon");
        }
    }).mouseout(function() {
        $("#tip").remove();
    }).mousemove(function(event) {
        $("#tip").css(
            {
                "left":5,
                "top":5
            });
    });
})*/


// starting the script on page load
$(document).ready(function(){
		
    xOffset = 10;
    yOffset = 10;
    
	$(".pick_hero_icon").hover(function(e){
        var windowWidth = $(window).width();
        if (windowWidth >= 900) {
            var $target=$(e.target);
            var file_path = $target.attr("src").split("/");
            var file_name = file_path[file_path.length - 1].split(".")[0];
            var gif_path = "img/hero_gif/" + file_name + ".gif";
		    $(".pick_group").append("<p id='preview'><img class='img_preview' src='"+ gif_path +"' alt='Image preview' width='130px'/>" + "</p>");								 
            var xPos = e.pageX;
            if (xPos + yOffset + $(".img_preview").width() >= windowWidth) {
                $("#preview")
			     .css("top",(e.pageY - xOffset) + "px")
			     .css("left",(e.pageX - yOffset - $(".img_preview").width()) + "px")
			     .fadeIn("fast");
            } else {
                $("#preview")
			     .css("top",(e.pageY - xOffset) + "px")
			     .css("left",(e.pageX + yOffset) + "px")
			     .fadeIn("fast");
            }
        }
    },
	function(){	
		$("#preview").remove();
    });	
	$(".pick_hero_icon").mousemove(function(e){
        var windowWidth = $(window).width();
        if (windowWidth >= 900) {
            var xPos = e.pageX;
            if (xPos + yOffset + $(".img_preview").width() >= windowWidth) {
                $("#preview")
			     .css("top",(e.pageY - xOffset) + "px")
			     .css("left",(e.pageX - yOffset - $(".img_preview").width()) + "px")
			     .fadeIn("fast");
            } else {
                $("#preview")
			     .css("top",(e.pageY - xOffset) + "px")
			     .css("left",(e.pageX + yOffset) + "px")
			     .fadeIn("fast");
            }
        }
	});
});