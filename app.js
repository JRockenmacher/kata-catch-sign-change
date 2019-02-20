// Count how often sign changes in array.

// result
// number from 0 to ... . Empty array returns 0

// example
const testArr1 = [1, -3, -4, 0, 5]
const testArr2 = []
const testArr3 = [0, -1, 1, -2, -2, 2]

// | elem | count |
// |------|-------|
// |  1   |  0    |
// | -3   |  1    |
// | -4   |  1    |
// |  0   |  2    |
// |  5   |  2    |

// return 2;

const catchSignChange = arr => {
  let signChange = 0
  for(let i=0; i<arr.length; i++){
    console.log(arr[i], Math.sign(arr[i]), signChange)
    if(Math.sign(arr[i]) >= 0 && Math.sign(arr[i-1]) < 0) {
      console.log("pos to neg")
      signChange++
    } else if(Math.sign(arr[i]) < 0 && Math.sign(arr[i-1]) >= 0 ){
      console.log("neg to pos")
      signChange++
    }
  }
  return signChange
  arr.length === 0 ? 0 : signChange
}

catchSignChange(testArr3)


