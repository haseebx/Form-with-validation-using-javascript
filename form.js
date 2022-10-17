
function is_Vaild(){
    let fn= document.getElementById("fname").value;
    let ln=  document.getElementById("Lname").value;
   // let un= document.getElementById("username");

    if(  is_len_vaild(fn, 3, 8) == true){
        is_len_vaild(ln, 3, 8);
    }
    genrrate_username(fn,ln);
}

function is_len_vaild(inputtext, minlen,maxlen){
let field=inputtext;
let min=minlen;
let max= maxlen;

if(field.length<min || field.length >max){
    if(field.length<min ){  
        alert("Characters are less than 3");
        return false;}
        else{
            alert("Characters are more than 8");
            return false;
        }

}
else{
    return true;
}
}

function genrrate_username(fn,ln){




}