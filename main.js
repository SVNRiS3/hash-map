import HashMap from './hash-map.js';

const newHashMap = new HashMap();

newHashMap.set('apple', 'red');
newHashMap.set('banana', 'yellow');
newHashMap.set('carrot', 'orange');
newHashMap.set('dog', 'brown');
newHashMap.set('elephant', 'gray');
newHashMap.set('frog', 'green');
newHashMap.set('grape', 'purple');
newHashMap.set('hat', 'black');
newHashMap.set('ice cream', 'white');
newHashMap.set('jacket', 'blue');
newHashMap.set('kite', 'pink');
newHashMap.set('lion', 'golden');
newHashMap.set('hat', 'gold');

console.log(newHashMap.buckets);
console.log(newHashMap.buckets[11].toString());
console.log(newHashMap.size);
