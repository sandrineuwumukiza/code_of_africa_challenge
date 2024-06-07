// Coding Challenge 1: Array Manipulation

function SubArrayWithTargetSum(arr, target) {
    var n = arr.length;
    var curr_sum, i, j;

    // Iterate through the array
    for (i = 0; i < n; i++) {
        curr_sum = 0;

        // Try all subarrays starting with 'i'
        for (j = i; j < n; j++) {
            curr_sum = curr_sum + arr[j];

            // If the current sum equals the target, return true
            if (curr_sum == target) {
                return true;
            }
        }
    }

    // If no subarray was found that sums up to the target, return false
    return false;
}

// testing example
var arr = [4, 2, 7, 1, 9, 5];
var target = 17;
console.log(SubArrayWithTargetSum(arr, target)); 
// Output: true


