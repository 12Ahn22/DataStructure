// pivot helper
function pivotHelper(arr) {
  // 배열을 넣으면 피봇 하나를 뽑아서
  // 피봇의 왼쪽에는 작은 값
  // 오른쪽에는 피봇보다 큰 값을 몰아넣는 헬퍼함수
  let pivot = arr[0]; // 가장 첫번째 요소를 pivot이라고 한다.
  let pivotIdx = 0; // 피봇의 위치를 어디로 이동해야하는지 저장할 idx변수

  // 배열을 순회한다.
  for (let i = 1; i < arr.length; i++) {
    // 만약 피봇보다 작다면 왼쪽에 가야한다고 생각만 해두기
    if (arr[i] < pivot) {
      pivotIdx++; // 그래서 idx만 일단 ++ 해준다. 왼쪽으로 가기..
      // 자리 바꿔주기..?
      [arr[i], arr[pivotIdx]] = [arr[pivotIdx], arr[i]];
    }
  }
  // 마지막에 나온 피봇위치랑 바꿔주기
  [arr[0], arr[pivotIdx]] = [arr[pivotIdx], arr[0]];

  return pivotIdx;
}

const arr = [26, 23, 27, 44, 17, 47, 39, 42, 43, 1];
const arr2 = [28, 41, 4, 11, 16, 1, 40, 14, 36, 37, 42, 18];
// pivotHelper(arr);
// pivotHelper(arr2);

// 약간 범용성을 위해서 피벗을 어디로 지정할껀지도
// 매개변수로 받도록 만든 pivot인듯?
function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start]; // 피벗을 항상 0번째로 하기
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    // 피벗이 큰 경우
    if (pivot > arr[i]) {
      swapIdx++;
      [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
    }
  }
  // 마지막에 pivot하고 swapIdx랑 변경하기
  [arr[swapIdx], arr[start]] = [arr[start], arr[swapIdx]];

  // swapIdx를 반환해야한다.
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right); // 3
    // left
    quickSort(arr, left, pivotIdx - 1);
    // right
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
}

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));
