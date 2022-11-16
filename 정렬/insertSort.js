// 삽입 정렬
// 해당 요소가 정렬된 배열 안에 들어갈 알맞은 위치에 삽입하는 정렬 방식

// void insertionSort(int[] arr)
// {

//    for(int index = 1 ; index < arr.length ; index++){

//       int temp = arr[index];
//       int aux = index - 1;

//       while( (aux >= 0) && ( arr[aux] > temp ) ) {

//          arr[aux + 1] = arr[aux];
//          aux--;
//       }
//       arr[aux + 1] = temp;
//    }
// }

function insertionSort(arr) {
  // 첫번째요소는 정렬이됬다고 여기고, 1번째 요소부터 들어갈 위치를 확인한다.
  for (let i = 1; i < arr.length; i++) {
    let tmp = arr[i]; // 현재 선택된 값을 임시로 저장할 배열
    let aux = i - 1; // 아.. i 요소 앞에 정렬된 요소들 중에서 자리를 찾아가는거라서 i-1번째까지만 확인하면된다.
    // aux가 0보다 크고(arr 길이보다 작지않고), tmp(현재 선택한 요소)보다 순회중인 arr[aux]가 크면 while
    // arr[aux]가 크다는 의미는 현재 앞쪽에 tmp보다 큰 수가 있다는 뜻 -> 정렬이 안됬다.
    while (aux >= 0 && arr[aux] > tmp) {
      // 이게 의미가 [3,6,4] 인 경우에 4가 6보다 작기 때문에 앞으로 이동을 하는데 이떄
      // [3,6,6] 이렇게 해주고
      arr[aux + 1] = arr[aux];
      aux--;
    }
    // 여기서 4를 넣는다는 의미다
    // [3,4,6]
    arr[aux + 1] = tmp;
  }
  return arr;
}

console.log(insertionSort([3, 6, 4]));
