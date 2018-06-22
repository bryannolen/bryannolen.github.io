var die_multi = 1;


function rollDie(die_type) {
    $("#last_roll_big").html("Rolling "+die_multi+" d"+die_type);
    var results  = "";
    for (i = 0; i < die_multi; i++) {
        rando_roll = Math.floor((Math.random() * die_type) + 1);
        results += "d"+die_type+" :: "+rando_roll+"<br/>"; 
    };
    $("#last_roll_list").html(results);
};

$(document).ready(function() {
    $("#roll_1x").click(function(){die_multi=1});
    $("#roll_2x").click(function(){die_multi=2});
    $("#roll_3x").click(function(){die_multi=3});
    $("#roll_4x").click(function(){die_multi=4});
    $("#roll_5x").click(function(){die_multi=5});
    $("#roll_6x").click(function(){die_multi=6});
    $("#roll_7x").click(function(){die_multi=7});
    $("#roll_8x").click(function(){die_multi=8});
    $("#roll_d4").click(function(){rollDie(4)});
    $("#roll_d6").click(function(){rollDie(6)});
    $("#roll_d8").click(function(){rollDie(8)});
    $("#roll_d10").click(function(){rollDie(10)});
    $("#roll_d20").click(function(){rollDie(20)});
    $("#roll_d50").click(function(){rollDie(50)});
    $("#roll_d100").click(function(){rollDie(100)});
    $("#last_roll_big").html("Click a Die to Roll!");
    $("#last_roll_list").html("");
});
