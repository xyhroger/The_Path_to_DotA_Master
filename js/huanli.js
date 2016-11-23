function chooseHeroLeft(thisHero) {
    var img_path = thisHero.src.split("/");
    var img_name = img_path[img_path.length - 1].split(".")[0];
    if (img_name != "empty") {
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
    var img_name_show = img_name.split('-').join(' ').toUpperCase();
    d3.select(".hero_left")
        .select(".hero_name")
        .select("a")
        .text(img_name_show);
    }
}

function chooseHeroRight(thisHero) {
    var img_path = thisHero.src.split("/");
    var img_name = img_path[img_path.length - 1].split(".")[0];
    if (img_name != "empty") {
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
    var img_name_show = img_name.split('-').join(' ').toUpperCase();
    d3.select(".hero_right")
        .select(".hero_name")
        .select("a")
        .text(img_name_show);
    }
}

$(document).ready(function(){
    	
    xOffset = 10;
    yOffset = 10;
    pTop = 0;
    pLeft = 0;
    pWidth = 0;
    pHeight= 0;
    x = 0;
    y = 0;
    gifTop = 0;
    gifLeft = 0;
    
    var colorScale = d3.scale.linear()
                        .domain([1, 10])
                        .range(["lime", "red"]);
    for (var i = 1; i <= 10; i++) {
        d3.select("#selected_hero_" + i)
            .style("box-shadow", function() {
                return "0px 0px 10px 3px black" /*+ colorScale(i)*/;
        })
    }
    
    
	$(".pick_hero_icon").hover(function(e){
        $("#preview").remove();
        var windowWidth = $(window).width();
        if (windowWidth >= 900) {
            var $target=$(e.target);
            var file_path = $target.attr("src").split("/");
            var file_name = file_path[file_path.length - 1].split(".")[0];
            var selected = $("#" + file_name).attr("select");
            if (selected == "false") {
                var gif_path = "img/hero_gif/" + file_name + ".gif";
                pos = $target.offset();
                pTop = pos.top;
                pLeft = pos.left;
                pWidth = $target.width();
                pHeight = $target.height();
                x = pLeft + pWidth / 2;
                y = pTop + pHeight / 2;
                var hero_name = file_name.split('-').join(' ');
                if (file_name == "underlord") {
                    $(".pick_group").append("<div id='preview'><img class='img_preview' src='"+ $target.attr("src") +"' alt='Image preview' width='120px' height='150' onclick='chooseThisHero(this)'/>" + "<div id='hero_name' class='special-txt hero_name_small' style='font-size:11px'>" + hero_name + "</div>" + "</div>");
                } else {
		            $(".pick_group").append("<div id='preview'><img class='img_preview' src='"+ gif_path +"' alt='Image preview' width='120px' height='150' onclick='chooseThisHero(this)'/>" + "<div id='hero_name' class='special-txt hero_name_small' style='font-size:11px'>" + hero_name + "</div>" + "</div>");
                }
                var gifWidth = $(".img_preview").width();
                var gifHeight = $(".img_preview").height();
            
                if (x + gifWidth / 2 >= windowWidth - 20) {
                    gifLeft = windowWidth - gifWidth - 20;
                } else if (x - gifWidth / 2 < 0) {
                    gifLeft = 0;
                } else {
                    gifLeft = x - gifWidth / 2;
                }
                gifTop = y - gifHeight / 2;
                $("#preview")
			     .css("top",gifTop + "px")
			     .css("left",gifLeft + "px")
			     .fadeIn("fast");
            }
        }
    },
    function(){	
        $("#preview").hover(
            function() {
                
            },
            function() {
                $("#preview").remove();    
            }
        )
    });
    
	$(".pick_hero_icon").mousemove(function(e){
        $("#preview")
            .css("top",gifTop + "px")
            .css("left",gifLeft + "px")
			 .fadeIn("fast");
	});
});

function chooseThisHero(thisHero) {
    var gif_path = thisHero.src.split("/");
    var gif_name = gif_path[gif_path.length - 1].split(".")[0];
    var img_path = "img/hero_pic/" + gif_name + ".png";
    var selected = false;
    var empty_id = -1;
    for (var i = 1; i <= 10; i++) {
        //alert($("#selected_hero_1").attr('src'));
        if ($("#selected_hero_" + i).attr('src') == img_path) {
            selected = true;
        }
        if ($("#selected_hero_" + i).attr('src') == "img/hero_pic/empty.png" && empty_id == -1) {
            empty_id = i;
        }
    }
    if (selected == false && empty_id != -1) {
        d3.select("#selected_hero_" + empty_id)
        .attr("src", img_path);
        d3.select("#hr_cmp_" + empty_id)
        .attr("src", "img/hero_img/" + gif_name + ".jpg");
        $('#' + gif_name).css("-webkit-filter", "grayscale(100%)")
            .css("-moz-filter", "grayscale(100%)")
            .css("-ms-filter", "grayscale(100%)")
            .css("-o-filter", "grayscale(100%)")
            .css("filter", "grayscale(100%)");
        d3.select("#" + gif_name).attr("select", "true");
    }
    check_if_can_compare()
}

function chooseThisHeroMin(thisHero) {
    var gif_path = thisHero.src.split("/");
    var gif_name = gif_path[gif_path.length - 1].split(".")[0];
    var img_path = "img/hero_pic/" + gif_name + ".png";
    var selected = false;
    var empty_id = -1;
    for (var i = 1; i <= 10; i++) {
        //alert($("#selected_hero_1").attr('src'));
        if ($("#selected_hero_" + i).attr('src') == img_path) {
            selected = true;
        }
        if ($("#selected_hero_" + i).attr('src') == "img/hero_pic/empty.png" && empty_id == -1) {
            empty_id = i;
        }
    }
    if (selected == false && empty_id != -1) {
        d3.select("#selected_hero_" + empty_id)
        .attr("src", img_path);
        d3.select("#hr_cmp_" + empty_id)
        .attr("src", "img/hero_img/" + gif_name + ".jpg");
        $('#' + gif_name).css("-webkit-filter", "grayscale(100%)")
            .css("-moz-filter", "grayscale(100%)")
            .css("-ms-filter", "grayscale(100%)")
            .css("-o-filter", "grayscale(100%)")
            .css("filter", "grayscale(100%)");
        d3.select("#" + gif_name).attr("select", "true");
    }
    check_if_can_compare()
}

function removeThisHero(thisHero) {
    var img_path = thisHero.src.split("/");
    var img_name = img_path[img_path.length - 1].split(".")[0];
    var cmp_img_path = "img/hero_img/" + img_name + ".jpg";
    $('#' + img_name).css("-webkit-filter", "grayscale(0%)")
            .css("-moz-filter", "grayscale(0%)")
            .css("-ms-filter", "grayscale(0%)")
            .css("-o-filter", "grayscale(0%)")
            .css("filter", "grayscale(0%)");
    d3.select("#" + img_name).attr("select", "false");
    for (var i = 1; i <= 10; i++) {
        //alert($("#selected_hero_1").attr('src'));
        if ($("#hr_cmp_" + i).attr('src') == cmp_img_path) {
            $("#hr_cmp_" + i).attr('src', "img/hero_img/empty.jpg");
            break;
        }
    }
    thisHero.src = "img/hero_pic/empty.png";
    check_if_can_compare()
}

function compare(thisBtn) {
    $("#preview").remove();
    
    
    
    
}

function check_if_can_compare() {
    var emptyNum = 0;
    for (var i = 1; i <= 10; i++) {
        if ($("#selected_hero_" + i).attr('src') == "img/hero_pic/empty.png") {
            emptyNum++;
        }
    }
    if (emptyNum != 0) {
        d3.select(".compare_button")
            .attr("disabled", "disabled");
    } else {
        d3.select(".compare_button")
            .attr("disabled", null);
    }
}

$(document).ready(function() {
        var width = document.getElementById('left-team').offsetWidth / 8;
        //alert(width);
		var height = width;
		var dataset = [36 , 64];
		
		var svg = d3.selectAll("#win-rate-left")
                    //.append("svg")
					.attr("width", width)
					.attr("height", width);
		
		var pie = d3.layout.pie();

		var piedata = pie(dataset);
		
		var outerRadius = width / 2;	//外半径
		var innerRadius = width / 2 - (width < 30 ? 2 : 3);	//内半径，为0则中间没有空白

		var arc = d3.svg.arc()	//弧生成器
					.innerRadius(innerRadius)	//设置内半径
					.outerRadius(outerRadius);	//设置外半径
		
		var color = d3.scale.category10();
		
		var arcs = svg.selectAll("g")
					  .data(piedata)
					  .enter()
					  .append("g")
					  .attr("transform","translate("+ (width/2) +","+ (width/2) +")");
					  
		arcs.append("path")
			.attr("fill",function(d,i){
				if (i < 1) {
                    return "dimgray";
                } else {
                    return "green";
                }
			})
			.attr("d",function(d){
				return arc(d);
			});
		
		arcs.append("text")
            .attr("text-anchor","middle")
            .attr("transform","translate("+ 0 +","+ (width/9) +")")
            .attr("font-size", width / 4)
			.text(function() {
                return dataset[1] + "%";
            });
    window.onresize = function() {
        d3.selectAll("#win-rate-left").remove();
        var width = document.getElementById('left-team').offsetWidth / 8;
		var height = width;
		var dataset = [36 , 64];
		
		var svg = d3.selectAll("#win-rate")
                    .append("svg")
                    .attr("id", "win-rate-left")
					.attr("width", width)
					.attr("height", width);
		
		var pie = d3.layout.pie();

		var piedata = pie(dataset);
		
		var outerRadius = width / 2;  //外半径
		var innerRadius = width / 2 - (width < 30 ? 2 : 3);	//内半径，为0则中间没有空白

		var arc = d3.svg.arc()	//弧生成器
					.innerRadius(innerRadius)	//设置内半径
					.outerRadius(outerRadius);	//设置外半径
		
		var color = d3.scale.category10();
		
		var arcs = svg.selectAll("g")
					  .data(piedata)
					  .enter()
					  .append("g")
					  .attr("transform","translate("+ (width/2) +","+ (width/2) +")");
					  
		arcs.append("path")
			.attr("fill",function(d,i){
				if (i < 1) {
                    return "dimgray";
                } else {
                    return "green";
                }
			})
			.attr("d",function(d){
				return arc(d);
			});
		
		arcs.append("text")
            .attr("text-anchor","middle")
            .attr("transform","translate("+ 0 +","+ (width/9) +")")
            .attr("font-size", width / 4)
			.text(function() {
                return dataset[1] + "%";
            });
        }
})


