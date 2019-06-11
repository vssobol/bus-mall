'use strict';

var imageBank = [];

function addImage(name, alt){
    this.name = name;
    if(name === "usb"){
        this.filepath = 'img/' + name + '.gif';
    } else{
        this.filepath = 'img/' + name + '.jpg';
    }
    this.alt = alt;
    this.views = 0;
    this.votes = 0;

    imageBank.push(this);
}

 /* adding all imgs */
     new addImage('bag', "Star Wars roller bag");
     new addImage('banana', "banana-shaped banana slicer");
     new addImage('bathroom', "iPad toilet paper stand");
     new addImage('boots', "open-toed rain boots");
     new addImage('breakfast', "all-in-one breakfast toaster with coffe-maker");
     new addImage('bubblegum', "meatball-inspired bubblegum");
     new addImage('chair', "chair with upward-cured seat");
     new addImage('cthulhu', "Cthulu toy figure");
     new addImage('dog-duck', "duck beak muzzle for dogs");
     new addImage('dragon', "canned dragon meat");
     new addImage('pen', "utensil-tipped pen caps");
     new addImage('pet-sweep', "dust boots for pets");
     new addImage('tauntaun', "Tauntaun sleeping bag");
     new addImage('unicorn', "canned unicorn meat");
     new addImage('usb', "moving tentacle thumb drive");
     new addImage('water-can', "watering can that waters itself");
     new addImage('wine-glass', "egg-shaped wine glass");
 /* console.log(imageBank); */ //test

function randomizer(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var imageOne = document.getElementById('imageOne');
var imageTwo = document.getElementById('imageTwo');
var imageThree = document.getElementById('imageThree');

/* render image to page */
function randomizeImage(){

    var recentImages = [];
    var randomImage;

    function random(){
        randomImage = randomizer(0, imageBank.length - 1);
        while(recentImages.includes(randomImage)){
            randomImage = randomizer(0, imageBank.length - 1);
        }
        if(recentImages.length > 3){
            recentImages.shift();
        }
        recentImages.push(randomImage);
    }

    random();
    imageOne.src = imageBank[randomImage].filepath;
    imageOne.alt = imageBank[randomImage].alt;
    imageOne.title = imageBank[randomImage].alt;

    random();
    imageTwo.src = imageBank[randomImage].filepath;
    imageTwo.alt = imageBank[randomImage].alt;
    imageTwo.title = imageBank[randomImage].alt;

    random();
    imageThree.src = imageBank[randomImage].filepath;
    imageThree.alt = imageBank[randomImage].alt;
    imageThree.title = imageBank[randomImage].alt;
}
/* console.log(recentImages); */

randomizeImage();

var imageContainer = document.getElementById('imageContainer');

imageContainer.addEventListener('click', randomizeImage);

// function selector(){
//     randomizeImage();
// }