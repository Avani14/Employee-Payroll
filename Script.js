var selectedRow = null;
const formDetails = () => {
  var fname = document.getElementById("first-name").value;
  var gender = document.querySelector(
    "input[type=radio][name=gender]:checked"
  ).value;
  var profile = document.querySelector(
    "input[type=radio][name=avatar]:checked"
  ).value;
  var dept = document.querySelector(
    "input[type=checkbox][name=dept]:checked"
  ).value;
  var salary = document.getElementById("salary").value;
  var date = document.getElementById("start_date").value;
  const regex = RegExp("^[A-Z]{1}[a-z]*$");
  if (!regex.test(fname)) {
    window.alert("Please enter valid name");
  } else {
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
    insertData(empObj);
  }
};
const insertData = (formData) => {
  var table = document.getElementById("display");
  var emp_details = [];
  emp_details = JSON.parse(localStorage.getItem("empMap"));
  if (emp_details == null) {
    emp_details = [];
  }
  if (emp_details == null) {
    emp_details = [];
  }
  emp_details.push(formData);
  var newRow = table.insertRow();
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);
  var cell6 = newRow.insertCell(5);
  var cell7 = newRow.insertCell(6);
  cell1.innerHTML =
    '<img class="avatar" src="' + formData.profile + '" alt="" />';
  cell2.innerHTML = formData.fname;
  cell3.innerHTML = formData.gender;
  cell4.innerHTML = formData.dept;
  cell5.innerHTML = formData.salary;
  cell6.innerHTML = formData.date;
  cell7.innerHTML =
    '<img id = "1" src="images/delete-black-18dp.svg" alt="delete" onclick="deleteElement(this)"><img id = "1" src="images/create-black-18dp.svg" alt="update" onclick="editElement(this)">';
};
const displayData = () => {
  var table = document.getElementById("display");
  var emp_details = [];
  emp_details = JSON.parse(localStorage.getItem("empMap"));
  if (emp_details == null) {
    emp_details = [];
  }
  emp_details.forEach((element) => {
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    cell1.innerHTML =
      '<img class="avatar" src="' + element.profile + '" alt="" />';
    cell2.innerHTML = element.fname;
    cell3.innerHTML = element.gender;
    cell4.innerHTML = element.dept;
    cell5.innerHTML = element.salary;
    cell6.innerHTML = element.date;
    cell7.innerHTML =
      '<img id = "1" src="images/delete-black-18dp.svg" alt="delete" onclick="deleteElement(this)"><img id = "1" src="images/create-black-18dp.svg" alt="update" onclick="editElement(this)">';
  });
  var x = document.getElementById("display").rows.length;
  document.getElementById("emp_count").innerHTML = x - 1;
};
function deleteElement(td) {
  row = td.parentElement.parentElement;
  var fname = row.children[1].innerHTML;
  document.getElementById("display").deleteRow(row.rowIndex);
  var newList = [];
  newList = JSON.parse(localStorage.getItem("empMap"));
  newList.forEach((element) => {
    if (element.fname == fname) {
      const index = newList.indexOf(element);
      newList.splice(index, 1);
    }
  });
  localStorage.setItem("empMap", JSON.stringify(newList));
}

function editElement(data) {
  document.getElementById("abc").style.display = "block";
  row = data.parentElement.parentElement;
  var fname = row.children[1].innerHTML;
  var gender = row.children[2].innerHTML;
  var indexOfGender = 0;
  if (gender == "Male") {
    indexOfGender = 1;
  }
  var dept = row.children[3].innerHTML;
  var salary = row.children[4].innerHTML;
  var date = row.children[5].innerHTML;
  document.getElementById("first-name").value = fname;
  document.getElementById("first-name").disabled;
  document.edit_form.gender[indexOfGender].checked = true;
  document.getElementById("salary").value = salary;
  document.getElementById("start_date").value = date;
  let editObj = {
    fname: fname,
    gender: gender,
    profile: profile,
    dept: dept,
    salary: salary,
    date: date,
  };
  return editObj;
}
function onEditSubmit() {
  let editObj = editElement(data)
  var newList = [];
  newList = JSON.parse(localStorage.getItem("empMap"));
  newList.forEach((element) => {
    if (element.fname == editObj.fname) {
      const index = newList.indexOf(element);
      newList.splice(index, 1);
    }
  });
  localStorage.setItem("empMap", JSON.stringify(newList));
  newList.push(empObj)
  localStorage.setItem("empMap", JSON.stringify(newList));
}

//Function to Hide Popup
function div_hide() {
  document.getElementById("abc").style.display = "none";
}
