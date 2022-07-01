getRangeSlider(500);

function getRangeSlider(sqFT) {

$("#squareFootage").ionRangeSlider({
    skin: "round",
    min: 250,
    max: 1000,
    step: 1,
    from: sqFT,
    postfix: " sqft",
    prettify_enabled: true,
    prettify_separator: ",",
    onChange: function () {
        showResults();
    },
});


}