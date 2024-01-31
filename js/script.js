var x;
x=prompt("Enter your email:");
console.log(x);

document.getElementById("b1").onclick= function(){
    document.getElementById("details").style.display ="none";
}
   

document.getElementById("b2").onclick= function(){
    document.getElementById("details").style.display = "block";
}
  
// document.getElementById("pic").onclick = function(){
//     document.getElementById("close").style . display = "none"
// }

function myFunction() {
    let text;
    let person = prompt("Please enter your name:", "Harry Potter");
    if (person == null || person == "") {
      text = "User cancelled the prompt.";
    } else {
      text = "Hello " + person + "! How are you today?";
    }
    document.getElementById("demo").innerHTML = text;
  }