// 11.01
// 선형 검색 알고리즘

// Write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists. If the value does not exist in the array, return -1.

// 배열에서 해당하는 값이 몇번째 인덱스에 위치하는 지 반환하는 함수
// 없는 경우 -1을 반환한다.
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(
  linearSearch([10, 15, 20, 25, 30], 15), // 1
  linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4), // 5
  linearSearch([100], 100), // 0
  linearSearch([1, 2, 3, 4, 5], 6), // -1
  linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10), // -1
  linearSearch([100], 200) // -1
);
