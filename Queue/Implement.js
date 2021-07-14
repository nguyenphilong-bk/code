class Queue {
    #size = 0;
    #head;
    #tail;
    #queue;
    constructor(size) {
        this.#size = size;
        this.#queue = new Array(size);
        this.#head = -1;
        this.#tail = -1;
    }

    isFull() {
        return this.#count === this.#size;
    }
    get getQueue() {
        return this.#queue;
    }
    enQueue(num) {
        if (!this.isFull()) {
            this.#queue[this.#count] = num;
            this.#count++;
            return true;
        }
    }

    rear() {
        return;
    }
}

const a = new Queue(4);
a.enQueue(1);
a.enQueue(2);
a.enQueue(3);
a.enQueue(4);
console.log(a.getQueue);
