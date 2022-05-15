// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
    
const uniqueDigitProducts =(a)=> {
    var newArr = []
   a.forEach(num => {
       var numsplitInt = num.toString().split("").map(item => parseInt(item))
       var product = 1
       for(let i=0;i < numsplitInt.length ; i++){
          product = product * numsplitInt[i] 
       }
       if(!newArr.includes(product)){
           newArr.push(product)
       }
   })
  return newArr.length 
}
console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23]));
