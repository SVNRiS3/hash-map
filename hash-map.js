class HashMap {
  load_factor = 0.8;
  capacity = 16;
  constructor() {
    buckets = [];
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
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }
}
