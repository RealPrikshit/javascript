// Primitive data-types
//7-types call by vlaue/ copy
 //String , Number ,Boolean ,Null, Undefined, Symbol, Big Int


 // Reference type > Non Primitive
 // array , objects , functions
 const id=Symbol('123')
 const id1=Symbol('123')
 console.log(id);
 console.log(id1==id); //false

 //big int
 //const bigNumber=12345670765n
 const array=["prikshit","bawa","hp"]
let myObj={
    name:"prikshit",
    age:22,
}

const myFunc=function(){
   console.log("hello ji");
}
