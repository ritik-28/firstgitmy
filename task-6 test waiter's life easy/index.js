const table1 = document.querySelector(".heading1");
const table2 = document.querySelector(".heading2");
const table3 = document.querySelector(".heading3");
const price = document.querySelector("#price");
const dish = document.querySelector("#dish");
const tableChoose = document.querySelector("#table");
const formAdd = document.querySelector(".form-add");
const addToBill = document.querySelector("#changebtn");

//click event on add bill button
addToBill.addEventListener("click", async function (e) {
  e.preventDefault();
  //making data to be send with post request
  const objectForNetwork = {
    price: `${price.value}`,
    dish: `${dish.value}`,
    tableChoose: `${tableChoose.value}`,
  };
  try {
    //adding new order
    const response = await axios.post(
      "https://crudcrud.com/api/5bcc0f0ec2724de98fa0b2e4988b4596/orders",
      objectForNetwork
    );
    orderCreate(price, tableChoose, dish, response);
  } catch (err) {
    console.log(err);
  }
});

const orderCreate = function (price, tableChoose, dish, response) {
  const newText = `${price.value}-${tableChoose.value}-${dish.value}`;
  let li = document.createElement("li");

  li.appendChild(document.createTextNode(newText));
  li.style.fontWeight = "normal";
  const deleteOrder = document.createElement("button");
  deleteOrder.className = "btn bg-danger mx-2 my-2 delAdd ";
  deleteOrder.style.color = "white";
  deleteOrder.appendChild(document.createTextNode("Delete Order"));
  li.appendChild(deleteOrder);

  if (tableChoose.value === "table1") {
    table1.appendChild(li);
  } else if (tableChoose.value === "table2") {
    table2.appendChild(li);
  } else if (tableChoose.value === "table3") {
    table3.appendChild(li);
  }
  price.value = "";
  dish.value = "";
  deleteOrder.addEventListener("click", (e) => {
    e.target.parentNode.parentNode.removeChild(li);
    deleteOrdertable(response.data._id);
  });
};

//deleting the order from backend using id
const deleteOrdertable = async function deleteOrder(_id) {
  try {
    await axios.delete(
      `https://crudcrud.com/api/5bcc0f0ec2724de98fa0b2e4988b4596/orders/${_id}`
    );
  } catch (err) {
    console.log(err);
  }
};

//on page loads
window.addEventListener("DOMContentLoaded", async function (e) {
  try {
    const response = await axios.get(
      "https://crudcrud.com/api/5bcc0f0ec2724de98fa0b2e4988b4596/orders"
    );

    for (let i = 0; i < response.data.length; i++) {
      let li = document.createElement("li");
      const newText = `${response.data[i].price}-${response.data[i].tableChoose}-${response.data[i].dish}`;

      li.appendChild(document.createTextNode(newText));
      li.style.fontWeight = "normal";
      const deleteOrder = document.createElement("button");
      deleteOrder.className = "btn bg-danger mx-2 my-2 delAdd ";
      deleteOrder.style.color = "white";
      deleteOrder.appendChild(document.createTextNode("Delete Order"));
      li.appendChild(deleteOrder);

      if (response.data[i].tableChoose === "table1") {
        table1.appendChild(li);
      } else if (response.data[i].tableChoose === "table2") {
        table2.appendChild(li);
      } else if (response.data[i].tableChoose === "table3") {
        table3.appendChild(li);
      }

      deleteOrder.addEventListener("click", (e) => {
        e.target.parentNode.parentNode.removeChild(li);
        deleteOrdertable(response.data[i]._id);
      });
    }
  } catch (err) {
    console.log(err);
  }
});

///////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////
//oldcode using prom ise then

// function deleteOrdertable(_id) {
//   axios
//     .delete(
//       `https://crudcrud.com/api/5599281944dd46548b5aa34b764a9117/orders/${_id}`
//     )
//     .then()
//     .catch((err) => console.log(err));
// }

// window.addEventListener("DOMContentLoaded", function (e) {
//   axios
//     .get("https://crudcrud.com/api/5599281944dd46548b5aa34b764a9117/orders")
//     .then((response) => {
//       for (let i = 0; i < response.data.length; i++) {
//         let li = document.createElement("li");
//         const newText = `${response.data[i].price}-${response.data[i].tableChoose}-${response.data[i].dish}`;

//         li.appendChild(document.createTextNode(newText));
//         li.style.fontWeight = "normal";
//         const deleteOrder = document.createElement("button");
//         deleteOrder.className = "btn bg-danger mx-2 my-2 delAdd ";
//         deleteOrder.style.color = "white";
//         deleteOrder.appendChild(document.createTextNode("Delete Order"));
//         li.appendChild(deleteOrder);

//         if (response.data[i].tableChoose === "table1") {
//           table1.appendChild(li);
//         } else if (response.data[i].tableChoose === "table2") {
//           table2.appendChild(li);
//         } else if (response.data[i].tableChoose === "table3") {
//           table3.appendChild(li);
//         }

//         deleteOrder.addEventListener("click", (e) => {
//           e.target.parentNode.parentNode.removeChild(li);
//           deleteOrdertable(response.data[i]._id);
//         });
//       }
//     })
//     .catch((err) => console.log(err));
// });
