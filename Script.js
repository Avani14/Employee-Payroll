window.addEventListener('DOMContentLoaded',(event)=>{
    createInnerHTML();
});
const createInnerHTML = () =>{
    const headerHTML = "<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>"
    const innerHTML = `${headerHTML}
    <tr>
            <td>
                <img class="profile" src="images/Ellipse -1.png" alt="">
            </td>
            <td>Avani Trivedi</td>
            <td>Female</td>
            <td> <div class="dept-label">
                IT
            </div> </td>
            <td>500000</td>
            <td>19 April 2021</td>
            <td><img id = "1" src="images/delete-black-18dp.svg" alt="delete" onclick="remove(this)">
                <img id = "1" src="images/create-black-18dp.svg" alt="update" onclick="update(this)"></td>
        </tr>`;
        document.querySelector('#display').innerHTML= innerHTML
}