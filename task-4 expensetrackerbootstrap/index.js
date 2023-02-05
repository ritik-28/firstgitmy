const myBtn = document.querySelector("#changebtn");
const expense = document.querySelector("#expense");
const description = document.querySelector("#description");
const category = document.querySelector("#category");
const formAdd = document.querySelector(".form-add");
// console.log(expense);

myBtn.addEventListener("click", function (e) {
  e.preventDefault();
  // console.log(e.target);

  //creating a new element
  const li = document.createElement("li");
  const deleteExpense = document.createElement("button");
  const addExpense = document.createElement("button");

  deleteExpense.className = "btn bg-primary mx-2 my-2 delAdd ";
  addExpense.className = "btn bg-primary my-2 delAdd ";

  deleteExpense.appendChild(document.createTextNode("Delete Expense"));
  addExpense.appendChild(document.createTextNode("Add Expense"));

  var newItem = `${expense.value}-${description.value}-${category.value}`;
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(deleteExpense);
  li.appendChild(addExpense);

  // formAdd.appendChild(li);
  formAdd.parentNode.appendChild(li);
});
