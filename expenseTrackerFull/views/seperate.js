const formhide = document.querySelector(".formhide");
const newbtn1 = document.querySelector(".newbtn1");
const newbtn2 = document.querySelector(".newbtn2");
const formhide2 = document.querySelector(".formhide2");
const listodo = document.querySelector(".list-todo");
const listdone = document.querySelector(".list-done");
const rzpButton = document.querySelector(".rzp-button");
const leaderboard = document.querySelector(".leaderboard");
const container2 = document.querySelector(".container-new");
const container3 = document.querySelector(".container-3");
const con1 = document.querySelector(".con1");
const containertabledata = document.querySelector(".container-new2");
const containertableyearly = document.querySelector(".container-new3");
const monthly = document.querySelector("#monthly");
const yearly = document.querySelector("#yearly");
const add = document.querySelector("#addbig");
const downloadbtn = document.querySelector("#downloadbtn");
const child1 = document.querySelector(".incomediv1");
const child2 = document.querySelector(".incomediv2");

monthly.addEventListener("click", async () => {
  container2.style.display = "none";
  containertableyearly.style.display = "none";
  newbtn1.style.display = "none";
  newbtn2.style.display = "none";
  containertabledata.style.display = "block";
});

yearly.addEventListener("click", async () => {
  container2.style.display = "none";
  containertabledata.style.display = "none";
  newbtn1.style.display = "none";
  newbtn2.style.display = "none";
  containertableyearly.style.display = "block";
});

add.addEventListener("click", async () => {
  containertabledata.style.display = "none";
  containertableyearly.style.display = "none";
  newbtn1.style.display = "block";
  newbtn2.style.display = "block";
  container2.style.display = "block";
});

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
      listodo.insertAdjacentElement("afterbegin", li);
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
      listdone.insertAdjacentElement("afterbegin", li);
    }
  } catch (err) {
    console.log(err);
  }
});

newbtn1.addEventListener("click", () => {
  containertabledata.style.display = "none";
  containertableyearly.style.display = "none";
  newbtn1.style.display = "none";
  newbtn2.style.display = "none";
  formhide2.style.display = "block";
  container2.style.display = "block";
  con1.style.display = "none";
});

newbtn2.addEventListener("click", () => {
  containertabledata.style.display = "none";
  containertableyearly.style.display = "none";
  newbtn2.style.display = "none";
  newbtn1.style.display = "none";
  formhide.style.display = "block";
  container2.style.display = "block";
  con1.style.display = "none";
});

function createButton(list, totalExPages, exorin) {
  const div = document.createElement("div");
  const divpagi = document.createElement("div");
  for (let i = 0; i < totalExPages; i++) {
    const btn = document.createElement("button");
    btn.appendChild(document.createTextNode(`${i + 1}`));
    divpagi.appendChild(btn);
    divpagi.classList = "pagination";
    div.appendChild(divpagi);
    div.className = "co";
    list.insertAdjacentElement("beforeend", div);

    btn.addEventListener("click", async () => {
      const expense = await axios.get(
        `http://localhost:3000/${exorin}?page=${i + 1}`,
        {
          headers: { authorization: `${localStorage.getItem("token")}` },
        }
      );
      list.innerHTML = "";
      expense.data.arr.forEach((element) => {
        let income;
        if (exorin == "expenses") {
          income = `${element.description}\u00A0 \u00A0 \u00A0 \u00A0 ₹ ${element.amount}\u00A0 \u00A0 \u00A0 \u00A0${element.category}`;
        } else {
          income = `${element.description}\u00A0 \u00A0 \u00A0 \u00A0 ₹ ${element.amount}`;
        }
        const li = makeLi(income);
        list.insertAdjacentText("afterbegin", "");
        list.appendChild(li);
        list.insertAdjacentElement("beforeend", div);
      });
    });
  }
  return div;
}

window.addEventListener("DOMContentLoaded", async () => {
  const getRes = await axios.get("http://localhost:3000/expenses", {
    headers: { authorization: `${localStorage.getItem("token")}` },
  });
  const totalExPages = Math.ceil(getRes.data.totalExpense / 10);
  getRes.data.arr.forEach((element) => {
    const income = `${element.description}\u00A0 \u00A0 \u00A0 \u00A0 ₹ ${element.amount}\u00A0 \u00A0 \u00A0 \u00A0${element.category}`;
    const li = makeLi(income);
    listdone.appendChild(li);
  });
  createButton(listdone, totalExPages, "expenses");
  const isPremium = getRes.data.isPremium;
  const getIn = await axios.get("http://localhost:3000/income", {
    headers: { authorization: `${localStorage.getItem("token")}` },
  });
  let totalinPages = Math.ceil(getIn.data.totalIncome / 10);
  getIn.data.arr.forEach((el) => {
    const income = `${el.description}\u00A0 \u00A0 \u00A0 \u00A0 ₹ ${el.amount}`;
    const li = makeLi(income);
    listodo.appendChild(li);
  });

  createButton(listodo, totalinPages, "income");

  if (isPremium) {
    primium();
  } else {
    rzpButton.style.display = "block";
  }
});

function primium() {
  rzpButton.textContent = "Premium User";
  rzpButton.disabled = true;
  rzpButton.style.background = "orange";
  rzpButton.style.display = "block";
  rzpButton.style.color = "black";
}

downloadbtn.addEventListener("click", async () => {
  try {
    const response = await axios.get("http://localhost:3000/user/download", {
      headers: { authorization: `${localStorage.getItem("token")}` },
    });
    if (response.status === 201) {
      // backend is sending download link which if we open in browser, the file would download
      var a = document.createElement("a");
      a.href = response.data.fileUrl;
      a.download = "myexpense.csv";
      a.click();
    } else {
      throw new Error(response.data.message);
    }
  } catch (err) {
    console.log(err);
  }
});

rzpButton.addEventListener("click", async (req, res, next) => {
  const token = localStorage.getItem("token");
  const response = await axios.get("http://localhost:3000/primiummembership", {
    headers: { authorization: token },
  });

  var options = {
    key: response.data.key_id,
    order_id: response.data.order.id,
    handler: async function (response) {
      await axios.post(
        "http://localhost:3000/updatetransactionstatus",
        {
          order_id: options.order_id,
          payment_id: response.razorpay_payment_id,
        },
        {
          headers: { authorization: token },
        }
      );
      alert("Transaction Successful, you are a primium user now");
      primium();
    },
  };
  const rzp1 = new Razorpay(options);
  rzp1.open();

  rzp1.on("payment.failed", async function (response) {
    alert("Transaction Failed");
    await axios.post(
      "http://localhost:3000/failedpayment",
      { order_id: options.order_id },
      {
        headers: { authorization: token },
      }
    );
  });
});

leaderboard.addEventListener("click", async (e) => {
  const leader = await axios.get(
    "http://localhost:3000/premium/showleaderboard",
    {
      headers: { authorization: `${localStorage.getItem("token")}` },
    }
  );
  containertabledata.style.display = "none";
  containertableyearly.style.display = "none";
  container2.style.display = "none";
  con1.style.display = "block";
  con1.style.overflowY = "scroll";

  leader.data.users.forEach((el) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.style.borderRadius = "13px";
    li.style.marginTop = "8px";
    li.style.color = "green";
    li.style.fontSize = "20px";
    li.style.paddingLeft = "30px";
    li.append(
      document.createTextNode(
        `Name : \u00A0\u00A0 ${el.name}\u00A0 \u00A0 \u00A0 \u00A0\u00A0 \u00A0 \u00A0 \u00A0 Total Expense : \u00A0\u00A0${el.totalExpense}`
      )
    );
    con1.appendChild(li);
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

  li.appendChild(document.createTextNode(income));
  li.appendChild(buttondel);
  return li;
}

// //date initializer
// const date = new Date();
// var dateday = date.toDateString("default", { day: "long" });
// const ht = `${dateday}`;
// pdiv.appendChild(document.createTextNode(ht));
