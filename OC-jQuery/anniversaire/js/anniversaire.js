
$("#mailbox").on("mouseover", function() {
    $("#mailbox").css("border", "5px solid blue");
});

$("#mailbox").on("click", function() {
    $("#start").remove();
    $("#mailbox").remove();
    $("#card").css("background-color", "beige");
    $("#ptitle").after('<div id="box1" class="box">We have a surprise for you</div>');
});

$(document).on("click", "#box1", function() {
    $("#box1").after('<div id="box2" class="box">Meet us tonight</div>');
});

$(document).on("click", "#box2", function() {
    $("#box2").after('<div id="box3" class="box">At your favorite bar</div>');
});

$(document).on("click", "#box3", function() {
    $("#box1").remove();
    $("#box2").remove();
    $("#box3").remove();
    $("#card").css("background-image", 'url("img/birthdayCard.png")');
    document.getElementById('audioPlayer').play();
});