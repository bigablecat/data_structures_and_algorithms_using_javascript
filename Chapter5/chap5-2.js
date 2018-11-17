//p58-60 例 5-2 模拟方块舞
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
/**
 * 一个保存舞者信息的对象
 * 
 * @param {Object} name
 * @param {Object} sex
 */
function Dancer(name, sex) {
	this.name = name;
	this.sex = sex;
}
/**
 * 从文本文件中读取所有舞者的信息
 * @param {Object} males
 * @param {Object} females
 */
function getDancers(males, females) {
	//舞者姓名从文件读入数组
	var names = read("dancers.txt").split("\n");
	//去除每行字符串前后的空格
	for(var i = 0; i < names.length; ++i) {
		names[i] = names[i].trim();
	}
	//
	for(var i = 0; i < names.length; ++i) {
		//将性别姓名数据按空格分隔为字符串数组，得到每个舞者的个人信息数组dancer
		var dancer = names[i].split(" ");
		var sex = dancer[0]; //数组第一个元素是性别
		var name = dancer[1]; //数组第二个元素是姓名
		//按性别分配到不同的队列
		if(sex == "F") {
			femaleDancers.enqueue(new Dancer(name, sex));
		} else {
			maleDancers.enqueue(new Dancer(name, sex));
		}
	}
}
/**
 * 将男性和女性组成舞伴
 * 
 * @param {Object} males
 * @param {Object} females
 */
function dance(males, females) {
	print("The dance partners are: \n");
	while(!females.empty() && !males.empty()) { //两个队列都不为空时
		person = females.dequeue(); //从女舞者队列中删除队首元素并获取该元素
		putstr("Female dancer is: " + person.name);
		person = males.dequeue(); //从男舞者队列中删除队首元素并获取该元素
		print(" and the male dancer is: " + person.name);
	}
	print(); //打印空行
}

var maleDancers = new Queue();
var femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);
if(!femaleDancers.empty()) {
	print(femaleDancers.front().name + " is waiting to dance.");
}

if(!maleDancers.empty()) {
	print(maleDancers.front().name + " is waiting to dance.");
}

/*输出结果:
The dance partners are:

Female dancer is: Allison and the male dancer is: Frank
Female dancer is: Cheryl and the male dancer is: Mason
Female dancer is: Jennifer and the male dancer is: Clayton
Female dancer is: Aurora and the male dancer is: Raymond

Bryan is waiting to dance.
*/