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
        d3.select("#hero_name_left")
            .select("a")
            .text(img_name_show);
        d3.select("#line-left")
            .select(".fill")
            .attr("data-percentage", hero_attributes[img_name]["lane"] * 10);
        d3.select("#dps-left")
            .select(".fill")
            .attr("data-percentage", hero_attributes[img_name]["dps"] * 10);
        d3.select("#push-left")
            .select(".fill")
            .attr("data-percentage", hero_attributes[img_name]["push"] * 10);
        d3.select("#nuke-left")
            .select(".fill")
            .attr("data-percentage", hero_attributes[img_name]["nuke"] * 10);
        d3.select("#durable-left")
            .select(".fill")
            .attr("data-percentage", hero_attributes[img_name]["durable"] * 10);
        d3.select("#initial-left")
            .select(".fill")
            .attr("data-percentage", hero_attributes[img_name]["initial"] * 10);
        d3.select("#disable-left")
            .select(".fill")
            .attr("data-percentage", hero_attributes[img_name]["disable"] * 10);
        d3.select("#healing-left")
            .select(".fill")
            .attr("data-percentage", hero_attributes[img_name]["healing"] * 10);
        $("#line-left").barfiller({});
        $("#dps-left").barfiller({});
        $("#push-left").barfiller({});
        $("#nuke-left").barfiller({});
        $("#durable-left").barfiller({});
        $("#initial-left").barfiller({});
        $("#disable-left").barfiller({});
        $("#healing-left").barfiller({});
        var thisHeroIndex = thisHero.id.split("_")[2] - 1;
        chart3.load({columns: [['Combo', leftCombo[thisHeroIndex].toFixed(2)]]});
        chart4.load({columns: [['Anti', leftAnti[thisHeroIndex].toFixed(2)]]});
        var antiHero_path = $('.hero_show_right').attr('src').split("/");
        var antiHero = antiHero_path[antiHero_path.length - 1].split(".")[0];
        chart2.load({columns: [['WinRate(CMP)', herohero[img_name][antiHero]]]});
        chart1.load({columns: [['WinRate(TOTAL)', winRate["winrate"][img_name]]]});
        chart6.load({columns: [['WinRate(CMP)', herohero[antiHero][img_name]]]});
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
        d3.select("#hero_name_right")
            .select("a")
            .text(img_name_show);
        d3.select("#line-right")
            .select(".fill")
            .attr("data-percentage", hero_attributes[img_name]["lane"] * 10);
        d3.select("#dps-right")
            .select(".fill")
            .attr("data-percentage", hero_attributes[img_name]["dps"] * 10);
        d3.select("#push-right")
            .select(".fill")
            .attr("data-percentage", hero_attributes[img_name]["push"] * 10);
        d3.select("#nuke-right")
            .select(".fill")
            .attr("data-percentage", hero_attributes[img_name]["nuke"] * 10);
        d3.select("#durable-right")
            .select(".fill")
            .attr("data-percentage", hero_attributes[img_name]["durable"] * 10);
        d3.select("#initial-right")
            .select(".fill")
            .attr("data-percentage", hero_attributes[img_name]["initial"] * 10);
        d3.select("#disable-right")
            .select(".fill")
            .attr("data-percentage", hero_attributes[img_name]["disable"] * 10);
        d3.select("#healing-right")
            .select(".fill")
            .attr("data-percentage", hero_attributes[img_name]["healing"] * 10);
        $("#line-right").barfiller({});
        $("#dps-right").barfiller({});
        $("#push-right").barfiller({});
        $("#nuke-right").barfiller({});
        $("#durable-right").barfiller({});
        $("#initial-right").barfiller({});
        $("#disable-right").barfiller({});
        $("#healing-right").barfiller({});
        var thisHeroIndex = thisHero.id.split("_")[2] - 1 - 5;
        chart7.load({columns: [['Combo', rightCombo[thisHeroIndex].toFixed(2)]]});
        chart8.load({columns: [['Anti', rightAnti[thisHeroIndex].toFixed(2)]]});
        var antiHero_path = $('.hero_show_left').attr('src').split("/");
        var antiHero = antiHero_path[antiHero_path.length - 1].split(".")[0];
        chart6.load({columns: [['WinRate(CMP)', herohero[img_name][antiHero]]]});
        chart5.load({columns: [['WinRate(TOTAL)', winRate["winrate"][img_name]]]});
        chart2.load({columns: [['WinRate(CMP)', herohero[antiHero][img_name]]]});
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
    
    chart1 = c3.generate({
        bindto: '#chart1',
        data: {
            columns: [
                ['win-rate', 0]
            ],
            type: 'gauge',
        },
        gauge: {
            min: 0,
            max: 100,
        },
        color: {
            pattern: ['#FF0000', '#FF8000', '#FFFF00', '#80FF00', '#00FF00'], // the three color levels for the percentage values.
            threshold: {
//            unit: 'value', // percentage is default
//            max: 200, // 100 is default
                values: [40, 48, 52, 55, 60]
            }
        },
        size: {
            height: 60
        }
        
    });
    chart2 = c3.generate({
        bindto: '#chart2',
        data: {
            columns: [
                ['win-rate', 0]
            ],
            type: 'gauge',
        },
        gauge: {

        },
        color: {
            pattern: ['#FF0000', '#FF8000', '#FFFF00', '#80FF00', '#00FF00'], // the three     color levels for the percentage values.
            threshold: {
//            unit: 'value', // percentage is default
//            max: 200, // 100 is default
                values: [40, 48, 52, 55, 60]
            }
        },
        size: {
            height: 60
        }
        
    });
    chart3 = c3.generate({
        bindto: '#chart3',
        data: {
            columns: [

            ],
            type: 'gauge',
        },
        gauge: {
            min: -2,
            max: 2, // 100 is default
        },
        color: {
            pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
            threshold: {
                unit: 'value', // percentage is default
                max: 200, // 100 is default
                values: [-1.5, -0.5, 0.5, 1.5]
            }
        },
        size: {
            height: 60
        }
    });
    chart4 = c3.generate({
        bindto: '#chart4',
        data: {
            columns: [

            ],
            type: 'gauge',
        },
        gauge: {
            min: -2,
            max: 2, // 100 is default
        },
        color: {
            pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
            threshold: {
                unit: 'value', // percentage is default
                max: 200, // 100 is default
                values: [-1.5, -0.5, 0.5, 1.5]
            }
        },
        size: {
            height: 60
        }   
    });

    chart5 = c3.generate({
        bindto: '#chart5',
        data: {
            columns: [
                ['win-rate', 0]
            ],
            type: 'gauge',
        },
        gauge: {

        },
        color: {
            pattern: ['#FF0000', '#FF8000', '#FFFF00', '#80FF00', '#00FF00'], // the three     color levels for the percentage values.
            threshold: {
//            unit: 'value', // percentage is default
//            max: 200, // 100 is default
                values: [40, 48, 52, 55, 60]
            }
        },
        size: {
            height: 60
        }   
    });
    chart6 = c3.generate({
        bindto: '#chart6',
        data: {
            columns: [
                ['win-rate', 0]
            ],
            type: 'gauge',
        },
        gauge: {

        },
        color: {
            pattern: ['#FF0000', '#FF8000', '#FFFF00', '#80FF00', '#00FF00'], // the three     color levels for the percentage values.
            threshold: {
//            unit: 'value', // percentage is default
//            max: 200, // 100 is default
                values: [40, 48, 52, 55, 60]
            }
        },
        size: {
            height: 60
        }   
    });
    chart7 = c3.generate({
        bindto: '#chart7',
        data: {
            columns: [

            ],
            type: 'gauge',
        },
        gauge: {
            min: -2,
            max: 2, // 100 is default
        },
        color: {
            pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
            threshold: {
                unit: 'value', // percentage is default
                max: 200, // 100 is default
                values: [-1.5, -0.5, 0.5, 1.5]
            }
        },
        size: {
            height: 60
        }
    });
    chart8 = c3.generate({
        bindto: '#chart8',
        data: {
            columns: [

            ],
            type: 'gauge',
        },
        gauge: {
            min: -2,
            max: 2, // 100 is default
        },
        color: {
            pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
            threshold: {
                unit: 'value', // percentage is default
                max: 200, // 100 is default
                values: [-1.5, -0.5, 0.5, 1.5]
            }
        },
        size: {
            height: 60
        }
    });
})






