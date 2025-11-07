// Task Scheduler
// You are given an array of CPU tasks tasks, where tasks[i] is an uppercase english character from A to Z. You are also given an integer n.

// Each CPU cycle allows the completion of a single task, and tasks may be completed in any order.

// The only constraint is that identical tasks must be separated by at least n CPU cycles, to cooldown the CPU.

// Return the minimum number of CPU cycles required to complete all tasks.

// Example 1:

// Input: tasks = ["X","X","Y","Y"], n = 2

// Output: 5
// Explanation: A possible sequence is: X -> Y -> idle -> X -> Y.

// Example 2:

// Input: tasks = ["A","A","A","B","C"], n = 3

// Output: 9
// Explanation: A possible sequence is: A -> B -> C -> Idle -> A -> Idle -> Idle -> Idle -> A.

// class Solution {
//     /**
//      * @param {character[]} tasks
//      * @param {number} n
//      * @return {number}
//      */
//     leastInterval(tasks, n) {}
// }
class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        // Step 1: Count frequency of each task
        const freq = new Array(26).fill(0);
        for (let t of tasks) {
            freq[t.charCodeAt(0) - 'A'.charCodeAt(0)]++;
        }

        // Step 2: Find the task with the maximum frequency
        const maxFreq = Math.max(...freq);

        // Step 3: Count how many tasks have this max frequency
        let maxCount = 0;
        for (let f of freq) {
            if (f === maxFreq) maxCount++;
        }

        // Step 4: Formula to calculate minimum time
        // (maxFreq - 1) * (n + 1) + maxCount
        const partCount = maxFreq - 1;
        const partLength = n + 1;
        const emptySlots = partCount * partLength + maxCount;

        // Step 5: The answer is the max between total tasks and the formula
        return Math.max(tasks.length, emptySlots);
    }
}
