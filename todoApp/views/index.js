const todoname = document.querySelector("#todoname");
const description = document.querySelector("#description");
const btn = document.querySelector("#changebtn");
const formadd = document.querySelector(".form-add");
const listodo = document.querySelector(".list-todo");
const listdone = document.querySelector(".list-done");

btn.addEventListener("click", async (e) => {
  e.preventDefault();
  const todoObj = {
    todoname: `${todoname.value}`,
    description: `${description.value}`,
  };

  const res = await axios.post("http://54.210.206.255/posttodo", todoObj);
  todoObj["id"] = res.data.id;
  genrateList(todoObj);
});

function genrateList(todoObj) {
  const li = document.createElement("li");
  li.className = "list-group-item";

  const buttondel = document.createElement("button");
  buttondel.className = "btn btn-danger btn-sm btnln";
  buttondel.append(document.createTextNode("Delete"));
  const buttoncheck = document.createElement("button");
  buttoncheck.className = "btn btn-primary btn-sm btnly";
  buttoncheck.append(document.createTextNode("Done"));

  const items = `${todoObj.todoname}\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0${todoObj.description}`;
  li.appendChild(document.createTextNode(items));
  const lidone = li.cloneNode(true);
  li.appendChild(buttoncheck);
  li.appendChild(buttondel);
  listodo.appendChild(li);

  buttondel.addEventListener("click", async () => {
    await deleteTodo(li, todoObj.id);
  });
  buttoncheck.addEventListener("click", async () => {
    await donetodo(li, lidone, todoObj);
  });
}

async function donetodo(li, lidone, todoObj) {
  listdone.appendChild(lidone);
  await axios.post("http://54.210.206.255/donetodo", todoObj);
  await deleteTodo(li, todoObj.id);
}

async function deleteTodo(li, id) {
  await axios.delete(`http://54.210.206.255/deletetodo/${id}`);
  li.parentNode.removeChild(li);
}

window.addEventListener("DOMContentLoaded", async () => {
  const todoObj = await axios.get("http://54.210.206.255/gettodo");
  const donetodo = await axios.get("http://54.210.206.255/donetodo");
  todoObj.data.forEach((element) => {
    genrateList(element);
  });

  donetodo.data.forEach((element) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    const items = `${element.doneTask}\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0${element.description}`;
    li.appendChild(document.createTextNode(items));
    listdone.appendChild(li);
  });
});
