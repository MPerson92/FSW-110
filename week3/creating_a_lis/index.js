for (var i = 0; i < 10; i++) {
    var header = document.createElement('h1');
    header.innerText = "Hello World";
    document.body.appendChild(header);
}
document.getElementsByTagName('h1')[0].setAttribute('style', 'color: red;');
document.getElementsByTagName('h1')[1].setAttribute('style', 'color: orange;');
document.getElementsByTagName('h1')[2].setAttribute('style', 'color: purple;');
document.getElementsByTagName('h1')[3].setAttribute('style', 'color: blue;');
document.getElementsByTagName('h1')[4].setAttribute('style', 'color: yellow;');
document.getElementsByTagName('h1')[5].setAttribute('style', 'color: green;');
document.getElementsByTagName('h1')[6].setAttribute('style', 'color: turqouise;');
document.getElementsByTagName('h1')[7].setAttribute('style', 'color: magenta;');
document.getElementsByTagName('h1')[8].setAttribute('style', 'color: silver;');
document.getElementsByTagName('h1')[9].setAttribute('style', 'color: coral;');

const names = ["steve","larry","joe","shirley","steph","nate","rick","emily"];
for (let i = 0; i < names.length; i++) {
    let name = document.createElement('p');
    name.innerText = names [i];
    document.body.appendChild(name);
}



