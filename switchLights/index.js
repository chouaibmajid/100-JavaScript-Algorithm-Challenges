const bougie = (a) => {
        if(a[0] == 0) {
            return a
        }
    var etat = false 
    var newArr = [];
    
    a.forEach(num =>{
        if(etat){
           newArr.push(1)
        }else{
             newArr.push(0)
        }
        etat = !etat
    })
    return newArr
}
console.log(bougie([1,1,1,1,1]))
