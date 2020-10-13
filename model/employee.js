import { Person } from './person'
export class Employee extends Person {
    constructor(name, surname, department) {
        super(name, surname);
        this.department = department;
    }

    static fromJSON(obj) {
        return Object.assign(new Employee(), obj)
    }

    bonus() {
        var bonus = Math.round(Math.random() * 1000);
        return new Promise((resolve, reject) =>
            setTimeout(() => bonus < 700 ? resolve(bonus) : reject(bonus), 1000))
    }

    total() {
        return new Promise((resolve, reject) =>
            this.bonus()
                .then(bonus => resolve(bonus + this.salary))
                .catch(bonus=> reject(bonus))
        )
    }

}

export function jsonToEmployees(employeesJSON) {
    let employees = [];
    for (let e of employeesJSON) {
        employees.push(Employee.fromJSON(e));
    }
    return employees;
}
import { getAllEmployees } from '../employees/service';

window.allEmployees = function () {
    return jsonToEmployees(getAllEmployees());
}