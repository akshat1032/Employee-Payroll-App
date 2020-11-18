window.addEventListener("DOMContentLoaded", (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function () {
        if (name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            new EmployeePayroll().name = name.value;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });

    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    salary.addEventListener('input', function () {
        output.textContent = salary.value;
    });

    const startDate = document.querySelector('#startDate');
    const day = document.querySelector('#day');
    const month = document.querySelector('#month');
    const year = document.querySelector('#year');
    const dateError = document.querySelector('.date-error');
    startDate.addEventListener('input', function () {
        try {
            new EmployeePayroll().startDate = new Date(
                Date.UTC(year.value, month.value - 1, day.value)
            );
            dateError.textContent = "";
        } catch (e) {
            dateError.textContent = e;
        }
    });

});

