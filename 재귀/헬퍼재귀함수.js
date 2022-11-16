// 홀수를 골라 배열에 저장하는 함수를 만들고 싶은 경우
// collectOddValues 함수에 재귀를 사용하면
// 내부에 선언한 let result가 매번 초기화 되기 때문에 올바른 값을 가질 수 없다.
// 따라서 외부함수가 아닌 내부 함수를 재귀 시키는 방식을
// 헬퍼 재귀 함수라고 한다.
function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    // 종료 조건
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }
  helper(arr);

  return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5]));
