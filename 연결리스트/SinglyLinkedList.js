// 연결 리스트에서 사용할 노드
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    // length
    this.length = 0;
    // head
    this.head = null;
    // tail
    this.tail = null;
  }
  // push 메서드 - 새로운 노드를 리스트 맨 뒤에 붙인다.
  push(value) {
    // 새 노드를 만든다.
    let newNode = new Node(value);
    // 만약 head가 없다면 빈 리스트라는 소리
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
    // 마지막 노드의 next가 새로 생성된 노드가 되고
    this.tail.next = newNode;
    // 새로 생성된 노드는 tail이다.
    this.tail = newNode;
    // 길이 추가
    this.length++;
    return this;
  }
  // traverse() {
  //   let current = this.head;
  //   while (current) {
  //     console.log(current.value);
  //     current = current.next;
  //   }
  // }
  //
  // pop - 맨 마지막 노드를 제거한다.
  pop() {
    // 만약 빈 리스트인 경우 return
    if (this.length === 0) return;

    // tail의 바로 뒤 노드가 뭔지 찾으러 가야한다.
    // 단일 링크라서 this.head부터 찾으러 가야한다..!
    // tail의 바로 전 노드찾기
    let currentNode = this.head;
    let prevNode = currentNode;
    while (currentNode.next) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    // 이전노드를 마지막 노드로 변경
    this.tail = prevNode;
    this.tail.next = null;
    this.length--;

    // 만약 다 빠진 상태라면, head와 tail을 없애야한다
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentNode;
  }

  // shift - 노드 앞을 뽑아버리기
  shift() {
    // 리스트가 비어있다면 undefined
    if (!this.head) return;
    // head.next를 head로 만들기
    let returnNode = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    // head 반환하기
    return returnNode;
  }

  // unshift - 앞에 노드 추가하기
  unshift(value) {
    // 새 노드 만들기
    let newNode = new Node(value);
    this.length++;
    // 만약 리스트가 없다면
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    // 현재 head를 next로 가리키기
    newNode.next = this.head;
    // head를 바꾸기
    this.head = newNode;
  }

  // get 메서드 - 주어진 위치에 있는 노드를 가져오는 메서드
  // 0이면 head
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let currentNode = this.head;
    // index까지 이동하기
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  // set 메서드 - 지정한 인덱스에 값을 수정하기
  set(index, value) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return true;
    } else {
      return false;
    }
  }

  // insert - 지정한 위치에 노드를 넣기
  insert(index, value) {
    // index 범위가 잘못 된 경우
    // idnex가 this.length랑 같아도 된다 - 이경우가 맨 뒤에넣기
    if (index < 0 || index > this.length) return false;

    // index가 0이거나 맨 뒤인 경우
    if (index === 0) {
      this.unshift(value);
      return true;
    }
    if (index === this.length) {
      this.push(value);
      return true;
    }
    let newNode = new Node(value);
    // 그 외의 경우
    // idx -1 위치의 노드를 찾는다
    let prevNode = this.get(index - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
    return true;
  }

  // remove - 인덱스를 받아서 해당 노드를 샂게하기
  remove(index) {
    // 인덱스의 범위가 잘못된 경우
    if (index < 0 || index >= this.length) return null;

    // 인덱스가 0이거나 마지막 노드인 경우
    if (index === 0) {
      return this.shift(); // 앞 뽑기
    }
    if (index === this.length - 1) {
      return this.pop();
    }

    // 중간인 경우
    let prev = this.get(index - 1);
    let removeNode = prev.next;
    prev.next = removeNode.next;
    this.length--;
    return removeNode;
  }

  // reverse - 뒤집기, 엄청 자주 물어본다구 한다.
  reverse() {
    // a -> b -> c -> d
    // a <- b <- c <- d

    let node = this.head;
    // 헤드와 테일을 변경
    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let next = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next; // node의 next값을 저장
      node.next = prev; // prev로 변경
      // 한 칸씩 이동
      prev = node;
      node = next;
    }
    return this;
  }
}

let list = new SinglyLinkedList();
list.push(0);
list.push(1);
list.push(2);
// list.shift();
// list.unshift(0);
// console.log(list.set(1, "안녕하세요"));
// list.insert(1, "insert노드");
// console.log(list.get(0));
// console.log(list.get(1));
// console.log(list.get(2));
// console.log(list.remove(1));
console.log(list);
