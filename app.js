'use strict'
/*const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];
  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };
 /* const config = {
    type: 'line',
    data,
    options: {}
  };
  
  var myChart = new Chart(
    document.getElementById('myChart'),
    config
  );*/
let leftImageElement =document.getElementById("myImage1");
let centerImageElement=document.getElementById("myImage2");
let rightImageElement=document.getElementById("myImage3");


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

new Goods('bag','/images/bag.jpg');
new Goods('banana','/images/banana.jpg');
new Goods('bathroom','/images/bathroom.jpg');
new Goods('boots','/images/boots.jpg');
new Goods('breakfast','/images/breakfast.jpg');
new Goods('bubblegum','/images/bubblegum.jpg');
new Goods('chair','/images/chair.jpg');
new Goods('cthulhu','/images/cthulhu.jpg');
new Goods('dog-duck','/images/dog-duck.jpg');
new Goods('dragon','/images/dragon.jpg');
new Goods('pen','/images/pen.jpg');
new Goods('pet-sweep','/images/pet-sweep.jpg');
new Goods('scissors','/images/scissors.jpg');
new Goods('usb','/images/usb.gif');
new Goods('water-can','/images/water-can.jpg');
new Goods('wine-glass','/images/wine-glass.jpg');
console.log(Goods.allGoods);


function generateRandomIndex(){
    let randomImageIndex=Math.floor(Math.random()*Goods.allGoods.length);
    console.log(randomImageIndex);
    return randomImageIndex;
    

}

function showthreeImages(){
    leftIndex=generateRandomIndex();
    centerIndex=generateRandomIndex();
    rightIndex=generateRandomIndex();

    while(leftIndex===centerIndex||leftIndex===rightIndex||rightIndex===centerIndex) 
     {
        leftIndex=generateRandomIndex();   
        centerIndex=generateRandomIndex();

        
    }

leftImageElement.setAttribute('src',Goods.allGoods[leftIndex].imagelink);
centerImageElement.setAttribute('src',Goods.allGoods[centerIndex].imagelink);
rightImageElement.setAttribute('src',Goods.allGoods[rightIndex].imagelink);
}

showthreeImages();
leftImageElement.addEventListener('click',handleClicking);
centerImageElement.addEventListener('click',handleClicking);
rightImageElement.addEventListener('click',handleClicking);

function handleClicking(event){
    countclick++;

if (rounds>=countclick){
    if(event.target.id === 'left-image'){
        Goods.allGoods[leftIndex].votes++;
     }
    else if (event.target.id ==='right-image'){
        Goods.allGoats[rightIndex].votes++;
    }
    
else if(event.target.id === 'center-image'){
Goods.allGoats[centerIndex].votes++;
}
showthreeImages();
else{   
    countclick--;
    return
}    
showthreeImages();
else{
    button=document.getElementById();
    button.addEventListener('click',handleShowing);
    container.removeEventListener('click',handleClicking);}
}
function showresult()
 {
    let ul = document.getElementById('result');
  for(let i = 0 ; i <Goods.allGoods.length; i++ ){
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `${Goods.allGoods[i].name} has ${Goods.allGoods[i].votes} Votes`;
 }
}