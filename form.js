
function is_Vaild() {
    let fn = document.getElementById("fname").value;
    let ln = document.getElementById("Lname").value;
    // let un= document.getElementById("username");

    if (is_len_vaild(fn, 3, 8) == true) {
        is_len_vaild(ln, 3, 8);
    }

   check_age();
   check_mail();
  check_pass();
  check_contact();
  if(check_age() && check_pass() && check_mail()&& check_contact()  ==true){
    alert("Form is sucessfully Submited...");
  }
}

function is_len_vaild(inputtext, minlen, maxlen) {
    let field = inputtext;
    let min = minlen;
    let max = maxlen;

    if (field.length < min || field.length > max) {
        if (field.length < min) {
            alert("Characters are less than 3");
            return false;
        }
        else {
            alert("Characters are more than 8");
            return false;
        }
    }
    else {
        return true;
    }
}

function genrate_username() {

    let fn = document.getElementById("fname").value;
    let ln = document.getElementById("Lname").value;

    let fl=fn.slice(0,3);
    let ll=ln.slice(-3);

    let X=fl+ll;
  
  document.getElementById("username").value=X;
    
}
function check_age(){
    let A=document.getElementById("age").value;
    if(A>50){
        alert("Age is greater than 50");
         return false;
    }
    return true;
}
function check_mail()
{
    let mail=document.getElementById("email").value;
    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ;
    if(mail.match(mailformat)){
        return true;
    }
    else{
        alert("Email don't match the format");
    }

}
function check_pass(){


    let pas=document.getElementById("pass").value;
    let passformat= /^[A-Z]{1}[a-zA-Z]{0,7}$/;
    if(pas.match(passformat)){
     //   alert("Password match the format");
     return true;
    }
    else{
        alert("Password don't match the format 1st char should be capital and it should not be more than 8 letters");
    }
}
function check_contact(){
let con=document.getElementById("contact").value;
let conformat=/^[0-9]{11}$/;
if(con.match(conformat)){
     // alert("Contact match the format");
     return true;
   }
   else{
       alert("Contact not match the format");
   }
}