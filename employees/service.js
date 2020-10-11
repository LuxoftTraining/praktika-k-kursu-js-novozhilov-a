import DATA from './employees-json';

function findByName(name, surname) {
    let res = [];
    for (var e of DATA.employees) {
        if ((!name || e.name === name) &&
            (!surname || e.surname === surname)) {
            res.push(e);
        }
    }
    return res;
}

export function addEmployee(name, surname) {
    if (!name || !surname) throw new Error("Name and surname should not be be null");
    //find max id
    var max;
    for (let e of DATA.employees) {
        if (!max || max < e.id) max = e.id;
    }
    //console.log(e);
    //next id
    let id = ++max;
    { console.log("new employee id=" + id); }
    /*
    newEmp = new Object({
        id: max,
        name: name,
        surname: surname,
        department: null
    });
    DATA.employees.push(newEmp);
    id++;
    */
    DATA.employees.push({ id, surname, name })
    return id;
}

export function removeEmployee(id) {
    if (!id) throw new Error("Id should not be be null");
    for (let eind in DATA.employees) {
        if (DATA.employees[eind].id == id) {
            DATA.employees.splice(eind, 1);
            delete employeeMap[id];
            return true;
        }
    }

    return false;
}


//showEmployeeById(1);

function showEmployee(employee) {
    keys = Object.keys(employee);
    for (const key of keys) {
        console.log(key + ":" + employee[key]);
    }
    return;

}

//showEmployee(DATA.employees[1]);

function showAllEmployees() {
    for (let e of DATA.employees) {
        showEmployee(e);
    }
}
// showAllEmployees();
// console.log("---------------");

export function getAllEmployees() {
    return DATA.employees;
}

/**
 * Функция findById(id) должна перебирать всех сотрудников и находить сотрудника с совпадающим id. 
 */
const employeeMap = {};

export function findEmployeeById(id) {
    if (!id) throw new Error("Id should not be be null");
    //checking cache
    if (employeeMap[id]) {
        console.log("Got from cache!");
        return employeeMap[id];
    }
    for (let e of DATA.employees) {
        if (e.id == id) {
            employeeMap[id] = e;
            return e;
        }
    }
    return false;
}
//console.log("findEmployeeById(1);");
//console.log(findEmployeeById(1));

/**
 * Список телефонов должен храниться внутри JSON-объекта сотрудник.
В качестве поля используется свойство phones типа массив.
Если такое поле у сотрудника отсутствует, оно должно быть создано.
 */

function addPhone(id, phone) {
    const employee = findEmployeeById(id);
    const phones = employee.phones;
    if (!phones) {
        employee.phones = [];
    }
    employee.phones.push(phone);

}

addPhone(1, "+7911906");

function setDateOfBirth(id, date) {
    const employee = findEmployeeById(id);
    employee.dateOfBirth = date;
}
setDateOfBirth(1, new Date('0000', 0, 1));

//Реализовать метод, возвращающий возраст сотрудника.
function getAge(id) {
    const employee = findEmployeeById(id);
    let ageDiff = Date.now() - employee.dateOfBirth.getTime();
    let ageDate = new Date(ageDiff); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function getEmployeeInfo(id) {
    const e = findEmployeeById(id);
    const phones = e.phones ? `Список телефонов: ${e.phones}` : '';
    const age = e.dateOfBirth ? `Возраст: ${getAge(e.id)}` : '';
    return `  
      Имя: ${e.name} 
      Фамилия: ${e.surname} 
      Дата рождения: ${formatDate(e.dateOfBirth)}
      ${phones}  
      ${age} 
    `;
}
console.log(getEmployeeInfo(1));


//Написать функцию, форматирующую дату и возвращающую ее в формате дд.мм.гггг.
function formatDate(date) {
    let day = date.getDate();
    if (day < 10) day = '0' + day;
    let month = date.getMonth() + 1;
    if (month < 10) month = '0' + month;
    let year = date.getFullYear();

    return day + '.' + month + '.' + year;
}

export function setEmployeeManager(id, managerId) {
    console.log("id=" + id + ",managerId=" + managerId);
    const emp = findEmployeeById(id);
    emp.managerRef = managerId;
}

function testEmployee() {
    let id = addEmployee("Василий", "Пупкин");
    addPhone(id, "555-55-55");
    addPhone(id, "666-66-66");
    setDateOfBirth(id, new Date(2000, 1, 1))
    const info = getEmployeeInfo(id);
    console.log(info);
}
testEmployee();

function jsoner(emp) {
    return JSON.stringify(emp);
}

console.log(
    jsoner(findEmployeeById(1))
);

export function searchEmployees(name, surname, managerRef) {
    let results = [];
    for (let e of DATA.employees) {
        if ((!name || e.name.toLowerCase().indexOf(name.toLowerCase())>=0) &&
            (!surname || e.surname.toLowerCase().indexOf(surname.toLowerCase())>=0) &&
            (!managerRef || e.managerRef == managerRef)) 
        {
            results.push(e);
        }
    }
    return results;
}
