// 11.01
// 1. 문제를 이해하기
// - 문제를 내 방식대로 다시 생각할 수 있나요?
//      피보나치 수열의 n번째 숫자를 반환해주세요
// - 입력값
//      n
// - 출력값
//      피보나치 수열의 n 번째 수
// - 입력값만으로 출력값을 결정할 수 있나요? 네
// - 중요한 요소
//      피보나치 수열이 뭔지 알아야 한다.
//      피보나치 수열이란?
//        - F1 = F2 = 1
//          Fn = Fn-1 + Fn-2
//          F3 = F2 + F1 이라는 의미

// 2. 구체적인 예제
// - 간단한 예제
// - 복잡한 예제
// - 특수한 예제

// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence(수열) is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

function solution(num) {
  // 종료 조건
  // n이 1이 되면 종료한다.
  // 피보나치 수는 1과 2번째 일때, 1을 반환한다
  if (num <= 2) {
    return 1;
  }

  // 다른 인풋
  // n을 하나씩 줄여가면서 재귀호출한다.
  return solution(num - 1) + solution(num - 2);
}
console.log(solution(4));
console.log(solution(10));
console.log(solution(28));
console.log(solution(35));
// fib(4) // 3
//    f(3) + f(2)
//      f(2) + f(1) + 1
//       1 + 1 + 1 = 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
