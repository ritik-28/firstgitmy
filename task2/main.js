var form = document.getElementById("addForm");
var itemList = document.getElementById("items");

var li = document.querySelectorAll(".list-group-item");

//implemented a editbutton function that i can use multiple times
function editButton() {
  var editButton = document.createElement("button");
  editButton.className = "btn btn-danger btn-sm float-right delete";
  editButton.appendChild(document.createTextNode("Edit"));
  return editButton;
}
for (let i = 0; i < li.length; i++) {
  var edit = editButton();
  li[i].appendChild(edit);
}

//form submit event
form.addEventListener("submit", addItem);

//add item function
function addItem(e) {
  e.preventDefault();
  // console.log(1);
  //get value
  var newItem = document.getElementById("item").value;
  var newDes = document.getElementById("description").value;
  //create a new li element
  var li = document.createElement("li");
  //add class
  li.className = "list-group-item";

  //adding text node with input value
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createElement("br")); //made a br tag for changing line
  li.appendChild(document.createTextNode(newDes));

  //create delete button element
  var deleteBtn = document.createElement("button");
  //add class to deleteBtn
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  //append text node
  deleteBtn.appendChild(document.createTextNode("X"));
  //append button to li
  li.appendChild(deleteBtn);

  var edit = editButton();
  li.appendChild(edit);
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

//filer
var filter = document.getElementById("filter");
//filter event
filter.addEventListener("keyup", filterItems);
//filterItems
function filterItems(e) {
  // console.log(e.target.value);
  //convert text to lower case
  var text = e.target.value.toLowerCase();
  //get lis
  var items = itemList.getElementsByTagName("li");

  //convert in an array
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    // console.log(itemName);
    // console.log(item.childNodes[1].textContent);
    var description = item.firstChild.nextSibling.nextSibling.textContent;
    // console.log(description);
    if (
      itemName.toLowerCase().indexOf(text) != -1 ||
      description.toLowerCase().indexOf(text) != -1
    ) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
