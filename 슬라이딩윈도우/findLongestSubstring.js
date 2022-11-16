// > **Sliding Window - findLongestSubstring**
// > Write a function called **findLongestSubstring,** which accepts a string and returns the length of the longest substring with all distinct characters.
// > Time Complexity - **O(n)**

function findLongestSubstring(str) {
  // 긴 서브스트링을 찾으면 그 길이를 저장하기
  let longest = 0;
  // 객체에 빈도수만 저장한다고 생각하지않기..
  let seen = {}; // 지금 문자의 인덱스를 저장하는 거
  let start = 0; // 시작 인덱스

  for (let i = 0; i < str.length; i++) {
    let char = str[i]; // 현재 문자
    // 이미 이전에 읽은 문자인 경우
    if (seen[char]) {
      // 그 읽은 문자부터 시작 idx를 정함
      start = Math.max(start, seen[char]);
    }
    longest = Math.max(longest, i - start + 1);
    // 가장 최근에 찾은 해당 문자의 인덱스를
    // seen에 저장하는 것
    seen[char] = i + 1;
  }
  return longest;
}

console.log(
  findLongestSubstring(""), // 0
  findLongestSubstring("rithmschool"), // 7
  findLongestSubstring("thisisawesome"), // 6
  findLongestSubstring("thecatinthehat"), // 7
  findLongestSubstring("bbbbbb"), // 1,
  findLongestSubstring("longestsubstring"), // 8
  findLongestSubstring("thisishowwedoit") // 6`
);
