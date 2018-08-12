function translocate(destination) {
    console.log(destination);
};

$(document).ready(function() {
    $("#gobutton").click(function(){translocate($("#destination").value});
    console.log("STARTED");
});
