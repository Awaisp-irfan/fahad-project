// creating variable 
let noFixedWheel = document.getElementById('noFixedWheel');
let fixedWheel30 = document.getElementById('fixedWheel30');
let fixedWheel60 = document.getElementById('fixedWheel60');
let valueOfFixedDisc = document.getElementById('valueOfFixedDisc');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let input3 = document.getElementById('input3');
let input4 = document.getElementById('input4');
let carryBag = document.getElementById('carryBag')
let protection = document.getElementById('protection')
let eddingPens = document.getElementById('eddingPens')
let standWeight = document.getElementById('standWeight')
let productPrice = parseInt( document.getElementById('productPrice').value  );
console.log(productPrice)
// base value 
// function base_value (arg){
// baseVar = arg
// }
getRangeSlider(16);
noFixedWheel.addEventListener('click', updateSelection1);
fixedWheel30.addEventListener('click', updateSelection2);
fixedWheel60.addEventListener('click', updateSelection3);
carryBag.addEventListener('change' , checkedFunction1)
protection.addEventListener('change' , checkedFunction2)
eddingPens.addEventListener('change' , checkedFunction3)
standWeight.addEventListener('change' , checkedFunction4)
function checkedFunction1(){
    console.log(carryBag.checked) 
    if (carryBag.checked ){
        input1.classList.add("checked");
    }
     else {
        input1.classList.remove("checked");
    } 
       
    

}

// checked function 2 
function checkedFunction2(){
    
    if (protection.checked ){
        input2.classList.add("checked");
    }
     else {
        input2.classList.remove("checked");
    } 
}

// checked function 3 
function checkedFunction3(){
    
    if (eddingPens.checked ){
        input3.classList.add("checked");
    }
     else {
        input3.classList.remove("checked");
    } 
}

// checked function 4
function checkedFunction4(){
    
    if (standWeight.checked ){
        input4.classList.add("checked");
    }
     else {
        input4.classList.remove("checked");
    } 
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
    var add = productPrice
            if ( value <=16) {
            }
            else {     
             var val =value -16 ;
              add = (add +(val*2))  
              console.log(add)  
            }

            if (valueOfFixedDisc.value === '30'){
                add = add +89
                console.log('when value is 30' , add)
            }
            else if (valueOfFixedDisc.value === '60') {
                add = add +119
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