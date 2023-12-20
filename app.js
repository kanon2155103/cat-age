'use strict';
class Cat {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	getHumanAge() {
		if (this.age === 1) return 17;
		if (this.age === 2) return 23;
		if (this.age === 3) return 28;
		let humanAge = 28;
		for (let i = 4; i <= this.age; i++) {
			humanAge += 4;
		}
		return humanAge;
	}
	info() {
		console.log('~~~ About Your Cats ~~~')
		console.log(`名前:  ${this.name}`);
		console.log(`猫年齢:  ${this.age} years old`);
		console.log(`人間年齢:  ${this.getHumanAge()} years old`);
	}
}

const cat = new Cat(process.argv[2] , process.argv[3]);
cat.info();
