import {removeEmployee} from './service.pure';
import DATA from './employees-json';
const employees = DATA.employees;
const employeesRemoved1=removeEmployee(employees, 1);

test('removeEmployee', ()=>
    expect(removeEmployee(employees,1))
	.toEqual(employeesRemoved1)
);
