"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeSort = exports.quickSort = exports.insertSort = exports.bubbleSort = void 0;
/**
 * @description: 冒泡排序（迭代）
 * 1.确定排序方向从小到大（顺序）或从大到小（倒序），默认顺序
 * 2.依次比较两个相邻的数，按照顺序（倒序）方式互换位置索引
 * 3.重复步骤2
 * @param {Array} arr 待排序数组
 * @param {Boolean} reverse 是否倒序 默认否
 * @return {Array} 已排序数组
 */
var bubbleSort = function (arr, reverse) {
    var _a, _b;
    if (arr === void 0) { arr = []; }
    if (reverse === void 0) { reverse = false; }
    if (!Array.isArray(arr))
        return arr;
    for (var i = 0, len = arr.length; i < len; i++) {
        for (var j = 0, lenn = len - i - 1; j < lenn; j++) {
            if (arr[j] > arr[j + 1] && !reverse) {
                _a = [arr[j], arr[j + 1]], arr[j + 1] = _a[0], arr[j] = _a[1];
            }
            else if (arr[j] < arr[j + 1] && reverse) {
                _b = [arr[j], arr[j + 1]], arr[j + 1] = _b[0], arr[j] = _b[1];
            }
        }
    }
    return arr;
};
exports.bubbleSort = bubbleSort;
/**
 * @description: 插入排序（迭代）
 * 1.从第一个元素开始，该元素可以认为已经被排序；
 * 2.取出当前元素的后一个元素，在已经排序的元素序列中从后向前循环一遍；
 * 3.如果该元素（已排序的元素）大于新元素，将该元素移到下一位置；
 * 4.重复步骤3，直到找到已排序的元素小于或者等于新元素的位置；
 * 5.将新元素插入到该位置后；
 * 6.重复步骤2~5
 * @param {Array} arr 待排序数组
 * @return {Array} 已排序数组
 */
var insertSort = function (arr) {
    if (arr === void 0) { arr = []; }
    if (!Array.isArray(arr))
        return arr;
    var result = [arr[0]];
    for (var i = 1, len = arr.length; i < len; i++) {
        for (var lenn = result.length, j = lenn - 1; j >= 0; j--) {
            if (result[j] < arr[i]) {
                result.splice(j + 1, 0, arr[i]);
                break;
            }
            else if (j === 0) {
                result.unshift(arr[i]);
            }
        }
    }
    return result;
};
exports.insertSort = insertSort;
/**
 * @description: 快速排序（递归）
 * 1.从集合中选中一个数（基准值）
 * 2.所有小于基准值的数放入一个子集（左），所有大于基准值的数放入另一个子集（右）
 * 3.针对步骤2中的子集，重复步骤1~2，按顺序合并最终结果
 * @param {Array} arr 待排序数组
 * @return {Array} 已排序数组
 */
var quickSort = function (arr) {
    if (arr === void 0) { arr = []; }
    if (!Array.isArray(arr) || arr.length <= 1)
        return arr;
    var len = arr.length;
    // TODO 基准目前是固定取索引中间位置 理论上似乎应该取随机索引
    var pivot = arr[Math.floor(len / 2)];
    var left = [];
    var right = [];
    for (var i = 0; i < len; i++) {
        // 跳过基准值
        if (i === Math.floor(len / 2))
            continue;
        if (arr[i] <= pivot) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }
    return exports.quickSort(left).concat(pivot).concat(exports.quickSort(right));
};
exports.quickSort = quickSort;
/**
 * @description: 按大小顺序合并两个数组
 * @param {Array} left
 * @param {Array} right
 * @return {Array} 合并后的数组
 */
function merge(left, right) {
    if (left === void 0) { left = []; }
    if (right === void 0) { right = []; }
    if (!Array.isArray(left) && !Array.isArray(right))
        return [];
    if (!Array.isArray(left))
        return right;
    if (!Array.isArray(right))
        return left;
    var l = 0;
    var lenL = left.length;
    var r = 0;
    var lenR = right.length;
    var result = [];
    while (l < lenL || r < lenR) {
        // 当右侧子集已经遍历完毕（r===lenR），则剩余左侧子集都需要合并
        if (left[l] < right[r] || r === lenR) {
            result.push(left[l++]);
        }
        else {
            result.push(right[r++]);
        }
    }
    return result;
}
/**
 * @description: 归并排序（递归）
 * @param {Array} arr 待排序数组
 * @return {Array} 已排序数组
 */
var mergeSort = function (arr) {
    if (arr === void 0) { arr = []; }
    if (!Array.isArray(arr) || arr.length <= 1)
        return arr;
    var midIndex = Math.floor(arr.length / 2);
    var left = arr.slice(0, midIndex);
    var right = arr.slice(midIndex);
    return merge(exports.mergeSort(left), exports.mergeSort(right));
};
exports.mergeSort = mergeSort;
