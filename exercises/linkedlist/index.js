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
    this.head = this.head.next;
  }

  removeLast() {
    let prevNode = null;
    let node = this.head;

    if (node) {
      while(node.next) {
        prevNode = node;
        node = node.next;
      }
      prevNode ? prevNode.next = null : this.head = null;
    }
    else {
      return null;
    }
  }
}

module.exports = { Node, LinkedList };
