class Node {
  constructor(value) {
    this.value = value;
    // 양방향 링크드 리스트라서 next와 prev가 존재한다.
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // push 메서드 가장 뒤에 데이터를 넣기
  push(value) {
    // 새 노드를 생성하기
    const newNode = new Node(value);
    // 길이 증가++
    // 현재 빈 리스트인 경우
    if (this.length === 0) {
      //  헤드 테일이 모두 새로만든 노드
      this.head = newNode;
      this.tail = newNode;
    } else {
      // 아닌 경우
      // tail노드 뒤에 붙이기
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // pop - 가장 뒤 값을 반환
  pop() {
    // 리스트가 비어있는 경우
    if (!this.head) {
      return undefined;
    }
    // 리스트가 하나인 경우
    const poppedNode = this.tail; // tail 값을 변수에 따로 저장
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // 아닌 경우
      // 그리고 prev를 tail로 변경
      this.tail = poppedNode.prev;
      this.tail.next = null; // 새로운 tail의 next를 이전 tail노드가 아니도록 연결 삭제
      poppedNode.prev = null; // 뽑은 노드의 prev 이전 노드 연결을 삭제
    }
    this.length--;
    return poppedNode;
  }

  // shift - 맨 앞을 지우기
  shift() {
    // 길이가 0 인경우
    if (this.length === 0) return undefined;

    const poppedNode = this.head;
    // 한개인 경우
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // 아닌 경우
      this.head = poppedNode.next;
      this.head.prev = null;
      poppedNode.next = null;
    }
    this.length--;
    return poppedNode;
  }

  // unshift - 맨 앞에 추가하기
  unshift(value) {
    // 새 노드 만들기
    let newNode = new Node(value);
    // 빈 리스트인 경우
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // 아닌 경우
      newNode.next = this.head; // 새 노드의 next 는 헤드
      this.head.prev = newNode; // 헤드의 이전노드는 newNode
      this.head = newNode; // 헤드를 newNode로 교체
    }
    this.length++;
    return this;
  }

  // get - 해당 인덱스에 있는 노드 반환..
  get(index) {
    // 인덱스가 올바르지 않은 경우
    if (index < 0 || index >= this.length) return null;
    // 인덱스가 작다면..
    // 오....
    let currentNode;
    if (index <= this.length / 2) {
      console.log("WORKING FROM START");
      let count = 0;
      currentNode = this.head;
      while (count != index) {
        currentNode = currentNode.next;
        count++;
      }
    } else {
      console.log("WORKING FROM END");
      let count = this.length - 1; // 가장 뒤부터 시작하기..!
      currentNode = this.tail;
      while (count != index) {
        currentNode = currentNode.prev;
        count--;
      }
    }
    return currentNode;
  }

  // set - 내가 원하는 idx 자리에 있는 노드를 수정하기
  set(value, index) {
    const selectedNode = this.get(index);
    if (selectedNode) {
      selectedNode.value = value;
      return true;
    }
    return false;
  }

  // insert 원하는 인덱스에 노드를 넣기
  insert(value, index) {
    if (index < 0 || index > this.length) return null; // index 유효검사

    // 맨 앞에 붙인다면 unshift
    if (index === 0) {
      return this.unshift(value);
    }
    // 만약 리스트가 없다면
    // 맨 뒤에 붙인다면 push
    if (index === this.length || !this.head) {
      return !!this.push(value);
    }

    // 바로 전 node를 구하기
    const prevNode = this.get(index - 1);
    const nextNode = prevNode.next;
    // 새 노드 만들기
    const newNode = new Node(value);
    // 새 노드와 전 노드와 다음 노드와의 연결 해주기
    newNode.prev = prevNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;
    prevNode.next = newNode;
    // 길이 증가
    this.length++;
    return true;
  }
  // remove 인덱스 위치의 요소를 지우는 메서드
  remove(index) {
    // 인덱스 범위 유효성 검사
    if (index < 0 || index >= this.length) return undefined; // index 유효검사
    // 인덱스가 0 이면 쉬프트
    if (index === 0) return !!this.shift();
    // 인덱스가 마지막이면 pop
    if (index === this.length - 1) return !!this.pop();

    // 그 외에는 get으로 찾아가서 양쪽의 연결을 제거해준다.
    const removedNode = this.get(index);
    const prevNode = removedNode.prev;
    const nextNode = removedNode.next;
    // 지울 노드의 연결을 끊기
    removedNode.prev = null;
    removedNode.next = null;
    // prev와 next를 연결해주기
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    this.length--;
    return true;
  }
}

const list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.unshift(0);
list.set("100", 0);
list.insert("300", 0);
console.log(list.get(3).value);
list.remove(3);
console.log(list.get(3).value);
