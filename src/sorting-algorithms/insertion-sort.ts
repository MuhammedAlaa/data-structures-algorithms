/*
INSERTION SORT

*** Description

Iterate over array and grow a sorted array behind current element.

For each position, compare value of element with previous elements and swap positions if previous element is larger.

example:
[ 3 4 5|1 2 6 ]
 sorted|unsorted
swaps:
[ 3 4 1 5|2 6 ]
[ 3 1 4 5|2 6 ]
[ 1 3 4 5|2 6 ]
now repeat for next unsorted element

*** Exercises

- Implement insertion sort for array of numbers
- Identify time complexity

- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

*** Extra credit
- Implement shell sort, a generalization of insertion sort
(https://en.wikipedia.org/wiki/Shellsort)

*/

import { Comparator } from './utils';

// Worst O(n2)
// Best O(n) nearly sorted
export default function insertionSort<T>(arr: T[], comparator: Comparator<T>): void {
  for (let pivot = 1; pivot < arr.length; pivot++) {
    const pivotVal = arr[pivot];
    let i = pivot - 1;
    while (i >= 0 && comparator(arr[i], pivotVal)) {
      arr[i+1] = arr[i];
      i--;
    }
    arr[i+1] = pivotVal;
  }
}

export function shellSort<T>(arr: T[], comparator: Comparator<T>): void {
  
}