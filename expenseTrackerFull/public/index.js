const user = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
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
const pwdshow = document.querySelector(".pwdshow");
const forpwd = document.querySelector(".forpwd");
const forgotPwd = document.querySelector(".form3");
const regpwd = document.querySelector(".regpwd");

regshow.style.display = "none";
pwdshow.style.display = "none";

forgotPwd.addEventListener("submit", async (e) => {
  try {
    e.preventDefault();
    const postobj = { email: e.target.emailpwd.value };
    const res = await axios.post(
      "http://54.210.206.255:3000/password/forgotpassword",
      postobj
    );
    if (res.status === 202) {
      forgotPwd.innerHTML +=
        '<div style="color:red;">Mail Successfuly sent <div>';
    }
    e.target.emailpwd.value = "";
  } catch (err) {
    console.log(err);
  }
});

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
    const data = await axios.post("http://54.210.206.255:3000/signup", postObj);
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

forpwd.addEventListener("click", () => {
  pwdshow.style.display = "block";
  regshow.style.display = "none";
  hideshow.style.display = "none";
});

regpwd.addEventListener("click", () => {
  pwdshow.style.display = "none";
  hideshow.style.display = "block";
});

let userId;

logform.addEventListener("submit", async (e) => {
  try {
    e.preventDefault();
    const postObjlog = {
      email: `${e.target.email.value}`,
      password: `${e.target.password.value}`,
    };

    emaillog.value = "";
    passwordlog.value = "";

    const yes = await axios.post(
      "http://54.210.206.255:3000/login",
      postObjlog
    );
    if (yes.data != "") {
      localStorage.setItem("token", yes.data);
      window.location.href = "seperate.html";
    }
  } catch (err) {
    if (err.message == "Request failed with status code 404") {
      htextshowlog.textContent = "email is not present, signup";
      htextshowlog.style.backgroundColor = "rgb(255,100, 70)";
      htextshowlog.style.width = "70%";
      setTimeout(() => {
        htextshowlog.textContent = "";
      }, 5000);
    }
  }
});
