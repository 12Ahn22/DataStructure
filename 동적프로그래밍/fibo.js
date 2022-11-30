// 별로 좋지않다. O(2^N)
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

// 메모이제이션
// 재귀를 쓰기때문에 콜스택이 터질 수 있다.
function fib2(n, memo = [undefined, 1, 1]) {
  if (memo[n] !== undefined) return memo[n];
  const res = fib2(n - 1, memo) + fib2(n - 2, memo);
  memo[n] = res;
  return res;
}

function memoFib() {
  const memo = {};

  const fib = (n) => {
    if (memo[n]) return memo[n];
    if (n <= 2) return 1;
    const res = fib(n - 1) + fib(n - 2);
    memo[n] = res;
    return res;
  };
  return fib;
}

// 타뷸레이티드
// 콜스택이  터지는 문제가 발동하지 않다. 공간을 많이 쓰지않는다
function tabulatedFib(n) {
  if (n <= 2) return 1;
  let fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}

const fibonacci = memoFib();
// console.log(fibonacci(10));
// console.log(fib(10));
