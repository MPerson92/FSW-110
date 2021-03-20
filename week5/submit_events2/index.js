

let button = document.getElementById('button');

button.onclick = function() {
    let first = document.getElementById('F1');
    let last = document.getElementById('L1');
    let age = document.getElementById('A1');
    let male = document.getElementById('M1');
    let locations = document.getElementById('S1');
    let restriction1 = document.getElementById('R2');
    let restriction2 = document.getElementById('R3');
    let restriction3 = document.getElementById('R4');

    let gender ;
    if(male.checked == true) {
        gender = 'male';
    }
    else {
        gender = 'female';
    }

    let restriction = "" ;
    if(restriction1.checked == true ) {
        console.log("");
        restriction = restriction.concat(restriction1.value).concat(" ");
    }
     if (restriction2.checked == true ) {
        console.log("");
        restriction = restriction.concat(restriction2.value).concat(" ");
    }
     if  (restriction3.checked == true ) {
        console.log("");
        restriction = restriction.concat(restriction3.value).concat(" ");
    }
    console.log("Dietary Restriction: " + restriction)
    alert(
      "First Name: " + first.value + '\n' + 
       "Last Name: " + last.value + '\n' +
       "Age: " + age.value + '\n' +
       "Gender: " + gender + '\n' +
        "Locaton: " + locations.value + '\n'  +
        "Dietary Restriction: " + restriction

    )

}