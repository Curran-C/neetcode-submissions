class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cache = {}
        this.capacity = capacity
        this.recentlyUsed = []
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.cache[key]) {
            this.recentlyUsed = this.recentlyUsed.filter(k => k !== key)
            this.recentlyUsed.push(key)
            return this.cache[key]
        }
        return -1
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (key in this.cache) {
            this.recentlyUsed = this.recentlyUsed.filter(k => k !== key)
        }
        this.cache[key] = value
        this.recentlyUsed.push(key)
        if(Object.keys(this.cache).length > this.capacity) {
            delete this.cache[this.recentlyUsed[0]]
            this.recentlyUsed.shift()
        }
    }
}
