//p52 例4-5 使用栈模拟递归过程
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

function factorial(n) {
	if(n === 0) {
		return 1;
	} else {
		return n * factorial(n - 1);
	}
}

function fact(n) {
	var s = new Stack(); //创建一个Stack类
	while(n > 1) {
		s.push(n--); //将n逐次递减到1存入栈对象s
	}
	var product = 1; //创建product初始值为1
	while(s.length() > 0) {
		product *= s.pop(); //依次弹出对象s中的每个元素并连乘
	}
	return product;
}

print(factorial(5)); //显示120
print(fact(5)); //显示120