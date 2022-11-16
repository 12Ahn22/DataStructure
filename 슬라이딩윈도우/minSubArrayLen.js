// 11.02
// 1. 문제를 이해하기
// - 문제를 내 방식대로 다시 생각할 수 있나요?
//  연속하는 배열을 더했을 때 그 값이 N보다 크거나 같아지는 가장 작은
//  배열의 길이를 구하시오
// - 입력값
//      정렬되지않은 배열, 타겟 숫자
// - 출력값
//      타겟 숫자보다 같거나 커지는 연속된 배열을 합한.. 뭐 대충 길이
// - 입력값만으로 출력값을 결정할 수 있나요? 네
// - 중요한 요소

// 2. 구체적인 예제
// - 간단한 예제
// - 복잡한 예제
// - 특수한 예제

// > Write a function called **minSubArrayLen** which accepts two parameters - an array of positive integers and a positive integer.
// > This function should return the minimal length of a **contiguous** subarray of which the sum is greater than or equal to the integer passed to the function.

function minSubArrayLen(arr, number) {
  // 작다면 오른쪽으로 이동
  // 크다면 왼쪽으로 이동
  let start = (end = total = 0);
  let min = Number.MAX_SAFE_INTEGER;
  while (start < arr.length) {
    // total이 number보다 작은 경우 오른쪽 요소를 더해준다.
    // 오른쪽 요소가 없으면 멈춰야하기 때문에 end 조건이 있는 것
    if (total < number && end < arr.length) {
      total += arr[end];
      end++;
      // 만약 다 더한 값이 구할 숫자보다 크거나 같다면
    } else if (total >= number) {
      // 일단 그 길이 저장하는 데 더 작은놈을 저장한다.
      min = Math.min(min, end - start);
      // 그래서 앞에 뺀다.
      total = total - arr[start];
      start++;
    }
    // 중단 조건
    // end가 가장 마지막 값인 경우
    // 그런데 토탈이 원하는 숫자보다 작은 경우
    // 이때 start가 계속 작기때문에 무한루프에 빠진다.
    else {
      console.log("Start,", start);
      console.log("end,", end);
      console.log("토탈", total);
      break;
    }
  }
  return min;
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
