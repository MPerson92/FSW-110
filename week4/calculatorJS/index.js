let colors = ['blue','orange','green'];
let id = ['1','2','3'];
let id2 = ['4','5','6'];
let submit = ['Addition','Subtraction','Multiplication'];
let buttons = [];

for (let i = 0; i < 3; i++) {

    let div = document.createElement('div');
    div.style.backgroundColor = colors[i];

    let selection = document.createElement('input');
    selection.id = id[i]
    selection.style.padding = '5px';
    selection.style.margin = '24px';

    let text = document.createElement('input')
    text.id = id2[i];
    text.style.padding = '5px';
    text.style.margin = '24px';

    let button = document.createElement('input');
    button.type = 'submit';
    button.style.padding = '5px';
    button.style.margin = '24px';
    buttons.push(button);
    button.value = submit[i];

    div.appendChild(selection);
    div.appendChild(text);
    
    div.appendChild(button);
    document.body.appendChild(div);
}

let result = document.createElement('span');
result.id = 'result';
result.textContent = 'Answer:';
document.body.appendChild(result);

buttons[0].addEventListener('click', (Event) => {
    let selection = document.getElementById('1'); 

    let selection2 = document.getElementById('4');

    let result = document.getElementById('result');

    result.textContent = 'Answer ' + (parseInt(selection.value) + parseInt(selection2.value));
})
buttons[1].addEventListener('click', (Event) => {
    let selection = document.getElementById('2'); 

    let selection2 = document.getElementById('5');

    let result = document.getElementById('result');

    result.textContent = 'Answer ' + (parseInt(selection.value) - parseInt(selection2.value));
})

buttons[2].addEventListener('click', (Event) => {
    let selection = document.getElementById('3'); 

    let selection2 = document.getElementById('6');

    let result = document.getElementById('result');

    result.textContent = 'Answer ' + (parseInt(selection.value) * parseInt(selection2.value));
})