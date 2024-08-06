console.log("hello world ");

//normal way to write
let normalfunc = function add7(a){
  return a +7;
};

//arrowfunction 

 let arrowfunc = (a) => a + 7;
 
console.log(normalfunc(3));

console.log(arrowfunc(5));

//how to multiply

let getProd = function(a, b){
  return a*b;
}
console.log(getProd(5,3));


//how to capitalize words, different approach 
let word = "gold medal";
let upper = word.toUpperCase();
console.log(upper);

//slice

let sliceword = word[0].toUpperCase()+word.slice(1);
console.log(sliceword);

//charat

let chaword = word.charAt(3).toUpperCase() + word.slice(1);
console.log(chaword);

