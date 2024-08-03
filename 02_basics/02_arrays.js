const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//we can push other array into a given one
marvel_heros.push(dc_heros)

console.log(marvel_heros);
console.log(marvel_heros[3][1]);

/*instead of pushing another array do concatenation*/
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

/*instead of concatenation use spread operator (...) */
const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros);

//another option is to flat the array
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Hitesh")) //false
console.log(Array.from("Hitesh")) //give a char array from Hitesh

//not give an array
console.log(Array.from({name: "hitesh"})) //Interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));