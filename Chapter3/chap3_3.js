function List() {
	this.listSize = 0;
	this.pos = 0;
	this.dataStore = [];
	this.clear = clear;
	this.find = find;
	this.toString = toString;
	this.insert = insert;
	this.append = append;
	this.remove = remove;
	this.front = front;
	this.end = end;
	this.prev = prev;
	this.next = next;
	this.length = length;
	this.currPos = currPos;
	this.moveTo = moveTo;
	this.getElement = getElement;
	this.length = length;
	this.contains = contains;
	this.hasNext = hasNext;
}

function append(element) {
	this.dataStore[this.listSize++] = element;
}

function find(element) {
	for(var i = 0; i < this.dataStore.length; ++i) {
		if(this.dataStore[i] == element) {
			return i;
		}
	}
	return -1;
}

function remove(element) {
	var foundAt = this.find(element);
	if(foundAt > -1) {
		this.dataStore.splice(foundAt, 1);
		--this.listSize;
		return true;
	}
	return false;
}

function toString() {
	return this.dataStore;
}

function clear() {
	delete this.dataStore;
	this.dataStore.length = 0;
	this.listSize = this.pos = 0;
}

function insert() {
	var insertPos = this.find(after);
	if(insertPos > -1) {
		this.dataStore.splice(insertPos + 1, 0, element);
		++this.listSize;
		return true;
	}
	return false;
}

function front() {
	this.pos = 0;
}

function end() {
	this.pos = this.listSize - 1;
}

function prev() {
	--this.pos;
}

function next() {
	if(this.pos < this.listSize) {
		++this.pos;
	}
}

function currPos() {
	return this.pos;
}

function length() {
	return this.listSize;
}

function moveTo(position) {
	this.pos = position;
}

function getElement() {
	return this.dataStore[this.pos];
}

function hasNext() {
	return this.pos < this.listSize;
}

function hasPrev() {
	return this.pos >= 0;
}

function contains(element) {
	for(var i = 0; i < this.dataStore.length; ++i) {
		if(this.dataStore[i] == element) {
			return true;
		}
	}
	return false;
}

function Customer(name, movie) {
	this.name = name;
	this.movie = movie;
}

function createArr(file) {
	var arr = read(file).split("\n");
	for(var i = 0; i < arr.length; ++i) {
		arr[i] = arr[i].trim();
	}
	return arr;
}

function displayList(list) {
	for(list.front(); list.hasNext(); list.next()) {
		if(list.getElement() instanceof Customer) {
			print(list.getElement()["name"] + "," + list.getElement()["movie"]);
		} else {
			print(list.getElement());
		}
	}
}

function checkOut(name, movie, movieList, customerList) {
	if(movieList.contains(movie)) {
		var c = new Customer(name, movie);
		customerList.append(c);
		movieList.remove(movie);
	} else {
		print(movie + "is not avaliable");
	}
}

var movies = createArr("films.txt");
var movieList = new List();
var customers = new List();
for(var i = 0; i < movies.length; ++i) {
	movieList.append(movies[i]);
}

print("Available movies: \n");
displayList(movieList);
putstr("\nEnter your name: ");
var name = readline();
putstr("What movie would you like? ");
var movie = readline();
checkOut(name, movie, movieList, customers);
print("\nCustomer Rentals: \n");
displayList(customers);
print("\nMovies Now Available\n");
displayList(movieList);