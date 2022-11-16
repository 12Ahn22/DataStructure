// 합병 정렬

// 합병 정렬을 위한 정렬된 배열을 합치는 함수
function merge(arr1, arr2) {
  let answer = [];
  let p1 = 0;
  let p2 = 0;

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] < arr2[p2]) {
      // arr1쪽이 더 작다면
      answer.push(arr1[p1++]);
    } else {
      answer.push(arr2[p2++]);
    }
  }

  // 남은 배열 비우기
  if (p1 < arr1.length) {
    answer = answer.concat(arr1.slice(p1));
  }
  if (p2 < arr2.length) {
    answer = answer.concat(arr2.slice(p2));
  }

  return answer;
}
// [1,10,50] , [2,14,99,100]
// console.log(merge([1, 10, 50], [2, 14, 99, 100]));

// - 배열을 계속 반으로 나눠야한다. slice를 사용해서 나눠보기
// - 다시 합병 정렬을 호출해서 계속 반으로 쪼갠다.
// - 배열의 길이가 1보다 작거나 작을 때, Base Case가 된다.
//     - 이 때 만들어 둔 합병 함수를 사용한다.
//     - 그걸 반환한다..!
function mergeSort(arr) {
  // Base Case
  // 왜냐면 하나인 길이의 배열은 정렬된 상태니까
  if (arr.length <= 1) {
    return arr;
  }

  // 절반을 쪼갠다
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]));
