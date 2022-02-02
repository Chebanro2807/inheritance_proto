import Person from './person'

function Girl( name, age ) {
    this.name = name;
    this.age = age;
    this.color = 'red';
}

Girl.prototype = Object.create( Person.prototype );
Girl.prototype.constructor = Girl;
Girl.prototype.getFavoriteColor = function () {
    return this.color;
};

export default Girl
