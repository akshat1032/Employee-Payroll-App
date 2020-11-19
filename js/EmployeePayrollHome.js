window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHTML();
});

const createInnerHTML = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>";
    let empPayrollData = createEmployeePayrollJSON()[0];
    const innerHtml =
        ` ${headerHtml}
        <tr>
            <td><img class="profile" alt="" src="${empPayrollData._profilePic}"></td>
            <td>${empPayrollData._name}</td>
            <td>${empPayrollData._gender}</td>
            <td>
                <div class="dept-label">${empPayrollData._departments[0]}</div>
                <div class="dept-label">${empPayrollData._departments[1]}</div>
            </td>
            <td>${empPayrollData._salary}</td>
            <td>${empPayrollData._startDate}</td>
            <td>
                <img name="${empPayrollData._id}" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
                <img name="${empPayrollData._id}" alt="edit" onclick="update(this)" alt="delete"
                    src="../assets/icons/create-black-18dp.svg">
            </td>
        </tr>`;
    document.querySelector('#table-display').innerHTML = innerHtml;
}

const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
        {
            _name: 'Akshat',
            _gender: 'male',
            _departments: [
                'Sales',
                'Finance'
            ],
            _salary: '500000',
            _startDate: '30 Oct 2019',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '../assets/profile-images/Ellipse -3.png'
        }
        // {
        //     _name: 'Naruto',
        //     _gender: 'male',
        //     _departments: [
        //         'Engineering',
        //         'Finance',
        //         'Sales'
        //     ],
        //     _salary: '600000',
        //     _startDate: '16 Sep 2016',
        //     _note: '',
        //     _id: new Date().getTime(),
        //     _profilePic: '../assets/profile-images/Ellipse -5.png'
        // }
    ];
    return empPayrollListLocal;
}