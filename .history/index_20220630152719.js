// creating variable 
let noFixedWheel = document.getElementById('nofixedWheel');
let fixedWheel30 = document.getElementById('fixedWheel30');
let fixedWheel60 = document.getElementById('fixedWheel60');
console.log(noFixedWheel)
console.log(fixedWheel30)
console.log(fixedWheel60)
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
        var value = $("#squareFootage").val()
            if ( value <=16) {
                console.log(0)
            }
            else {
                var add = 0
              add =   $("#squareFootage").val() -16 ;
              console.log(add*2);
            }
        

    },
});


}