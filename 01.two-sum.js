/**
 * https://leetcode-cn.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      count++;
      if (nums[i] + nums[j] == target) {
        console.log("count=" + count);
        return [i, j];
      }
    }
  }
};
/**
 * 相比第一种，只是在处理的时候排除掉明显不符合需求的数字，减少循环次数，但是没有从根本上降低时间复杂度
 * @param {*} nums
 * @param {*} target
 * @returns
 */
var twoSum2 = function (nums, target) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > target) {
      continue;
    }
    for (let j = i + 1; j < nums.length; j++) {
      count++;
      if (nums[i] + nums[j] == target) {
        console.log("count=" + count);
        return [i, j];
      }
    }
  }
};
/**
 * 这种解法从思想上来讲做了转变，通过引入一个Map数据结构，利用空间换时间的思路降低了时间复杂度
 * 把一个问题转变成查找的问题来处理
 * @param {*} nums
 * @param {*} target
 * @returns
 */
var twoSum3 = function (nums, target) {
  let count = 0;
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    count++;
    let index = map.get(target - nums[i]);
    if (index) {
      console.log("count3=" + count);
      return [i, index];
    } else {
      map.set(nums[i], i);
    }
  }
};

console.log(
  twoSum(
    [1, 2, 3, 4, 5, 7, 64, 66, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    35
  )
);
console.log("======2======");
console.log(
  twoSum2(
    [1, 2, 3, 4, 5, 7, 64, 66, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    35
  )
);
console.log("======3======");
console.log(
  twoSum3(
    [1, 2, 3, 4, 5, 7, 64, 66, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    35
  )
);
