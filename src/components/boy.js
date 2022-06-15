import Person from './person'

class Boy extends Person {
    constructor(name, age, color) {
        super();
        this.name = name;
        this.age = age;
        this.color = color;
    }
    getFavoriteColor() {
        return this.color;
    }
}

export default Boy
