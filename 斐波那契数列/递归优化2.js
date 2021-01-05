/**
 * @description 递归的缺点2：重复计算
 *              优化：使用记忆化消除重复计算
 */

/**
 * @description 使用记忆化优化斐波那契数列
 */
// const fabonacci = (n) => (n === 0 ? 0 : n === 1 ? 1 : mf(n - 1) + mf(n - 2));
// const memorize = (fn) => {
//   const cache = {};
//   return (first, ...args) => {
//     if (!(first in cache)) {
//       cache[first] = fn(first, ...args);
//     }
//     return cache[first];
//   };
// };
// mf = memorize(fabonacci);

/**
 * @description 使用记忆化优化斐波那契数列--简化
 */
const memorize = (fn) => {
  const cache = {};
  return (first, ...args) => {
    if (!(first in cache)) {
      cache[first] = fn(first, ...args);
    }
    return cache[first];
  };
};

const fabonacci = memorize((n) =>
  n === 0 ? 0 : n === 1 ? 1 : fabonacci(n - 1) + fabonacci(n - 2)
);

console.log(fabonacci(100));
