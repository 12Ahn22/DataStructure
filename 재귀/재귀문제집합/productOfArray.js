// 11.01
// 1. 문제를 이해하기
// - 문제를 내 방식대로 다시 생각할 수 있나요?
//      배열 안에 있는 값을 다 곱하라는 소리 같다.
// - 입력값
//      숫자 배열
// - 출력값
//      숫자 배열 요소를 전부 곱한 값
// - 입력값만으로 출력값을 결정할 수 있나요? 네
// - 중요한 요소
//      재귀쓰기

// 2. 구체적인 예제
// - 간단한 예제
// - 복잡한 예제
// - 특수한 예제
// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

function solution(arr) {
  // 종료 조건 - 배열의 길이가 0 인경우
  if (arr.length === 0) return 1;

  // 다른 입력 - 맨 앞 배열을 짜른 나머지 배열
  return arr[0] * solution(arr.slice(1));
}

console.log(
  solution([1, 2, 3]), // 6
  solution([1, 2, 3, 10]) // 60
);
