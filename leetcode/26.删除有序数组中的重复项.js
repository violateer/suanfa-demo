/**
 * @description 给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度，不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成
 * @description 思路：双指针，快慢指针初始时指向同一个地址，比较两个值，若相等，快指针前进一格，若不想等，慢指针前进一格且将慢指针当前地址值存为快指针指向的值
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let slow = 0;
  for (let quick = 1; quick < nums.length; quick++) {
    if (nums[quick] !== nums[slow]) {
      nums[++slow] = nums[quick];
    }
  }
  return slow + 1;
};

const arr = [1, 1, 2, 2, 3, 3, 3, 4];
const len = removeDuplicates(arr);
console.log(arr);
console.log(len);
