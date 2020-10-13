DATA = {
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
            salary: 200
        },
        {
            id: 4,
            name: "Sergey",
            surname: "Petrov",
            department: "IT",
            salary: 2000
        },
        {
            id: 5,
            name: "Алексей",
            surname: "Petrov",
            department: "Продажи"
        }

    ]
} 

console.log(DATA.employees);

function amountInDep(dep) {
    return DATA.employees
        .map(e=>e.department)
        .filter(d=>d===dep)
        .length;
}

console.log(amountInDep("IT"));

function sumSalaryInDep(dep) {
    return DATA.employees
        //.filter(emp=>emp.department==dep)
        .map(emp=>emp.salary)
        .filter(s=>!!s)
        .reduce((acc,cur)=>acc+cur);
}
console.log("sumSalaryInDep="+sumSalaryInDep("IT"));

function avgSalaryInDep(dep) {
    var cnt=0;
    var sum = DATA.employees
        .filter(emp=>emp.department==dep)
        .map(emp=>emp.salary)
        .filter(s=>!!s)
        .reduce((acc,cur)=>{cnt++; return acc+cur});
        console.log("ccc="+cnt);
    return sum/cnt;
    }
console.log("avgSalaryInDep="+avgSalaryInDep("IT"));

function maxSalaryInDep(dep) {
    return DATA.employees
    //.filter(emp=>emp.department==dep)
    .map(emp=>emp.salary)
    .filter(s=>!!s)
    .reduce((max,cur)=>max>cur?max:cur);
}

console.log("maxSalaryInDep="+maxSalaryInDep("IT"));