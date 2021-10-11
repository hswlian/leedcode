function sort(arr){
    if(arr.length <= 1){
        return arr
    }
    let left = []
    let right = []
    let len = arr.length
    let temp = arr.splice(parseInt(len / 2), 1)

    for(let i = 0; i < len - 1; i ++){
        if(arr[i] < temp){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }

    return sort(left).concat(temp , sort(right))
}
console.log(sort([3,2,3,5,6,5,67]))