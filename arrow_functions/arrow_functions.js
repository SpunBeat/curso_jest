function User(name, lastName) {
    this.name = name;
    this.lastName = lastName;
    this.getFullName = function() {
        return this.name + ' ' + this.lastName;
    };
    this.age = 29;
    this.changed = (age) => {};

    this.setAge = function(age) {
        this.age = age;
        this.changed(age);
    };

    this.verifyAge = function(age, callback) {
        if (age > this.age) {
            callback();
        }
    };
    
    return {
        age: this.age,
        changed: this.changed,
        lastName: this.lastName,
        name: this.name,
        getFullName: this.getFullName,
        setAge: this.setAge,
        verifyAge: this.verifyAge
    };
}

module.exports = {
    User
};
