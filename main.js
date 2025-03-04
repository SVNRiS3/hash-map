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
console.log(newHashMap.length());
newHashMap.set('moon', 'silver');
newHashMap.set('kite', 'red');
console.log(newHashMap.length());

console.log(newHashMap.buckets);
// console.log(newHashMap.buckets[11].toString());
// console.log(newHashMap.capacity);
console.log(newHashMap.get('carrot'));
console.log(newHashMap.has('carrot'));
console.log(newHashMap.remove('carrrot'));
// console.log(newHashMap.length());
// console.log(newHashMap.buckets);
console.log(newHashMap.keys());
console.log(newHashMap.values());
console.log(newHashMap.entries());
// console.log(newHashMap.clear());
