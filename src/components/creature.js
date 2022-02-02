import Organism from './organism'

function Creature() {}
Creature.prototype = Object.create( Organism.prototype );
Creature.prototype.constructor = Creature;
Creature.prototype.getAge = function() {
    return this.age;
}

export default Creature
