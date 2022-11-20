import { BinarySerachTree } from "../BinarySerachTree/binarySearchTree.js"; // 파일확장자 생략 X

// 중위 순회
// 왼쪽 브랜치 탐사
// 방문 노드에 넣기
// 오른쪽 노드 탐사
const inOrder = (tree) => {
  let list = []; // 순회 리스트

  // 헬퍼 함수
  const helper = (node) => {
    // 왼쪽 브랜치 검사
    if (node.left) {
      helper(node.left);
    }

    // 순회 저장
    list.push(node.value);

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
console.log(inOrder(tree));
