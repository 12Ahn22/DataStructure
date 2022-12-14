// 11.01
// 1. 문제를 이해하기
// - 문제를 내 방식대로 다시 생각할 수 있나요?
//    정렬된 배열에서 원하는 값을 찾는 함수
// - 입력값
// - 출력값
// - 입력값만으로 출력값을 결정할 수 있나요?
// - 중요한 요소

// 2. 구체적인 예제
// - 간단한 예제
// - 복잡한 예제
// - 특수한 예제

function binarySearch(arr, target) {
  // 포인터
  let left = 0; // 가장 처음
  let right = arr.length - 1; // 가장 끝

  while (left <= right) {
    // 흠..
    let mid = Math.floor((left + right) / 2);
    // 가운데 값이 찾는 값이면 종료
    if (arr[mid] === target) return mid;
    // 가운데 값보다 찾는 값이 큰 경우
    // +1과 -1을 해주지않으면 무한 루프에 빠진다...
    // mid가 아니라는 걸 이미 위 코드에서 확인해줬기 때문에 mid에 -1과 +1을 해주는 것이다.
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      // 가운데 값보다 찾는 값이 작은 경우
      right = mid - 1;
    }
  }
  return -1;
}
console.log(
  binarySearch([1, 2, 3, 4, 5], 2), // 1
  binarySearch([1, 2, 3, 4, 5], 3), // 2
  binarySearch([1, 2, 3, 4, 5], 5), // 4 - 에러나는 중 무한루프
  binarySearch([1, 2, 3, 4, 5], 6), // -1
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    10
  ), // 2
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    95
  ), // 16
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    100
  ) // -1
);
