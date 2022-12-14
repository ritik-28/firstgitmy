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

//queryselector assignment

const secondItem = document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.backgroundColor = "green";
const thirdItem = document.querySelector(".list-group-item:nth-child(3)");
// thirdItem.style.opacity = "0";

//queryselectorAll assignment
const qAll = document.querySelectorAll(".list-group-item");
qAll[1].style.color = "green";

//choosing all odd elements
const qallOdd = document.querySelectorAll(".list-group-item:nth-child(odd)");

for (let i = 0; i < qallOdd.length; i++)
  qallOdd[i].style.backgroundColor = "green";

/*c
difference between queryselector and queryselectorAll :

querySelector selects any first occurrence of classes, tags etc. if there are multiple elements with same classes then it will select only first one.

queryselectorAll selects all the occurence of given class or tag. it will return a nodelist which is like  a array but not exctly array.  we can index it and also we can use array method on it.

also when we change anything on nodelist we offen use indexing or loop.


//parentNode

var itemList = document.querySelector("#items");
// console.log(itemList);
// console.log(itemList.parentNode);
// console.log(itemList.parentNode.parentNode);

// itemList.parentNode.style.backgroundColor = "#f4f4f4";
// itemList.parentNode.parentNode.style.backgroundColor = "red";

//parentElement
// console.log(itemList);
// console.log(itemList.parentElement);
// console.log(itemList.parentElement.parentElement);

itemList.parentElement.style.backgroundColor = "#f4f4f4";

//childNodes
console.log(itemList.childNodes);
console.log(itemList.childNodes[1]);
// itemList.childNodes[1].style.backgroundColor = "orange";

//children
console.log(itemList.children);
console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = "red";

//firstChild
console.log(itemList.firstChild);

//firstElementChild
console.log(itemList.firstElementChild);

//lastChild
console.log(itemList.lastChild);

//lastElementChild
console.log(itemList.lastElementChild);

//nextSiblings
console.log(itemList.nextSibling);

//nextElementSibling
console.log(itemList.nextElementSibling);
console.log(document.querySelector(".title").nextElementSibling);

//priviousSibling
console.log(itemList.previousSibling.previousSibling);

//priviousElemenSibling
console.log(itemList.previousElementSibling);

*/

//createElement

//crreating a div
var newDiv = document.createElement("div");

//adding class to this element
newDiv.className = "hello";

//adding id to this element
newDiv.id = "hello1";

//set attribute to this element
newDiv.setAttribute("title", "hello div");
// console.log(newDiv);

//create text node
var newDivText = document.createTextNode("HEllo world");

//APPEND this text node to newDiv
newDiv.append(newDivText);

//we have made an element with all the things using javascript, now insert it in dom
//now INSERT it into the DOM
var container = document.querySelector("header .container");
var h1 = document.querySelector("header h1");

//add HEllo word before Item Lister
container.insertBefore(newDiv, h1);
newDiv.style.fontSize = "30px";

//add HEllo word before Item 1
var item1 = document.querySelector(".list-group-item");
var ulItem = document.querySelector(".list-group");
ulItem.insertBefore(newDiv, item1);
