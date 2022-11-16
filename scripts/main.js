let images = document.querySelectorAll(".slider-element");
let topLeft = document.querySelector("#top-left");
let topAfterLeft = document.querySelector("#top-after-left");
let topRight = document.querySelector("#top-right");
let topPreRight = document.querySelector("#top-pre-right");
let bottomLeft = document.querySelector("#bottom-left");
let bottomAfterLeft = document.querySelector("#bottom-after-left");
let bottomRight = document.querySelector("#bottom-right");
let bottomPreRight = document.querySelector("#bottom-pre-right");

topAfterLeft.addEventListener('mouseover', () => {
    topAfterLeft.parentElement.style.transform = "translate(72px, 0)";
});
topLeft.addEventListener('mouseover', () => {
    topLeft.parentElement.style.transform = "translate(145px, 0)";
});
topLeft.addEventListener('mouseout', () => {
    topLeft.parentElement.style.transform = "translate(0)";
});
topAfterLeft.addEventListener('mouseout', () => {
    topAfterLeft.parentElement.style.transform = "translate(0)";
});

topPreRight.addEventListener('mouseover', () => {
    topPreRight.parentElement.style.transform = "translate(-72px, 0)";
});
topRight.addEventListener('mouseover', () => {
    topRight.parentElement.style.transform = "translate(-145px, 0)";
});
topRight.addEventListener('mouseout', () => {
    topRight.parentElement.style.transform = "translate(0)";
});
topPreRight.addEventListener('mouseout', () => {
    topPreRight.parentElement.style.transform = "translate(0)";
});

bottomAfterLeft.addEventListener('mouseover', () => {
    bottomAfterLeft.parentElement.style.transform = "translate(180px, 0)";
});
bottomLeft.addEventListener('mouseover', () => {
    bottomLeft.parentElement.style.transform = "translate(360px, 0)";
});
bottomLeft.addEventListener('mouseout', () => {
    bottomLeft.parentElement.style.transform = "translate(0)";
});
bottomAfterLeft.addEventListener('mouseout', () => {
    bottomAfterLeft.parentElement.style.transform = "translate(0)";
});

bottomPreRight.addEventListener('mouseover', () => {
    bottomPreRight.parentElement.style.transform = "translate(-180px, 0)";
});
bottomRight.addEventListener('mouseover', () => {
    bottomRight.parentElement.style.transform = "translate(-360px, 0)";
});
bottomRight.addEventListener('mouseout', () => {
    bottomRight.parentElement.style.transform = "translate(0)";
});
bottomPreRight.addEventListener('mouseout', () => {
    bottomPreRight.parentElement.style.transform = "translate(0)";
});