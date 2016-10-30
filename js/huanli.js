function chooseHeroLeft(thisHero) {
    var img_path = thisHero.src.split("/");
    var img_name = img_path[img_path.length - 1].split(".")[0];
    var gif_path = "img/hero_compare_gif/" + img_name + ".gif";
    var id = thisHero.id;
    d3.select("#" + id)
        .style("filter", "grayscale(0)");
    if (id != "hr_cmp_1") {
        d3.select("#hr_cmp_1")
            .style("filter", "grayscale(100)");
    }
    if (id != "hr_cmp_2") {
        d3.select("#hr_cmp_2")
            .style("filter", "grayscale(100)");
    }
    if (id != "hr_cmp_3") {
        d3.select("#hr_cmp_3")
            .style("filter", "grayscale(100)");
    }
    if (id != "hr_cmp_4") {
        d3.select("#hr_cmp_4")
            .style("filter", "grayscale(100)");
    }
    if (id != "hr_cmp_5") {
        d3.select("#hr_cmp_5")
            .style("filter", "grayscale(100)");
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
    d3.select("#" + id)
        .style("filter", "grayscale(0)");
    if (id != "hr_cmp_6") {
        d3.select("#hr_cmp_6")
            .style("filter", "grayscale(100)");
    }
    if (id != "hr_cmp_7") {
        d3.select("#hr_cmp_7")
            .style("filter", "grayscale(100)");
    }
    if (id != "hr_cmp_8") {
        d3.select("#hr_cmp_8")
            .style("filter", "grayscale(100)");
    }
    if (id != "hr_cmp_9") {
        d3.select("#hr_cmp_9")
            .style("filter", "grayscale(100)");
    }
    if (id != "hr_cmp_10") {
        d3.select("#hr_cmp_10")
            .style("filter", "grayscale(100)");
    }
    d3.select(".hero_show_right")
        .attr("src", gif_path);
    var img_name_show = img_name.replace("-", " ").toUpperCase();
    d3.select(".hero_right")
        .select(".hero_name")
        .text(img_name_show);
}