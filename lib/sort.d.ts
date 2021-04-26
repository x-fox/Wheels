/**
 * @description: 冒泡排序（迭代）
 * 1.确定排序方向从小到大（顺序）或从大到小（倒序），默认顺序
 * 2.依次比较两个相邻的数，按照顺序（倒序）方式互换位置索引
 * 3.重复步骤2
 * @param {Array} arr 待排序数组
 * @param {Boolean} reverse 是否倒序 默认否
 * @return {Array} 已排序数组
 */
export declare const bubbleSort: (arr?: number[], reverse?: boolean) => number[];
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
export declare const insertSort: (arr?: number[]) => number[];
/**
 * @description: 快速排序（递归）
 * 1.从集合中选中一个数（基准值）
 * 2.所有小于基准值的数放入一个子集（左），所有大于基准值的数放入另一个子集（右）
 * 3.针对步骤2中的子集，重复步骤1~2，按顺序合并最终结果
 * @param {Array} arr 待排序数组
 * @return {Array} 已排序数组
 */
export declare const quickSort: (arr?: number[]) => number[];
/**
 * @description: 归并排序（递归）
 * @param {Array} arr 待排序数组
 * @return {Array} 已排序数组
 */
export declare const mergeSort: (arr?: number[]) => number[];
