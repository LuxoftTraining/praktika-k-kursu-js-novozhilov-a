import { runUI, addEmployeeUI, openTab, searchEmployeeUI } from './employees/ui-all';
//import './style.css';
import css from './style.css';

import {Employee} from './model/employee'
window.Employee = Employee;

window.addEmployeeUI = addEmployeeUI;
window.openTab = openTab;
window.searchEmployeeUI = searchEmployeeUI;
runUI();
