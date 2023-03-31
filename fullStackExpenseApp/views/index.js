const myBtn = document.querySelector("#changebtn");
const expense = document.querySelector("#expense");
const description = document.querySelector("#description");
const category = document.querySelector("#category");
const formAdd = document.querySelector(".form-add");

//ADDING EVENT ON SUBMIT BUTTON
myBtn.addEventListener("click", async function (e) {
  e.preventDefault();
  var expenseObj = {
    expense: `${expense.value}`,
    description: `${description.value}`,
    category: `${category.value}`,
  };

  const resp = await postResponse(expenseObj);
  expenseObj["id"] = resp.data.id;

  genrateList(expenseObj);

  expense.value = "";
  description.value = "";
  category.value = "";
});
//posting to database
async function postResponse(expenseObj) {
  const response = await axios.post(
    "http://localhost:3000/addexpense",
    expenseObj
  );
  return response;
}
//getting all saved rows
async function getAll() {
  const getResponse = await axios.get("http://localhost:3000/getexpense");
  return getResponse;
}
//running on screen loads
window.addEventListener("DOMContentLoaded", async () => {
  const getResponse = await getAll();
  for (let i = 0; i < getResponse.data.length; i++) {
    genrateList(getResponse.data[i]);
  }
});
//deleting from databse
async function deleteEXP(li, id) {
  await axios.delete(`http://localhost:3000/deleteexpense/${id}`);
  li.parentNode.removeChild(li);
}
//edit values and stroing to database
async function editEx(li, expenseObj) {
  expense.value = expenseObj.expense;
  description.value = expenseObj.description;
  category.value = expenseObj.category;
  await axios.delete(`http://localhost:3000/deleteexpense/${expenseObj.id}`);
  formAdd.parentNode.removeChild(li);
}
//generating the list
function genrateList(expenseObj) {
  //creating a new element
  const li = document.createElement("li");
  const deleteExpense = document.createElement("button");
  const editExpense = document.createElement("button");
  //adding classes to both new buttons
  deleteExpense.className = "btn bg-danger mx-2 my-2 delAdd ";
  editExpense.className = "btn bg-primary my-2 delAdd ";
  li.style.backgroundColor = "#bbb";

  deleteExpense.appendChild(document.createTextNode("Delete Expense"));
  editExpense.appendChild(document.createTextNode("Edit Expense"));

  var newItem = `${expenseObj.expense}-${expenseObj.description}-${expenseObj.category}`;

  li.appendChild(document.createTextNode(newItem));
  li.appendChild(deleteExpense);
  li.appendChild(editExpense);
  //adding the li element which I have made
  formAdd.parentNode.appendChild(li);
  //adding delete button
  deleteExpense.addEventListener("click", function () {
    deleteEXP(li, expenseObj.id);
  });
  //adding edit button populate values to input
  editExpense.addEventListener("click", function () {
    editEx(li, expenseObj);
  });
}
