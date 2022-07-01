getRangeSlider(500);

function getRangeSlider(sqFT) {

$("#squareFootage").ionRangeSlider({
    skin: "round",
    min: 1,
    max: 24,
    step: 1,
    from: sqFT,
    postfix: " inches",
    prettify_enabled: true,
    prettify_separator: ",",
    onChange: function () {
        
    },
});


}