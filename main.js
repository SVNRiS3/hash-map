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
newHashMap.set('grape', 'green');

console.log(newHashMap.buckets);
console.log(newHashMap.buckets[11].toString());
console.log(newHashMap.size);
console.log(newHashMap.capacity);
console.log(newHashMap.get('carrot'));
console.log(newHashMap.has('carrot'));
console.log(newHashMap.remove('carrrot'));
console.log(newHashMap.length());
// console.log(newHashMap.clear());
console.log(newHashMap.buckets);
console.log(newHashMap.keys());
console.log(newHashMap.values());
