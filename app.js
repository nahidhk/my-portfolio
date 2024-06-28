
// alert("This website is under construction")

function loadedapp(){
  setupno1();
}
const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const textArray = ["a Student .","Web Developer .", "Electric Circuit Development.", "Canva Design .", "Python Machine Learning .","Technical .","Digital Technology Management."];

let textArrayIndex = 0;
let charIndex = 0;

const erase = () => {
  if (charIndex > 0) {
    cursor.classList.remove('blink');
    typedText.textContent = textArray[textArrayIndex].slice(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 80);
  } else {
    cursor.classList.add('blink');
    textArrayIndex++;
    if (textArrayIndex > textArray.length - 1) {
      textArrayIndex = 0;
    }
    setTimeout(type, 700);
  }
}

const type = () => {
  if (charIndex <= textArray[textArrayIndex].length - 1) {
    cursor.classList.remove('blink');
    typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 120);
  } else {
    cursor.classList.add('blink');
    setTimeout(erase, 700);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
})



function scrollapki(){
  document.getElementById("sideapp").style.opacity="1";
  setTimeout(rgacgniop,1300);
}
function rgacgniop(){
    document.getElementById("sideapp").style.opacity="0.3";

}

function newData() {
  document.getElementById("sideapp").style.opacity="1";

}
function olddata() {
  document.getElementById("sideapp").style.opacity="0.3";
  
}

var sbox1 = document.getElementById("boxno1");
var sbox2 = document.getElementById("boxno2");
var sbox3 = document.getElementById("boxno3");

function prog(){
sbox1.style.display="flex";
sbox2.style.display="none";
sbox3.style.display="none";
document.getElementById("prog").classList="btn actives";
document.getElementById("eletic").classList="btn";
document.getElementById("tools").classList="btn";
}

function elect(){
  sbox3.style.display="none";
  sbox2.style.display="flex";
sbox1.style.display="none";
document.getElementById("prog").classList="btn";
document.getElementById("eletic").classList="btn actives";
document.getElementById("tools").classList="btn";
}

function tools(){
  sbox3.style.display="flex";
  sbox2.style.display="none";
sbox1.style.display="none";
document.getElementById("prog").classList="btn";
document.getElementById("eletic").classList="btn";
document.getElementById("tools").classList="btn actives";

}

function setupno1(){
setTimeout(tools,15000);
setTimeout(elect,10000);
setTimeout(prog,5000);
setTimeout(setupno2,20000);
}

function setupno2(){
  setTimeout(tools,5000);
  setTimeout(elect,10000);
  setTimeout(prog,15000);
  setTimeout(setupno1,20000);
}
