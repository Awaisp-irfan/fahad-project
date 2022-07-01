// creating variable 
let noFixedWheel = document.getElementById('noFixedWheel');
let fixedWheel30 = document.getElementById('fixedWheel30');
let fixedWheel60 = document.getElementById('fixedWheel60');

getRangeSlider(16);
noFixedWheel.addEventListener('click', updateSelection1);
fixedWheel30.addEventListener('click', updateSelection2);
fixedWheel60.addEventListener('click', updateSelection3);


function updateSelection1() {
    noFixedWheel.classList.add("active");
    fixedWheel30.classList.remove("active");
    fixedWheel60.classList.remove("active");
    // typeOfConstruction.value = 'New';
    // showResults();
}

function updateSelection2() {
    noFixedWheel.classList.remove("active");
    fixedWheel30.classList.add("active");
    fixedWheel60.classList.remove("active");
    // typeOfConstruction.value = 'New';
    // showResults();
}

function updateSelection3() {
    noFixedWheel.classList.remove("active");
    fixedWheel30.classList.remove("active");
    fixedWheel60.classList.add("active");
    // typeOfConstruction.value = 'New';
    // showResults();
}

function result(){
    var value = $("#squareFootage").val()
            if ( value <=16) {
                console.log(0)
            }
            else {
                var add = 0
              add =   $("#squareFootage").val() -16 ;
              console.log(add*2);
            }
}
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
        // 
        result()

    },
});


}