// Node.js 환경이기때문에 노드 모듈을 사용한다.
import { BinarySerachTree } from "../BinarySerachTree/binarySearchTree.js"; // 파일확장자 생략 X
// 너비 우선 탐색

// 큐를 사용한다.
// 방문한 노드는 리스트에 저장한다.
const BFS = (tree) => {
  let queue = [tree.root]; // 큐
  let list = []; // 방문한 노드를 순서대로 저장할 리스트

  while (queue.length !== 0) {
    const node = queue.shift(); // dequeue
    // node의 자식이 있는 경우 queue에 추가
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
    // node를 list에 넣기
    list.push(node.value);
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
console.log(BFS(tree));
