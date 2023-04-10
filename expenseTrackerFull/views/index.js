const user = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const signup = document.querySelector("#submitbtn");
const regform = document.querySelector(".formjs");
const htext = document.querySelector(".textshow");
const logdirect = document.querySelector(".logdirect");
const hideshow = document.querySelector(".hideshow");
const regshow = document.querySelector(".regshow");
const regdirect = document.querySelector(".regdirect");
const logform = document.querySelector(".form2");
const emaillog = document.querySelector("#emaillog");
const passwordlog = document.querySelector("#passwordlog");
const htextshowlog = document.querySelector(".textshowlog");

regshow.style.display = "none";

regform.addEventListener("submit", async (e) => {
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
    const data = await axios.post("http://localhost:3000/signup", postObj);
    console.log(data);
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

logdirect.addEventListener("click", () => {
  hideshow.style.display = "none";
  regshow.style.display = "block";
});

regdirect.addEventListener("click", () => {
  regshow.style.display = "none";
  hideshow.style.display = "block";
});

logform.addEventListener("submit", async (e) => {
  e.preventDefault();
  const postObjlog = {
    email: `${e.target.email.value}`,
    password: `${e.target.password.value}`,
  };

  emaillog.value = "";
  passwordlog.value = "";

  try {
    const yes = await axios.post("http://localhost:3000/login", postObjlog);
    if (yes.data == "user login succesful") {
      window.location.href = "seperate.html";
    }
  } catch (err) {
    console.log(err);
    if (err.message == "Request failed with status code 401") {
      htextshowlog.textContent = "";
      htextshowlog.style.backgroundColor = "rgb(255,100, 70)";
      htextshowlog.style.width = "70%";
      setTimeout(() => {
        htextshowlog.textContent = "";
      }, 5000);
    }
  }
});
