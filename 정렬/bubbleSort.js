function swap(arr, a, b) {
  const tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
}

// 버블 정렬
function bubbleSort(arr) {
  // 자신의 오른쪽과 자신을 비교해서 크다면 자리를 바꾸는 정렬 방식이다.
  let noSwaps;
  // 다 돌면서 비교를 해야하니까 0~arr.length까지 돈다.
  let cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    noSwaps = true;
    // 한바퀴 돌때마다 맨 뒤에가 정렬이 되기때문에 비교할 필요가 없다.
    for (let j = 0; j < arr.length - i - 1; j++) {
      cnt++;
      // console.log(arr, arr[j], arr[j + 1]);
      // arr[j]랑 arr[j+1]을 비교했을 때, j가 더 크다면 자리바꾸기
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  console.log(cnt);
  return arr;
}

// 버블 정렬을 최적화하는 방법
// 지난번 루프일 때 스왑을 하지않았다면 이미 정렬이 됬다는 의미

let arr = [3, -5, 11, 0, -8];
arr = [100, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(bubbleSort(arr));
