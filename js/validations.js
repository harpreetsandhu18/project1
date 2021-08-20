function countC(obj){
    document.getElementById("count").innerHTML = obj.value.length + " Charaters Entered";
}
function validation(){
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  var printmessage;

  error.style.padding = "2px";
  error1.style.padding = "2px";
  error2.style.padding = "2px";
  error3.style.padding = "2px";

  if(fname.length < 3){
    printmessage = "Please enter valid First Name.";
    document.getElementById("error").innerHTML = printmessage;
    return false;
  }
  if(lname.length < 3){
    printmessage = "Please enter valid Last Name.";
    document.getElementById("error1").innerHTML = printmessage;
    return false;
  }
  if(email.length < 3){
    printmessage = "Please enter valid email.";
    document.getElementById("error2").innerHTML = printmessage;
    return false;
  }
  if(message.length < 30){
    printmessage = "Minimum length of Message is 30 Charaters.";
    document.getElementById("error3").innerHTML = printmessage;
    return false;
  }
  alert("Thank you, your form has been submitted.");
  return true;
}
