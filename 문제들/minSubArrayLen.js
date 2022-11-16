// 10.30
// 1. 문제를 이해하기
// - 문제를 내 방식대로 다시 생각할 수 있나요?
//      연속된 배열의 합이 두번째 인수의 값과 같거나 큰 경우 배열의 길이를 구하시오
// - 입력값
//      배열, 비교할 값
// - 출력값
//      배열의 길이
// - 입력값만으로 출력값을 결정할 수 있나요? 네
// - 중요한 요소
//    O(n)

// 2. 구체적인 예제
// - 간단한 예제
//      입력한 숫자보다 큰 수or 같은 수가 바로 있는 경우
// - 복잡한 예제
// - 특수한 예제

function solution(arr, target) {
  // 슬라이딩 윈도우 문제인 이유..?
  let answer;
  for (const num of arr) {
    if (num >= target) return 1;
  }

  // 정렬 시키기?
  let sortedArr = arr.sort();

  return answer;
}
// console.log(solution([3, 1, 11], 10));

// 투포인터와 슬라이딩 윈도우를 섞은 느낌?
function minSubArrayLen(nums, sum) {
  let total = 0;
  let minLen = Infinity;

  // 시작과 끝 포인터
  let start = 0;
  let end = 0;

  // 시작 인덱스는 nums.length 보다 작아야한다.
  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    // total
    // 토탈에 end까지만 더한다 -> 그리고 sum보다 큰지 확인하기
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    // sum보다 더한게 크다?
    else if (total >= sum) {
      // 길이 비교하기
      minLen = Math.min(minLen, end - start);
      // 그리고 앞에 인덱스를 옮겨서 뺀다
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

console.log(
  minSubArrayLen([2, 3, 1, 2, 4, 3], 7) // 2 -> because [4,3] is the smallest subarray
  // minSubArrayLen([2, 1, 6, 5, 4], 9), // 2 -> because [5,4] is the smallest subarray
  // minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52), // 1 -> because [62] is greater than 52
  // minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39), // 3
  // minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55), // 5
  // minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11), // 2
  // minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95) // 0
);
