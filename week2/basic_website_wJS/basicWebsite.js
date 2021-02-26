var header = document.createElement('h1');
var paragraph = document.createElement('p');
var unorganizedList = document.createElement('ul');
var foot = document.createElement('footer');
var item1 = document.createElement('li');
var item2 = document.createElement('li');
var item3 = document.createElement('li');
var navLink1 = document.createElement('a');
var navLink2 = document.createElement('a');
var navLink3 = document.createElement('a');
var navBar = document.createElement('nav');

navLink1.href = '#';
navLink2.href = '#';
navLink3.href = '#';
navLink1.textContent = "nav1";
navLink2.textContent = "nav2";
navLink3.textContent = "nav3";
navBar.appendChild(navLink1),
navBar.appendChild(navLink2),
navBar.appendChild(navLink3),
document.body.appendChild(navBar);



header.innerText = "header";
document.body.appendChild(header);

paragraph.innerText = "paragraph";
document.body.appendChild(paragraph);

item1.textContent = "item 1";
item2.textContent = "item 2";
item3.textContent = "item 3";
unorganizedList.appendChild(item1).appendChild(item2).appendChild(item3);
document.body.appendChild(unorganizedList);

foot.textContent = "footer";
document.body.appendChild(foot);



