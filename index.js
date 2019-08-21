
'use strict'

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;

  }
}

class LinkedList {
  constructor() {
    this.head = null;

  }
}

insertBefore(data) {
  this.head = new Node(data, this.head);
}

valueMinusK(index) {
  let current = this.head;
  let count = 0;
  let k = current.null;

  while (current) {
    if (count === index) {
      console.log(current.data);
    }
    count++;
    current
  }
  for (let i = 0; i < count - k; i++) {
    return current.data
  }
}









newNode.insertBefore(100);
newNode.insertBefore(200);
newNode.insertBefore(300);
newNode.valueMinusK(1);