// 11.01
// 1. 문제를 이해하기
// - 문제를 내 방식대로 다시 생각할 수 있나요?
//      base와 exponent를 입력 받고 계산하는 문제
// - 입력값
//      base와 exponent
// - 출력값
//      base^exponent
// - 입력값만으로 출력값을 결정할 수 있나요? 네
// - 중요한 요소
//      Math.pow 만들어보기
//      재귀 문제니까 재귀 쓰기

// 2. 구체적인 예제
// - 간단한 예제
// - 복잡한 예제
// - 특수한 예제

// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

function solution(base, exponent) {
  // base는 곱해야하는 숫자고
  // exponent는 곱해야할 횟수이다.

  // 종료 조건 exponent가 0인 경우 종료
  if (exponent === 0) return 1; // 어떠한 수의 0승은 항상 값이 1이다.

  // 다른 Input - exponent 곱해야할 횟수를 줄여나가야함.
  return base * solution(base, exponent - 1);
}

console.log(
  solution(2, 0), // 1
  solution(2, 2), // 4
  solution(2, 4) // 16
);
