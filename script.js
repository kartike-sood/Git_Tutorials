var today= new Date();//This is something else
var hournow = today.getHours();
var greeting;

if (hournow > 18){
    greeting = "Good Evening";
}
else if(hournow > 12){
    greeting = "Good Afternoon";
}
else if(hournow > 0){
    greeting = "Good Morning";
}
else{
    greeting = "Why the fuck are you here?";
}
document.write('<h1>' + greeting + '</h1>');

var el = document.getElementById('name');
el.textContent = 'Adam';

//assigning the value of house
var house = 'Montague House';
var elHouse = document.getElementById('sign');
elHouse.textContent = house;

//assigning the value of total tiles
var noTiles = 40;
var elTiles = document.getElementById('tiles');
elTiles.textContent = noTiles;

//assigning the value of subtotal
var subtotal = 50 * noTiles;
var elSubTotal = document.getElementById('subtotal');
elSubTotal.textContent = '$' + subtotal; 

//assigning the value of total tiles
var ship = 10;
var elShipping = document.getElementById('shipping');
elShipping.textContent = '$' + ship;

//assigning the value of total tiles
var Grand = subtotal + ship;
var elGrand = document.getElementById('grand');
elGrand.textContent = '$' + Grand;

function windowSize() {
    var width=  innerWidth; //same as this.innerWidth
    var height = innerHeight; // same as this.innerHeight
    return [height, width]; }

var el3 = document.getElementById('info');
el3.textContent = "The height  is: " + windowSize()[0] + "pixels and the width is :" + windowSize()[1] + "pixels";
alert("Is it really you? " +  document.title);

// var msg = '<h1>This is changed</h1>';
// msg += '<p>The paragraph ' + document.title + '</p>';
// var el4 = document.getElementById('info');
// el4.innerHTML = msg;

var msg = '<p><b>page title : </b>' + document.title + '<br/>';
msg += '<b>page URL : </b>' + document.URL + '<br/>';
msg += '<b>last modified date : </b>' + document.lastModified + '</p>';

var el4 = document.getElementById('info');
el4.innerHTML = msg;