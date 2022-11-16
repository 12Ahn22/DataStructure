// 11.01
// 1. 문제를 이해하기
// - 문제를 내 방식대로 다시 생각할 수 있나요?
//      입력받은 숫자부터 1까지 전부 더하는 함수를 만드세요
// - 입력값
//      숫자 n
// - 출력값
//      숫자 n부터 1까지 전부 더한 값
// - 입력값만으로 출력값을 결정할 수 있나요? 네
// - 중요한 요소
//      재귀 쓰기

// 2. 구체적인 예제
// - 간단한 예제
// - 복잡한 예제
// - 특수한 예제
// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function
function solution(num) {
  // 종료 조건
  // num이 1이면 종료
  if (num <= 1) return 1;

  // 다른 입력
  return num + solution(num - 1);
}
console.log(solution(6));
console.log(solution(10));
// recursiveRange(6) // 21 = 6 + 5 + 4 + 3 + 2 + 1
// recursiveRange(10) // 55 = 10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1
