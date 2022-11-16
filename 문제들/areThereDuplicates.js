// 10.28
// 1. 문제를 이해하기
// - 문제를 내 방식대로 다시 생각할 수 있나요?
//      여러개의 값을 인수로 받아 중복이 있는지 확인하는 함수 구현하기
// - 입력값
//      여러개의 인수들...
// - 출력값
//      중복이 있다면 true를 반환한다 없으면 false
// - 입력값만으로 출력값을 결정할 수 있나요?
//      네
// - 중요한 요소

// 2. 구체적인 예제
// - 간단한 예제
//      1,2,3 -> false
//      1,2,2
// - 복잡한 예제
// - 특수한 예제

// Restrictions:
// Time - O(n)
// Space - O(n)
// Bonus:
// Time - O(n log n)
// Space - O(1)

// 빈도수로 풀고 강의 듣기
function solution(...args) {
  // 인수가 가변적임 ...파라미터를 사용하기 - 배열로 들어있다.
  let frequency = {};
  // O(n)
  for (const word of args) {
    // 이미 값이 있는 경우
    if (frequency[word.toString()]) {
      return true;
    } else {
      frequency[word.toString()] = true;
    }
  }
  return false;
}
console.log(solution(1, 2, 3));
console.log(solution(1, 2, 2));
console.log(solution("a", "b", "c", "a"));
