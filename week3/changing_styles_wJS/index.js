for (i = 0; i < 5; i++){
    var header = document.createElement('h2');
    header.textContent = 'Shadow';
    document.body.appendChild(header);
    document.getElementsByTagName('h2')[i].style.fontSize = '20px';
    document.getElementsByTagName('h2')[i].style.fontWeight = 'lighter';
    document.getElementsByTagName('h2')[i].style.fontFamily = 'sans-serif';
    document.getElementsByTagName('h2')[i].style.color = 'cornflowerblue';
    header.className = 'border'
}

    
