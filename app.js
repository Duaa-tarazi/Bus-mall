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
let button=document.getElementById('butoon');
//button.addEventListener("click",handleShowing);
//button.onclick=handleShowing;
showresult();
 //container.removeEventListener('click',handleClicking);
}}



function handleShowing() {
  showresult();
  console.log(hi);
  chart();
  console.log(hi);
  //button.removeEventListener("click",handleshowing);

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
}
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



