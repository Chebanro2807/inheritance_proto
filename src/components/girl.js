import Person from './person'

class Girl extends Person {
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

export default Girl
