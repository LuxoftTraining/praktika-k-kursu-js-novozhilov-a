export class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return this.name + " " + this.surname;
    }

    get age() {
        if (!this._dateOfBirth) return "";
        let ageDiff = Date.now() - this._dateOfBirth.getTime();
        let ageDate = new Date(ageDiff); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    formatDate(date) {
        let day = date.getDate();
        if (day < 10) day = '0' + day;
        let month = date.getMonth() + 1;
        if (month < 10) month = '0' + month;
        let year = date.getFullYear();

        return day + '.' + month + '.' + year;
    }

    set dateOfBirth(date) {
        this._dateOfBirth = new Date(date);
    }

    get dateOfBirth() {
        return this._dateOfBirth ? " <b>Дата рождения:</b> " +
            this.formatDate(this._dateOfBirth) : "";
    }

    addPhone(phone) {
        if (!this.phones) {
            this.phones = [];
        }
        this.phones.push(phone);
    }

    toString() {
        const phones = this.phones ? `Список телефонов: ${this.phones}` : '';
        const age = this.dateOfBirth ? `Возраст: ${this.age}` : '';
        return `\  
          ${this.fullName} \
          ${this.dateOfBirth} ${age} ${phones}  
        `;
    }

    static fromJSON(obj) {
        return Object.assign(new Person(), obj)
    }

}