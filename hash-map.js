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
    } else if (bucketsToSetTo[hashKey].containsKey(key)) {
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
    this.size = 0;
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

  get(key) {
    const hashKey = this.hash(key);
    let value = null;
    if (this.buckets[hashKey] !== null) {
      value = this.buckets[hashKey].getValue(key);
    }
    return value;
  }

  has(key) {
    const hashKey = this.hash(key);
    if (this.buckets[hashKey] !== null) {
      return this.buckets[hashKey].containsKey(key);
    }
    return false;
  }

  remove(key) {
    const hashKey = this.hash(key);
    if (this.buckets[hashKey] !== null) {
      const index = this.buckets[hashKey].findKey(key);
      if (index === null) {
        return false;
      }
      this.buckets[hashKey].removeAt(index + 1);
      return true;
    }
    return false;
  }

  length() {
    return this.size;
  }

  clear() {
    this.size = 0;
    this.capacity = 16;
    this.buckets = this.createBuckets();
  }

  keys() {
    let keysArray = [];
    let linkedListKeysArray = [];

    Object.values(this.buckets).forEach((value) => {
      if (value !== null) {
        linkedListKeysArray = value.toArray('keys');
        keysArray = keysArray.concat(linkedListKeysArray);
      }
    });

    return keysArray;
  }

  values() {
    let valuesArray = [];
    let linkedListValuesArray = [];

    Object.values(this.buckets).forEach((value) => {
      if (value !== null) {
        linkedListValuesArray = value.toArray('values');
        valuesArray = valuesArray.concat(linkedListValuesArray);
      }
    });

    return valuesArray;
  }

  entries() {
    let pairArray = [];
    let linkedListPairArray = [];

    Object.values(this.buckets).forEach((value) => {
      if (value !== null) {
        linkedListPairArray = value.toArray('pair');
        pairArray = pairArray.concat(linkedListPairArray);
      }
    });

    return pairArray;
  }
}
