function map(array, change){
  var changed = [];
  for (var i = 0; i < array.length; i++){
    changed.push(change(array[i]));
  }
  console.log(changed);
}


var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});