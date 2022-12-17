var form = document.getElementById("addForm");
var itemList = document.getElementById("items");

//form submit event
form.addEventListener("submit", addItem);

//add item function
function addItem(e) {
  e.preventDefault();
  // console.log(1);

  //get input value
  var newItem = document.getElementById("item").value;

  //create a new li element
  var li = document.createElement("li");

  //add class
  li.className = "list-group-item";

  //adding text node with input value
  li.appendChild(document.createTextNode(newItem));

  //create delete button element
  var deleteBtn = document.createElement("button");

  //add class to deleteBtn
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";

  //append text node
  deleteBtn.appendChild(document.createTextNode("X"));

  //append button to li
  li.appendChild(deleteBtn);

  var editButton = document.createElement("button");

  editButton.className = "btn btn-danger btn-sm float-right delete";

  editButton.appendChild(document.createTextNode("Edit"));

  li.appendChild(editButton);

  //append li into list
  itemList.appendChild(li);
}

//delete event
itemList.addEventListener("click", removeItem);

//remove item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("are u sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

//edit button

var editButton = document.createElement("button");

editButton.className = "btn btn-danger btn-sm float-right delete";

editButton.appendChild(document.createTextNode("Edit"));

itemList.children[0].appendChild(editButton);
itemList.children[1].appendChild(editButton);
itemList.children[2].appendChild(editButton);
