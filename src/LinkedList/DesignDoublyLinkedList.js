class Node {
    constructor(val, next, prev) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
        this.prev = prev === undefined ? null : prev;
    }
}

class MyLinkedList {
    constructor(head, size) {
        this.head = head === undefined ? null : head;
        this.size = size === undefined ? 0 : size;
    }
    /**
     * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if (index < 0 || index > this.size - 1) return -1;
        if (index === 0) return this.head.val;
        let temp = this.head;
        while (index > 1) {
            index--;
            temp = temp.next;
        }
        return temp.next.val;
    }
    /**
     * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        if (!this.head) {
            this.head = new Node(val);
            this.size++;
            return;
        }
        let newNode = new Node(val);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.size++;
    }
    /**
     * Append a node of value val to the last element of the linked list.
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        if (this.size === 0) return this.addAtHead(val);
        let newNode = new Node(val);
        let temp = this.head;
        while (temp.next) temp = temp.next;
        newNode.prev = temp;
        temp.next = newNode;
        this.size++;
    }
    /**
     * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        if (index < 0 || index > this.size) return;
        if (index === 0) return this.addAtHead(val);
        if (index === this.size) return this.addAtTail(val);
        let temp = this.head;
        let newNode = new Node(val);
        while (index > 1) {
            index--;
            temp = temp.next;
        }
        newNode.prev = temp;
        newNode.next = temp.next;
        temp.next = newNode;
        newNode.next.prev = newNode;
        this.size++;
    }

    /**
     * Delete the index-th node in the linked list, if the index is valid.
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        if (index < 0 || index > this.size - 1) return;
        if (this.size === 1) {
            this.head = null;
            this.size--;
            return;
        }
        let temp = this.head;
        if (index === 0) {
            this.head = this.head.next;
            this.head.prev = null;
            this.size--;
        } else {
            while (index > 1) {
                index--;
                temp = temp.next;
            }
            if (temp.next.next) temp.next.next.prev = temp;
            temp.next = temp.next.next;
            this.size--;
        }
    }
}

//  Your MyLinkedList object will be instantiated and called as such:
var obj = new MyLinkedList();
var param_1 = obj.get(2);
obj.addAtHead(3);
obj.deleteAtIndex(0);
console.log(obj);

// obj.deleteAtIndex(index);
