let element = document.getElementById('button');
let input1 = document.getElementById('I1');
let input2 = document.getElementById('I2');
let input3 = document.getElementById('I3');

element.onclick = (Event) => {
    alert(input1.value + " " + input2.value + " " + input3.value);
}

