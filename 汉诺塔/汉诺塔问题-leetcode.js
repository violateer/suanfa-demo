/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @return {void} Do not return anything, modify C in-place instead.
 * @description 请编写程序，用栈将所有盘子从第一根柱子移到最后一根柱子。
                你需要原地修改栈。
                示例1:
                输入：A = [2, 1, 0], B = [], C = []
                输出：C = [2, 1, 0]
                示例2:
                输入：A = [1, 0], B = [], C = []
                输出：C = [1, 0]
 */
var hanota = function (A, B, C) {
  const len = A.length;
  const move = (n, A, B, C) => {
    n === 1
      ? C.push(A.pop())
      : move(n - 1, A, C, B) + C.push(A.pop()) + move(n - 1, B, A, C);
  };
  move(len, A, B, C);
};
