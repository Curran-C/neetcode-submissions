class Node {
    constructor(key, val) {
        this.key = key
        this.val = val
        this.next = null
        this.prev = null
    }
}

class LRUCache {
    constructor(capacity) {
        this.cache = new Map()
        this.capacity = capacity

        this.lru = new Node(0, 0)
        this.ru = new Node(0, 0)

        this.lru.next = this.ru
        this.ru.prev = this.lru
    }

    remove(node) {
        const prev = node.prev
        const next = node.next

        prev.next = next
        next.prev = prev
    }

    insert(node) {
        const prev = this.ru.prev

        prev.next = node
        node.prev = prev
        node.next = this.ru
        this.ru.prev = node
    }

    get(key) {
        if (this.cache.has(key)) {
            const node = this.cache.get(key)

            this.remove(node)
            this.insert(node)

            return node.val
        }

        return -1
    }

    put(key, value) {
        if (this.cache.has(key)) {
            this.remove(this.cache.get(key))
        }

        const node = new Node(key, value)

        this.cache.set(key, node)
        this.insert(node)

        if (this.cache.size > this.capacity) {
            const lru = this.lru.next

            this.remove(lru)
            this.cache.delete(lru.key)
        }
    }
}