'use strict'

let leftImageElement = document.getElementById("myImage1");
let centerImageElement = document.getElementById("myImage2");
let rightImageElement = document.getElementById("myImage3");
let container = document.getElementById("imgcontainer");


let leftIndex;
let centerIndex;
let rightIndex;

let rounds = 25;
let countclick = 0;
let arrOfNames = [];
let arrOfVotes = [];

function Goods(name, imagelink) {
  this.name = name;
  this.imagelink = imagelink;
  this.votes = 0;
  this.shown = 0;
  Goods.allGoods.push(this);
  arrOfNames.push(this.name);
}

Goods.allGoods = [];

new Goods('bag', 'images/bag.jpg');
new Goods('banana', 'images/banana.jpg');
new Goods('bathroom', 'images/bathroom.jpg');
new Goods('boots', 'images/boots.jpg');
new Goods('breakfast', 'images/breakfast.jpg');
new Goods('bubblegum', 'images/bubblegum.jpg');
new Goods('chair', 'images/chair.jpg');
new Goods('dragon', 'images/dragon.jpg');
new Goods('dog-duck', 'images/dog-duck.jpg');
new Goods('cthulhu', 'images/cthulhu.jpg');
new Goods('pen', 'images/pen.jpg');
new Goods('pet-sweep', 'images/pet-sweep.jpg');
new Goods('usb', 'images/usb.gif');
new Goods('water-can', 'images/water-can.jpg');
new Goods('wine-glass', 'images/wine-glass.jpg');

console.log(Goods.allGoods);


function generateRandomIndex() {
  let randomImageIndex = Math.floor(Math.random() * Goods.allGoods.length);
  console.log(randomImageIndex);
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
  Goods.allGoods[leftIndex].shown++;
  centerImageElement.setAttribute('src', Goods.allGoods[centerIndex].imagelink);
  Goods.allGoods[centerIndex].shown++;
  rightImageElement.setAttribute('src', Goods.allGoods[rightIndex].imagelink);
  Goods.allGoods[rightIndex].shown++;
}
showthreeImages();
container.addEventListener('click', handleClicking);
let button;


function handleClicking(event) {
  countclick++;
  if (rounds >= countclick) {
    if (event.target.id === 'myImage1') {
      Goods.allGoods[leftIndex].votes++;
    }
    else if (event.target.id === 'myImage2') {
      Goods.allGoods[centerIndex].votes++;
    }
    else if (event.target.id === 'myImage3') {
      Goods.allGoods[rightIndex].votes++;
    }
    else {
      countclick--;
      return
    }
    showthreeImages();
  }

else{
//showresult();

 let button=document.getElementById('button');
 button.addEventListener('click',handleShowing);
 container.removeEventListener('click',handleClicking);

}
//savingToLs();
}



function handleShowing() {
  showresult();
  console.log(hi);
 // chart();
  console.log(hi);
  savingToLs();
  button.removeEventListener('click',handleShowing);
  
}
let arrOfSeen = [];

function showresult() {
  let ul = document.getElementById('result');
  for (let i = 0; i < Goods.allGoods.length; i++) {
    arrOfVotes.push(Goods.allGoods[i].votes);
    arrOfSeen.push(Goods.allGoods[i].shown);
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `${Goods.allGoods[i].name} has ${Goods.allGoods[i].votes} Votes and it has been shown ${Goods.allGoods[i].shown}`;
  }
  chart();
}

function savingToLs()
{
  let convertedArr = JSON.stringify(Goods.allGoods); 
  
  localStorage.setItem('product',convertedArr);
   
}

function getingData(){
  let data2=localStorage.getItem('product');
  let convert=JSON.parse(data2);
  if (convert){
    Goods.allGoods=convert;
  }
showthreeImages();
}
getingData();
function chart()
{

let ctx = document.getElementById('myChart')
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: arrOfNames,
        datasets: [{
            label: '# of Votes',
            data: arrOfVotes,
            backgroundColor: [
                'rgba(255, 99, 132, 0.4)',
            ],
            borderWidth: 1
        },{
          label: '# of Seen',
          data: arrOfSeen,
          backgroundColor: [
              'rgba(100, 120, 132, 0.5)',
          ],
          borderWidth: 1
      }
      ]
    },
});
}
getingData();



