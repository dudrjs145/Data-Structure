class Stack {
  constructor(stackLength) {
    this.datas = [];
    this.stackLength = stackLength;
    console.log(this.stackLength);
  }

  push(data) {
    if (this.datas.length === this.stackLength) {
      console.log('stack is full');
      return;
    }
    console.log(`push ${data}`);
    this.datas.push(data);
  }
  pop() {
    if (this.empty()) return;
    const data = this.datas.pop();
    console.log(`pop ${data}`);
    return data;
  }
  //  데이터 하나 조회
  peek() {
    if (this.empty()) return;
    return this.datas[-1];
  }

  empty() {
    if (this.datas.length === 0) {
      console.log('stack is empty');
      return true;
    }
  }
}

const stack = new Stack(5);
stack.push(1); // [1]
stack.push(2); // [1, 2]
stack.push(3); // [1, 2, 3]
stack.push(4); // [1, 2, 3, 4]
stack.push(5); // [1, 2, 3, 4, 5]
stack.push(6); // stack is full!
stack.peek();
stack.pop(); // return 5, [1, 2, 3, 4]
stack.pop(); // return 4, [1, 2, 3]
stack.pop(); // return 3, [1, 2]
stack.pop(); // return 2, [1]
stack.pop(); // return 1, []
stack.pop(); // stack is empty
