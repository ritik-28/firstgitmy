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

const titles = document.getElementsByClassName("title"); //gives html collection

console.log();

titles[0].style.fontWeight = "bold";
titles[0].style.color = "green";

// titles[1].style.backgroundColor = "yellow";
// titles[1].textContent = "hello";

//selecting the list items
const items = document.getElementsByClassName("list-group-item");
// console.log(items);
// items[1].textContent = "hello2";
// for (var i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "#f4f4f4";
// }
// items[1].style.backgroundColor = "yellow";

//third element green background color
// items[2].style.backgroundColor = "green";

//changing all items text bold
for (var i = 0; i < items.length; i++) {
  items[i].style.fontWeight = "bold";
}

//getelementbytagename
const liTag = document.getElementsByTagName("li");
// const liCls = document.getElementsByClassName("list-group-item");  //not working again

for (var i = 0; i < liTag.length; i++) {
  liTag[i].style.backgroundColor = "#f5f";
}

for (var i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = "#f4f4f4";
}
