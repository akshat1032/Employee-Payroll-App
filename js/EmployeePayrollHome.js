window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHTML();
});

const createInnerHTML = () => {
    const innerHtml =
        `<tr>
            <th></th>
            <th>Name</th>
            <th>Gender</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Start Date</th>
            <th>Actions</th>
        </tr>
        <tr>
            <td><img class="profile" alt="" src="../assets/profile-images/Ellipse -3.png"></td>
            <td>Akshat Sambodhi</td>
            <td>Male</td>
            <td>
            <div class="dept-label">Sales</div>
            <div class="dept-label">Finance</div>
            </td>
            <td>5000000</td>
            <td>4 Nov 2020</td>
            <td>
                <img id="1" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
                <img id="1" alt="edit" onclick="update(this)" alt="delete"
                    src="../assets/icons/create-black-18dp.svg">
            </td>
        </tr>`;
    document.querySelector('#table-display').innerHTML=innerHtml;
}