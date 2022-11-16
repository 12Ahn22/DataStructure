// 기수 정렬

// radis 정렬을 도와줄 헬퍼 함수
// 숫자의 자리수를 돌려주는 함수
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
// 우리가 얼마나 버켓을 담아야하는 가를 알아야한다.
// 10자리수라면 10번해야한다.
function digitCount(num) {
  if (num === 0) return 1;
  // log10(num)의 의미는 10을 몇번 곱해야 num이 나오는지를 의미한다.
  // 100은 10을 2번 제곱해야 나온다. 2 + 1 = 자릿수
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// 가장 큰 자릿수는 몇자리수 인가
function mostDigit(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

// 기수 정렬하기
function radixSort(nums) {
  // 가장 큰 자릿수
  let maxDigitCount = mostDigit(nums);

  // 가장 큰 자릿수 횟수 만큼 순회
  for (let k = 0; k < maxDigitCount; k++) {
    // 버킷 만들기
    let digitBuckets = Array.from({ length: 10 }, () => []); // 10개의 빈 배열로 찬 배열
    // 모든 숫자 반복
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k); // k번째의 자릿수를 얻기
      digitBuckets[digit].push(nums[i]);
    }
    // 버킷의 내용을 새배열로..
    // [].concat(...[[1],[2],[3]]); // [1,2,3]
    // [].concat([1],[2],[3]); // 이렇게 되는거다.
    nums = [].concat(...digitBuckets);
  }
  return nums;
}
console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));
