// 10.28
// 1. 문제를 이해하기
// - 문제를 내 방식대로 다시 생각할 수 있나요?
//      정렬된 배열과 평균을 입력받아서 해당 타겟 평균이 나오는 페어가 있는지 확인하는 함수
// - 입력값
//      정렬된 숫자 배열, 평균값
// - 출력값
//      정렬된 숫자배열의 두 숫자를 뽑아서 평균을 낸 값이 타겟 평균인 쌍이 있다면 true
// - 입력값만으로 출력값을 결정할 수 있나요? 네
// - 중요한 요소

// 2. 구체적인 예제
// - 간단한 예제
//    [1,2,3] 2.5 true
// - 복잡한 예제
// - 특수한 예제
//    빈 배열은 false
//    평균값이 2로 나누는 건데 소수점 자리가 .0 or .5가 아닌 경우도 false
//    음수인 경우도 있다.

function solution(arr, average) {
  // 있다 없다만 가리면 된다.
  // 빈 배열인 경우 false
  if (arr.length === 0) return false;
  // 평균값이 .5나 0이 아닌 경우 false
  if ((average * 10) % 10 !== 0 && (average * 10) % 10 !== 5) return false;

  // average *2 보다 큰 숫자는 페어에 넣을 필요가 없다
  let sum = average * 2;
  let rightIdx =
    arr.indexOf(sum) !== -1 ? arr.indexOf(sum) - 1 : arr.length - 1;
  let leftIdx = 0;
  // 가장 작은 수와 가장 큰 수를 더했을 때 sum 보다 작다면 가장 작은쪽 포인터를 이동시킨다.
  // 이 부분을 좀 예쁘게 바꿀 순 없을까
  while (leftIdx < rightIdx) {
    // 둘은 페어다
    if (arr[leftIdx] + arr[rightIdx] === sum) {
      return true;
    }
    // 페어 찾기 위한 idx 이동
    if (arr[leftIdx] + arr[rightIdx] < sum) {
      leftIdx++;
    } else {
      rightIdx--;
    }
  }
  return false;
}
console.log(solution([1, 2, 3], 2.5));
console.log(solution([1, 3, 3, 5, 6, 7, 10, 12, 16, 19], 8));
console.log(solution([-1, 0, 3, 4, 5, 6], 4.1));
console.log(solution([], 4));
