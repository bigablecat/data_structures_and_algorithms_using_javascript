//p55 例 5-1 Queue类的定义和测试代码
function Queue() {
	this.dataStore = [];
	this.enqueue = enqueue;
	this.dequeue = dequeue;
	this.front = front;
	this.back = back;
	this.toString = toString;
	this.empty = empty;
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
 * 删除队首的元素
 * @param {Object} element
 */
function dequeue(element) {
	this.dataStore.shift();
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

var q = new Queue();
q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");
print(q.toString());
q.dequeue();
print(q.toString());
print("Front of queue: " + q.front());
print("Back of queue: " + q.back());

/*输出结果：
Meredith
Cynthia
Jennifer

Cynthia
Jennifer

Front of queue: Cynthia
Back of queue: Jennifer
*/