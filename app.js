'use strict'

let leftImageElement = document.getElementById("myImage1");
let centerImageElement = document.getElementById("myImage2");
let rightImageElement = document.getElementById("myImage3");


let leftIndex;
let centerIndex;
let rightIndex;

let rounds = 25;
let countclick = 0;

function Goods(name, imagelink) {
  this.name = name;
  this.imagelink = imagelink;
  this.votes = 0;
  this.shown = 0;
  Goods.allGoods.push(this);
}

Goods.allGoods = [];

new Goods('bag', '/images/bag.jpg');
new Goods('banana', '/images/banana.jpg');
new Goods('bathroom', '/images/bathroom.jpg');
new Goods('boots', '/images/boots.jpg');
new Goods('breakfast', '/images/breakfast.jpg');
new Goods('bubblegum', '/images/bubblegum.jpg');
new Goods('chair', '/images/chair.jpg');
new Goods('cthulhu', '/images/cthulhu.jpg');
new Goods('dog-duck', '/images/dog-duck.jpg');
new Goods('dragon', '/images/dragon.jpg');
new Goods('pen', '/images/pen.jpg');
new Goods('pet-sweep', '/images/pet-sweep.jpg');
new Goods('scissors', '/images/scissors.jpg');
new Goods('usb', '/images/usb.gif');
new Goods('water-can', '/images/water-can.jpg');
new Goods('wine-glass', '/images/wine-glass.jpg');
console.log(Goods.allGoods);


function generateRandomIndex() {
  let randomImageIndex = Math.floor(Math.random() * Goods.allGoods.length);
  console.log(randomImageIndex);
  return randomImageIndex;


}

function showthreeImages() {
  leftIndex = generateRandomIndex();
  centerIndex = generateRandomIndex();
  rightIndex = generateRandomIndex();

  while (leftIndex === centerIndex || leftIndex === rightIndex || rightIndex === centerIndex) {
    leftIndex = generateRandomIndex();
    centerIndex = generateRandomIndex();

  }

  leftImageElement.setAttribute('src', Goods.allGoods[leftIndex].imagelink);
  centerImageElement.setAttribute('src', Goods.allGoods[centerIndex].imagelink);
  rightImageElement.setAttribute('src', Goods.allGoods[rightIndex].imagelink);
}

showthreeImages();
leftImageElement.addEventListener('click', handleClicking);
centerImageElement.addEventListener('click', handleClicking);
rightImageElement.addEventListener('click', handleClicking);


function handleClicking(event) {
  countclick++;
if(rounds>=countclick){
  if (event.target.id==='myImage1'){
  Goods.allGoods[leftIndex].votes++;}
else if (event.target.id==='myImage2'){
  Goods.allGoods[centerIndex].votes++;}
else if (event.target.id==='myImage3'){
  Goods.allGoods[rightIndex].votes++;}
else{
  countclick--;
  return
}
showthreeImages();
}
showresult();

}


function showresult() {
  let ul = document.getElementById('result');
  for (let i = 0; i < Goods.allGoods.length; i++) {
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `${Goods.allGoods[i].name} has ${Goods.allGoods[i].votes} Votes`;
  }
}