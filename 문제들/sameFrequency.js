// 10.28
// 1. 문제를 이해하기
// - 문제를 내 방식대로 다시 생각할 수 있나요?
//    두 숫자에 나오는 digit숫자의 빈도수가 같으면 true를 반환하는 함수 만들기
// - 입력값
//      두 양수 number 정수
// - 출력값
//      두 정수에 나타난 숫자 빈도수들이 전부 같은 경우 true
// - 입력값만으로 출력값을 결정할 수 있나요? 네
// - 중요한 요소
//      O(N)

// 2. 구체적인 예제
// - 간단한 예제
//    182,281 -> true
// - 복잡한 예제
//      22, 222 -> false
// - 특수한 예제
//    0, 0 -> true?

// 배운 점
// 숫자를 문자열로 변환할 때는 숫자.toString() 메서드를 사용한다.

function solution(num1, num2) {
  // 빈도수를 찾는 문제
  // 숫자를 입력받는다. 숫자는 순회를 할 수 없다.
  // 따라서 숫자를 문자열로 변경해서 순회하자.
  let str1 = num1.toString();
  let str2 = num2.toString();

  // 길이가 다르면 빈도수가 같을 수 없으니 반환
  if (str1.length !== str2.length) {
    return false;
  }

  // 각각 문자열을 전부 순회를 해, 문자를 키 - 빈도수를 값으로 가진 객체를 만들기
  let frequencyObj1 = {};
  let frequencyObj2 = {};

  // 빈도수 구하기
  for (const char of str1) {
    frequencyObj1[char] = frequencyObj1[char] ? frequencyObj1[char] + 1 : 1;
  }
  for (const char of str2) {
    frequencyObj2[char] = frequencyObj2[char] ? frequencyObj2[char] + 1 : 1;
  }

  // 비교하기
  for (const key of Object.keys(frequencyObj1)) {
    if (frequencyObj1[key] !== frequencyObj2[key]) {
      return false;
    }
  }

  return true;
}
console.log(solution(182, 281));
console.log(solution(34, 14));
console.log(solution(3589578, 5879385));
console.log(solution(22, 222));
