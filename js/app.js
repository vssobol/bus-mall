'use strict';

var imageBank = [];

function addImage(title, alt){
    this.title = title;
    if(title === "usb"){
        this.filepath = 'img/' + title + '.gif';
    } else{
        this.filepath = 'img/' + title + '.jpg';
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
        imageBank[randomImage].views++;
    }

    random();
    imageOne.src = imageBank[randomImage].filepath;
    imageOne.alt = imageBank[randomImage].alt;
    imageOne.title = imageBank[randomImage].title;

    random();
    imageTwo.src = imageBank[randomImage].filepath;
    imageTwo.alt = imageBank[randomImage].alt;
    imageTwo.title = imageBank[randomImage].title;

    random();
    imageThree.src = imageBank[randomImage].filepath;
    imageThree.alt = imageBank[randomImage].alt;
    imageThree.title = imageBank[randomImage].title;
}
/* console.log(recentImages); */

var votesRemaining = 25;
var imageContainer = document.getElementById('imageContainer');
imageContainer.addEventListener('click', selector);

function selector(){

    var selected = event.target.title;

    function winner(){
    
        var winningImages = [];

        for(var j = 0; j < 6; j++){
            var counter = 0;
            for(var i = 0; i < imageBank.length; i++){
                if(imageBank[i].votes > counter){
                    counter = imageBank[i].votes;
                    winningImages[j] = imageBank[i];
                    imageBank.splice([i], 1);
                }
            }
        }
        
        var names = [];
        var votes = [];

        for(var i = 0; i < winningImages.length; i++){
            names.push(winningImages[i].title);
            votes.push(winningImages[i].votes);
        }
        
        var ctx = document.getElementById('chart').getContext('2d');
        
        var chart = new Chart(ctx, {
            type: 'bar',
            data: {
            labels: names,
            datasets: [{
                label: 'Votes for each image',
                backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(99, 132, 255)',
                'rgb(132, 255, 99)',
                'rgb(255, 99, 255)',
                'rgb(255, 255, 99)',
                'rgb(99, 255, 255)',
                ],
                data: votes
            }]
            }
        });
        chart.canvas.parentNode.style.height = '500px';
        chart.canvas.parentNode.style.width = '500px';
    }

    if(votesRemaining === 0){
        imageContainer.removeEventListener('click', selector);
        imageContainer.innerHTML = "Thanks for voting! Here are your results:";
        winner();
    }

    if(event.target.id === 'imageContainer'){
        alert('Please click on one of the images.');
    }

    for(var i = 0; i < imageBank.length; i++){
        if(selected === imageBank[i].title){
            imageBank[i].votes++;
            votesRemaining--;
        }
    }
    randomizeImage();
}

randomizeImage();