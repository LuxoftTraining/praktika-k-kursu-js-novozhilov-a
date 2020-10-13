/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./employees/employees-json.js":
/*!*************************************!*\
  !*** ./employees/employees-json.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    employees: [
        {
            id: 1,
            name: "Пафнутий",
            surname: "Пафнутьев",
            department: "IT",
            salary: 1000
        },
        {
            id: 2,
            name: "Алексей",
            surname: "Новожилов",
            department: "Продажи",
            salary: 999
        },
        {
            id: 4,
            name: "Sergey",
            surname: "Petrov",
            department: "IT",
            salary: 998
        },
        {
            id: 5,
            name: "Алексей",
            surname: "Petrov",
            department: "Продажи",
            salary: 997
        }

    ]
}); 
//console.log(DATA.employees);


/***/ }),

/***/ "./employees/service.js":
/*!******************************!*\
  !*** ./employees/service.js ***!
  \******************************/
/*! exports provided: addEmployee, removeEmployee, getAllEmployees, findEmployeeById, setEmployeeManager, searchEmployees */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEmployee", function() { return addEmployee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEmployee", function() { return removeEmployee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllEmployees", function() { return getAllEmployees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findEmployeeById", function() { return findEmployeeById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEmployeeManager", function() { return setEmployeeManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchEmployees", function() { return searchEmployees; });
/* harmony import */ var _employees_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employees-json */ "./employees/employees-json.js");


function findByName(name, surname) {
    let res = [];
    for (var e of _employees_json__WEBPACK_IMPORTED_MODULE_0__["default"].employees) {
        if ((!name || e.name === name) &&
            (!surname || e.surname === surname)) {
            res.push(e);
        }
    }
    return res;
}

function addEmployee(name, surname) {
    if (!name || !surname) throw new Error("Name and surname should not be be null");
    //find max id
    var max;
    for (let e of _employees_json__WEBPACK_IMPORTED_MODULE_0__["default"].employees) {
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
    _employees_json__WEBPACK_IMPORTED_MODULE_0__["default"].employees.push({ id, surname, name })
    return id;
}

function removeEmployee(id) {
    if (!id) throw new Error("Id should not be be null");
    for (let eind in _employees_json__WEBPACK_IMPORTED_MODULE_0__["default"].employees) {
        if (_employees_json__WEBPACK_IMPORTED_MODULE_0__["default"].employees[eind].id == id) {
            _employees_json__WEBPACK_IMPORTED_MODULE_0__["default"].employees.splice(eind, 1);
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
    for (let e of _employees_json__WEBPACK_IMPORTED_MODULE_0__["default"].employees) {
        showEmployee(e);
    }
}
// showAllEmployees();
// console.log("---------------");

function getAllEmployees() {
    return _employees_json__WEBPACK_IMPORTED_MODULE_0__["default"].employees;
}

/**
 * Функция findById(id) должна перебирать всех сотрудников и находить сотрудника с совпадающим id. 
 */
const employeeMap = {};

function findEmployeeById(id) {
    if (!id) throw new Error("Id should not be be null");
    //checking cache
    if (employeeMap[id]) {
        console.log("Got from cache!");
        return employeeMap[id];
    }
    for (let e of _employees_json__WEBPACK_IMPORTED_MODULE_0__["default"].employees) {
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

function setEmployeeManager(id, managerId) {
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

function searchEmployees(name, surname, managerRef) {
    let results = [];
    for (let e of _employees_json__WEBPACK_IMPORTED_MODULE_0__["default"].employees) {
        if ((!name || e.name.toLowerCase().indexOf(name.toLowerCase())>=0) &&
            (!surname || e.surname.toLowerCase().indexOf(surname.toLowerCase())>=0) &&
            (!managerRef || e.managerRef == managerRef)) 
        {
            results.push(e);
        }
    }
    return results;
}


/***/ }),

/***/ "./employees/ui-all.js":
/*!*****************************!*\
  !*** ./employees/ui-all.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

console.log("process.env.NODE_ENV="+"development");
if (true) {
    module.exports = __webpack_require__(/*! ./ui-dev.js */ "./employees/ui-dev.js")
} else {}

/***/ }),

/***/ "./employees/ui-dev.js":
/*!*****************************!*\
  !*** ./employees/ui-dev.js ***!
  \*****************************/
/*! exports provided: addEmployeeUI, searchEmployeeUI, openTab, runUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runUI", function() { return runUI; });
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./employees/ui.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addEmployeeUI", function() { return _ui__WEBPACK_IMPORTED_MODULE_0__["addEmployeeUI"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "searchEmployeeUI", function() { return _ui__WEBPACK_IMPORTED_MODULE_0__["searchEmployeeUI"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openTab", function() { return _ui__WEBPACK_IMPORTED_MODULE_0__["openTab"]; });

/* harmony import */ var _employees_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employees-json */ "./employees/employees-json.js");




function runUI() {
   _ui__WEBPACK_IMPORTED_MODULE_0__["runUI"]();
   console.log(_employees_json__WEBPACK_IMPORTED_MODULE_1__["default"]);
   document.body.style.backgroundColor = '#EFE';
}


/***/ }),

/***/ "./employees/ui.js":
/*!*************************!*\
  !*** ./employees/ui.js ***!
  \*************************/
/*! exports provided: runUI, addEmployeeUI, searchEmployeeUI, openTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runUI", function() { return runUI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEmployeeUI", function() { return addEmployeeUI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchEmployeeUI", function() { return searchEmployeeUI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openTab", function() { return openTab; });
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service */ "./employees/service.js");
/* harmony import */ var _model_employee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/employee */ "./model/employee.js");


const PLACEHOLDER = "employeesPlaceholder";

function clearEmployeesPlaceholder() {
    document.getElementById(PLACEHOLDER).innerHTML = '';
}

function showEmployees(employees) {
    clearEmployeesPlaceholder();
    const ul = document.createElement("ul");

    for (let employee of Object(_model_employee__WEBPACK_IMPORTED_MODULE_1__["jsonToEmployees"])(employees)) {
        const li = document.createElement("li");
        ul.appendChild(li);
        li.innerHTML = employee;
        const removeButton = document.createElement("button");
        removeButton.innerHTML = "X";
        removeButton.addEventListener('click',
            () => removeEmployeeUI(employee.id));

        //let managerHTML = "";
        if (employee.managerRef) {
            let manager = Object(_service__WEBPACK_IMPORTED_MODULE_0__["findEmployeeById"])(employee.managerRef);
            const managerSpan = document.createElement("span");
            const managerSelect = document.createElement("select");
            fillSelect(managerSelect, getEmployeesOptions(), employee.managerRef);
            managerSelect.addEventListener('change',
                () => employee.managerRef = managerSelect.value);
            managerSpan.innerHTML = " <b>Руководитель:</b> ";
            li.appendChild(managerSpan);
            li.appendChild(managerSelect);
        }

        //li.innerHTML = employee.name + " " + employee.surname;
        //li.innerHTML += managerHTML;
        li.appendChild(removeButton);
    }
    document.getElementById(PLACEHOLDER).appendChild(ul);
}

//showEmployees(DATA.employees);

function runUI() {
    //showEmployees(DATA.employees);
    fillSelect(document.getElementById("managerSelect"), getEmployeesOptions());
    fillSelect(document.getElementById("managerSearch"), getEmployeesOptions());
    document.getElementById("searchButton").click();
    assignSendOnEnter("searchPane","searchEmployeesButton");
    assignSendOnEnter("addPane", "addEmployeeButton");
}



function addEmployeeUI() {
    let errorHTML = "";

    const name = document.getElementById("name").value;
    if (name == "") {
        errorHTML += "- Имя сотрудника должно быть задано<br>";
        document.getElementById("name").style.backgroundColor = '#FFEEEE';
    } else document.getElementById("name").style.backgroundColor = '';
    const surname = document.getElementById("surname").value;
    if (surname == "") {
        errorHTML += "- Фамилия сотрудника должна быть задана<br>";
        document.getElementById("surname").style.backgroundColor = '#FFEEEE';
    } else document.getElementById("surname").style.backgroundColor = '';
    document.getElementById("addEmployeeFormErrorMessage")
        .innerHTML = errorHTML;
    if (errorHTML.length != 0) return;

    const id = Object(_service__WEBPACK_IMPORTED_MODULE_0__["addEmployee"])(name, surname);

    const managerId = document.getElementById("managerSelect").value;
    Object(_service__WEBPACK_IMPORTED_MODULE_0__["setEmployeeManager"])(id, managerId);

    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    showEmployees(Object(_service__WEBPACK_IMPORTED_MODULE_0__["getAllEmployees"])());
    fillSelect(document.getElementById("managerSelect"), getEmployeesOptions());
}

function removeEmployeeUI(id) {
    Object(_service__WEBPACK_IMPORTED_MODULE_0__["removeEmployee"])(id);
    showEmployees(Object(_service__WEBPACK_IMPORTED_MODULE_0__["getAllEmployees"])());
    fillSelect(document.getElementById("managerSelect"), getEmployeesOptions());
}

function fillSelect(select, values, selectedValue) {
    select.innerHTML = '';

    //empty manager
    const option = document.createElement("option");
    //option.value = 0;
    select.appendChild(option);

    for (let val of values) {
        const option = document.createElement("option");
        option.text = val.text;
        option.value = val.value;
        if (selectedValue == option.value) option.selected = true;

        select.appendChild(option);
    }
}

function getEmployeesOptions() {
    let options = [];
    for (let e of Object(_service__WEBPACK_IMPORTED_MODULE_0__["getAllEmployees"])()) {
        options.push({ text: e.name + ' ' + e.surname, value: e.id });
    }
    return options;
}

function searchEmployeeUI() {
    const name = document.getElementById("nameSearch").value;
    const surname = document.getElementById("surnameSearch").value;
    const managerRef = document.getElementById("managerSearch").value;

    const employees = Object(_service__WEBPACK_IMPORTED_MODULE_0__["searchEmployees"])(name, surname, managerRef);
    showEmployees(employees);
}


/**
 * Активирует выбранный таб
 * @param evt событие, вызывающее активацию
 * @param id идентификатор таба
 */
function openTab(evt, id) {
    // Определяем переменные
    var i, tabcontent, tablinks;

    // Получаем все элементы с class="tabcontent" и прячем их
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Получаем все элементы с class="tablinks" и удаляем класс "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Показываем текущий таб и добавляем класс "active"
    // на кнопку, которая открывает этот таб
    document.getElementById(id).style.display = "block";
    evt.currentTarget.className += " active";
}


function assignSendOnEnter(paneId, buttonId) {
    let allInput = document.querySelectorAll("#" + paneId + " input");
    for (let input of allInput) {
        input.addEventListener("keyup", function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                document.querySelector("#" + paneId + " button").click();
            }
        });
    }
}


/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _employees_ui_all__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employees/ui-all */ "./employees/ui-all.js");
/* harmony import */ var _employees_ui_all__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_employees_ui_all__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./style.css");
/* harmony import */ var _model_employee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/employee */ "./model/employee.js");

//import './style.css';



window.Employee = _model_employee__WEBPACK_IMPORTED_MODULE_2__["Employee"];

let html = "";
function render() {
    document.getElementById("employees").innerHTML = html;
}

window.addEmployeeUI = _employees_ui_all__WEBPACK_IMPORTED_MODULE_0__["addEmployeeUI"];
window.openTab = _employees_ui_all__WEBPACK_IMPORTED_MODULE_0__["openTab"];
window.searchEmployeeUI = _employees_ui_all__WEBPACK_IMPORTED_MODULE_0__["searchEmployeeUI"];
Object(_employees_ui_all__WEBPACK_IMPORTED_MODULE_0__["runUI"])();
render();

let et = allEmployees();
let employees = Object(_model_employee__WEBPACK_IMPORTED_MODULE_2__["jsonToEmployees"])(et);
/*
for (let e of employees) {
    e.total()
        .then(total=>
            html += `${e.name} total: ${total} <br>`)
        .catch(bonus=>
            html += `${e.name} bonus is too big 
                (${bonus}!) <br>`)
        .then(render)

}
*/
async function printBonus() {
    html += "<br>Async/await version:<br>";
    for (let e of employees) {
        let bonus=0;
        try {
            bonus = await e.bonus();
            html += `${e.name} bonus: ${bonus} 
              total: ${e.salary + bonus}<br>`;
        } catch (ex) {
            html += `${e.name} bonus is too big 
            (${ex}!) <br>`;
        }
        render();
    }
}
printBonus();


/***/ }),

/***/ "./model/employee.js":
/*!***************************!*\
  !*** ./model/employee.js ***!
  \***************************/
/*! exports provided: Employee, jsonToEmployees */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Employee", function() { return Employee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsonToEmployees", function() { return jsonToEmployees; });
/* harmony import */ var _person__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./person */ "./model/person.js");
/* harmony import */ var _employees_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../employees/service */ "./employees/service.js");

class Employee extends _person__WEBPACK_IMPORTED_MODULE_0__["Person"] {
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

function jsonToEmployees(employeesJSON) {
    let employees = [];
    for (let e of employeesJSON) {
        employees.push(Employee.fromJSON(e));
    }
    return employees;
}


window.allEmployees = function () {
    return jsonToEmployees(Object(_employees_service__WEBPACK_IMPORTED_MODULE_1__["getAllEmployees"])());
}

/***/ }),

/***/ "./model/person.js":
/*!*************************!*\
  !*** ./model/person.js ***!
  \*************************/
/*! exports provided: Person */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Person", function() { return Person; });
class Person {
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

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./style.css":
/*!*********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body {\r\n    font-family: Verdana;\r\n}\r\n\r\nbutton,input,select {\r\n    outline: none;\r\n    padding: 5px;\r\n    font-size: 15px;\r\n    background-color: #f1f1f1;\r\n    border: none;\r\n}\r\n\r\n.tab {\r\n    overflow: hidden;\r\n    border: 1px solid #ccc;\r\n    background-color: #f1f1f1;\r\n}\r\n\r\n/* Стиль кнопок, использующийся для открытия контента */\r\n.tab button {\r\n    background-color: inherit;\r\n    border: none;\r\n    outline: none;\r\n    cursor: pointer;\r\n    padding: 10px;\r\n    transition: 1s;\r\n    font-family: Verdana;\r\n    font-size: 13px;\r\n    margin: 0px;\r\n}\r\n\r\n/* Измненение фона таба при наведении мышкой */\r\n.tab button:hover {\r\n    background-color: #ddd;\r\n}\r\n\r\n/* Создаем класс для активного таба */\r\n.tab button.active {\r\n    background-color: #fff;\r\n}\r\n\r\n/* Стиль для содержания таба */\r\n.tabcontent {\r\n    display: none;\r\n    padding: 6px 12px;\r\n    border: 1px solid #ccc;\r\n    border-top: none;\r\n}\r\n", "",{"version":3,"sources":["webpack://style.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,eAAe;IACf,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,sBAAsB;IACtB,yBAAyB;AAC7B;;AAEA,uDAAuD;AACvD;IACI,yBAAyB;IACzB,YAAY;IACZ,aAAa;IACb,eAAe;IACf,aAAa;IACb,cAAc;IACd,oBAAoB;IACpB,eAAe;IACf,WAAW;AACf;;AAEA,8CAA8C;AAC9C;IACI,sBAAsB;AAC1B;;AAEA,qCAAqC;AACrC;IACI,sBAAsB;AAC1B;;AAEA,8BAA8B;AAC9B;IACI,aAAa;IACb,iBAAiB;IACjB,sBAAsB;IACtB,gBAAgB;AACpB","sourcesContent":["body {\r\n    font-family: Verdana;\r\n}\r\n\r\nbutton,input,select {\r\n    outline: none;\r\n    padding: 5px;\r\n    font-size: 15px;\r\n    background-color: #f1f1f1;\r\n    border: none;\r\n}\r\n\r\n.tab {\r\n    overflow: hidden;\r\n    border: 1px solid #ccc;\r\n    background-color: #f1f1f1;\r\n}\r\n\r\n/* Стиль кнопок, использующийся для открытия контента */\r\n.tab button {\r\n    background-color: inherit;\r\n    border: none;\r\n    outline: none;\r\n    cursor: pointer;\r\n    padding: 10px;\r\n    transition: 1s;\r\n    font-family: Verdana;\r\n    font-size: 13px;\r\n    margin: 0px;\r\n}\r\n\r\n/* Измненение фона таба при наведении мышкой */\r\n.tab button:hover {\r\n    background-color: #ddd;\r\n}\r\n\r\n/* Создаем класс для активного таба */\r\n.tab button.active {\r\n    background-color: #fff;\r\n}\r\n\r\n/* Стиль для содержания таба */\r\n.tabcontent {\r\n    display: none;\r\n    padding: 6px 12px;\r\n    border: 1px solid #ccc;\r\n    border-top: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map