function collectOddValues(arr) {
  // 헬퍼 함수의 경우 결과 변수를 초기화 하지 않기 위해서
  // 내부에 재귀를 돌 함수를 따로 두었지만,
  // 순수 재귀함수는 그런 방식이 아닌
  // return 값들을 나중에 메서드를 사용해 붙여준다.

  let newArr = [];
  // Base Case 종료 조건
  if (arr.length === 0) {
    return newArr;
  }

  // 홀수 판단
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  // 재귀
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

console.log(collectOddValues([1, 2, 3, 4, 5]));
// 실행 순서
// collectOddValues([1,2,3,4,5])
// newArr = [1].concat(collectOddValues([2,3,4,5]));
//                    [].concat(collectOddValues([3,4,5]));
//                              [3].concat(collectOddValues([4,5]))
//                                          [].concat(collectOddValues([5]))
//                                                     [5].concat([]);
