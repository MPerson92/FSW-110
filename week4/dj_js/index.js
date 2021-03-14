let box = document.createElement ('div');
 
box.style.width = '50px';
box.style.height = '50px';
box.style.backgroundColor = 'white';
box.textContent = 'Square';

window.onload = function() {
    box.style.backgroundColor = 'black';
}

box.addEventListener('mouseover', (Event) => {
    box.style.backgroundColor = 'blue';
})

box.addEventListener('mousedown', (Event) => {
    box.style.backgroundColor = 'red';
})

box.addEventListener('mouseup', (Event) => {
    box.style.backgroundColor = 'yellow';
})

box.addEventListener('dblclick', (Event) => {
    box.style.backgroundColor ='green';
})

window.addEventListener('wheel', (Event) => {
    box.style.backgroundColor ='orange';
})

window.addEventListener('keypress', (Event) => {
    switch (Event.key) {
        case 'b':
            box.style.backgroundColor ='blue';
            break;
        case 'r':
            box.style.backgroundColor ='red';
            break;
        case 'y':
            box.style.backgroundColor ='yellow';
            break;
        case 'g':
            box.style.backgroundColor ='green';
            break;
        case 'o':
            box.style.backgroundColor ='orange';
            break;    
    }
    console.log(Event.key)
}) 



document.body.appendChild (box);
