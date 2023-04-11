const formhide = document.querySelector(".formhide");
const newbtn1 = document.querySelector(".newbtn1");
const newbtn2 = document.querySelector(".newbtn2");
const formhide2 = document.querySelector(".formhide2");
const listodo = document.querySelector(".list-todo");
const listdone = document.querySelector(".list-done");

formhide2.addEventListener("submit", async (e) => {
  try {
    e.preventDefault();
    const obj = {
      description: `${e.target.f1.value}`,
      amount: `${e.target.f2.value}`,
    };
    const postRes = await postIN(obj);
    if (postRes.data == "new income has been created in table") {
      formhide2.style.display = "none";
      newbtn1.style.display = "block";
      newbtn2.style.display = "block";
      const income = `${e.target.f1.value} \u00A0 \u00A0 \u00A0 \u00A0 ₹ ${e.target.f2.value} `;
      const li = makeLi(income);
      listodo.appendChild(li);
    }
  } catch (err) {
    console.log(err);
  }
});

async function postIN(obj) {
  const postRes = await axios.post("http://localhost:3000/income", obj, {
    headers: { authorization: `${localStorage.getItem("token")}` },
  });
  return postRes;
}

async function postEX(obj) {
  const postRes = await axios.post("http://localhost:3000/expenses", obj, {
    headers: { authorization: `${localStorage.getItem("token")}` },
  });
  return postRes;
}

formhide.addEventListener("submit", async (e) => {
  try {
    e.preventDefault();
    var obj = {
      description: `${e.target.exd.value}`,
      amount: `${e.target.exa.value}`,
      category: `${e.target.exc.value}`,
    };
    const postRes = await postEX(obj);
    if (postRes.data == "new expense created in table") {
      formhide.style.display = "none";
      newbtn1.style.display = "block";
      newbtn2.style.display = "block";
      const income = `${e.target.exd.value}\u00A0 \u00A0 ₹ ${e.target.exa.value}\u00A0 \u00A0 ${e.target.exc.value}`;
      const li = makeLi(income);
      listdone.appendChild(li);
    }
  } catch (err) {
    console.log(err);
  }
});

newbtn1.addEventListener("click", () => {
  newbtn1.style.display = "none";
  formhide2.style.display = "block";
});

newbtn2.addEventListener("click", () => {
  newbtn2.style.display = "none";
  formhide.style.display = "block";
});

window.addEventListener("DOMContentLoaded", async () => {
  const getRes = await axios.get("http://localhost:3000/expenses", {
    headers: { authorization: `${localStorage.getItem("token")}` },
  });
  getRes.data.forEach((element) => {
    const income = `${element.description}\u00A0 \u00A0 \u00A0 \u00A0 ₹ ${element.amount}\u00A0 \u00A0 \u00A0 \u00A0${element.category}`;
    const li = makeLi(income);
    listdone.appendChild(li);
  });
  const getIn = await axios.get("http://localhost:3000/income", {
    headers: { authorization: `${localStorage.getItem("token")}` },
  });
  getIn.data.forEach((el) => {
    const income = `${el.description}\u00A0 \u00A0 \u00A0 \u00A0 ₹ ${el.amount}`;
    const li = makeLi(income);
    listodo.appendChild(li);
  });
});

function makeLi(income) {
  const li = document.createElement("li");
  li.className = "list-group-item";
  li.style.whiteSpace = "preline";
  li.style.borderRadius = "13px";
  li.style.marginTop = "8px";

  const buttondel = document.createElement("button");
  buttondel.className = "btn btn-danger btn-sm btnln";
  buttondel.style.width = "7%";
  buttondel.style.float = "right";
  buttondel.append(document.createTextNode("x"));

  // const buttoncheck = document.createElement("button");
  // buttoncheck.className = "btn btn-primary btn-sm btnly";
  // buttoncheck.style.width = "8%";
  // buttoncheck.style.float = "right";
  // buttoncheck.append(document.createTextNode("edit"));

  li.appendChild(document.createTextNode(income));
  // li.appendChild(buttoncheck);
  li.appendChild(buttondel);
  return li;
}

// //date initializer
// const date = new Date();
// var dateday = date.toDateString("default", { day: "long" });
// const ht = `${dateday}`;
// pdiv.appendChild(document.createTextNode(ht));
