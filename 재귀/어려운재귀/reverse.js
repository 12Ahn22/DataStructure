// 11.01
// 1. 문제를 이해하기
// - 문제를 내 방식대로 다시 생각할 수 있나요?
//    문자를 뒤집는 문제
// - 입력값
//    문자열
// - 출력값
//    뒤집은 문자열
// - 입력값만으로 출력값을 결정할 수 있나요? 네
// - 중요한 요소
//    재귀를 써라

// 2. 구체적인 예제
// - 간단한 예제
// - 복잡한 예제
// - 특수한 예제
// Write a recursive function called reverse which accepts a string and returns a new string in reverse.
function solution(str) {
  // 헬퍼 함수 사용해보기
  let answer = "";

  function helper(str) {
    // 문자열을 뒤에서 부터 잘라서 붙이는 방식을 생각해 봤다.
    // 종료 조건
    //  문자열의 길이가 0 이면 멈춘다
    if (str.length === 0) return;
    // 다른 input
    //  맨뒤를 자른 문자열
    let lastChar = str[str.length - 1];
    answer += lastChar;
    helper(str.slice(0, -1));
  }

  helper(str);

  return answer;
}
console.log(
  solution("awesome"), // 'emosewa'
  solution("rithmschool") // 'loohcsmhtir'
);
