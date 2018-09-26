/* Q1 (*)
 * Returns a string made by inserting the `separator` between each element and
 * concatenating all the elements into a single string.
 *
 *      const spacer = join(' ');
 *      spacer(['a', 2, 3.4]);   //=> 'a 2 3.4'
 *      join('|', [1, 2, 3]);    //=> '1|2|3'
 */

function join(...args) {
  const sign = args[0];
  const arr = args[1];
  return arr.join(sign);
}

/* Q2 (*)
 * Returns the last element of the given list or string.
 *
 *     last(['fi', 'fo', 'fum']); //=> 'fum'
 *     last([]); //=> undefined
 *
 *     last('abc'); //=> 'c'
 *     last(''); //=> ''
 */

function last(args) {
  if (args instanceof Array && args.length === 0) {
    return undefined;
  }
  return args.toString().charAt(args.length);
}

/* Q3
 * Determine if an array of 3 points form a straight line.
 *
 * input: 3 points of the form [[x1,y1],[x2,y2],[x3,y3]]
 *
 * output: true if 3 points form a line else false.
 */

function line() {}

/* Q4 (*)
 * Returns the position of the last occurrence of an item in an array, or -1 if
 * the item is not included in the array. [`R.equals`](#equals) is used to
 * determine equality.
 *
 *    lastIndexOf(3, [-1,3,3,0,1,2,3,4]); //=> 6
 *    lastIndexOf(10, [1,2,3,4]); //=> -1
 */

function lastIndexOf() {}

/* Q5
 * input: non-empty array of positive integers.
 *
 * output: true if the Mean and Mode of the input integers
 *         are the same else false.
 */

function meanMode() {}

module.exports = {
  join,
  last,
  line,
  lastIndexOf,
  meanMode,
};
