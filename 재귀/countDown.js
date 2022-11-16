function countDown(num) {
  // 종료 조건 Base Case
  if (num <= 0) {
    console.log("All Done!");
    return;
  }
  console.log(num);
  // 매 재귀마다 다른 입력값 Different Input
  countDown(--num);
}

// 모든 재귀방식은 반복문으로 변경할 수 있다.
function countDownWithFor(num) {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
  console.log("All Done!");
}

countDown(5);
countDownWithFor(5);
