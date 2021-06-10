'use strict'

//from Line 4-7 statment to Import the three Images in tag have 
//the myImage1/myImage2/myImage3 id.in the the contanier have container id. 
let leftImageElement = document.getElementById("myImage1");
let centerImageElement = document.getElementById("myImage2");
let rightImageElement = document.getElementById("myImage3");
let container = document.getElementById("imgcontainer");

//this three statment to declear 3 variables to put the index of the
// Images will apear in th main from the array of objects.
let leftIndex;
let centerIndex;
let rightIndex;

let rounds = 25;
let countclick = 0;
let arrOfNames = [];
let arrOfVotes = [];
//creat object called Goods with 2 values.
function Goods(name, imagelink) {
  this.name = name;
  this.imagelink = imagelink;
  this.votes = 0;
  this.shown = 0;
  Goods.allGoods.push(this);
  arrOfNames.push(this.name);
}
//declear array of objects instances from Goods object 
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

//this function is to choose 3 Indexes from Goods.allGoods
// using mathmatical fun from libraries 
function generateRandomIndex() {
  let randomImageIndex = Math.floor(Math.random() * Goods.allGoods.length);
  console.log(randomImageIndex);
 console.log(randomImageIndex);
  return randomImageIndex;


}
//this function is to disply the three imges have the index genrate from 
//function (generateRandomIndex)
//and using while statment to prevent genrate two images like others 
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

//this function to count the showen for every image in the array Goods.allGoods when click on it 
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
savingToLs();
}



function handleShowing() {
  showresult();
  console.log(hi);
 // chart();
  console.log(hi);
  

}
let arrOfSeen = [];
//this function to print the result using unorderd list on the webpage 
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
// this function to convert the data in the array to 
//json format to save it in local storge
function savingToLs()
{
  let convertedArr = JSON.stringify(Goods.allGoods); 
  
  localStorage.setItem('product',convertedArr);
   
}
//and this getingdata function to take the data from the 
//local storge ,and transform it again from json format and using or manipulate it  
function getingData(){
  let data2=localStorage.getItem('product');
  let convert=JSON.parse(data2);

}
// chart function to take the data from array of objects and make 
//chart according to this array and print the chart on the webpage.
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
                ' #ddbf16',
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



