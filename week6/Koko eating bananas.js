// Koko Eating Bananas
// You are given an integer array piles where piles[i] is the number of bananas in the ith pile. You are also given an integer h, which represents the number of hours you have to eat all the bananas.

// You may decide your bananas-per-hour eating rate of k. Each hour, you may choose a pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, you may finish eating the pile but you can not eat from another pile in the same hour.

// Return the minimum integer k such that you can eat all the bananas within h hours.


// class Solution {
//     /**
//      * @param {number[]} piles
//      * @param {number} h
//      * @return {number}
//      */
//     minEatingSpeed(piles, h) {}
// }
class Solution {
  /**
   * @param {number[]} piles
   * @param {number} h
   * @return {number}
   */
  minEatingSpeed(piles, h) {
    let left = 1;                      // minimum speed
    let right = Math.max(...piles);    // maximum possible speed
    let result = right;

    const canFinish = (speed) => {
      let hours = 0;
      for (const pile of piles) {
        hours += Math.ceil(pile / speed); // hours Koko takes for each pile
      }
      return hours <= h;
    };

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (canFinish(mid)) {
        result = mid;       // possible answer, try slower speed
        right = mid - 1;
      } else {
        left = mid + 1;     // too slow, increase speed
      }
    }

    return result;
  }
}
