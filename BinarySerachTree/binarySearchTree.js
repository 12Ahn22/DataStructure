class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BinarySerachTree {
  constructor() {
    this.root = null;
  }

  // insert
  // 어디에 들어가야하는지 찾아서 삽입해야한다.
  insert(value) {
    // 새 노드를 만든다.
    const newNode = new Node(value);
    // 루트가 없다면?
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let parent = this.root;
    // 루트와 비교한다.
    while (true) {
      // 크다면 오른쪽으로 이동하고
      if (parent.value < value) {
        // 오른쪽 노드가 비어있다면 여기에 값을 넣고 종료
        if (!parent.right) {
          parent.right = newNode;
          break;
        }
        parent = parent.right;
      } else {
        //  작다면 왼쪽으로 이동한다.
        // 왼쪽 노드가 비어있다면 여기에 값을 넣고 종료한다.
        if (!parent.left) {
          parent.left = newNode;
          break;
        }
        parent = parent.left;
      }
    }
    // 아무것도 return 안하는 것보다 전체 자료구조라도 리턴하는게 좋다.
    return this;
  }

  // find
  find(value) {
    // 루트에서 출발한다.
    let node = this.root;
    // 루트 확인하기
    if (this.root.value === value) return this.root;

    while (node) {
      // node보다 값이 작으면 왼쪽으로 이동
      if (value < node.value) {
        node = node.left;
      } else if (value > node.value) {
        // node보다 값이 크면 오른쪽으로 이동
        node = node.right;
      } else {
        // 그외의 경우, 즉 값이 같은 경우
        break;
      }
    }
    return node || null;
  }

  findParent(value) {
    // root 확인하기
    if (this.root.value === value || !value) return null;

    let node = this.root;
    let parent = node;
    while (node) {
      if (value < node.value) {
        parent = node;
        node = node.left;
      } else if (value > node.value) {
        parent = node;
        node = node.right;
      } else {
        break;
      }
    }
    return node ? parent : null;
  }

  // remove
  // 삭제한 노드의 자식이 있다면 연결을 해줘야한다.
  // 값을 입력받아 삭제한다.
  remove(value) {
    // 부모를 찾아야한다.
    let parent = this.findParent(value);
    let node = this.find(value);
    if (!parent || !node) return false;

    // 1. 해당 노드의 자식이 하나도 없는 경우
    if (!node.right && !node.left) {
      // 부모의 어느쪽인지 확인 후 삭제하기 작거나같을때(왼쪽) , 클때(오른쪽)
      if (node.value > parent.value) {
        parent.right = null;
      } else {
        parent.left = null;
      }
    } else if (node.right && node.left) {
      // 대체할 노드와 가장 근접한 노드를 찾는다.
      let biggerNode = node.right; // 오른쪽 브랜치의 left 최하단
      let biggerNodeParent = biggerNode;
      while (biggerNode.left) {
        biggerNodeParent = biggerNode;
        biggerNode = biggerNode.left;
      }
      // 찾은 노드와 삭제할 노드의 자리를 바꾼다는게 그냥 값을 바꿔버리는 듯???
      node.value = biggerNode.value;
      biggerNodeParent.left = null; // 연결 끊기
    } else {
      // 3. 해당 노드의 자식이 하나 있는 경우
      if (node.value > parent) {
        parent.right = node.right || node.left;
      } else {
        parent.left = node.right || node.left;
      }
    }
    return true;
  }
}

// const tree = new BinarySerachTree();
// // tree.root = new Node(10); // root 생성
// tree.insert(10);
// tree.insert(5);
// tree.insert(16);
// tree.insert(20);
// tree.insert(14);
// tree.insert(15);
// tree.insert(3);
// tree.insert(1);
// tree.insert(21);
// tree.insert(19);
// // tree.remove(3); // 하나
// tree.remove(16);
// console.log(tree);
