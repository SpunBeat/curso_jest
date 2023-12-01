function createDateFromString(dateString) {
    const [day, month, year] = dateString.split('-');
    return new Date(`${year}-${month}-${day}`);
}

function calculateAge(birthday, date) {
    const year1 = birthday.getFullYear();
    const year2 = date.getFullYear();

    const month1 = birthday.getMonth();
    const month2 = date.getMonth();
    
    const date1 = birthday.getDate();
    const date2 = date.getDate();

    const years = year2 - year1;

    const conditionMonth = month1 > month2;
    const sameMonth = month1 === month2;
    const conditionDates = date1 > date2;

    if(conditionMonth || (sameMonth && conditionDates)) {
        return years - 1;
    }

    return years;
}

class User {

    constructor({name, lastName, phoneNumber, birthday}) {
        this.name = name;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.birthday = birthday;
    }

    getFullName() {
        return `${this.name} ${this.lastName}`;
    }

    getAge() {
        let birthday = createDateFromString(this.birthday);
        return calculateAge(birthday, new Date());
    }
}

module.exports = {User, createDateFromString, calculateAge};