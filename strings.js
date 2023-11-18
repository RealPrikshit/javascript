//Strings
//" "/ ' '
const name="prikshit"
const repoCount=50
console.log(name + repoCount);
console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);

const Gamename=new String("GTA")
console.log(Gamename);
console.log(Gamename[0]);
console.log(Gamename.length);
console.log(Gamename.toLowerCase);// original value change ni hui
console.log(Gamename.charAt(0));
console.log(Gamename.indexOf('G'));

const newString=Gamename.substring(0,2);
console.log(newString); // 0 se 2 n-1

const newString1=Gamename.slice(-8,2);
console.log(newString1);

const trimm="  prikshit  "
console.log(trimm.trim());

const url="https://hitesh.com/hitesh%20choudhary";
console.log( url.replace('%20','-')); // search replce

console.log(url.includes('hitesh'));

console.log(url.split('/'));
