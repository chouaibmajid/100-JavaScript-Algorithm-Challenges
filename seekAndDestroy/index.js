const seekAndDestroy =(a,b)=> {
    var newArr = a
    console.log(newArr)
    for(let i =0;i<b.length;i++){
        newArr=newArr.filter(num => num !== b[i])
    }
    return newArr
}
