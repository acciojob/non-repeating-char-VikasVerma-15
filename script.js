function firstNonRepeatedChar(str) {
 // Write your code here
	const map = new Map();

  for (let ch of str) {
    map.set(ch, (map.get(ch) || 0) + 1);
  }

  for (let [ch, count] of map) {
    if (count === 1) return ch;
  }

  return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
