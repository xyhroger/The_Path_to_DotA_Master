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