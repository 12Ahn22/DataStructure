// 11.01
// 1. 문제를 이해하기
// - 문제를 내 방식대로 다시 생각할 수 있나요?
//    회문인지 확인하는 문제, 회문이란 앞뒤로 읽어도 똑같은 문자열을 만든다
// - 입력값
//     문자열
// - 출력값
//      회문 여부에 따른 불리언
// - 입력값만으로 출력값을 결정할 수 있나요? 네
// - 중요한 요소
// 재귀쓰기

// 2. 구체적인 예제
// - 간단한 예제
// - 복잡한 예제
// - 특수한 예제

// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

function solution(str) {
  // 회문인지 아닌지 여부를 재귀를 써서 판단하기
  // 종료 조건
  // 둘이 다를 때..?
  // 다른 input
}

// 팰린드롬 재귀로 풀기
function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];

  // 맨 처음과 맨 뒤를 비교했는데 같은 경우 -> 자른 문자열로 다시 팰린드롬 비교하기
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}

console.log(solution(str));

// isPalindrome('wow') // true
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false
