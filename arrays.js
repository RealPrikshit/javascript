const array=[1,2,3,"prikshit"]
//array are dynamic 0 based indexing 
console.log(array[0]);
const myArr2=new Array(1,2,3,4);
//Array methods
myArr2.push(6);
myArr2.pop()
console.log(myArr2);
myArr2.unshift(9)// start me add ke liye
console.log(myArr2);
myArr2.shift();
console.log(myArr2);
console.log(myArr2.includes(9));
console.log(myArr2.indexOf(9)); //-1

const newarr= myArr2.join()
console.log(newarr); // type string
console.log(myArr2);

//slice and splice
console.log("A",myArr2);

const mya1=myArr2.slice(1,3) // 1 se 2 
console.log("B",mya1);

const myarr2=myArr2.splice(1,3) // orginal array ki slice udd jati
console.log(myarr2);
console.log(myArr2);