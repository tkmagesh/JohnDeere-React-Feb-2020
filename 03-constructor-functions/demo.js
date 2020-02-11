//constructor functions

//invoked with the 'new' keyword

//this -> a new object
//this -> returned by default

function Employee(id, name, salary){
    //this -> a new object
    this.id = id;
    this.name = name;
    this.salary = salary;

    this.display = function(){
        console.log(this.id, this.name, this.salary);
    };
    //this -> returned by default
}

function Spinner(){
    var counter = 0;

    this.up = function(){
        return ++counter;
    }

    this.down = function(){
        return --counter;
    }
}

function Spinner() {
    this.counter = 0;
}

Spinner.prototype.up = function () {
    return ++this.counter;
}

Spinner.prototype.down = function () {
    return --this.counter;
}