// 정말 간단한 기초 해시 함수 만들어보기
const oldHash = (key, arrayLen) => {
  let total = 0;
  for (const char of key) {
    let value = char.charCodeAt(0) - "a".charCodeAt(0) + 1;
    total = (total + value) % arrayLen;
  }
  return total;
};

// console.log(hash("pink", 10));

// 기초 해시 함수 성능 향상시키기
const hash = (key, arrayLen) => {
  let total = 0;
  let WEIRD_PRIME = 31; // 소수- 소수를 넣으면 충돌 횟수가 줄어든다.
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - "a".charCodeAt(0) + 1;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
};

console.log(hash("hi", 13));
