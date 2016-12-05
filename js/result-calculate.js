var calculateResult = [];  
var indexResult = [];
var teams = [];
var leftCombo = [];
var leftAnti = [];
var rightCombo = [];
var rightAnti = [];

function normalcdf(X){   //HASTINGS.  MAX ERROR = .000001
    var T=1/(1+.2316419*Math.abs(X));
    var D=.3989423*Math.exp(-X*X/2);
    var Prob=D*T*(.3193815+T*(-.3565638+T*(1.781478+T*(-1.821256+T*1.330274))));
    if (X>0) {
        Prob=1-Prob
    }
    return Prob
}

function compute(xValue, mean, deviation) {
    Z=xValue;
    M=mean;
    SD=deviation;
    with (Math) {
        if (SD<0) {
            alert("The standard deviation must be nonnegative.")
        } else if (SD==0) {
            if (Z<M){
                Prob=0
            } else {
                Prob=1
            }
        } else {
            Prob=normalcdf((Z-M)/SD);
            Prob=round(100000*Prob)/100000;
        }
    }
    return Prob
}

function calculateIndex(leftHero, rightHero) {
    var radiant = leftHero;
    var dire = rightHero;
    var lane = [];
    var left = radiant.slice();
    var right = dire.slice();
    var side = [left, right];

    for (var i = 0; i < 2; i++) {
        var condition = [];
        for (var j = 0; j < 5; j++) {
            if (hero_attributes[side[i][j]]["perfer"] == 'Mid Lane') {
                condition.push(hero_attributes[side[i][j]]['midlane']);
            }
        }
        var k = 1;
        var laneMid = 0;
        if (condition.length != 0) {
            laneMid = Math.max.apply(Math, condition);
        }
        else {
            condition = [];
            for (var j = 0; j < 5; j++){
                condition.push(hero_attributes[side[i][j]]['midlane']);
                laneMid = Math.max.apply(Math, condition);
                k = 0.85;
            }
        }

        for (var j = 0; j < 5; j++) {
            if (hero_attributes[side[i][j]]['midlane'] == laneMid) {
                idx = j;
                break;
            }
        }
        side[i].splice(idx, 1);
        laneMid *= k;
        var laneCombo = [];
        for (var j = 0; j < 4; j++) {
            laneCombo.push([hero_attributes[side[i][j]]['safelane'], hero_attributes[side[i][j]]['offlane']]);
        }
        var laneSide1 = [];
        for (var m = 0; m < 1; m++) {
            for (var n = 0; n < 1; n++) {
                for (var p = 0; p < 1; p++) {
                    for (var q = 0; q < 1; q++) {
                        if (m+n+p+q == 2){
                            laneSide1.push(laneCombo[0][m] + laneCombo[1][n] + laneCombo[2][p] + laneCombo[3][q])
                        }
                    }
                }
            }
        }
        var laneNoJungle = Math.max.apply(Math, laneSide1);
        var laneCombo = [];
        for (var j = 0; j < 4; j++) {
            laneCombo.push([hero_attributes[side[i][j]]['jungle'], hero_attributes[side[i][j]]['safelane'], hero_attributes[side[i][j]]['offlane']]);
        }
        laneCombo.sort(function(a, b) {return a[0] - b[0]});
        var laneJungle = 1.3*laneCombo[3][0];
        laneCombo.pop();
        laneCombo.sort(function(a, b) {return a[2] - b[2]});
        laneJungle += laneCombo[0][1] + laneCombo[1][1] + laneCombo[2][2] * 0.7;
        lane.push(laneMid + Math.max(laneJungle, laneNoJungle));
    }
    var theta = 2.0 / (1 + Math.exp((lane[1] - lane[0]) / 3940.5));

    var left = radiant.slice();
    var right = dire.slice();
    var side = [left, right];
    var columns = ['dps', 'push', 'nuke', 'durable', 'disable', 'initial', 'healing', 'ac', 'var'];
    var teams = [];
    var sr = [];
    for (var i = 0; i < 2; i++){
        var team = [];
        for (var j = 0; j < 7; j++) {
            var tmp = [];
            var attr = 0;
            if (i == 0){
                var thetaTeam = theta;
            }
            else {
                var thetaTeam = 2 - theta;
            }
            if (columns[j] == 'initial' || columns[j] == 'healing') {
                var para = [0.75, 0.25];
            }
            else if (columns[j] == 'disable') {
                var para = [1, 1, 1];
                theta = 1;
            }
            else {
                var para = [1.5, 1.5, 1.1, 0.2, 0.2];
            }
            for (var p = 0; p < 5; p++) {
                tmp.push(hero_attributes[side[i][p]][columns[j]])
            }
            tmp.sort(function (a, b) {
                return b - a
            });
            for (var p = 0; p < para.length; p++) {
                attr += tmp[p] * para[p];
            }
            team.push(thetaTeam*attr/math.mean(para)/para.length);
        }
        var srAlly = [];
        var srEnemy = [];

        for (var j = 0; j < 5; j++){
            var hero = side[i][j];
            var ally = [];
            var enemy = [];
            for (var p = 0; p < 5; p++){
                if (side[i][p] != hero) {
                    ally.push(combo[hero][side[i][p]]);
                }
                enemy.push(anti[hero][side[Math.abs(i-1)][p]]);
            }
            srAlly.push(math.mean(ally)/math.std(ally));
            srEnemy.push(math.mean(enemy)/math.std(enemy));
        }
        sr.push(srAlly);
        sr.push(srEnemy);
        var std = math.std(team);
        team.push(math.mean(srAlly)/math.std(srAlly)+math.mean(srEnemy)/math.std(srEnemy));
        team.push(std);
        teams.push(team);
    }
    return [teams, sr];
}

function winRateCalNormal(teams) {
    var weight = [3.04639292022, 0.1, 0.1, 0.1, 0.113614242375, 0.1, 0.617461336455, 3.82253150095, 12.6568574805];
    var sigma = Math.sqrt(Math.pow(teams[0][8], 2) + Math.pow(teams[1][8], 2))*weight[8];
    var mu = 0;
    for (var i = 0; i < weight.length-1; i++){
        mu += weight[i]*(teams[0][i] - teams[1][i])
    }
    var winrate = 1-compute(0, mu, sigma);
    return [winrate, 1 - winrate];
}

function winRateCalHigh(teams) {
    var weight = [2.04639292022, 0.20612743936, 0.2329069516, 1.1510112076, 0.113614242375, 0.1, 0.12531500951, 3.82253150095, 14.3565374712];
    var sigma = Math.sqrt(Math.pow(teams[0][8], 2) + Math.pow(teams[1][8], 2))*weight[8];
    var mu = 0;
    for (var i = 0; i < weight.length-1; i++){
        mu += weight[i]*(teams[0][i] - teams[1][i])
    }
    var winrate = 1-compute(0, mu, sigma);
    return [winrate, 1 - winrate];
}

function winRateCalVeryHigh(teams) {
    var weight = [1.94510112076,0.1,0.1,0.98612743936,0.1,0.1,0.699445303566,3.96932613631,13.489694369];
    var sigma = Math.sqrt(Math.pow(teams[0][8], 2) + Math.pow(teams[1][8], 2))*weight[8];
    var mu = 0;
    for (var i = 0; i < weight.length-1; i++){
        mu += weight[i]*(teams[0][i] - teams[1][i])
    }
    var winrate = 1-compute(0, mu, sigma);
    return [winrate, 1 - winrate];
}

function compare() {
    $(document).ready()
    {
        var leftHero = [];
        var rightHero = [];
        for (var i = 1; i <= 5; i++) {
            var rightIndex = i + 5;
            var img_path_left = $("#selected_hero_" + i).attr('src').split("/");
            var img_path_right = $("#selected_hero_" + rightIndex).attr('src').split("/");
            var img_name_left = img_path_left[img_path_left.length - 1].split(".")[0];
            var img_name_right = img_path_right[img_path_right.length - 1].split(".")[0];
            leftHero.push(img_name_left);
            rightHero.push(img_name_right);
        }
        calculateResult = calculateIndex(leftHero, rightHero);
        teams = calculateResult[0];
        console.log(calculateResult[1]);
        leftCombo = calculateResult[1][0];
        leftAnti = calculateResult[1][1];
        rightCombo = calculateResult[1][2];
        rightAnti = calculateResult[1][3];

        //alert(indexResult);
        var result = indexResult;
        var winNormal = winRateCalNormal(teams);
        // alert(win[0].toFixed(2)*100);
        var winLeftNormal = parseFloat(winNormal[0] * 100).toFixed(1);
        var winRightNormal = parseFloat(winNormal[1]* 100).toFixed(1)

        $(".normal-left").empty().append("<p class='percent-text'>" + winLeftNormal + "%</p>");
        addOneBar(winNormal[0].toFixed(2)*100, ".normal-left");
        $(".normal-right").empty().append("<p class='percent-text'>" + winRightNormal + "%</p>");
        addOneBar(winNormal[1].toFixed(2)*100, ".normal-right");
        
        
        var winHigh = winRateCalHigh(teams);
        // alert(win[0].toFixed(2)*100);
        var winLeftHigh = parseFloat(winHigh[0] * 100).toFixed(1);
        var winRightHigh = parseFloat(winHigh[1]* 100).toFixed(1)

        $(".high-left").empty().append("<p class='percent-text'>" + winLeftHigh + "%</p>");
        addOneBar(winHigh[0].toFixed(2)*100, ".high-left");
        $(".high-right").empty().append("<p class='percent-text'>" + winRightHigh + "%</p>");
        addOneBar(winHigh[1].toFixed(2)*100, ".high-right");
        
        
        var winVeryHigh = winRateCalVeryHigh(teams);
        // alert(win[0].toFixed(2)*100);
        var winLeftVeryHigh = parseFloat(winVeryHigh[0] * 100).toFixed(1);
        var winRightVeryHigh = parseFloat(winVeryHigh[1]* 100).toFixed(1)

        $(".veryHigh-left").empty().append("<p class='percent-text'>" + winLeftVeryHigh + "%</p>");
        addOneBar(winVeryHigh[0].toFixed(2)*100, ".veryHigh-left");
        $(".veryHigh-right").empty().append("<p class='percent-text'>" + winRightVeryHigh + "%</p>");
        addOneBar(winVeryHigh[1].toFixed(2)*100, ".veryHigh-right");
        

        drawCompareChart(teams);
    }
}

function addOneBar(num, className) {
    var noOfBars = .36*num;
    if( $(className).children().length-1 < noOfBars ){
        $(className).append('<div class="bar"></div>');
        setTimeout(function() { addOneBar(num, className); },0);
    }
}

function drawCompareChart2(data) {
    d3.selectAll("#attribute-compare-detail").remove();
    var margin = {top: 10, right: 10, bottom: 20, left: 10},
        width = document.getElementById('attribute-compare-chart').offsetWidth - margin.left - margin.right,
        height = 200 - margin.top - margin.bottom;
    //alert(width);

    width = width,
        height = height;

    headerColumn = "attribute",
        leftColumn = "left",
        rightColumn = "right";

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
        .append("svg:svg")
        .attr("id", "attribute-compare-detail")
        .attr({
            "width": width + margin.left + margin.right,
            "height": height + margin.top + margin.bottom
        })
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    data.forEach(function(d) {
        d[leftColumn] = parseFloat(Math.abs(d[leftColumn])),
            d[rightColumn] = parseFloat(Math.abs(d[rightColumn]));
    });

    x.domain([-15,15]).nice();
    y.domain(data.map(function(d) { return d[headerColumn]; }));

    var bar = svg.selectAll(".bar").data(data).enter()

    /* Initialize tooltip */
    tip = d3.tip().attr('class', 'd3-tip').html(function(d) {
        return  d[headerColumn] + ":<br><span>left " +
            "<span style='color:red'>" +
            d[leftColumn].toFixed(2) + "</span> right " +
            "<span style='color:red'>" +
            d[rightColumn].toFixed(2) + " </span></span>"; });

    /* Invoke the tip in the context of your visualization */
    svg.call(tip)

    // Right bar
    bar.append("rect")
        .attr({
            "class": "bar right",
            "x": x(0),
            "y": function(d) { return y(d[headerColumn]); },
            "width": function(d) {
                return Math.abs(x(d[rightColumn]) - x(0)); },
            "height": y.rangeBand()
        })
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide);
    // Left bar
    bar.append("rect")
        .attr({
            "class": "bar left",
            "x": function(d) { return x(-d[leftColumn]); },
            "y": function(d) { return y(d[headerColumn]); },
            "width": function(d) {
                return Math.abs(x(d[leftColumn]) - x(0)); },
            "height": y.rangeBand()
        })
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide);
}
function drawCompareChart(data) {

    $("#dps-left-val").text(data[0][0].toFixed(2));
    $("#push-left-val")
        .text(data[0][1].toFixed(2));
    $("#nuke-left-val")
        .text(data[0][2].toFixed(2));
    $("#durable-left-val")
        .text(data[0][3].toFixed(2));
    $("#disable-left-val")
        .text(data[0][4].toFixed(2));
    $("#initial-left-val")
        .text(data[0][5].toFixed(2));
    $("#healing-left-val")
        .text(data[0][6].toFixed(2));
    $("#ac-left-val")
        .text(data[0][7].toFixed(2));
    $("#dps-right-val")
        .text(data[1][0].toFixed(2));
    $("#push-right-val")
        .text(data[1][1].toFixed(2));
    $("#nuke-right-val")
        .text(data[1][2].toFixed(2));
    $("#durable-right-val")
        .text(data[1][3].toFixed(2));
    $("#disable-right-val")
        .text(data[1][4].toFixed(2));
    $("#initial-right-val")
        .text(data[1][5].toFixed(2));
    $("#healing-right-val")
        .text(data[1][6].toFixed(2));
    $("#ac-right-val")
        .text(data[1][7].toFixed(2));
    //alert(data[0][7]);

    var columns = ['dps', 'push', 'nuke', 'durable', 'disable', 'initial', 'healing', 'ac', 'var'];

    d3.select("#dps-left-bar")
        .select(".fill")
        .attr("data-percentage", (data[0][0] / 15 * 100).toFixed(2));
    d3.select("#push-left-bar")
        .select(".fill")
        .attr("data-percentage", (data[0][1] / 15 * 100).toFixed(2));
    d3.select("#nuke-left-bar")
        .select(".fill")
        .attr("data-percentage", (data[0][2] / 15 * 100).toFixed(2));
    d3.select("#durable-left-bar")
        .select(".fill")
        .attr("data-percentage", (data[0][3] / 15 * 100).toFixed(2));
    d3.select("#disable-left-bar")
        .select(".fill")
        .attr("data-percentage", (data[0][4] / 15 * 100).toFixed(2));
    d3.select("#initial-left-bar")
        .select(".fill")
        .attr("data-percentage", (data[0][5] / 15 * 100).toFixed(2));
    d3.select("#healing-left-bar")
        .select(".fill")
        .attr("data-percentage", (data[0][6] / 15 * 100).toFixed(2));
    d3.select("#ac-left-bar")
        .select(".fill")
        .attr("data-percentage", ((data[0][7] + 4) / 8 * 100).toFixed(2));
    //$("#dps-left-bar").barfiller2({barColor: function() {if (data[0][0] > data[1][0]) {return "#FFFF00"} else {return "C0C0C0"}}});
    //$("#push-left-bar").barfiller2({barColor: function() {if (data[0][1] > data[1][1]) {return "#FFFF00"} else {return "C0C0C0"}}});
    //$("#nuke-left-bar").barfiller2({barColor: function() {if (data[0][2] > data[1][2]) {return "#FFFF00"} else {return "C0C0C0"}}});
    //$("#durable-left-bar").barfiller2({barColor: function() {if (data[0][3] > data[1][3]) {return "#FFFF00"} else {return "C0C0C0"}}});
    //$("#initial-left-bar").barfiller2({barColor: function() {if (data[0][5] > data[1][4]) {return "#FFFF00"} else {return "C0C0C0"}}});
    //$("#disable-left-bar").barfiller2({barColor: function() {if (data[0][4] > data[1][5]) {return "#FFFF00"} else {return "C0C0C0"}}});
    //$("#healing-left-bar").barfiller2({barColor: function() {if (data[0][6] > data[1][6]) {return "#FFFF00"} else {return "C0C0C0"}}});
    //$("#ac-left-bar").barfiller2({barColor: function() {if (data[0][7] > data[1][7]) {return "#FFFF00"} else {return "C0C0C0"}}});
    $("#dps-left-bar").barfiller2({barColor: '#FF8000'});
    $("#push-left-bar").barfiller2({barColor: '#FF8000'});
    $("#nuke-left-bar").barfiller2({barColor: '#FF8000'});
    $("#durable-left-bar").barfiller2({barColor: '#FF8000'});
    $("#initial-left-bar").barfiller2({barColor: '#FF8000'});
    $("#disable-left-bar").barfiller2({barColor: '#FF8000'});
    $("#healing-left-bar").barfiller2({barColor: '#FF8000'});
    $("#ac-left-bar").barfiller2({barColor: '#FF8000'});

    d3.select("#dps-right-bar")
        .select(".fill")
        .attr("data-percentage", (data[1][0] / 15 * 100).toFixed(2));
    d3.select("#push-right-bar")
        .select(".fill")
        .attr("data-percentage", (data[1][1] / 15 * 100).toFixed(2));
    d3.select("#nuke-right-bar")
        .select(".fill")
        .attr("data-percentage", (data[1][2] / 15 * 100).toFixed(2));
    d3.select("#durable-right-bar")
        .select(".fill")
        .attr("data-percentage", (data[1][3] / 15 * 100).toFixed(2));
    d3.select("#disable-right-bar")
        .select(".fill")
        .attr("data-percentage", (data[1][4] / 15 * 100).toFixed(2));
    d3.select("#initial-right-bar")
        .select(".fill")
        .attr("data-percentage", (data[1][5] / 15 * 100).toFixed(2));
    d3.select("#healing-right-bar")
        .select(".fill")
        .attr("data-percentage", (data[1][6] / 15 * 100).toFixed(2));
    d3.select("#ac-right-bar")
        .select(".fill")
        .attr("data-percentage", ((data[1][7] + 5) / 10 * 100).toFixed(2));
    $("#dps-right-bar").barfiller2({barColor: function() {if (data[0][0] <= data[1][0]) {return "#FFFF00"} else {return "#FFFF00"}}});
    $("#push-right-bar").barfiller2({barColor: function() {if (data[0][1] <= data[1][1]) {return "#FFFF00"} else {return "#FFFF00"}}});
    $("#nuke-right-bar").barfiller2({barColor: function() {if (data[0][2] <= data[1][2]) {return "#FFFF00"} else {return "#FFFF00"}}});
    $("#durable-right-bar").barfiller2({barColor: function() {if (data[0][3] <= data[1][3]) {return "#FFFF00"} else {return "#FFFF00"}}});
    $("#initial-right-bar").barfiller2({barColor: function() {if (data[0][5] <= data[1][5]) {return "#FFFF00"} else {return "#FFFF00"}}});
    $("#disable-right-bar").barfiller2({barColor: function() {if (data[0][4] <= data[1][4]) {return "#FFFF00"} else {return "#FFFF00"}}});
    $("#healing-right-bar").barfiller2({barColor: function() {if (data[0][6] <= data[1][6]) {return "#FFFF00"} else {return "#FFFF00"}}});
    $("#ac-right-bar").barfiller2({barColor: function() {if (data[0][7] <= data[1][7]) {return "#FFFF00"} else {return "#FFFF00"}}});
}
    