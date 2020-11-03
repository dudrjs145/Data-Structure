// 재귀 함수
function recursive(data) {
  if (data < 0) {
    console.log('ended');
  } else {
    console.log(data);
    recursive(data - 1);
    console.log('returned', data);
  }
}

// [recursive(4),recursive(3), recursive(2),recursive(1),recursive(0),recursive(-1)]
// 이렇게 스택이 쌓이고, 이후 (-1)부터 return이 된다.
// input 4 -> 3 -> 2 -> 1 -> 0 -> -1(ended)
// return -1(ended) -> 0 -> 1-> 2-> 3-> 4
recursive(4);
