// 10.30
// 1. 문제를 이해하기
// - 문제를 내 방식대로 다시 생각할 수 있나요?
//      가장 긴 중복되지않은 연속된 문자열 길이 찾기
// - 입력값
//      문자열
// - 출력값
//      중복되지않은 가장 긴 문자열 길이
// - 입력값만으로 출력값을 결정할 수 있나요? 네
// - 중요한 요소

// 2. 구체적인 예제
// - 간단한 예제
// - 복잡한 예제
// - 특수한 예제

// rithmsc hool
// thisis awesom e
// t hecatin thehat

function solution(str) {
  // 문자열 안에서 문자 조각 substring을 찾는 문제이다.
  // 단 그 substring 중에서 각각 문자가 독립적이여야한다!
  //  abcad가 있으면
  //  abcad -> abc
  let answer;
  return answer;
}

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  // 문자열 0부터 확인하기
  for (let i = 0; i < str.length; i++) {
    let char = str[i]; // 문자
    // 이미 전에 나온 문자인 경우
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);

    // store the index of the next char so as to not double count
    // 찾은 문자의 인덱스
    seen[char] = i + 1;
  }
  return longest;
}

console.log(findLongestSubstring("abcad"));
// 7

// findLongestSubstring(""); // 0
// findLongestSubstring("rithmschool"); // 7
// findLongestSubstring("thisisawesome"); // 6
// findLongestSubstring("thecatinthehat"); // 7
// findLongestSubstring("bbbbbb"); // 1
// findLongestSubstring("longestsubstring"); // 8
// findLongestSubstring("thisishowwedoit"); // 6
