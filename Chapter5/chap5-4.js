//p62 例5-4 基数排序
function Queue() {
	this.dataStore = [];
	this.enqueue = enqueue;
	this.dequeue = dequeue;
	this.front = front;
	this.back = back;
	this.toString = toString;
	this.empty = empty;
	this.count = count;
}

/**
 * 向队尾添加一个元素
 * 
 * @param {Object} element
 */
function enqueue(element) {
	this.dataStore.push(element);
}
/**
 * 删除队首的元素并返回该元素
 * @param {Object} element
 */
function dequeue(element) {
	return this.dataStore.shift();
}
/**
 * 读取队首的元素
 */
function front() {
	return this.dataStore[0];
}
/**
 * 读取队尾的元素
 */
function back() {
	return this.dataStore[this.dataStore.length - 1];
}
/**
 * 显示队列内所有元素
 */
function toString() {
	var retStr = "";
	for(var i = 0; i < this.dataStore.length; ++i) {
		retStr += this.dataStore[i] + "\n";
	}
	return retStr;
}

/**
 * 判断队列是否为空
 */
function empty() {
	if(this.dataStore.length == 0) {
		return true;
	} else {
		return false;
	}
}

//显示等待跳舞的人数
function count() {
	return this.dataStore.length;
}

function distribute(nums, queues, n, digit) {
	for(var i = 0; i < n; ++i) {
		if(digit == 1) {
			queues[nums[i] % 10].enqueue(nums[i]);
		} else {
			queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
		}
	}
}

function collect(queues, nums) {
	var i = 0;
	for(var digit = 0; digit < 10; ++digit) {
		while(!queues[digit].empty()) {
			nums[i++] = queues[digit].dequeue();
		}
	}
}

function dispArray(arr) {
	for(var i = 0; i < arr.length; ++i) {
		putstr(arr[i] + " ");
	}
}

var queues = [];
for(var i = 0; i < 10; ++i) {
	queues[i] = new Queue();
}

var nums = [];
for(var i = 0; i < 10; ++i) {
	queues[i] = new Queue();
}