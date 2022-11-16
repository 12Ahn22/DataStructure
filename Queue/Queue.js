class Node {
  constructor(value) {
    this.value = value;
    this.next = null; // 내 다음에 들어온 노드
  }
}

class Queue {
  constructor() {
    this.size = 0;
    this.first = null; // head
    this.last = null; // tail
  }

  // 항상 끝에 넣는다 = push
  enqueue(value) {
    const newNode = new Node(value);
    // 하나도 없는 경우
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // 그 외의 경우
      // temp를 쓸 필요가 없엇다..
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  // 앞을 뽑는다. = shift
  dequeue() {
    // 비어있는 경우
    if (!this.first) return null;
    // 하나 있는 경우
    let temp = this.first; // 가장 처음에 들어온 요소를 뽑아야한다.
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue());
console.log(queue);
