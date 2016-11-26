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
    }
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
    }
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

function drawCircleChart(id){
    $(id).empty().append("<p class='percent-text'>" + $(id).data('percent') + "%</p>");
    addOneBar(id);
}
  
function addOneBar(id){
    var percent = $(id).data('percent');
    var noOfBars = .36*percent;
    if( $(id).children().length-1 < noOfBars ){
      $(id).append('<div class="bar"></div>');
        setTimeout(function() { addOneBar(id); },0);
    }
}

$(document).ready(function() {
    var i=0;
    $('.circle-chart').each(function(){
                var id = 'circle-chart' + i;
                $(this).attr('id',id);
                drawCircleChart('#'+id);
                i++;
        })
  
        $('.circle-chart').click(function(){
            var thisId = $(this).attr('id');
            drawCircleChart('#'+thisId);
        }) 
        
    window.onresize = function() {
        
        // attribute chart
        d3.selectAll("#attribute-compare-detail").remove();
        var margin = {top: 10, right: 10, bottom: 20, left: 10},
    width = document.getElementById('attribute-compare-chart').offsetWidth - margin.left - margin.right,
    height = 200 - margin.top - margin.bottom;

    width = width,
    height = height;

    headerColumn = "Income Bracket",
    leftColumn = "Obama",
    rightColumn = "Romney";

    var x = d3.scale.linear()
                .range([0, width])

    var y = d3.scale.ordinal()
                .rangeRoundBands([0, height], .2);

        var xAxis = d3.svg.axis()
                    .scale(x)
                    .ticks(30)
                    // Positive values on both sides
                    .tickFormat(function(d) { return (d<0) ? -1*d : d; })
                    .orient("bottom");
    var yAxis = d3.svg.axis()
                        .scale(y)
                        .orient("left")
                        .tickSize(0)
                        .tickPadding(6);

    var svg = d3.select("#attribute-compare-chart")
                        .append("svg")
                        .attr("id", "attribute-compare-detail")
                        .attr({
                            "width": width + margin.left + margin.right,
                            "height": height + margin.top + margin.bottom
                        })
                        .append("g")
                        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    d3.csv("data.csv", function(error, data) {
            data.forEach(function(d) {
                d[leftColumn] = parseFloat(Math.abs(d[leftColumn])),
                d[rightColumn] = parseFloat(Math.abs(d[rightColumn]));
            });

                    x.domain([-15,15]).nice();
                    y.domain(data.map(function(d) { return d[headerColumn]; }));

                var bar = svg.selectAll(".bar").data(data).enter()

                // Right bar
                bar.append("rect")
                    .attr({
                        "class": "bar right",
                        "x": x(0),
                        "y": function(d) { return y(d[headerColumn]); },
                        "width": function(d) {
                                return Math.abs(x(d[rightColumn]) - x(0)); },
                        "height": y.rangeBand()
                });
                // Left bar
                bar.append("rect")
                    .attr({
                        "class": "bar left",
                        "x": function(d) { return x(-d[leftColumn]); },
                        "y": function(d) { return y(d[headerColumn]); },
                        "width": function(d) {
                                return Math.abs(x(d[leftColumn]) - x(0)); },
                        "height": y.rangeBand()
                });
        svg.append("g")
                .attr("class", "y axis")
                .attr("transform", "translate(" + x(1) + ",0)")
                .call(yAxis);
        svg.append("g")
                    .attr("class", "x axis")
                    .attr("transform", "translate(0," + height + ")")
                    .call(xAxis);


//                svg.append("g")
//                    .attr("class", "x axis")
//                    .call(xAxis);

                    /** TODO: Labels/Tooltips */

//                svg.append("g")
//                    .attr({
//                        "class": "grid",
//                        "transform": "translate(0," + height + ")"
//                    })
//                    .call(xAxis
//                    .tickSize(height, 0, 0)
//                    .tickFormat("")
//                );
            });

    }
})

$(document).ready(function() {
    var margin = {top: 10, right: 10, bottom: 20, left: 10},
    width = document.getElementById('attribute-compare-chart').offsetWidth - margin.left - margin.right,
    height = 270 - margin.top - margin.bottom;

    width = width,
    height = height;

    headerColumn = "Income Bracket",
    leftColumn = "Obama",
    rightColumn = "Romney";

    var x = d3.scale.linear()
                .range([0, width])

    var y = d3.scale.ordinal()
                .rangeRoundBands([0, height], .2);

    var xAxis = d3.svg.axis()
                    .scale(x)
                    .ticks(30)
                    // Positive values on both sides
                    .tickFormat(function(d) { return (d<0) ? -1*d : d; })
                    .orient("bottom");
    var yAxis = d3.svg.axis()
                        .scale(y)
                        .orient("left")
                        .tickSize(0)
                        .tickPadding(6);

    var svg = d3.select("#attribute-compare-chart")
                        .append("svg")
                        .attr("id", "attribute-compare-detail")
                        .attr({
                            "width": width + margin.left + margin.right,
                            "height": height + margin.top + margin.bottom
                        })
                        .append("g")
                        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    d3.csv("data.csv", function(error, data) {
            data.forEach(function(d) {
                d[leftColumn] = parseFloat(Math.abs(d[leftColumn])),
                d[rightColumn] = parseFloat(Math.abs(d[rightColumn]));
            });

                    x.domain([-15,15]).nice();
                    y.domain(data.map(function(d) { return d[headerColumn]; }));

                var bar = svg.selectAll(".bar").data(data).enter()

                // Right bar
                bar.append("rect")
                    .attr({
                        "class": "bar right",
                        "x": x(0),
                        "y": function(d) { return y(d[headerColumn]); },
                        "width": function(d) {
                                return Math.abs(x(d[rightColumn]) - x(0)); },
                        "height": y.rangeBand()
                });
                // Left bar
                bar.append("rect")
                    .attr({
                        "class": "bar left",
                        "x": function(d) { return x(-d[leftColumn]); },
                        "y": function(d) { return y(d[headerColumn]); },
                        "width": function(d) {
                                return Math.abs(x(d[leftColumn]) - x(0)); },
                        "height": y.rangeBand()
                });
        svg.append("g")
                .attr("class", "y axis")
                .attr("transform", "translate(" + x(1) + ",0)")
                .call(yAxis);

                svg.append("g")
                    .attr("class", "x axis")
                    .attr("transform", "translate(0," + height + ")")
                    .call(xAxis);
            });
    
    
    var test = ['test', 2.4];
    var chart = c3.generate({
            bindto: '#chart3',
            data: {
                columns: [
                            test
                        ],
                type: 'gauge',
            },
            gauge: {
                max: 10,
            },
            color: {
                pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
                threshold: {
                    //            unit: 'value', // percentage is default
                    //            max: 200, // 100 is default
                    values: [2, 5, 8, 10]
                }
            },
            size: {
                height: 60
            }
        
    });
    
    var chart1 = c3.generate({
        bindto: '#chart1',
        data: {
            columns: [
                ['win-rate', 21.4]
            ],
            type: 'gauge',
        },
        gauge: {
            max: 10, // 100 is default
        },
        color: {
            pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
            threshold: {
//            unit: 'value', // percentage is default
//            max: 200, // 100 is default
                values: [30, 60, 90, 100]
            }
        },
        size: {
            height: 60
        }
        
    });
    var chart2 = c3.generate({
        bindto: '#chart2',
        data: {
            columns: [
                ['win-rate', 61.4]
            ],
            type: 'gauge',
        },
        gauge: {},
        color: {
            pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three     color levels for the percentage values.
            threshold: {
//            unit: 'value', // percentage is default
//            max: 200, // 100 is default
                values: [30, 60, 90, 100]
            }
        },
        size: {
            height: 60
        }
        
    });
    var chart4 = c3.generate({
        bindto: '#chart4',
        data: {
            columns: [
                ['win-rate', 61.4]
            ],
            type: 'gauge',
        },
        gauge: {},
        color: {
            pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
            threshold: {
                unit: 'value', // percentage is default
                max: 200, // 100 is default
                values: [30, 60, 90, 100]
            }
        },
        size: {
            height: 60
        }   
    });
    var chart8 = c3.generate({
        bindto: '#chart8',
        data: {
            columns: [
                ['win-rate', 61.4]
            ],
            type: 'gauge',
        },
        gauge: {},
        color: {
            pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
            threshold: {
                values: [30, 60, 90, 100]
            }
        },
        size: {
            height: 60
        }   
    });
    var chart5 = c3.generate({
        bindto: '#chart5',
        data: {
            columns: [
                ['win-rate', 61.4]
            ],
            type: 'gauge',
        },
        gauge: {},
        color: {
            pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
            threshold: {
                values: [30, 60, 90, 100]
            }
        },
        size: {
            height: 60
        }   
    });
    var chart6 = c3.generate({
        bindto: '#chart6',
        data: {
            columns: [
                ['win-rate', 61.4]
            ],
            type: 'gauge',
        },
        gauge: {},
        color: {
            pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
            threshold: {
                values: [30, 60, 90, 100]
            }
        },
        size: {
            height: 60
        }   
    });
    var chart7 = c3.generate({
        bindto: '#chart7',
        data: {
            columns: [
                ['win-rate', 61.4]
            ],
            type: 'gauge',
        },
        gauge: {},
        color: {
            pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
            threshold: {
                values: [30, 60, 90, 100]
            }
        },
        size: {
            height: 60
        }   
    });
})






