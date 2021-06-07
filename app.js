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

new Goods('bag', 'https://raw.githubusercontent.com/LTUC/amman-201d27/main/class-11/assets/bag.jpg');
new Goods('banana', 'https://raw.githubusercontent.com/LTUC/amman-201d27/main/class-11/assets/banana.jpg');
new Goods('bathroom', 'https://raw.githubusercontent.com/LTUC/amman-201d27/main/class-11/assets/bathroom.jpg');
new Goods('boots', 'https://raw.githubusercontent.com/LTUC/amman-201d27/main/class-11/assets/boots.jpg');
new Goods('breakfast', 'https://raw.githubusercontent.com/LTUC/amman-201d27/main/class-11/assets/breakfast.jpg');
new Goods('bubblegum', 'https://raw.githubusercontent.com/LTUC/amman-201d27/main/class-11/assets/bubblegum.jpg');
new Goods('chair', 'https://raw.githubusercontent.com/LTUC/amman-201d27/main/class-11/assets/chair.jpg');
new Goods('cthulhu', 'https://raw.githubusercontent.com/LTUC/amman-201d27/main/class-11/assets/dragon.jpg');
new Goods('dog-duck', 'https://raw.githubusercontent.com/LTUC/amman-201d27/main/class-11/assets/dog-duck.jpg');
new Goods('dragon', 'https://github.com/LTUC/amman-201d27/blob/main/class-11/assets/cthulhu.jpg?raw=true');
new Goods('pen', 'https://raw.githubusercontent.com/LTUC/amman-201d27/main/class-11/assets/pen.jpg');
new Goods('pet-sweep', 'https://raw.githubusercontent.com/LTUC/amman-201d27/main/class-11/assets/pet-sweep.jpg');
new Goods('scissors', 'https://raw.githubusercontent.com/LTUC/amman-201d27/main/class-11/assets/scissors.jpg');
new Goods('usb', 'https://raw.githubusercontent.com/LTUC/amman-201d27/main/class-11/assets/usb.gif');
new Goods('water-can', 'https://raw.githubusercontent.com/LTUC/amman-201d27/main/class-11/assets/water-can.jpg');
new Goods('wine-glass', 'https://raw.githubusercontent.com/LTUC/amman-201d27/main/class-11/assets/wine-glass.jpg');
new Goods('shark', 'https://raw.githubusercontent.com/LTUC/amman-201d27/main/class-11/assets/shark.jpg');
new Goods('sweep', 'https://raw.githubusercontent.com/LTUC/amman-201d27/main/class-11/assets/sweep.png');
new Goods('tauntaun', 'https://raw.githubusercontent.com/LTUC/amman-201d27/main/class-11/assets/tauntaun.jpg');
new Goods('unicorn', 'https://raw.githubusercontent.com/LTUC/amman-201d27/main/class-11/assets/unicorn.jpg');
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