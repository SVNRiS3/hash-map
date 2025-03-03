import LinkedList from './linked-list.js';

export default class HashMap {
  load_factor = 0.8;
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
    console.log(bucketsObj);
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

  set(key, value) {
    const hashKey = this.hash(key);

    if (this.buckets[hashKey] === null) {
      this.buckets[hashKey] = new LinkedList();
      this.size++;
    } else if (this.buckets[hashKey].containsKey(key, value)) {
      this.buckets[hashKey].changeValue(key, value);
    } else {
      this.buckets[hashKey].append({ [key]: value });
      this.size++;
    }
    this.checkBucketsSize();
  }

  checkBucketsSize() {
    if (this.size > this.capacity * this.load_factor) {
      this.capacity *= 2;
      const newBuckets = this.createBuckets();
      this.updateBucketsContents(newBuckets);
    }
  }

  updateBucketsContents(bucketsToUpdate) {
    Object.values(this.buckets).forEach((value) => {
      if (value !== null) {
        value.iterator((current) => {
          let pair = current.value;
          let key = Object.keys(pair)[0];
          this.set();
        });
      }
    });
  }
}
