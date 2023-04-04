const user = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const signup = document.querySelector("#submitbtn");
const form = document.querySelector(".formjs");
const htext = document.querySelector(".textshow");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const postObj = {
    username: `${e.target.username.value}`,
    email: `${e.target.email.value}`,
    password: `${e.target.password.value}`,
  };

  user.value = "";
  email.value = "";
  password.value = "";

  try {
    const res = await axios.post("http://localhost:3000/signup", postObj);
    console.log(res);
  } catch (err) {
    if (err.message == "Request failed with status code 403") {
      htext.textContent = "user already exist";
      htext.style.backgroundColor = "rgb(255,100, 70)";
      htext.style.width = "30%";
      setTimeout(() => {
        htext.textContent = "";
      }, 5000);
    }
  }
});
