// 11.01
// 1. 문제를 이해하기
// - 문제를 내 방식대로 다시 생각할 수 있나요?\
//    긴 문자열에서 특정 문자열 패턴이 몇개가 있는지 검색하는 메서드
// - 입력값
//    문자열, 패턴
// - 출력값
//    알맞은 패턴 개수
// - 입력값만으로 출력값을 결정할 수 있나요? 네
// - 중요한 요소

// 2. 구체적인 예제
// - 간단한 예제
// - 복잡한 예제
// - 특수한 예제

function solution(str, pattern) {
  // 전체 문자열을 모두 순회하면서
  // 일치하는 패턴을 찾으면 된다.
  // 패턴의 길이를 뺀 인덱스까지만 돌아주면 된다.
  // 문자열 "01234", 패턴 "012" 패턴이 3글자이기때문에 5글자 -3글자인 2번 위치까지 i가 이동하고 그 뒤론
  // 중첩 for문 내부에서 확인하면 된다.
  let cnt = 0;
  // for (let i = 0; i <= str.length - pattern.length; i++) {
  // i를 패턴 길이 전만큼 빼서 돌지않아도 답이 나오는 이유
  //    어차피 패턴보다 길이보다 적게남은 경우 break를 타게 되버린다.
  //     str[초과하는인덱스값i+j]가 되는 경우 에러가 안나고 undefined가 된다.
  for (let i = 0; i < str.length; i++) {
    // let isMatched = true;
    for (let j = 0; j < pattern.length; j++) {
      console.log("i , j", i, j);
      console.log(str[i + j]);
      if (str[i + j] !== pattern[j]) {
        // isMatched = false;
        break;
      }
      // 다른 경우 바로 break를 해주기 때문에 앞쪽을 검사 안해준다!
      // 따라서 j를 전부 돌았다는 것 자체가 패턴이랑 일치했다는 의미다.
      if (j === pattern.length - 1) cnt++;
    }
    // if (isMatched) cnt++;
  }
  return cnt;
}
console.log(solution("wowomgzomgo", "goo")); // 2
// console.log(solution("wowomgzomg", "omg")); // 2
// console.log(solution("wowomgzomg", "wo")); //
// console.log(solution("wowomgzomg", "zomg")); //
