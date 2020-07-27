class TestArray {
  constructor(){
    this.data = {}
    this.length = 0
  }

  push(item){
    this.data[this.length] = item
    this.length++
  }


}

const arr = new TestArray();
arr.push('zero')
arr.push('first')

console.log(arr)