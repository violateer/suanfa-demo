/**
 * @description 将一个数组进行排序
 */

/**
 * @param {number[],number[]}
 * @return {number []}
 * @description 将两个有序数组合并成一个新的有序数组
 */
const merge1 = (a, b) => {
  let c = [],
    i = 0,
    k = 0;

  while (i < a.length || k < b.length) {
    if (i >= a.length) {
      c.push(b[k]);
      k++;
    } else if (k >= b.length) {
      c.push(a[i]);
      i++;
    } else if (a[i] < b[k]) {
      c.push(a[i]);
      i++;
    } else {
      c.push(b[k]);
      k++;
    }
  }

  return c;
};

/**
 * @param {number [],number []}
 * @return {number []}
 * @description 实现方法二
 */
const merge2 = (a, b) =>
  a.length === 0
    ? b
    : b.length === 0
    ? a
    : a[0] > b[0]
    ? [b[0]].concat(merge2(a, b.slice(1)))
    : [a[0]].concat(merge2(a.slice(1), b));

/**
 * @description 实现排序一个无序数组--实现方法一：耗内存，耗CPU
 * @param {number []}
 * @return {number []}
 */
const sort1 = (nums) => {
  let k = nums.length;
  if (k === 1) return nums;
  let left = nums.slice(0, Math.floor(k / 2));
  let right = nums.slice(Math.floor(k / 2));
  return merge2(sort(left), sort(right));
};

/**
 * @description 实现排序一个无序数组--实现方法二：节约内存->就地操作
 * @param {number []}
 * @return {number []}
 */
const sort2 = (nums) => {
  let k = nums.length;
  if (k === 1) return nums;
  let left = nums.slice(0, Math.floor(k / 2));
  let right = nums.slice(Math.floor(k / 2));
  return merge2(sort(left), sort(right));
};
