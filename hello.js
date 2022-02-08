var personAge = 25;
console.log(personAge);
var float = 23.4;
var result = "" + 23.4; // convert a number to string
console.log(result);
var stringNumber = "99.45";
console.log(parseFloat(stringNumber)); //// convert a string to a number

var string ="This is string";
console.log(string);
console.log(string.toUpperCase());
console.log(string.split(" "));

var num1=0.1;
var num2 = 0.2;
var total = num1+num2;
console.log(total);
console.log(total.toFixed(4));

//absoluteNumber
var num = 12.469;
var absoluteNumber = Math.abs(num);
console.log(absoluteNumber);
var absoluteNumber = Math.round(num);
console.log(absoluteNumber);
var absoluteNumber = Math.ceil(num);
console.log(absoluteNumber);
var absoluteNumber = Math.floor(num);
console.log(absoluteNumber);


var number = Math.random(num) *100;
var result = Math.round(number);
console.log(result);

//array
var array = [ 12, 45, 23, 78, 31];
array[2] = 40;
console.log(array);
console.log(array.indexOf(78));
console.log(array.indexOf(1666));
array.push(258);
console.log(array);
console.log(array.length);
array.pop();
console.log(array);
console.log(array.length);
array.shift(); //shift(): Remove an item from the beginning of an array
console.log(array); 
array.unshift(555); //unshift(): Add items to the beginning of an array
console.log(array); 


//conditional

var age = 25;
if(age > 30){
    console.log("Young Guy");
}
else {
    console.log("Old man");
}


//loop
var x = 0;
while(x < 15){
    x++;
    console.log(x);
}
var a=-5;
var b=10;
var c=6;

console.log(b%-c*a);