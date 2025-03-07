
// alert("This website is under construction")

function loadedapp(){
  setupno1();
}
const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const textArray = ["Web Developer", "Technology Dependent Student" , "Arduino Projects programer"];

let textArrayIndex = 0;
let charIndex = 0;

const erase = () => {
  if (charIndex > 0) {
    cursor.classList.remove('blink');
    typedText.textContent = textArray[textArrayIndex].slice(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 100);
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





function home(){
  window.location.href="#home";
}
function about(){
  window.location.href="#about";
}
function skill(){
  window.location.href="#skill";
}
function projict(){
  window.location.href="#projict";
}
function contact(){
  window.location.href="#contact";
}

function onmenu(){
 document.getElementById("mcb").style.display="block";
 document.getElementById("menunavback").style.display="block";
}
function menunavback(){
  document.getElementById("mcb").style.display="none";
  document.getElementById("menunavback").style.display="none";
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('my-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        'logo/remove.png',
        'logo/remove.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
      console.log('Service Worker registered with scope:', registration.scope);
    }, function(error) {
      console.log('Service Worker registration failed:', error);
    });
  });
}
