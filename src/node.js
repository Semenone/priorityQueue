class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
		// this.childOfLeft = childOfLeft;
	  // this.childOfRight = childOfRight;
	}

	appendChild(node) {
        if (!this.left){
            this.left = node;
						// this.left.parent = this;
						// console.log(this.parent);
        } else if (!this.right) {
            this.right = node;
						// this.right.parent = this;
						// console.log(this.parent);
        }
	}

	removeChild(node) {
        if (this.left === node){
            this.left = null;
        } else if (this.right === node){
            this.right = null;
        } else{
						throw new Error("error");
        }
        // this.parent = null;
	}

	remove() {
			// console.log(this.parent);
      //   if (this.parent === null){
      //   }else {
            this.parent = this.parent.removeChild(this);
        // }
	}

	swapWithParent() {
			//проверить если есть брат, то установить ему родителем себя
	}
}

module.exports = Node;
