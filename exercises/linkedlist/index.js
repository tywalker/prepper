// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let count = 0;
    let node = this.head;

    while (node) {
      node = node.next;
      count++;
    }

    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;

    if (node) {
      while(node.next) {
        node = node.next;
      }
      return node;
    }
    else {
      return null;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) { return; }
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) { return; }
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let prevNode = null;
    let node = this.head;

    while(node.next) {
      prevNode = node;
      node = node.next;
    }

    prevNode.next = null;
  }

  insertLast(data) {
    if (!this.head) {
      this.head = new Node(data)
      return;
    };

    let node = this.head;

    while(node.next) {
      node = node.next
    }

    node.next = new Node(data);
  }

  getAt(n) {
    let count = 0;
    let node = this.head;
    if (!this.head) { return null; }

    while(node) {
      if (count === n) {
        return node;
      }

      count++;
      node = node.next;
    }
    return null;
  }

  removeAt(n) {
    if (!this.head) { return null; }
    if (n === 0) { this.head = this.head.next; }

    let node = this.getAt(n);

    if (node === null) {
      return node;
    }

    let prevNode = this.getAt(n - 1);
    if (prevNode) {
      prevNode.next = node.next;
    }
  }

  insertAt(data, n) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode
      return;
    }
    if (n === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let curNode = this.getAt(n - 1);
    let nextNode = this.getAt(n);

    if (curNode) {
      curNode.next = newNode;
      newNode.next = nextNode;
    }
    else {
      newNode.next = null;
      this.insertLast(newNode.data);
    }
  }
}

module.exports = { Node, LinkedList };
