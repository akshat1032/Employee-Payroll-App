const salary = document.querySelector('#salary');
const output = document.querySelector(".salary-output");
output.textContent = salary.value;
salary.addEventListener('input', function () {
    output.textContent = salary.value;
});

const EmployeePayrollRef = require("./EmployeePayroll");
save = () => {
    let name = document.getElementById("name").value;
    let gender;
    if (document.getElementById("male").checked == true) {
        gender = document.getElementById("male").value;
    }
    else {
        gender = document.getElementById("female").value;
    }
    let salary = document.getElementById("salary").value;
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    let departmentArray = new Array();
    if (document.getElementById("hr").checked == true) departmentArray.push(document.getElementById("hr").value);
    if (document.getElementById("sales").checked == true) departmentArray.push(document.getElementById("sales").value);
    if (document.getElementById("finance").checked == true) departmentArray.push(document.getElementById("finance").value);
    if (document.getElementById("engineer").checked == true) departmentArray.push(document.getElementById("engineer").value);
    if (document.getElementById("others").checked == true) departmentArray.push(document.getElementById("others").value);

    if (gender == "male") gender = "m";
    else gender = "f";

    if (month == "Jan") month = 1;
    if (month == "Feb") month = 2;
    if (month == "Mar") month = 3;
    if (month == "Apr") month = 4;
    if (month == "May") month = 5;
    if (month == "June") month = 6;
    if (month == "July") month = 7;
    if (month == "Aug") month = 8;
    if (month == "Sep") month = 9;
    if (month == "Oct") month = 10;
    if (month == "Nov") month = 11;
    if (month == "Dec") month = 12;

    let startDate = new Date(year, month, day);
    let employeePayrollData = new EmployeePayrollRef.EmployeePayroll(name, salary, gender, startDate, departmentArray);
    console.log(employeePayrollData.toString());
}
