// ---  NAV-class function ----
$(function(){
    $("a").each(function(){
            if ($(this).attr("href") === window.location.pathname){
                    $(this).addClass("active");
            }
    });
});

let itemWork = document.getElementById('logo');

// These variables store the boxes on the side
let itemHTML = document.getElementById('one');
let itemCSS = document.getElementById('two');
let itemJS = document.getElementById('three');

let itemh2 = document.getElementById('h2');
let itemh22 = document.getElementById('h22');
let itemh222 = document.getElementById('h222');



let itemFour = document.getElementById('list-item-four');
let itemFive = document.getElementById('list-item-five');
let resetButton = document.getElementById('reset-button');

// Boxes style chaning on mouse activity
function increaseHTML() {
  itemHTML.style.width = '50%';
  itemHTML.style.height = '45%';
  itemHTML.style.textShadow = "2px 2px 3px black";
  itemHTML.style.opacity = '0.9';
  itemh2.style.display = 'flex';
  itemh2.style.background = 'rgba(0, 0, 0, 0.7)';
};
itemHTML.onmouseover = increaseHTML;

function decreaseHTML() {
    itemHTML.style.width = '48%';
    itemHTML.style.height = '43%';
    itemh2.style.display = 'none';
  };
itemHTML.onmouseout = decreaseHTML;

function increaseCSS() {
    itemCSS.style.width = '50%';
    itemCSS.style.height = '45%';
    itemCSS.style.color = "white";
    itemCSS.style.textShadow = "2px 2px 3px black";
    itemCSS.style.opacity = '0.9';
    itemh22.style.display = 'flex';
    itemh22.style.background = 'rgba(0, 0, 0, 0.7)';
};
itemCSS.onmouseover = increaseCSS;

function decreaseCSS() {
    itemCSS.style.width = '48%';
    itemCSS.style.height = '43%';
    itemh22.style.display = 'none';
};
itemCSS.onmouseout = decreaseCSS;

function increaseJS() {
    itemJS.style.width = '50%';
    itemJS.style.height = '45%';
    itemJS.style.textShadow = "2px 2px 3px black";
    itemJS.style.opacity = '0.9';
    itemh222.style.display = 'flex';
    itemh222.style.background = 'rgba(0, 0, 0, 0.7)';
};
itemJS.onmouseover = increaseJS;
  
function decreaseJS() {
    itemJS.style.width = '48%';
    itemJS.style.height = '43%';
    itemh222.style.display = 'none';
};
itemJS.onmouseout = decreaseJS;




function changeBackground() {
  itemTwo.style.backgroundColor = 'darkgreen';
};
itemTwo.onmouseup = changeBackground;

function changeText() {
  itemThree.textContent = 'The mouse has left the element';
  itemThree.style.backgroundColor = "darkblue";
};
itemThree.onmouseout = changeText;
function showItem() {
  itemFive.style.display = 'block';
};
itemFour.onmousedown = showItem;

// --- HTML event handler: ------------------------

// function checkUserName() {
//   let msg = document.getElementById("feedback");
//   let userN = document.getElementById("username");
//   if (userN.value.length<5) {
//     msg.textContent = "User name must be 5 chars or more...";
//   } else {
//     msg.textContent = "";
//   };
// };


// --- DOM event hadler: ------------------------

function checkUserName() {
  let msg = document.getElementById("feedback");
  if (this.value.length<5) {
    msg.textContent = "User name must be 5 chars or more...";
  } else {
    msg.textContent = "";
  };
};
let userN = document.getElementById("username");
userN.onblur = checkUserName;

// --- EVENT LISTENER: ------------------------
userN.addEventListener('click', checkUserName, false);


// --- EVENT Listener on UL element!!!! ---------
function changeB() {
  let cont = document.getElementById("container");
  cont.style.backgroundColor = "lightgreen";
  document.body.style.backgroundColor = "grey";
};

let unlist = document.getElementById('container');
unlist.addEventListener('click', changeB, true);


/// RESET -> last ---------------------
let reset = function() {
  itemOne.style.width = ''
  itemTwo .style.backgroundColor = ''
  itemThree .style.backgroundColor = ''

  itemThree.innerHTML = 'The mouse must leave the box to change the text'
  itemFive.style.display = "none"
  let cont = document.getElementById("container");
  cont.style.backgroundColor = "pink";
  document.body.style.backgroundColor = "green";
};
resetButton.onclick = reset;

// FOCUS on input form (when page loaded): ----------------------------------
function setup() {
  let userNN = document.getElementById('username');
  userNN.focus();
};
window.addEventListener('load', setup, false);