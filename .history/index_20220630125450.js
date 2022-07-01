getRangeSlider(16);

function getRangeSlider(sqFT) {

$("#squareFootage").ionRangeSlider({
    skin: "square",
    min: 1,
    max: 24,
    step: 1,
    from: sqFT,
    postfix: " inches",
    prettify_enabled: true,
    prettify_separator: ",",
    onChange: function () {
        console.log(value)
    },
});


}