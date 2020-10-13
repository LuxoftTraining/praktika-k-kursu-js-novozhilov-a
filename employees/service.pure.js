export function removeEmployee(employees, id) {
    return employees.filter(e=>e.id!==id);
}