const marvel_Heros=["thor","ironman","spiderman"]
const dc_Heros=["superman","flash"]
const allhero=marvel_Heros.concat(dc_Heros);
console.log(allhero);

//spread method
const all_new_heros=[...marvel_Heros,...dc_Heros]
console.log(all_new_heros);

//convert to array
console.log(Array.from("prikshit")); //
console.log(Array.isArray("prikshit"));
console.log(Array.from({name :"prikshit"})); //imp empty string dega

//convert multiple vale in array 
const score1=100
const score2=200
const score3=300
console.log(Array.of(score1,score2,score3));
