import Node from './node.js';

export default class LinkedList {
  constructor(headNode = new Node()) {
    this.headNode = headNode;
  }

  iterator(lLForEach = () => {}) {
    let current = this.headNode;
    while (current.next !== null) {
      current = current.next;
      if (lLForEach(current) === false) {
        break;
      }
    }
    return current;
  }

  append(value) {
    const lastNode = this.iterator();
    lastNode.next = new Node(value);
  }

  prepend(value) {
    const rest = this.headNode.next;
    this.headNode.next = new Node(value, rest);
  }

  get size() {
    let linkedListSize = 0;
    let current = this.headNode;
    this.iterator(() => {
      linkedListSize++;
    });
    return linkedListSize;
  }

  get head() {
    return this.headNode;
  }

  get tail() {
    return this.iterator();
  }

  at(index) {
    if (index === 0) return this.head;
    let foundNode = null;
    this.iterator((current) => {
      if (index === 1) {
        foundNode = current;
        return false;
      }
      index--;
    });
    return foundNode;
  }

  pop() {
    if (this.headNode.next === null) {
      return console.log('Nothing to pop!');
    }
    let prev = null;
    this.iterator((current) => {
      if (prev === null) {
        prev = this.head;
      } else {
        prev = prev.next;
      }
    });
    prev.next = null;
  }

  containsValue(key, value) {
    let isFound = false;
    this.iterator((current) => {
      if (current.value[key] === value) {
        isFound = true;
        return false;
      }
    });
    return isFound;
  }

  containsKey(key) {
    let isFound = false;
    this.iterator((current) => {
      if (Object.keys(current.value)[0] === key) {
        isFound = true;
        return false;
      }
    });
    return isFound;
  }

  getValue(key) {
    let value = null;
    this.iterator((current) => {
      if (Object.keys(current.value)[0] === key) {
        value = current.value[key];
        return false;
      }
    });
    return value;
  }

  findValue(key, value) {
    let index = 0;
    let isFound = false;
    this.iterator((current) => {
      if (current.value[key] === value) {
        isFound = true;
        return false;
      }
      index++;
    });
    return isFound ? index : null;
  }

  findKey(key) {
    let index = 0;
    let isFound = false;
    this.iterator((current) => {
      if (Object.keys(current.value)[0] === key) {
        isFound = true;
        return false;
      }
      index++;
    });
    return isFound ? index : null;
  }

  changeValue(key, value) {
    let valueKey = '';
    this.iterator((current) => {
      valueKey = Object.keys(current.value)[0];
      if (valueKey === key) {
        current.value[key] = value;
        return false;
      }
    });
  }

  toString() {
    let listString = '';
    let key = '';
    this.iterator((current) => {
      key = Object.keys(current.value)[0];
      listString += `( ${key}: ${current.value[key]} ) -> `;
    });

    listString += 'null';

    return listString;
  }

  toArray(type) {
    let arr = [];
    let key = '';
    this.iterator((current) => {
      key = Object.keys(current.value)[0];
      if (type === 'keys') {
        arr.push(key);
      } else if (type === 'values') {
        arr.push(current.value[key]);
      }
    });

    return arr;
  }

  insertAt(value, index) {
    if (index === 0) {
      this.prepend(value);
    } else {
      let prev = null;
      let isFound = false;

      const result = this.iterator((current) => {
        if (prev === null) {
          prev = this.head;
        } else {
          prev = prev.next;
        }

        if (index < 1) {
          prev.next = new Node(value, current);
          isFound = true;
          return false;
        }
        index--;
      });

      if (!isFound) {
        index === 0
          ? (result.next = new Node(value))
          : console.log('Index too big!');
      }
    }
  }

  removeAt(index) {
    index--;
    if (index === -1) {
      console.log("Can't remove the head!");
    } else {
      let prev = null;
      let isFound = false;

      const result = this.iterator((current) => {
        if (prev === null) {
          prev = this.head;
        } else {
          prev = prev.next;
        }

        if (index < 1) {
          prev.next = current.next;
          isFound = true;
          return false;
        }
        index--;
      });

      if (!isFound && index === 0) {
        console.log('Index too big!');
      }
    }
  }
}
