import { getAllEmployees, removeEmployee, addEmployee,
    findEmployeeById, searchEmployees, setEmployeeManager} from './service';
import {Employee,jsonToEmployees} from "../model/employee";
const PLACEHOLDER = "employeesPlaceholder";

function clearEmployeesPlaceholder() {
    document.getElementById(PLACEHOLDER).innerHTML = '';
}

function showEmployees(employees) {
    clearEmployeesPlaceholder();
    const ul = document.createElement("ul");

    for (let employee of jsonToEmployees(employees)) {
        const li = document.createElement("li");
        ul.appendChild(li);
        li.innerHTML = employee;
        const removeButton = document.createElement("button");
        removeButton.innerHTML = "X";
        removeButton.addEventListener('click',
            () => removeEmployeeUI(employee.id));

        //let managerHTML = "";
        if (employee.managerRef) {
            let manager = findEmployeeById(employee.managerRef);
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

export function runUI() {
    //showEmployees(DATA.employees);
    fillSelect(document.getElementById("managerSelect"), getEmployeesOptions());
    fillSelect(document.getElementById("managerSearch"), getEmployeesOptions());
    document.getElementById("searchButton").click();
    assignSendOnEnter("searchPane","searchEmployeesButton");
    assignSendOnEnter("addPane", "addEmployeeButton");
}



export function addEmployeeUI() {
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

    const id = addEmployee(name, surname);

    const managerId = document.getElementById("managerSelect").value;
    setEmployeeManager(id, managerId);

    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    showEmployees(getAllEmployees());
    fillSelect(document.getElementById("managerSelect"), getEmployeesOptions());
}

function removeEmployeeUI(id) {
    removeEmployee(id);
    showEmployees(getAllEmployees());
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
    for (let e of getAllEmployees()) {
        options.push({ text: e.name + ' ' + e.surname, value: e.id });
    }
    return options;
}

export function searchEmployeeUI() {
    const name = document.getElementById("nameSearch").value;
    const surname = document.getElementById("surnameSearch").value;
    const managerRef = document.getElementById("managerSearch").value;

    const employees = searchEmployees(name, surname, managerRef);
    showEmployees(employees);
}


/**
 * Активирует выбранный таб
 * @param evt событие, вызывающее активацию
 * @param id идентификатор таба
 */
export function openTab(evt, id) {
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
