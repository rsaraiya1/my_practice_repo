//alert("Hello World");
var s = "hello world";
console.log("This is good for debugging " + s);
//document.write("This overwrites the HTML page. ")

function print3ways() {
    alert("hello");
    console.log("used for debugging");
    document.write("Will overwrite the HTML");
}
var arr = [1,2,3,4,5];
function funWithArrays() {
    document.write("The sum of the array is " + sumArray());
    document.write("<br>The minimum element is the array is " + findMin());
    document.write("<br>The maximum element in the array is " + findMax());
    document.write("<br>The average of the elements in the array is " + average());
}
function sumArray() {
    sum = 0;
    for (let i = 0; i < arr.length; i++)
        sum += arr[i];

    return sum;
}
function findMin() {
    let min = arr[0];
    for(let i =1; i < arr.length; i++)
    {
        if(arr[i] < min)
            min = arr[i];
    }
    return min;
}
function findMax() {
    let max = arr[0];
    for(let i =1; i < arr.length; i++)
    {
        if(arr[i] > max)
            max = arr[i];
    }
    return max;
}
function average() {
    avg = sumArray(arr) / arr.length;
    return avg; 
}

function soManyFunctions() {
    console.log("in so many functions");
    plainOldFunction();
    plainOldFunction("This is my paramter");
    //nestedFunction();
    firstFunction(callBackFunction);
}

function plainOldFunctino(a = "default value") {
    console.log("only i can call nested fucntion");
    nestedFunction();
    console.log("This is a function" + a);

    function nestedFunction() {
        console.log("This is the nested function");
    }
}

function firstFunction(cbf) {
                                                                                                         
}

function callBackFucntion(){
    console.log("This is the call back functino");
}

const dog = {
    name: "Boomer",
    info: {
        pet_type: "dog",
        age: 9,
        tricks: ['speak', 'roll over']
    }
    speak: function() {console.log("woof")}
}
console.log("My dog " + dog.name + "can do a lot of tricks" + dog.info.tricks);