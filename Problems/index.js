/* Q1 (*)
 * Returns a string made by inserting the `separator` between each element and
 * concatenating all the elements into a single string.
 *
 *      const spacer = join(' ');
 *      spacer(['a', 2, 3.4]);   //=> 'a 2 3.4'
 *      join('|', [1, 2, 3]);    //=> '1|2|3'
 */

function join() {}

/* Q2 (*)
 * Returns the last element of the given list or string.
 *
 *     last(['fi', 'fo', 'fum']); //=> 'fum'
 *     last([]); //=> undefined
 *
 *     last('abc'); //=> 'c'
 *     last(''); //=> ''
 */

function last() {
}

/* Q3
 * Determine if an array of 3 points form a straight line.
 *
 * input: 3 points of the form [[x1,y1],[x2,y2],[x3,y3]]
 *
 * output: true if 3 points form a line else false.
 * Solution: if 3 points fall on the same line then area
 * of the triangle formed by them will be zero
 */
/*eslint-disable*/
function line(arr) {
  const [x1, y1] = arr[0];
  const [x2, y2] = arr[1];
  const [x3, y3] = arr[2];
  if (x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2) === 0) {
    return true;
  }
  return false;
}

/* Q4 (*)
 * Returns the position of the last occurrence of an item in an array, or -1 if
 * the item is not included in the array. [`R.equals`](#equals) is used to
 * determine equality.
 *
 *    lastIndexOf(3, [-1,3,3,0,1,2,3,4]); //=> 6
 *    lastIndexOf(10, [1,2,3,4]); //=> -1
 */

function lastIndexOf(num,arr) {
  return arr.reduce((acc,val,index) => {
    if(val === num){
      acc = index;
    }
    return acc;
  },-1)
}

/* Q5
 * input: non-empty array of positive integers.
 *
 * output: true if the Mean and Mode of the input integers
 *         are the same else false.
 * Sol: generate an object of frequencies and then get the mode
 * calulate mean and compare the two values
 */

function meanMode(arr) {
  const numObj = arr.reduce((acc,val) => {
    if(val in acc){
      acc[val] = acc[val] + 1
    } else{
      acc[val] = 1;
    }
    return acc;
  },{})

  let temp = Number.NEGATIVE_INFINITY;
  let mode;
  for(let key in numObj){
    if(numObj[key] > temp){
      temp = numObj[key];
      mode = key;
    }
  }
    let temp2 = 0;
    arr.forEach(element => {
      temp2 += element;
    });
    mean = temp2/arr.length;
    
    if(mean === mode){
      return true;
    }
    return false;
  
}

module.exports = {
  join,
  last,
  line,
  lastIndexOf,
  meanMode,
};
