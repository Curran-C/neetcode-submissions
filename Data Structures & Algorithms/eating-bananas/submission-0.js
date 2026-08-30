class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1 
        let r = Math.max(...piles) //4
        let res = r //4

//[1,2,3,4]
        while(l <= r) {
            let mid = l + Math.floor((r - l) / 2)
            let hours = 0
            for(let pile of piles) {
                hours += Math.ceil(pile / mid)
            }
            if (hours <= h) {
                res = mid
                r = mid - 1
            } else {
                l = mid + 1
            }

        }
        return res 
    }
}
