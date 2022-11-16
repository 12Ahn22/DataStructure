// 10.27
// 1. 문제를 이해하기
// - 문제를 내 방식대로 다시 생각할 수 있나요?
//    입력받은 두 문자열이 서로 아나그램인지 확인하기
//    단, O(N) 시간복잡도와 빈도수 측정을 객체를 사용해 진행하기
// - 입력값
//    문자열 두개
// - 출력값
//    아나그램인 경우 true, 아닌 경우 false
// - 입력값만으로 출력값을 결정할 수 있나요?
//    네
// - 중요한 요소
//    빈도수 측정 객체를 사용하기

// 2. 구체적인 예제
// - 간단한 예제
//    'aaz' 'zza'
// - 복잡한 예제
//    'anagram' 'nagaram'
// - 특수한 예제
//    '' '' 빈 경우도 true

// 입력된 문자열이 서로 아나그램인지 확인
function solution(str1, str2) {
  // 만약 두 문자열의 길이가 다르다면 확인할 필요가 없다. 바로 리턴
  if (str1.length !== str2.length) {
    return false;
  }
  // 둘 다 빈 문자열이라면 true를 리턴
  if (str1 === "" && str2 === "") {
    return true;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  // 첫번째 문자열의 문자 빈도수 측정하기
  for (const char of str1) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1; // 단축 평가, false || 0 -> 0을 사용
  }
  // 두번째 문자열의 문자 빈도수 측정하기
  for (const char of str2) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1; // 단축 평가, false || 0 -> 0을 사용
  }

  // 첫번째 문자열의 빈도수 측정 객체를 순회하는데
  // 두번재 문자열의 빈도수 측정 객체와 값이 다르면 아나그램이 아니다.
  for (const key of Object.keys(frequencyCounter1)) {
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }

  return true;
}
console.log(
  solution("", ""), // true
  solution("aaz", "zza"), // false
  solution("anagram", "nagaram"), // true
  solution("rat", "car"), // false) // false
  solution("awesome", "awesom"), // false
  solution("amanaplanacanalpanama", "acanalmanplanpamana"), // false
  solution("qwerty", "qeywrt"), // true
  solution("texttwisttime", "timetwisttext") // true
);
