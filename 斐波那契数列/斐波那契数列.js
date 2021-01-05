/**
 * @param {number} n
 * @return {void}
 */

// 原始写法
// const fabonacci = (n) =>
//   n === 0 ? 0 : n === 1 ? 1 : fabonacci(n - 1) + fabonacci(n - 2);

// 优化
const fabonacci = (n) => {
  const arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
};

console.log(fabonacci(100));
