import { BinarySerachTree } from "../BinarySerachTree/binarySearchTree.js"; // 파일확장자 생략 X

// 후위 순회
// 왼쪽 브랜치가 있다면를 탐사한다
// 오른쪽 브랜치가 있다면 탐사한다.
// 다 확인 후에 노드를 방문 리스트에 넣는다.

const postOrder = (tree) => {
  let list = []; // 순회 리스트

  // 헬퍼 함수
  const helper = (node) => {
    // 왼쪽 브랜치 검사
    if (node.left) {
      helper(node.left);
    }
    // 오른쪽 브랜치 검사
    if (node.right) {
      helper(node.right);
    }
    // 순회 저장
    list.push(node.value);
    // 자식 노드가 없다면 리턴
    return;
  };

  if (tree.root) {
    helper(tree.root);
  }

  return list;
};

const tree = new BinarySerachTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(postOrder(tree));
