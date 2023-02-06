const myBtn = document.querySelector("#changebtn");
const expense = document.querySelector("#expense");
const description = document.querySelector("#description");
const category = document.querySelector("#category");
const formAdd = document.querySelector(".form-add");

let i = 1;

myBtn.addEventListener("click", function (e) {
  e.preventDefault();

  //creating a new element
  const li = document.createElement("li");
  const deleteExpense = document.createElement("button");
  const editExpense = document.createElement("button");

  //adding classes to both new buttons
  deleteExpense.className = "btn bg-danger mx-2 my-2 delAdd ";
  editExpense.className = "btn bg-primary my-2 delAdd ";

  deleteExpense.appendChild(document.createTextNode("Delete Expense"));
  editExpense.appendChild(document.createTextNode("Edit Expense"));

  var newItem = `${expense.value}-${description.value}-${category.value}`;

  //adding all things to li element
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(deleteExpense);
  li.appendChild(editExpense);

  //adding the li element which I have made
  formAdd.parentNode.appendChild(li);

  //creating object of value enterd in form
  var expenseObj = {
    expense: `${expense.value}`,
    description: `${description.value}`,
    category: `${category.value}`,
  };

  let expenseObjStringify = JSON.stringify(expenseObj);

  //setting localstorage with this object after stgringify
  localStorage.setItem(i, expenseObjStringify);
  i++;

  //making inputs empty
  expense.value = "";
  description.value = "";
  category.value = "";

  //implementing delete button
  deleteExpense.addEventListener("click", function () {
    li.parentNode.removeChild(li);
  });

  //implementing edit expense button
  editExpense.addEventListener("click", function () {
    expense.value = expenseObj.expense;
    description.value = expenseObj.description;
    category.value = expenseObj.category;
    formAdd.parentNode.removeChild(li);
  });
});
