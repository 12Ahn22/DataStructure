// MIN 이진 힙을 사용해 구현하는 우선순위 큐
// 우선순위 큐를  구현하는 방법은 많지만 이진힙이 가장 편하다
// 우선순위 큐는 개념이다.

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority; // 이진힙의 위치를 priority로 결정한다.
    // 같은 우선순위를 가진 노드들이 더 빨리 heap에 추가된 요소가 먼저 앞으로 당겨지길
    // 바라는 경우
    this.time = Date.now();
  }
}

class PriorityQueue {
  constructor() {
    this.queue = []; // 이진힙을 배열을 통해 구현
  }

  // 큐에 넣기
  enqueue(value, priority) {
    // 새 노드 만들기
    const newNode = new Node(value, priority);

    // 맨 뒤에 push하기
    this.queue.push(newNode);

    // 올바른 위치를 찾아가기 위해서 버블업 해주기
    this.bubbleUp();
  }
  bubbleUp() {
    // 부모의 우선순위와 노드의 우선순위를 비교한다
    // 노드의 우선순위가 더 높다면(수가 작다면) 서로 위치를 변경한다.
    // 이를 반복
    const queue = this.queue;
    let idx = queue.length - 1;
    let parentIdx = Math.floor((idx - 1) / 2);
    // idx가 0 이상인 경우 조건 추가
    while (idx > 0 && queue[idx].priority <= queue[parentIdx].priority) {
      // 자리 교환 ES6
      [queue[idx], queue[parentIdx]] = [queue[parentIdx], queue[idx]];
      // idx 변경
      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2);
    }
  }

  // root를 뽑기
  dequeue() {
    const queue = this.queue;
    const maxPriorityNode = queue;
    queue[0] = queue.pop();

    this.sinkDown();

    return maxPriorityNode;
  }
  sinkDown() {
    let idx = 0;
    const queue = this.queue;
    const length = queue.length;
    const element = queue[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = queue[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = queue[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      // 교환
      queue[idx] = queue[swap];
      queue[swap] = element;
      idx = swap;
    }
  }
}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("normal", 3);
priorityQueue.enqueue("normal2", 3);
priorityQueue.enqueue("nothing", 5);
priorityQueue.enqueue("nothing2", 5);
priorityQueue.enqueue("urgent", 0);
priorityQueue.enqueue("normal3", 4);
priorityQueue.enqueue("urgent2", 0);

console.log(priorityQueue.queue);
priorityQueue.dequeue();
console.log(priorityQueue.queue);
