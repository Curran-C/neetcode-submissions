class Node {
    constructor(key, val) {
        this.key = key
        this.val = val
        this.next = null
        this.prev = null
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cache = {}
        this.capacity = capacity
        this.lru = new Node(0,0)
        this.ru = new Node(0,0)
        this.lru.next = this.ru
        this.ru.prev = this.lru
    }

    //removes current node
    remove(node) {
        const prev = node.prev
        const next = node.next
        prev.next = next
        next.prev = prev
    }

    //inserts node between lru and ru
    insert(node) {
        const prev = this.ru.prev
        prev.next = node
        node.prev = prev
        node.next = this.ru
        this.ru.prev = node
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.cache[key]) {
            const node = this.cache[key]
            //make node recently used
            this.remove(node)
            this.insert(node)
            return node.val
        }
        return -1
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.cache[key]) {
            this.remove(this.cache[key])
        }

        const node = new Node(key, value)
        this.cache[key] = node
        this.insert(node)

        if(Object.keys(this.cache).length > this.capacity) {
            const lru = this.lru.next
            this.remove(lru)
            delete this.cache[lru.key]
        }
    }
}
