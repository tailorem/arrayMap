function arrayMap(items, converter){
  var result = [];
  items.forEach(function(item){
    result.push(converter(item));
  });
  return result;
}

// To continue, try using a for loop!



// Implement your own version of the built-in array map function.

// Yours will take in two arguments. The first will be an array to map and the second will be a callback function. The function will return a new array based on the results of the callback function.

// [6, 7, 2, 5, 3]

// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]


// // lecture example
// function map(items, transformer){
//   var transformed = [];
//   forEach(items, function(item, index){
//     transformed.push(transformer(item, index));
//   });
//   return transformed;
// }


// var words = ["ground", "control", "to", "major", "tom"];

console.log(arrayMap(words, function(word) {
  return word.length;
}));
console.log(arrayMap(words, function(word) {
  return word.toUpperCase();
}));
console.log(arrayMap(words, function(word) {
  return word.split('').reverse().join('');
}));


