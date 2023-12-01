//*these variables are from Yeon Yu, a classmate in the stack development class?//
var max_time = 50;
var interval = 0;
var velocity = 5;
var position = 20;

var positionX = [400, 300, 500];
var positionY = [600, 400, 200];
var reverseX = ['false','false','false'];
var reverseY = ['false','false','false'];

//var colors = ['#fedcdbff', '#feb1b7ff', '#feb1ecff', '#fd788bff', '#fe6694ff'];
/* var maddieColors = ['#fedcdbff', '#afdedcff', '#91a8a4ff', '#776871ff', '#301a4bff'];
/* var brookeColors = ['#feb1b7ff', '#b5ba72ff', '#7d6f86ff', '#585191ff', '#4f359bff'];
/* var chloeColors = ['#feb1ecff', '#190b28ff', '#685762ff', '#9b9987ff', '#b9e3c6ff'];
/* var paigeColors = ['#fd788bff', '#add9f4ff', '#476c9bff', '#468c98ff', '#101419ff'];
/* var niaColors = ['#fe6694ff', '#79addcff', '#ffee93ff', '#fcf5c7ff', '#adf7b6ff']CSS HEX */

var groupArrayColor = [
    ['#fedcdbff', '#afdedcff', '#91a8a4ff', '#776871ff', '#301a4bff'],
    ['#feb1b7ff', '#b5ba72ff', '#7d6f86ff', '#585191ff', '#4f359bff'],
    ['#feb1ecff', '#190b28ff', '#685762ff', '#9b9987ff', '#b9e3c6ff'],
    ['#fd788bff', '#add9f4ff', '#476c9bff', '#468c98ff', '#101419ff'],
    ['#fe6694ff', '#79addcff', '#ffee93ff', '#fcf5c7ff', '#adf7b6ff']
];

////*I don't know what these are for yet*/
var randomColor;
var currentIndex=[0,0,0];

////*I don't know what these are for yet*/
/* const { remote } = require('electron');
const currentWindow = remote.getCurrentWindow();

const windowWidth = currentWindow.getSize()[0];
const windowHeight = currentWindow.getSize()[1];
*/ 
var maxX = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);
var maxY = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight);
maxX = maxX - 100;
maxY = maxY - 100;
var minX = 0;
var minY = 0;

var Maddie = document.getElementById('Maddie');
var Brooke = document.getElementById('Brooke');
var Chloe = document.getElementById('Chloe');
var Paige = document.getElementById('Paige');
var Nia = document.getElementById('Nia');
////*I don't know what these are for yet*/
/* var container = document.getElementById('container');
container.style.width = maxX + 100 + 'px';
container.style.height = maxY + 'px';
*/
// index balls
// var ArrayBall = ['ball', 'ball_1', 'ball_2'];
var ArrayDancers = [document.getElementById('Maddie'),
                    document.getElementById('Brooke'),
                    document.getElementById('Chloe'),
                    document.getElementById('Paige'),
                    document.getElementById('Nia')
                    ];

ArrayDancers[0].style.left = maxX + 'px';
////*I don't know what these are for yet*/
/* let Ball_Index = ArrayBall.length;
for (let i=0; i <= ArrayBall.length; i++)
{
   ArrayBall[i].style.background = color[i];

   ArrayBall[i] = ball;
   ArrayBall[i].style.background = color
}
IndexBall[1]ball.style.left = positionX + 'px';
ball.style.top  = positionY + 'px';
*/


function dance(){
    ///* inside function code 1//
    for(let i=0; < ArrayDancers.length; i++)
    {
        ////*I don't know what these are for yet*/
        // ArrayBall[i].style.backgroundColor = Math.floor(Math.random() * doubleArrayColor[i].length);
        ArrayDancers[i].style.backgroundColor = groupArrayColor[i][currentIndex[i]];
        currentIndex[i] = (currentIndex[i] + 1) % groupArrayColor[i].length;

        ////*I don't know what this is for yet*///doubleArrayColor[i][j];
        if (reverseX[i] === false) {
            positionX[i] = positionX[i] + velocity;
        }
        else {
            positionX[i] = positionX[i] - velocity;
        }

        if(reverseY[i]===false){
            positionY[i] = positionY[i] + velocity;
        }
        else{
            positionY[i] = positionY[i] - velocity;
        }

        ArrayDancers[i].style.left = positionX[i] + 'px';
        ArrayDancers[i].style.top = positionY[i] + 'px';

        if(positionX[i]>maxX|| positionX[i]===minX){
            reverseX[i] = !reverseX[i];
        }

        if(positionY[i]>maxY||positionY[i]===minY){
            reverseY[i] = !reverseY[i];
        }
    }
   ////*I don't know what these are for yet*/
   // ArrayBall[i].style.width = positionX + 'px';
   // ArrayBall[i].style.height = positionX +'px';
}
setInterval(dance, 15);

////*I don't know what these are for yet*/

/*
 if(reverseY){
    positionY = positiony + velocityy;
    ball.style.top = positiony + 'px';
  } 
  else{
    positiony = positiony - velocityy;
    ball.style.top = positiony + 'px';
  }
*/
/****  RYU 
if (positionX >= maxX || positionX == minX) {
      reverse = !reverse; // 
   }
if (positionY >= maxY || positionY == minY) {
    reverse = !reverse; // 
 }

/****  RYU*/
//setInterval(move_position, 10);
  
///*inside defintions codes//
      ///*inside function code 1//: 
    //interval = interval + 1;
    /* position = position + velocity;
    let quotient = Math.floor(interval / max_time);
  
    if ((quotient % 2) === 0) {
      position = position + velocity;
    } else {
      position = position - (velocity * 3);
    } */
  
  
  
   /* ball.style.width = positionX + 'px';
   ball.style.height = positionX + 'px'; */
   
  // Random color 
  // randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
   //randomIndex = Math.floor(Math.random() * colors.length);
      
   // Background color
   //ball.style.backgroundColor = colors[randomIndex];