// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }
// head > next
// f s
//
function midpoint(list) {
  let fast = list.head;
  let slow = list.head;

  while(fast.next) {
    if (fast.next.next) {
      fast = fast.next.next;
      slow = slow.next;
    }
    else {
      return slow;
    }
  }
  return slow;
}

module.exports = midpoint;
