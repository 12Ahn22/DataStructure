// 10.28
// 1. 문제를 이해하기
//  문제를 제대로 이해를 못했다.
// - 문제를 내 방식대로 다시 생각할 수 있나요?
//      첫번째로 입력받은 문자열이 두번째 문자열의 부분 수열(서브시퀀스) 인지 판단하는 함수
//      부분이라는게 부분 수열을 말하나보다.
//      수열? 일정한 규칙에따라 나열된 수
//      부분 수열이란?
//        일부 항을 원래 순서대로 나열하여 얻을 수 있는 수열. 그니까 순서가 중요하다.
// - 입력값
//      서브시퀀스일 문자열, 전체 문자열
// - 출력값
//      첫번째 인수 문자열이 두번째 문자열의 서브시퀀스인 경우 true 반환
// - 입력값만으로 출력값을 결정할 수 있나요? 네
// - 중요한 요소
//

// 2. 구체적인 예제
// - 간단한 예제
//      sing - string -> true
// - 복잡한 예제
// - 특수한 예제
//      abc - acb -> false..? 순서 문제라는데
// 모르겟다 ㅜㅜㅜ 투포인터를 잘 이해 못하는듯
function solution() {
  let answer;
  return answer;
}
console.log(
  solution("hello", "hello world"), // true
  // s[t]ing 라서 부분 수열인 경우
  solution("sing", "string"), // true
  solution("abc", "abracadabra"), // true
  solution("abc", "acb") // false (order matters)
);

function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    // 같은 문자를 만나는 경우에만 i 인덱스를 옮겨준다.
    if (str2[j] === str1[i]) i++;
    // i 인덱스의 총 이동 거리가 총 길이와 같으면 true
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

console.log("test", isSubsequence("sing", "strinig")); // true

// 재귀로 부분 수열 구하기
function isSubsequence2(str1, str2) {
  // 재귀의 반환 조건
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;

  // 두 문자가 같은 경우
  if (str2[0] === str1[0]) return isSubsequence2(str1.slice(1), str2.slice(1));
  return isSubsequence2(str1, str2.slice(1));
}
