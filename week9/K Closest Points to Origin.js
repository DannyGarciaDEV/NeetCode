// Return the k closest points to the origin (0, 0).

// The distance between two points is defined as the Euclidean distance (sqrt((x1 - x2)^2 + (y1 - y2)^2)).

// You may return the answer in any order.

// class Solution {
//     /**
//      * @param {number[][]} points
//      * @param {number} k
//      * @return {number[][]}
//      */
//     kClosest(points, k) {}
// }
class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        return points
            .sort((a, b) => (a[0] ** 2 + a[1] ** 2) - (b[0] ** 2 + b[1] ** 2))
            .slice(0, k);
    }
}
