function Node(value = null, nextNode = null) {
  return { value, nextNode };
}

function LinkedList() {
  let head = null;
  let tail = null;
  let length = 0;

  const append = (value) => {
    newNode = Node(value);
    if (!head) {
      head = newNode;
      tail = newNode;
    } else {
      tail.nextNode = newNode;
      tail = newNode;
    }
    length++;
  };

  const prepend = (value) => {
    newNode = Node(value);
    if (!head) {
      head = newNode;
      tail = newNode;
    } else {
      newNode.nextNode = head;
      head = newNode;
    }
    length++;
  };

  const size = () => length;

  const getHead = () => {
    if (length === 0) return undefined;
    return head.value;
  };

  const getTail = () => {
    if (length === 0) return undefined;
    return tail.value;
  };

  const at = (index) => {
    if (index < 0 || index >= length) return undefined;

    let current = head;
    let i = 0;

    while (current && i < index) {
      current = current.nextNode;
      i++;
    }

    return current ? current.value : undefined;
  };

  const pop = () => {
    if (!head) return undefined;

    const value = head.value;
    head = head.nextNode;
    if (!head) tail = null;

    length--;
    return value;
  };

  const contains = (value) => {
    let current = head;

    while (current) {
      if (current.value === value) return true;
      current = current.nextNode;
    }

    return false;
  };

  const findIndex = (value) => {
    let current = head;
    let index = 0;

    while (current) {
      if (current.value === value) return index;
      current = current.nextNode;
      index++;
    }

    return -1;
  };

  const toString = () => {
    if (!head) return "";

    let current = head;
    let result = "";

    while (current) {
      result += `( ${current.value} ) -> `;
      current = current.nextNode;
    }

    return result + "null";
  };

  const insertAt = (index, ...values) => {
    if (index < 0 || index > length) {
      throw new RangeError("Index out of bounds");
    }

    for (let value of values) {
      if (index === length) {
        append(value);
      } else {
        const newNode = Node(value);

        if (index === 0) {
          newNode.newNode = head;
          head = newNode;
          if (!tail) tail = newNode;
        } else {
          let current = head;
          let i = 0;

          while (current && i < index - 1) {
            current = current.nextNode;
            i++;
          }

          newNode.nextNode = current.nextNode;
          current.nextNode = newNode;

          if (!newNode.nextNode) tail = newNode;
          length++;
        }
      }
      index++;
    }
  };

  const removeAt = (index) => {
    if (index < 0 || index >= length) {
      throw new RangeError("Index out of bounds");
    }

    if (index === 0) {
      head = head.nextNode;
      if (!head) tail = null;
    } else {
      let current = head;
      let i = 0;

      while (current.nextNode && i < index - 1) {
        current = current.nextNode;
        i++;
      }

      current.nextNode = current.nextNode.nextNode;
      if (!current.nextNode) tail = current;
    }

    length--;
  };

  return {
    append,
    prepend,
    size,
    at,
    head: getHead,
    tail: getTail,
    pop,
    contains,
    findIndex,
    toString,
    insertAt,
    removeAt,
  };
}

const list = LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());

// class Node {
//   constructor(value = null, nextNode = null) {
//     this.value = value;
//     this.nextNode = nextNode;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }

//   append(value) {
//     const newNode = new Node(value);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.nextNode = newNode;
//       this.tail = newNode;
//     }
//     this.length++;
//   }

//   prepend(value) {
//     const newNode = new Node(value);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       newNode.nextNode = this.head;
//       this.head = newNode;
//     }
//     this.length++;
//   }

//   size() {
//     return this.length;
//   }

//   head() {
//     if (this.length === 0) return undefined;
//     return this.head.value;
//   }

//   tail() {
//     return this.tail ? this.tail.value : undefined;
//   }

//   at(index) {
//     if (index < 0 || index >= this.length) return undefined;
//     let current = this.head;
//     let i = 0;
//     while (current && i < index) {
//       current = current.nextNode;
//       i++;
//     }
//     return current ? current.value : undefined;
//   }

//   pop() {
//     if (!this.head) return undefined;
//     const value = this.head.value;
//     this.head = this.head.nextNode;
//     if (!this.head) this.tail = null;
//     this.length--;
//     return value;
//   }

//   contains(value) {
//     let current = this.head;
//     while (current) {
//       if (current.value === value) return true;
//       current = current.nextNode;
//     }
//     return false;
//   }

//   findIndex(value) {
//     let current = this.head;
//     let index = 0;
//     while (current) {
//       if (current.value === value) return index;
//       current = current.nextNode;
//       index++;
//     }
//     return -1;
//   }

//   toString() {
//     if (!this.head) return "";
//     let current = this.head;
//     let result = "";
//     while (current) {
//       result += `( ${current.value} ) -> `;
//       current = current.nextNode;
//     }
//     result += "null";
//     return result;
//   }

//   insertAt(index, ...values) {
//     if (index < 0 || index > this.length) {
//       throw new RangeError("Index out of bounds");
//     }
//     for (let value of values) {
//       if (index === this.length) {
//         this.append(value);
//       } else {
//         const newNode = new Node(value);
//         if (index === 0) {
//           newNode.nextNode = this.head;
//           this.head = newNode;
//           if (!this.tail) this.tail = newNode;
//         } else {
//           let current = this.head;
//           let i = 0;
//           while (current && i < index - 1) {
//             current = current.nextNode;
//             i++;
//           }
//           if (current) {
//             newNode.nextNode = current.nextNode;
//             current.nextNode = newNode;
//             if (!newNode.nextNode) this.tail = newNode;
//           }
//         }
//         this.length++;
//       }
//       index++; // for next value, insert at next position
//     }
//   }

//   removeAt(index) {
//     if (index < 0 || index >= this.length) {
//       throw new RangeError("Index out of bounds");
//     }
//     if (index === 0) {
//       this.head = this.head.nextNode;
//       if (!this.head) this.tail = null;
//     } else {
//       let current = this.head;
//       let i = 0;
//       while (current.nextNode && i < index - 1) {
//         current = current.nextNode;
//         i++;
//       }
//       if (current.nextNode) {
//         const toRemove = current.nextNode;
//         current.nextNode = toRemove.nextNode;
//         if (!current.nextNode) this.tail = current;
//       }
//     }
//     this.length--;
//   }
// }

// const list = new LinkedList();

// list.append("dog");
// list.append("cat");
// list.append("parrot");
// list.append("hamster");
// list.append("snake");
// list.append("turtle");

// console.log(list.toString());