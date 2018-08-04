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
    if (!this.head) { return null; }
    let count = 0;
    let node = this.head;

    if (n === 0) {
      return node;
    }

    while(count < n) {
      node = node.next;
      count++;
    }

    return node;
  }

  removeAt(n) {
    if (!this.head) { return null; }
    if (n === 0) { this.head = this.head.next; }

    let count = 0;
    let prevNode = null;
    let node = this.head;
    let nextNode = null;
    if (node) { nextNode = node.next; }

    // node -> removeNode -> shiftNodeLeft
    while(count < n) {
      // count == 0 : null, count == 1 : 0
      prevNode = node;
      // 0, 1
      node = nextNode;
      // 1, 2
      if (node) { nextNode = node.next }
      else { nextNode = null };
      count++;
    }

    prevNode ? prevNode.next = nextNode : null;
  }
}

module.exports = { Node, LinkedList };
