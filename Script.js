const formDetails = () => {
  var fname = document.getElementById("first-name").value;
  var gender = document.querySelector('input[type=radio][name=gender]:checked').value;
  var profile = document.getElementById("profile").value;
  var dept = document.querySelector('input[type=checkbox][name=dept]:checked').value;
  var salary = document.getElementById("salary").value;
  var date = document.getElementById("start_date").value;
  const regex = RegExp("^[A-Z]{1}[a-z]*$");
  if (name == "" || !regex.test(name)) {
    window.alert("Please enter valid name");
  }
  let empObj = {
    fname: fname,
    gender: gender,
    profile: profile,
    dept: dept,
    salary: salary,
    date: date,
  };
  var empMap = [];
  empMap = JSON.parse(localStorage.getItem("empMap"));
  if (empMap == null) {
    empMap = [];
  }
  empMap.push(empObj);
  localStorage.setItem("empMap", JSON.stringify(empMap));
};
const displayData = () => {
  var table = document.getElementById("display");
  var emp_details = [];
  emp_details = JSON.parse(localStorage.getItem("empMap"));
  emp_details.forEach((element) => {
    var newRow = table.insertRow();
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    cell1.innerHTML = '<img class="avatar" src="'+element.profile+'" alt="" />';
    cell2.innerHTML = element.fname;
    cell3.innerHTML = element.gender;
    cell4.innerHTML = element.dept;
    cell5.innerHTML = element.salary;
    cell6.innerHTML = element.date;
    cell7.innerHTML =
      '<img id = "1" src="images/delete-black-18dp.svg" alt="delete" onclick="delete(' +
      element.fname +
      ')"><img id = "1" src="images/create-black-18dp.svg" alt="update" onclick="update('+element.fname+')"></a>';
  });
  var x = document.getElementById("display").rows.length;
  document.getElementById("emp_count").innerHTML = x - 1;
};