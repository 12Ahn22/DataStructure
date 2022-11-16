// KMP 문자열 탐색 알고리즘
// O(N+M)
// 사실상 문자열 알고리즘은 O(N)인 라빈 카프를 쓴다.
// 브루드포스로 하면 O(N*M)이다.

// 내가 찾는 패턴 문자열에서 얼마만큼 검사를 건너뛸 수있는지
// 확인할 용도의 배열이 필요하다.
// 패턴 문자열이 0 ~ i번째 길이인 경우 접두사와 접미사가 같은 최대 길이가 얼마인지 확인해
// 해당 인덱스에 저장하는 함수

function buildPatternTable(word) {
  const patternTable = [0]; // 첫 인덱스는 무조곤 0, 지 앞에 누구도 없음
  let prefixIndex = 0; // 접두
  let suffixIndex = 1; // 접미, 계속 앞으로 이동할 idx

  // 접미사가 길이보다 작을때 까지
  while (suffixIndex < word.length) {
    // 접두와 접미 현재 문자가 같다면
    if (word[prefixIndex] === word[suffixIndex]) {
      // 같은 경우니까 패턴 저장
      patternTable[suffixIndex] = prefixIndex + 1;
      // 하나씩 인덱스 증가
      suffixIndex++;
      prefixIndex++;
      // 만약 둘의 문자가 다르다면,
    } else if (prefixIndex === 0) {
      // 문자가 다른데 prefix가 0인 경우
      patternTable[suffixIndex] = 0;
      suffixIndex++;
    } else {
      // 문자가 다른데 prefix가 0이 아닌 경우
      // prefix 인덱스를 뒤로 옮긴다. 그리고 다시 suffixIdx랑 검사
      prefixIndex = patternTable[prefixIndex - 1];
    }
  }
  return patternTable;
}

// 문자열 탐색하는 함수
function knuthMorissPratt(text, word) {
  if (word.length === 0) return 0;

  let textIdx = 0;
  let wordIdx = 0;
  let startIdxList = [];
  const patternTable = buildPatternTable(word);

  while (textIdx < text.length) {
    // 문자가 서로 같은 경우
    if (text[textIdx] === word[wordIdx]) {
      // 지금 wordIdx가 마지막 wordidx면 중단
      if (wordIdx === word.length - 1) {
        // 계속 찾고 싶은 경우
        startIdxList.push(textIdx - wordIdx);
        wordIdx = 0;
        // return textIdx - wordIdx;
      } // 그냥 textIdx라면 맨 마지막글자 idx다.
      textIdx++;
      wordIdx++;
      // 문자가 서로 다른 경우
      // 문자 인덱스 검사가 진행 중인 경우
    } else if (wordIdx > 0) {
      // 하나하씩 검사해서 wordIdx를 ++ 하던 중, ex) wordIdx = 1이면 0인 경우 글자는 같다는 소리
      // 현재 wordIdx의 뒷 인덱스의 패턴 테이블 값으로 wordIdx를 변경한다.
      wordIdx = patternTable[wordIdx - 1];
    } else {
      // wordIdx === 0 인 상태
      // 그냥 다음 글자랑 비교하러 가면된다.
      textIdx++;
    }
  }
  return startIdxList;
  // 없는 경우
  // return -1;
}

console.log(knuthMorissPratt("abxabcabcaby", "abcaby"));
console.log(
  knuthMorissPratt("abxabcabcabyaadabcabyzzfabcaxabcabyxx", "abcaby")
);
