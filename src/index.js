import Boy from './components/boy'
import Girl from './components/girl'

const john = new Boy('John', 33)
console.log(john.getAge()); // Вернет число возраста: 33
console.log(john.sayHi()); // Вернет текст приветсвия: "Hello, John"
console.log(john.isAlive()); // Вернет жив или нет boolean. В зависимости от возраста. Если больше 110 лет, то ответ: false
console.log(john.getFavoriteColor()) // текст: Blue;

console.log('==================')

const ann = new Girl('Ann', 25)
console.log(ann.getAge());
console.log(ann.sayHi());
console.log(ann.isAlive());
console.log(ann.getFavoriteColor())
