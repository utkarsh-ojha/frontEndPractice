document.write("This is document.write");
// alert("Hello again");

//JavaScript console api
console.log("Hello java script");
console.warn("This is a warning");
console.error("This is error");
// console.clear();
console.assert(4 == 7)

//Number
var num1 = 45;
var num2 = 56;
console.log(num1 + num2);

//String
var str1 = "My string 1";
var str2 = "My string 2";

//Object
var marks = {
    utk: 100,
    kritika: 99,
    urmila: 54,
    prem: 85
}

console.log(marks);

//bool
var a = true;
var b = false;

//Undifined
var und = undefined;
console.log(und);

//null
var z = null;

// Array in javaScript

var arr = [1,2,"utk",3,4,5,6,7];

console.log(arr[0])
console.log(arr)


// Function

function avg(a,b) {
    return (a+b)/2;
}
console.log(avg(4,6))
