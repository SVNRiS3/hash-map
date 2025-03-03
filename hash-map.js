export default class HashMap {
  load_factor = 0.8;
  capacity = 16;
  constructor() {
    const buckets = this.createBuckets(this.capacity);
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

  set(key, value) {}
}
