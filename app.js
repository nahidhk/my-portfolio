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

