import LinkedList from './linked-list.js';

export default class HashMap {
  load_factor = 0.6;
  capacity = 16;
  size = 0;
  constructor() {
    this.buckets = this.createBuckets(this.capacity);
  }

  createBuckets() {
    let bucketsObj = {};
    for (let i = 0; i < this.capacity; i++) {
      bucketsObj[i] = null;
    }
    return bucketsObj;
  }

  checkIndexOutOfBonds(index, buckets) {
    if (index < 0 || index >= buckets.length) {
      throw new Error('Trying to access index out of bounds');
    }
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  set(key, value, bucketsToSetTo = this.buckets) {
    const hashKey = this.hash(key);

    if (bucketsToSetTo[hashKey] === null) {
      bucketsToSetTo[hashKey] = new LinkedList();
      bucketsToSetTo[hashKey].append({ [key]: value });
      this.size++;
    } else if (bucketsToSetTo[hashKey].containsKey(key, value)) {
      bucketsToSetTo[hashKey].changeValue(key, value);
    } else {
      bucketsToSetTo[hashKey].append({ [key]: value });
      this.size++;
    }
    this.checkBucketsSize();
  }

  checkBucketsSize() {
    if (this.size > this.capacity * this.load_factor) {
      this.updateBuckets();
    }
  }

  updateBuckets() {
    this.capacity *= 2;
    const newBuckets = this.createBuckets();
    Object.values(this.buckets).forEach((value) => {
      if (value !== null) {
        value.iterator((current) => {
          let pair = current.value;
          let key = Object.keys(pair)[0];
          this.set(key, pair[key], newBuckets);
        });
      }
    });

    this.buckets = newBuckets;
  }
}
