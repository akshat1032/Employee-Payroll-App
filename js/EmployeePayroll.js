class EmployeePayroll {

    //constructor
    constructor(...params) {
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
        this.department = params[5];
    }

    //method 
    toString = () => {
        const options = {
            year: 'numeric', month: 'long', day: 'numeric'
        };
        const empDate = this.startDate == undefined ? "undefined" : this.startDate.toLocaleDateString("en-IN", options);
        return "name = " + this.name + ", salary = " + this.salary + ", gender = " + this.gender + ", start date = " + this.startDate + ", department = " + this.department;
    }
}

module.exports = { EmployeePayroll };