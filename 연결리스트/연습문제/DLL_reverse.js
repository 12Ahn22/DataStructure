// 리버스 만들어보기
class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var node = new Node(val);
    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
      this.length++;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
      this.length++;
    }
    return this;
  }
  // 더블링크드 리스트 뒤집기
  reverse() {
    // 헤드와 테일을 변경함
    let cur = this.head;
    this.head = this.tail;
    this.tail = cur;

    // 순회 돌면서 리버스
    for (let i = 0; i < this.length; i++) {
      let prev = cur.prev;
      cur.prev = cur.next;
      cur.next = prev;
      // 노드 이동
      cur = cur.prev;
    }
  }
}

let doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(5).push(10).push(15).push(20);
doublyLinkedList.reverse(); // singlyLinkedList;
console.log(
  // doublyLinkedList.length, // 4
  doublyLinkedList.head.val, // 20
  doublyLinkedList.head.next.val, // 15
  doublyLinkedList.head.next.next.val, // 10
  doublyLinkedList.head.next.next.next.val // 5
);
