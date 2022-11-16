class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// 가장 나중에 들어온 요소가 가장 먼저 나간다
// LIFO
class Stack {
  constructor() {
    this.size = 0;
    this.first = null; // 현재 들어온 값
    this.last = null; // 가장 아래에 있는 값
  }

  // push는 가장 위에 쌓는다.
  push(value) {
    const newNode = new Node(value);
    // 빈 상태인 경우
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }

    return this.size++;
  }

  pop() {
    // 가장 첫번째 요소를 반환해줘야한다.
    // 만약 빈 상태인 경우
    if (!this.first) return null;
    let temp = this.first; // 가장 마지막에 들어온 요소를 내보내야한다.
    // 한 개 있는 경우
    if (this.first === this.last) {
      // 한 개 있는 경우 last를 null로 하면 this.first.next가 null이라는 의미다.
      this.last = null;
    }
    // 여러개가 있는 경우
    this.first = this.first.next; // first가 first의 next가 된다.
    this.size--;
    return temp;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.pop();
console.log(stack);
