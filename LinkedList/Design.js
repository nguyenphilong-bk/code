/**
 * Initialize your data structure here.
 */
class Node{
    constructor(val, next)
    {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

var MyLinkedList = function () {
    this.tail = null;
    this.head = null;
    this.size = 0;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.size) return -1;
    if(index === 0) return this.head.val;   
    let temp = this.head;
    while (index > 1) {
        temp = temp.next;
        index--;
    }
    return temp.next.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.size++;
    this.head = newNode;
    if (this.size === 1) this.tail = newNode;
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    if (this.head === null) this.addAtHead(val);
    else {
        const newNode = new Node(val);
        this.tail.next = newNode;
        this.size++;
        this.tail = newNode;
    }
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index < 0 || index > this.size) return;
    if (index === 0) return this.addAtHead(val);
    let temp = this.head;
    let newNode = new Node(val);
    while (index > 1)
    {
        temp = temp.next;
        index--;
    }
    newNode.next = temp.next;
    temp.next = newNode;
    if (newNode.next === null)
        this.tail = newNode;
    this.size++;
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this.size)
        return;
    if (index === 0) {
        let temp = this.head;
        this.head = temp.next;
        delete temp;
    }
    else {
        let temp = this.head;
        while (index > 1) {
            temp = temp.next;
            index--;
        }
        let deleteNode = temp.next;
        temp.next = deleteNode.next;
        deleteNode.next = null;
        delete deleteNode;
        if (temp.next === null)
            this.tail = temp;
        this.size--;
    }
};

// Your MyLinkedList object will be instantiated and called as such:
var obj = new MyLinkedList();
// var param_1 = obj.get();
obj.deleteAtIndex(1);
obj.addAtHead(5);
obj.addAtTail(2);
obj.addAtTail(3);
obj.addAtTail(7);
// obj.addAtIndex(1, 6);
console.log(obj);
