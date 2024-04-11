// function revers(arr){
//     for(let i = 0; i< arr.length;i++){
//       arr[i] *= -1
//     }
//     return arr;
// }


function reversNums(arr){
  return arr.map((i) => i *-1)
}

console.log(reversNums([1,2,3,4,-5,-3,1]));