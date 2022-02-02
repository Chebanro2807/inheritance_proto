import Creature from './creature'

function Person() {}
Person.prototype = Object.create( Creature.prototype );
Person.prototype.constructor = Person;
Person.prototype.sayHi = function() {
    return `Hello, ${this.name}`;
}

export default Person
