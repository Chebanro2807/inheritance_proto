import Person from './person'

function Boy( name, age ) {
    this.name = name;
    this.age = age;
    this.color = 'blue';
}

Boy.prototype = Object.create( Person.prototype );
Boy.prototype.constructor = Boy;
Boy.prototype.getFavoriteColor = function () {
    return this.color;
};

export default Boy
