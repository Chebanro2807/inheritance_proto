import Creature from './creature'

class Person extends Creature {
    sayHi() {
        return `Hello, ${this.name}`;
    }
}

export default Person
