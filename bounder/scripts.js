function translocate(destination) {
    console.log(destination);
};

$(document).ready(function() {
    $("#gobutton").click(function(){translocate($("#destination").val()});
    console.log("STARTED");
});
