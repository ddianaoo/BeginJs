let date = new Date();

// console.log(date.getFullYear());
// console.log(date.getMonth() + 1);
// console.log(date.getHours()+ ':' + date.getMinutes());

// date.setFullYear(2019);
// console.log(date.getFullYear());


let arr = [1, 4, 6, 2];
console.log(arr.join("*"));
console.log(arr.reverse());


class Person {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }

    info() {
        console.log(this.name+this.age+this.job); 
    }
}

let obj1 = new Person('Diana', 17, 'programmer');
console.log(obj1.name);
obj1.info();