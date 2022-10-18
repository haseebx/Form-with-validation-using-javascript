
function is_Vaild() {
    let fn = document.getElementById("fname").value;
    let ln = document.getElementById("Lname").value;
    // let un= document.getElementById("username");

    if (is_len_vaild(fn, 3, 8) == true) {
        is_len_vaild(ln, 3, 8);
    }
   // check_age();
   check_age();
   check_mail();
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
    }
    else{
        alert("Email don't match the format");
    }

}