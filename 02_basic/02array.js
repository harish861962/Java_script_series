const heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman","flash","batman"];

// heros.push(dc_heros);
// console.log(heros);

//const all_heros = heros.concat(dc_heros) // Merging two arrays


const all_heros =  [...heros, ...dc_heros] // Merging two arrays using spread operator
console.log(all_heros); 

const another_arr = [1, 2, 3, 4, [5, 6, 7, 8], 9,7, 10,[1,2,3,[33,44,21]]];

const real_another_arr = another_arr.flat(Infinity); // Flattening the array to a single level  
console.log(real_another_arr);


console.log(Array.from("Harish")); // Convert string to array
console.log(Array.from([1, 2, 3, 4])); // Convert array-like object to array
