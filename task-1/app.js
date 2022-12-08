// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);

// document.title = 123;

// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);

// document.all[10].textContent = "hello";

// console.log(document.forms);
// console.log(document.links);

// console.log(document.images);

// console.log(document.getElementById("header-title"));

var headerTitle = document.getElementById("header-title");
// headerTitle.textContent = "hello";
// headerTitle.innerText = "good bye";
// console.log(headerTitle.textContent); // i have done display none of span in html file
// console.log(headerTitle.innerText);

// headerTitle.innerHTML = "<h3>hello</h3>";
// headerTitle.style.borderBottom = "solid 3px black";

document.getElementById("main-header").style.borderBottom = "solid 3px black";

const items = document.getElementsByClassName("title"); //gives html collection

items[0].style.fontWeight = "bold";
items[0].style.color = "green";
