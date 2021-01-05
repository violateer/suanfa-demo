/**
 * @description 递归的缺点1：堆栈溢出
 */

// 原代码--阶乘
const f1 = (n) => (n === 1 ? 1 : n * f(n - 1));

// 优化--循环代替递归
const f2 = (n) => {
  let result = 1;
  for (let i = 0; i <= n; i++) {
    result = result * i;
  }
  return result;
};

// 使用迭代代替递归--尾递归
// 从上面的循环可知：一次循环只有i和result在变，且是同时变
const f3 = (n) => {
  let i = 1,
    result = 1,
    next_i,
    next_result;
  while (i < n) {
    next_i = i + 1;
    // 下一个result是这次的result*下一次的i
    next_result = next_i * result;
    // 循环结束，重置当前的i和result
    i = next_i;
    result = next_result;
  }
  return result;
};

// 尾递归优化
// 尾递归：1.递归只出现在return语句 2.return语句里面只有递归
// 迭代：不停的换代
// 迭代的实现方式：循环或者尾递归
const f4 = (n) => {
  const iterator = (i = 1, n, result = 1) =>
    i === n ? result : iterator(i + 1, n, result * (i + 1));
  return iterator(1, n, 1);
};

// 尾递归写法二
const f5 = (n) => {
  const iterator = (n, result = 1) =>
    n === 1 ? result : iterator(n - 1, result * n);
  return iterator(n, 1);
};

// 尾调用优化，尾递归是一种特殊的尾调用：省略掉不必要的压栈
// 缺点：1. 这样做会在调试代码时，丢失调用历史 2. 目前只有safari实现了JS的尾调用优化，V8没有实现

/**
 * 总结：
 * 1.递归需要压栈，而栈的长度有限
 * 2.可以使用循环代替递归
 * 3.可以使用迭代代替普通递归
 * 4.迭代可以用循环或者递归实现
 * 5.迭代理论上不需要压栈，但实际上有，压栈了一些不必要的代码
 * 6.尾调用优化可以消除不必要的压栈
 * 7.JS没有完全普及尾调用优化
 */
