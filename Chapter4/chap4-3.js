//p49-50 例4-3 将数字转换为二进制和八进制
function Stack() {
	this.dataStore = [];
	this.top = 0;
	this.push = push;
	this.pop = pop;
	this.peek = peek;
	this.clear = clear;
	this.length = length;
}

function push(element) {
	this.dataStore[this.top++] = element;
}

function pop() {
	return this.dataStore[--this.top];
}

function peek() {
	return this.dataStore[this.top - 1];
}

function length() {
	return this.top;
}

function clear() {
	this.top = 0;
}

function mulBase(num, base) {
	var s = new Stack();
	do {
		s.push(num % base);
		num = Math.floor(num /= base);
	} while (num > 0) {
		var converted = "";
		while(s.length() > 0) {
			converted += s.pop();
		}
		return converted;
	}
}

var num = 32;
var base = 8;
var newNum = mulBase(num, base);
print(num + " converted to base " + base + " is " + newNum);

num = 125;
base = 8;
var newNum = mulBase(num, base);
print(num + " converted to base " + base + " is " + newNum);