// creating variable 
let noFixedWheel = document.getElementById('noFixedWheel');
let fixedWheel30 = document.getElementById('fixedWheel30');
let fixedWheel60 = document.getElementById('fixedWheel60');
let valueOfFixedDisc = document.getElementById('valueOfFixedDisc');
let input1 = document.getElementById('input1');
let carryBag = document.getElementById('carryBag')


getRangeSlider(16);
noFixedWheel.addEventListener('click', updateSelection1);
fixedWheel30.addEventListener('click', updateSelection2);
fixedWheel60.addEventListener('click', updateSelection3);
carryBag.addEventListener('change' , checkedFunction)

function checkedFunction(){
    // if (carryBag.checked = true){
    //     input1.classList.add("checked")
    // }
    // else if (carryBag.checked = false   ) {
    //     input1.classList.remove("checked")
    // }
//    console.log(carryBag.checked) 
}
function updateSelection1() {
    noFixedWheel.classList.add("active");
    fixedWheel30.classList.remove("active");
    fixedWheel60.classList.remove("active");
    valueOfFixedDisc.value = '0';
    result()
}

function updateSelection2() {
    noFixedWheel.classList.remove("active");
    fixedWheel30.classList.add("active");
    fixedWheel60.classList.remove("active");
    valueOfFixedDisc.value = '30';
    result();
}

function updateSelection3() {
    noFixedWheel.classList.remove("active");
    fixedWheel30.classList.remove("active");
    fixedWheel60.classList.add("active");
    valueOfFixedDisc.value = '60';
    result()
}

function result(){
    var value = $("#squareFootage").val()
    var add = 359
            if ( value <=16) {
            }
            else {     
             var val =value -16 ;
              add = (add +(val*2))  
              console.log(add)  
            }

            if (valueOfFixedDisc.value === '30'){
                add = add +30
                console.log('when value is 30' , add)
            }
            else if (valueOfFixedDisc.value === '60') {
                add = add +60
                console.log('when value is 60' , add)
            } else {
              
                console.log('when value is 0' , add)
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