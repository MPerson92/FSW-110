// The "submit" event refreshes your browser by default
// use "e.preventDefault()" in the first line of your callback function to prevent this
// remember to pass "e" into the callback function


var form = document.getElementById("submit-me");
var input1 = document.getElementById("name");
var input2 = document.getElementById("age"); 

form.addEventListener("submit", e => {
    alert("Name: " + input1.value + " Age: " + input2.value); 

e.preventDefault();    
})

