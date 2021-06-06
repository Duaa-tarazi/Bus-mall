'use strict'
let leftImageElement =document.getElementById();
let centerImageElement=document.getElementById();
let rightImageElement=document.getElementById();

let leftIndex;
let centerIndex;
let rightIndex;

let rounds=25;
let countclick=0;

function  Goods(name,imagelink){
    this.name=name;
    this.imagelink=imagelink;
    this.votes=0;
    this.shown=0;
    Goods.allGoods.push(this);
}

Goods.allGoods=[];

new Goods('watercan','images/bag.jpg');
new Goods('glass','images/banana.jpg');
new Goods('bizzaCuter','images/bathroom.jpg');
new Goods('petSweep','images/boots.jpg');
new Goods('pen','images/breakfast.jpg');
new Goods('dragonMeat','images/bubblegum.jpg');
new Goods('dogDuck','images/chair.jpg');
new Goods('cthulhu','images/cthulhu.jpg');
new Goods('chair','images/dog-duck.jpg');
new Goods('bubbleGum','images/dragon.jpg');
new Goods('breakFast','images/pen.jpg');
new Goods('boots','images/pet-sweep.jpg');
new Goods('bathRoom','images/scissors.jpg');
new Goods('banana','images/usb.jpg');
new Goods('bag','images/water-can.jpg');
new Goods('bag','images/wine-glass.jpg');


function generateRandomIndex(){
    let randomImageIndex=Math.floor(Math.random()*goodsImages.allGoods.length);
    return randomImageIndex;

}
function showthreeImages(){
    let leftIndex=generateRandomIndex();
    let centerIndex=generateRandomIndex();
    let rightIndex=generateRandomIndex();

    while(leftIndex===centerIndex||leftIndex===rightIndex) 
     {
        leftIndex=generateRandomIndex();
        while(rightIndex===centerIndex||rightIndex===centerIndex)
        {
            leftIndex=generateRandomIndex();

        }
    }




}
showthreeImages();
leftImageElement.addEventListener('click',handleClicking);
centerImageElement.addEventListener('click',handleClicking);
rightImageElement.addEventListener('click',handleClicking);


function handleClicking(event){
    countclick++;

if (countclick<25){
    showthreeImages();
}

 else {
     showresult();
    
}
}



