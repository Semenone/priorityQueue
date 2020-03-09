const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
	}

	push(data, priority) {
		this.insertNode(data);
		this.shiftNodeUp(priority);
	}

	pop() {
		// if (this.isEmpty()) {
		// 	return "Underflow"
		// }
		// return this.items.shift();
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		return this.parentNodes.length;
	}

	isEmpty() {
		if (this.size() === 0) {
			return true;
		}

	}

	clear() {
		
	}

	insertNode(node) {
		
	}

	shiftNodeUp(node) {
		// while (node.index > 1 && node[parent] < node[i]) {
		// 	swapWithParent();
		// i = parent[i]
		// }
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
