function Animal (name) {
    this.name = name;
}

Animal.prototype.getName = function () {
    return this.name;
}

function Dog (name) {
    Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
    return 'Dog '+ this.name + ' is barking.'
}