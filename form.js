
function is_Vaild(){
    let fn= document.getElementById("fname").value;
    is_len_vaild(fn, 3, 8)
   /* alert(fn);*/

    
}

function is_len_vaild(inputtext, minlen,maxlen){
let field=inputtext;
let min=minlen;
let max= maxlen;

if(field.length<min || field.length >max){

    alert("Characters are more than 8");
    return false;
}
else{
    return true;
}


}