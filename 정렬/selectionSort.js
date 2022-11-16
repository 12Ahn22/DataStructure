// 선택 정렬
// 배열에서 가장 작은 요소를 찾은 후(선택)에
// 앞쪽부터 채우는 정렬 방식

// Cannot use import statement outside a module - 모듈시스템때문에 혈압터지는 듕
const { swapArrayElement } = require("../lib/swap");

function selectionSort(arr) {
  // 앞쪽부터 정렬하기 때문에 0~arr.length까지 순회
  for (let i = 0; i < arr.length; i++) {
    // i번째 일때, i의 앞부터 끝까지 검사해야한다
    let small = i;
    for (let j = i + 1; j < arr.length; j++) {
      // 만약 j번째의 요소가 더 작은 경우 small을 변경해준다.
      if (arr[j] < arr[small]) {
        small = j;
      }
    }
    // j를 다 돌고 나오면 가장 작은 요소를 찾은 상태
    // swap
    if (i !== small) swapArrayElement(arr, i, small);
  }
}

const arr = [10, 20, 4, 1, 2, 6];
selectionSort(arr);
// swapArrayElement(arr, 0, 1);
console.log(arr);
