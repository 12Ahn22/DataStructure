// 10.31
// 1. 문제를 이해하기
// - 문제를 내 방식대로 다시 생각할 수 있나요?
//      입력받은 숫자 길이만큼 배열의 연결된 요소를 더한 값이 가장큰 값을 찾기
// - 입력값
//      정수형 배열, 더할 배열 길이
// - 출력값
//      배열 길이만큼 더했을 때 가장 값이 큰 수
// - 입력값만으로 출력값을 결정할 수 있나요? 네
// - 중요한 요소
//      시간복잡도 O(N)

// 2. 구체적인 예제
// - 간단한 예제
//      [100, 200, 300, 400] ,2 -> 700
// - 복잡한 예제
// - 특수한 예제
//    배열의 총 길이보다 입력된 길이가 더 긴 경우 null

// 슬라이딩 윈도우를 사용하는 이유
//    1. 규모가 큰 데이터의 하위 집합을 구하는 경우
//    2. 연속된 배열을 찾는 경우
function solution(arr, length) {
  // 예외 처리
  if (arr.length < length) return null;

  // 처음부터 length길이만큼 요소를 더한다.
  let total = 0;
  for (let i = 0; i < length; i++) {
    total += arr[i];
  }

  let max = total; // 더한 최댓값
  // 그 다음부터 다음 자리 요소를 더하고, 맨 앞자리 요소를 뺀다.
  // 그리고 그 값을 max값과 비교한다.
  // i의 시작은 더해지지않은 요소부터 시작한다.
  for (let i = length; i < arr.length; i++) {
    total = total + arr[i] - arr[i - length];
    max = Math.max(total, max);
  }

  return max;
}
console.log(solution([100, 200, 300, 400], 2));
console.log(solution([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(solution([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(solution([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(solution([2, 3], 3)); // null
