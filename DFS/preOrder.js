import { BinarySerachTree } from "../BinarySerachTree/binarySearchTree.js"; // 파일확장자 생략 X

// 전위 순회
// 왼쪽을 전부 순회 후
// 오른쪽을 순회한다.
// 재귀를 사용해 구현한다.

const preOrder = (tree) => {
  let list = []; // 순회 리스트

  // 헬퍼 함수
  const helper = (node) => {
    // 순회 저장
    list.push(node.value);

    // 왼쪽 브랜치 검사
    if (node.left) {
      helper(node.left);
    }
    // 오른쪽 브랜치 검사
    if (node.right) {
      helper(node.right);
    }
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
console.log(preOrder(tree));
