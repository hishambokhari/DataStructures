class TestArray {
  constructor(){
    this.data = {}
    this.length = 0
  }

  push(item){
    this.data[this.length] = item
    this.length++
  }

  pop(){
    const item = this.data[this.length-1] // last element
    delete this.data[this.length-1]
    this.length--
    return item
  }

  get(index){
    return this.data[index]
  }


}

const arr = new TestArray();
arr.push('first')
arr.push('second')
arr.push('third')



console.log(arr)