// MAX 이진 힙
// root가 가장 큰 값이다.
// 배열을 이용한다.
class MaxBinaryHeap {
  constructor() {
    this.heap = [];
  }

  // insert method
  insert(value) {
    // 배열에 push한다.
    this.heap.push(value);
    // 해당 요소를 bubble up
    // 알맞은 위치를 찾아가도록 한다.
    this.heap.length > 1 && this.bubbleUp();
  }
  bubbleUp() {
    // heap 배열의 마지막 요소를 가져온다.
    const heap = this.heap;

    // 해당 요소의 부모와 값을 비교한다.
    // 부모보다 값이 크다면 swap한다.
    // 부모가 클 때까지 반복
    let idx = heap.length - 1;
    let parentIdx = Math.floor((idx - 1) / 2);
    while (heap[idx] > heap[parentIdx]) {
      // 교환
      [heap[parentIdx], heap[idx]] = [heap[idx], heap[parentIdx]];
      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2);
    }
  }

  // extract Max
  extractMax() {
    // 배열의 맨 앞과 맨 뒤를 교환한다.
    const max = this.heap[0];
    this.heap[0] = this.heap.pop();

    // root를 root에 맞는 자리로 이동시킨다.
    this.sinkDown();
    return max;
  }
  sinkDown() {
    let idx = 0;
    const heap = this.heap;
    const length = heap.length;
    // insert메서드와 다르게 idx 범위를 초과하는 경우가 존재한다.
    let left = idx * 2 + 1;
    let right = idx * 2 + 2; // idx가 터지는 경우 발생
    while (heap[idx] < heap[left] || heap[idx] < heap[right]) {
      // 왼쪽이 더 큰 경우 + right가 없는 경우, 완전 이진 탐색이기 때문에
      if (right >= length || heap[left] > heap[right]) {
        [heap[idx], heap[left]] = [heap[left], heap[idx]];
        idx = left;
      } else {
        // 오른쪽이 더 큰 경우
        [heap[idx], heap[right]] = [heap[right], heap[idx]];
        idx = right;
      }
      left = idx * 2 + 1;
      right = idx * 2 + 2;
    }
  }
}

const heap = new MaxBinaryHeap();
heap.insert(39);
heap.insert(41);
heap.insert(33);
heap.insert(12);
heap.insert(55);
heap.insert(10);
console.log(heap.heap.join(" "));
console.log(heap.extractMax());
console.log(heap.heap.join(" "));
console.log(heap.extractMax());
console.log(heap.heap.join(" "));
console.log(heap.extractMax());
console.log(heap.heap.join(" "));
