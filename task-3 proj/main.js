//my code
// localStorage.setItem("name", "ritik");
// console.log(localStorage.getItem("name"));
// localStorage.removeItem("name");

// sessionStorage.setItem("name", "ritik");
// console.log(sessionStorage.getItem("name"));
// sessionStorage.removeItem("name");

// document.cookie = "name=ritik ; expires =" + new Date(2023, 0, 7).toUTCString();

// document.cookie =
//   "lastName=tiwari ; expires =" + new Date(9999, 0, 7).toUTCString();

////////////////////
////////////////
/////////
//////
///
//
//traversay code start here

// // ATTENTION: THIS IS CODE FROM THE YOUTUBE CRASH COURSE. IT IS NOT MEANT TO RUN, IT IS JUST FOR LEARNING PURPOSES //

// // LOGGING OUTPUT
// alert('Hello World'); // Do not use for debugging. Stops script and only strings
// console.log('Hello World');
// console.error('This is an error');
// console.warn('This is a warning');

// // VARIABLES - var, let, const
// let age = 30;

// // let can be re-assigned, const can not
// age = 31;

// // DATA TYPES - String, Number, Boolean, null, undefined
// const name = 'Brad';
// const age = 37;
// const rating = 3.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z; // undefined

// // Check type
// console.log(typeof z);

// // STRINGS

// // Concatenation
// console.log('My name is ' + name + ' and I am ' + age);
// // Template literal (better)
// console.log(`My name is ${name} and I am ${age}`);

// // String methods & properties
// const s = 'Hello World';
// let val;
// // Get length
// val = s.length;
// // Change case
// val = s.toUpperCase();
// val = s.toLowerCase();
// // Get sub string
// val = s.substring(0, 5);
// // Split into array
// val = s.split('');

// // ARRAYS - Store multiple values in a variable
// const numbers = [1,2,3,4,5];
// const fruits = ['apples', 'oranges', 'pears', 'grapes'];
// console.log(numbers, fruit);

// // Get one value - Arrays start at 0
// console.log(fruits[1]);

// // Add value
// fruits[4] = 'blueberries';

// // Add value using push()
// fruits.push('strawberries');

// // Add to beginning
// fruits.unshift('mangos');

// // Remove last value
// fruits.pop();

// // // Check if array
// console.log(Array.isArray(fruits));

// // // Get index
// console.log(fruits.indexOf('oranges'));

// // OBJECT LITERALS
// const person = {
//   firstName: 'John',
//   age: 30,
//   hobbies: ['music', 'movies', 'sports'],
//   address: {
//     street: '50 Main st',
//     city: 'Boston',
//     state: 'MA'
//   }
// }

// // Get single value
// console.log(person.name)

// // Get array value
// console.log(person.hobbies[1]);

// // Get embedded object
// console.log(person.address.city);

// // Add property
// person.email = 'jdoe@gmail.com';

// // Array of objects
// const todos = [
//   {
//     id: 1,
//     text: 'Take out trash',
//     isComplete: false
//   },
//   {
//     id: 2,
//     text: 'Dinner with wife',
//     isComplete: false
//   },
//   {
//     id: 3,
//     text: 'Meeting with boss',
//     isComplete: true
//   }
// ];

// // Get specific object value
// console.log(todos[1].text);

// // Format as JSON
// console.log(JSON.stringify(todos));

// // LOOPS

// // For
// for(let i = 0; i <= 10; i++){
//   console.log(`For Loop Number: ${i}`);
// }

// // While
// let i = 0
// while(i <= 10) {
//   console.log(`While Loop Number: ${i}`);
//   i++;
// }

// // Loop Through Arrays
// // For Loop
// for(let i = 0; i < todos.length; i++){
//   console.log(` Todo ${i + 1}: ${todos[i].text}`);
// }

// // For...of Loop
// for(let todo of todos) {
//   console.log(todo.text);
// }

// // HIGH ORDER ARRAY METHODS (show prototype)

// // forEach() - Loops through array
// todos.forEach(function(todo, i, myTodos) {
//   console.log(`${i + 1}: ${todo.text}`);
//   console.log(myTodos);
// });

// // map() - Loop through and create new array
// const todoTextArray = todos.map(function(todo) {
//   return todo.text;
// });

// console.log(todoTextArray);

// // filter() - Returns array based on condition
// const todo1 = todos.filter(function(todo) {
//   // Return only todos where id is 1
//   return todo.id === 1;
// });

// // CONDITIONALS

// // Simple If/Else Statement
// const x = 30;

// if(x === 10) {
//   console.log('x is 10');
// } else if(x > 10) {
//   console.log('x is greater than 10');
// } else {
//   console.log('x is less than 10')
// }

// // Switch
// color = 'blue';

// switch(color) {
//   case 'red':
//     console.log('color is red');
//   case 'blue':
//     console.log('color is blue');
//   default:
//     console.log('color is not red or blue')
// }

// // Ternary operator / Shorthand if
// const z = color === 'red' ? 10 : 20;

// // FUNCTIONS
// function greet(greeting = 'Hello', name) {
//   if(!name) {
//     // console.log(greeting);
//     return greeting;
//   } else {
//     // console.log(`${greeting} ${name}`);
//     return `${greeting} ${name}`;
//   }
// }

// // ARROW FUNCTIONS
// const greet = (greeting = 'Hello', name = 'There') => `${greeting} ${name}`;
// console.log(greet('Hi'));

// // OOP

// // Constructor Function
// function Person(firstName, lastName, dob) {
//   // Set object properties
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dob = new Date(dob); // Set to actual date object using Date constructor
//   // this.getBirthYear = function(){
//   //   return this.dob.getFullYear();
//   // }
//   // this.getFullName = function() {
//   //   return `${this.firstName} ${this.lastName}`
//   // }
// }

// // Get Birth Year
// Person.prototype.getBirthYear = function () {
//   return this.dob.getFullYear();
// }

// // Get Full Name
// Person.prototype.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`
// }

// // Instantiate an object from the class
// const person1 = new Person('John', 'Doe', '7-8-80');
// const person2 = new Person('Steve', 'Smith', '8-2-90');

// console.log(person2);

// // console.log(person1.getBirthYear());
// // console.log(person1.getFullName());

// // Built in constructors
// const name = new String('Kevin');
// console.log(typeof name); // Shows 'Object'
// const num = new Number(5);
// console.log(typeof num); // Shows 'Object'

// // ES6 CLASSES
// class Person {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//   }

//   // Get Birth Year
//   getBirthYear() {
//     return this.dob.getFullYear();
//   }

//   // Get Full Name
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`
//   }
// }

// const person1 = new Person('John', 'Doe', '7-8-80');
// console.log(person1.getBirthYear());

// // ELEMENT SELECTORS

// // Single Element Selectors
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('.container'));
// // Multiple Element Selectors
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByTagName('li'));
// console.log(document.getElementsByClassName('item'));

// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));

// // MANIPULATING THE DOM
// const ul = document.querySelector('.items');
// // ul.remove();
// // ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// const btn = document.querySelector('.btn');
// // btn.style.background = 'red';

// // EVENTS

// // Mouse Event
// btn.addEventListener('click', e => {
//   e.preventDefault();
//   console.log(e.target.className);
//   document.getElementById('my-form').style.background = '#ccc';
//   document.querySelector('body').classList.add('bg-dark');
//   ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
// });

// // Keyboard Event
// const nameInput = document.querySelector('#name');
// nameInput.addEventListener('input', e => {
//   document.querySelector('.container').append(nameInput.value);
// });

// // USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
//event.target.uName
const phoneInput = document.querySelector("#phone");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

// // Listen for form submit
myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === "" || emailInput.value === "") {
    // alert('Please enter all fields');
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement("li");

    // Add text node with input values
    li.appendChild(
      document.createTextNode(
        `${nameInput.value}: ${emailInput.value} : ${phone.value}`
      )
    );

    //making button element  >>> from outer function
    const buttonEl = deleteButton();
    const editbutton = editButton();
    // console.log(buttonEl);

    //apending on li element
    li.appendChild(buttonEl);
    li.appendChild(editbutton);

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>: ${emailInput.value}`;

    // // Append to ul
    // userList.appendChild(li);

    //storing it in local st0rage

    // localStorage.setItem("userName", nameInput.value);
    // localStorage.setItem("email", emailInput.value);

    //making 0bject using dynamic form data
    let detailObject = {
      name: `${nameInput.value}`,
      userEmail: `${emailInput.value}`,
      userPhone: `${phoneInput.value}`,
    };

    let myObjserial = JSON.stringify(detailObject);
    // console.log(myObjserial);

    //storing it in local st0rage as an 0bject

    // localStorage.setItem("myobj", myObjserial);
    // localStorage.setItem(`${emailInput.value}`, myObjserial);

    //doing post request from crudcrud backend using axios instead of localstorage......not using stringify object myObjectserial because axios do that thing by default

    axios
      .post(
        "https://crudcrud.com/api/b7f5a0aedd0147f58d2b475deebc3d12/appointmentData",
        detailObject
      )
      .then((response) => {
        // console.log(response);
        //we are adding when api call and data writing is done
        userList.appendChild(li);
      })
      .catch((err) => console.log(err));

    // Clear fields
    nameInput.value = "";
    emailInput.value = "";
    phone.value = "";

    //adding An event in the delete button
    buttonEl.addEventListener("click", function (e) {
      // console.log(e.target.parentNode);
      localStorage.removeItem(detailObject.userEmail);
      e.target.parentNode.remove();
    });
    editbutton.addEventListener("click", function (e) {
      e.preventDefault();
      nameInput.value = `${detailObject.name}`;
      emailInput.value = `${detailObject.userEmail}`;
      phoneInput.value = `${detailObject.userPhone}`;
      localStorage.removeItem(detailObject.userEmail);
      e.target.parentNode.remove();
    });
  }
}

//outer function for handling deletebutton
const deleteButton = function () {
  const buttonEl = document.createElement("button");
  buttonEl.className = "btn-1";
  buttonEl.id = "btn2";
  buttonEl.setAttribute("value", "btndelete");
  buttonEl.appendChild(document.createTextNode("Delete"));
  return buttonEl;
};

//making edit button
const editButton = function () {
  const buttonEl = document.createElement("button");
  buttonEl.className = "btn-1";
  buttonEl.id = "btn3";
  buttonEl.setAttribute("value", "btnEdit");
  buttonEl.appendChild(document.createTextNode("Edit"));
  return buttonEl;
};

//
window.addEventListener("DOMContentLoaded", () => {
  axios
    .get(
      "https://crudcrud.com/api/b7f5a0aedd0147f58d2b475deebc3d12/appointmentData"
    )
    .then((response) => {
      // console.log(response);
      for (let i = 0; i < response.data.length; i++) {
        const li = document.createElement("li");
        // Add text node with input values
        li.appendChild(
          document.createTextNode(
            `${response.data[i].name}: ${response.data[i].userEmail} : ${response.data[i].userPhone}`
          )
        );
        const buttonEl = deleteButton();
        const editbutton = editButton();

        li.appendChild(buttonEl);
        li.appendChild(editbutton);

        userList.appendChild(li);

        buttonEl.addEventListener("click", (e) => {
          e.target.parentNode.remove();
          axios
            .delete(
              `https://crudcrud.com/api/b7f5a0aedd0147f58d2b475deebc3d12/appointmentData/${response.data[i]._id}`
            )
            .then((del) => console.log(del))
            .catch((err) => console.log(err));
        });

        editbutton.addEventListener("click", (e) => {
          e.preventDefault();
          nameInput.value = `${response.data[i].name}`;
          emailInput.value = `${response.data[i].userEmail}`;
          phoneInput.value = `${response.data[i].userPhone}`;
          e.target.parentNode.remove();

          let detailObject = {
            name: `${nameInput.value}`,
            userEmail: `${emailInput.value}`,
            userPhone: `${phoneInput.value}`,
          };

          axios
            .delete(
              `https://crudcrud.com/api/b7f5a0aedd0147f58d2b475deebc3d12/appointmentData/${response.data[i]._id}`
            )
            .then((res) => console.log(res))
            .catch((err) => console.log(err));

          // axios
          //   .post(
          //     "https://crudcrud.com/api/b7f5a0aedd0147f58d2b475deebc3d12/appointmentData",
          //     detailObject
          //   )
          //   .then((response) => {
          //     console.log(response);
          //   });
        });
      }
    })
    .catch((err) => console.log(err));
});

//when we exhaust crudcrud api calls then just delete cokkies and deleted storage data
//then again get new crud crud
//then just again make collection and add new request which should be post with some json data and paste new url/route
//now send, so resources created and you got new crudcrud
