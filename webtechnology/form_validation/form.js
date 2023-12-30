//! VALIDATION
// TO CHECK WHAT EVER THE DATA ENTERING IS RIGHT / WRONG
function validate() {
  var name1 = document.getElementById("name").value;
  var pass1 = document.getElementById("pass");
  var pass2 = document.getElementById("pass2");
  var x = document.getElementById("mail").value;
  var at = x.indexOf("@");
  var dot = x.lastIndexOf(".");
  if (name1 == "") {
    alert("Enter the name , blank filed is not allowed ");
    document.form1.name.focus();
    return false;
    // not to go for next page / not to submit to stay in same page
  }
  if (!isNaN(name1)) {
    alert("please Enter only character/alpabets values");
    document.form1.name.value = " ";
    document.form1.name.focus();
    return false;
  }
  if (pass1.value.length < 8) {
    alert("please Enter atlest 8 characters");
    document.form1.pass.value = "";
    document.form1.pass.focus();
    return false;
  }
  if (pass1.value != pass2.value) {
    alert("wrong password");
    document.form1.pass.value = "";
    document.form1.pass.focus();
    return false;
  }
  if (at < 1 || dot < at || dot >= x.length) {
    alert("please enter a valid email");
    document.form1.mail.value = "";
    document.form1.mail.focus();
    return false;
  }
  return true;
}
