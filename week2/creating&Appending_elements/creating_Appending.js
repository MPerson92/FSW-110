var header = document.createElement('h1');
var paragrapgh = document.createElement('p');
var orderedList = document.createElement('ol');
var item1 = document.createElement('li');
var item2 = document.createElement('li');
var item3 = document.createElement('li');

header.innerText = "Welcome to my JS site";
document.body.appendChild(header);
paragrapgh.innerText = "All of this was created with Javascript";
document.body.appendChild(paragrapgh);

item1.textContent = "item 1";
item2.textContent = "item 2";
item3.textContent = "item 3";
orderedList.appendChild(item1).appendChild(item2).appendChild(item3);
document.body.appendChild(orderedList);

 

