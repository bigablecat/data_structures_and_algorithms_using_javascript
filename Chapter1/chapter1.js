/*
第一章主要讲解了JavaScript语言的基本操作
本段js代码示例如何定义对象和操作对象属性
*/

/**例1 begin**/
//JavaScript用关键字var声明变量，var后跟变量名或者赋值表达式

//本例中用var声明了一个变量david，并用赋值表达式的形式直接为david赋值
//JavaScript对象用大括号{}表示，david被赋值为一个对象
//属性以键值对的形式出现在大括号里，左边为键，右边为值，中间用冒号隔开，格式为 key:value，如first_name:"David"
//多个属性用逗号分隔，如first_name: "David", last_name: "Durr"
//david有两个属性，first_name和last_name
//first_name的值为"David",last_name的值为"Durr"
var david = {
   first_name: "David", 
   last_name: "Durr"
};

//定义一个student1的对象
//这个对象内的第二个属性courses是一个数组
var student1 = {
   id: "1234",
   courses: ["Programming I", "English II", "Algebra"],
   advised: false
};

//获取对象的属性值有两种形式
//对象名.属性键，如david.last_name
//对象名[属性键]，如student1["id"]
console.log(david.last_name); // 结果 "Durr"
console.log(student1["id"]); // 结果 "1234"
console.log(student1.courses[1]); // 结果 "English II"

//可以用下述方式为对象属性赋值
//对象.属性键 = 属性值，如student1.advised = true
student1.advised = true;
david.age = 50;

/**例1 end**/

/**例2 begin**/
//在js中创建一个对象，除了例1中大括号直接赋值
//还可以使用构造函数来创建对象
//定义包含属性和方法声明的构造函数，并在构造函数后紧跟方法的定义 
//上句引自《数据结构与算法JavaScript描述》中文版(后续章节代码的注释中一律简称"原书")第一章第10页原话)
//this关键字用来将方法和属性绑定到一个对象的实例上(原书第一章第10页)
function Person(first, middle, last) {
   this.first = first; //属性
   this.middle = middle; //属性
   this.last = last; //属性
   this.initials = initials; //方法
}
//定义Person里的方法initials
function initials() {
   return this.first[0] + this.middle[0] + this.last[0];
}
//用构造函数创建一个Person对象
var aPerson = new Person("John","Quincy","Public");
console.log("First name: " + aPerson.first); //输出结果 First name: John
console.log("Middle name: " + aPerson.middle); //输出结果 Middle name: Quincy 
console.log("Last name: " + aPerson.last); //输出结果 Last name: Public
console.log("Initials: " + aPerson.initials()); //输出结果 Initials: JQP 

/**例2 end**/
