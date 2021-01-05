const array = [23, 99, 17, 28, 84];

/**
 * @param {Array} array
 * @return {number}
 */
// 解法一
// function max(array) {
//   let max = array[0];
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] > max) {
//       max = array[i];
//     }
//   }
//   return max;
// }

// 解法二  递归--归纳法
// function max(array) {
//   if (array.length === 1) return array[0];
//   const restMax = max(array.slice(1));
//   return array[0] > restMax ? array[0] : restMax;
// }

// 解法二--ES6
const maxOfTwo = (a, b) => (a > b ? a : b);
const max = ([first, ...others]) =>
  others.length < 1 ? first : maxOfTwo(first, max(others));

console.log(max(array)); // 预期99
