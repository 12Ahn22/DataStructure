// 빈도수 세기 방식
// - 내가 푼 방식
function areThereDuplicates() {
  let collection = {};
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}

// 다중 포인터 방식
function areThereDuplicates2(...args) {
  // Two pointers
  // 다중 포인터는 정렬을 된 상태에서 사용해 하는구나.
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

// 보너스 솔루션
// Set..이 뭐더라 ㅎ
// 같은 값인 경우 Set 자료형에 넣지않는다.
// set에 넣는 과정이 이건가?
// O(n Log N)
function areThereDuplicates3() {
  // Set을 썼다.
  return new Set(arguments).size !== arguments.length;
}
