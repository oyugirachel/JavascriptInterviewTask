
//Declaring an array
const arr = [1,2,[3,4,[5,6],7,[8,9]]];
const removebrackets = function(){
   //creating an empty array to append to later on
   let res = [];
  //for loop to loop through the array
   for(let i = 0; i < this.length; i++){
      if(Array.isArray(this[i])){
         res.push(...this[i].removebrackets());
      }else{
         res.push(this[i]);
      };
   };
   return res;
};
//creating a flat array
Array.prototype.removebrackets = removebrackets;
console.log(arr.removebrackets());