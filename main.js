import { runUI, addEmployeeUI, openTab, searchEmployeeUI } from './employees/ui-all';
//import './style.css';
import css from './style.css';

import { Employee, jsonToEmployees } from './model/employee'
window.Employee = Employee;

let html = "";
function render() {
    document.getElementById("employees").innerHTML = html;
}

window.addEmployeeUI = addEmployeeUI;
window.openTab = openTab;
window.searchEmployeeUI = searchEmployeeUI;
runUI();
render();

let et = allEmployees();
let employees = jsonToEmployees(et);
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
