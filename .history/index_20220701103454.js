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

// shipping variable 
let germany = document.getElementById('germany')
let europe = document.getElementById('europe')
let uk = document.getElementById('uk')
let shippingPrice = document.getElementById("shippingPrice")
let germanyDropdown = document.getElementById('germanyDropdown')
let ukDropdown = document.getElementById('ukDropdown')
let europeDropdown = document.getElementById('europeDropdown')
let normalDelivery1 = document.getElementById('normalDelivery1')
let expressDelivery1 = document.getElementById('expressDelivery1')
let normalDelivery2 = document.getElementById('normalDelivery2')
let expressDelivery2 = document.getElementById('expressDelivery2')
let normalDelivery3 = document.getElementById('normalDelivery3')
let expressDelivery3 = document.getElementById('expressDelivery3')
let country1 = document.getElementById('country1')
let country2 =  document.getElementById('country2')
let country3 = parseInt( document.getElementById('country3').value)
console.log(country1)
console.log(country2)
console.log(country3)
// global variable of checkboxes
var carryBagprice = 0 , protectionPrice = 0 , eddingPensPrice = 0 , standWeightPrice = 0
console.log(productPrice)
// base value 
// function base_value (arg){
// baseVar = arg
// }
getRangeSlider(16);
noFixedWheel.addEventListener('click', updateSelection1);
fixedWheel30.addEventListener('click', updateSelection2);
fixedWheel60.addEventListener('click', updateSelection3);
carryBag.addEventListener('change' , checkedFunction1);
protection.addEventListener('change' , checkedFunction2);
eddingPens.addEventListener('change' , checkedFunction3);
standWeight.addEventListener('change' , checkedFunction4);
normalDelivery1.addEventListener('click' , shipingnormal1 );
expressDelivery1.addEventListener('click', shipingexpress1 )
normalDelivery2.addEventListener('click' , shipingnormal2 );
expressDelivery2.addEventListener('click', shipingexpress2 )
normalDelivery3.addEventListener('click' , shipingnormal3 );
expressDelivery3.addEventListener('click', shipingexpress3 )

// shiping method
function shipingnormal1(){
    normalDelivery1.classList.add("checked")
    expressDelivery1.classList.remove("checked")
    // country1.value = 19
    // console.log( country1.value)

}

function shipingexpress1(){
    normalDelivery1.classList.remove("checked")
    expressDelivery1.classList.add("checked")
    // country1.value = 54
    // console.log( country1.value)
}

function shipingnormal2(){
    normalDelivery2.classList.add("checked")
    expressDelivery2.classList.remove("checked")
    // country2.value = 39;
    // console.log( country2.value)
}

function shipingexpress2(){
    normalDelivery2.classList.remove("checked")
    expressDelivery2.classList.add("checked")
    // country2.value = 115
    // console.log( country2.value)
}

function shipingnormal3(){
    normalDelivery3.classList.add("checked")
    expressDelivery3.classList.remove("checked")
    // country3.value =60
    // console.log( country3.value)
}

function shipingexpress3(){
    normalDelivery3.classList.remove("checked")
    expressDelivery3.classList.add("checked")
    // country3.value = 115
    // console.log( country3.value)
}
function checkedFunction1(){
    console.log(carryBag.checked) 
    if (carryBag.checked ){
        input1.classList.add("checked");
        carryBagprice = 69
        result()
    }
     else {
        input1.classList.remove("checked");
        carryBagprice = 0
        result()
    } 
       
    

}

// checked function 2 
function checkedFunction2(){
    
    if (protection.checked ){
        input2.classList.add("checked");
        protectionPrice = 19
        result()
    }
     else {
        input2.classList.remove("checked");
        protectionPrice = 0
        result()
    } 
}

// checked function 3 
function checkedFunction3(){
    
    if (eddingPens.checked ){
        input3.classList.add("checked");
        eddingPensPrice = 7
        result() 
    }
     else {
        input3.classList.remove("checked");
        eddingPensPrice = 0
        result() 
    } 
}

// checked function 4
function checkedFunction4(){
    
    if (standWeight.checked ){
        input4.classList.add("checked");
        standWeightPrice = 19
        result()
    }
     else {
        input4.classList.remove("checked");
        standWeightPrice = 0
        result()
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

function updateSelection4(){
germany.classList.add('active')
europe.classList.remove("active")
uk.classList.remove('active')
shippingPrice.value = 'germany'
germanyDropdown.classList.add('show')
germanyDropdown.classList.remove('hide')
ukDropdown.classList.add('hide')
europeDropdown.classList.add('hide')
ukDropdown.classList.remove('show')
europeDropdown.classList.remove('show')
}

function updateSelection5(){
    germany.classList.remove('active')
    europe.classList.add("active")
    uk.classList.remove('active')
    shippingPrice.value = 'europe'
    germanyDropdown.classList.add('hide')
germanyDropdown.classList.remove('show')
ukDropdown.classList.add('hide')
ukDropdown.classList.remove('show')
europeDropdown.classList.add('show')
europeDropdown.classList.remove('hide')
    
    }

    function updateSelection6(){
        germany.classList.remove('active')
        europe.classList.remove("active")
        uk.classList.add('active')
        shippingPrice.value = 'uk'

        germanyDropdown.classList.add('hide')
        germanyDropdown.classList.remove('show')
        ukDropdown.classList.add('show')
        ukDropdown.classList.remove('hide')
        europeDropdown.classList.add('hide')
        europeDropdown.classList.remove('show')
        
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
            add = add+ protectionPrice + carryBagprice + standWeightPrice + eddingPensPrice
            console.log(add)




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