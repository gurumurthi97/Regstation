
function validate(){
let firstNameInput=document.getElementById('FirstName').value
let lastNameInput=document.getElementById('LastName').value
let Email=document.getElementById('email').value
let city=document.getElementById('city').value
let State=document.getElementById('state').value
let zip=document.getElementById('zip').value
let tnC=document.getElementById('tnC').checked
let error=false
// ************************Firstname************************* 
if(firstNameInput){
    document.getElementById('first-name-validate').style.display='block';
    document.getElementById('first-name-invalid').style.display='none';
}else{
    document.getElementById('first-name-invalid').style.display='block';
    document.getElementById('first-name-validate').style.display='none';
    error=true
}
// ************************Lastname************************* 
if(lastNameInput){
    document.getElementById('last-name-valid').style.display='block';
    document.getElementById('last-name-invalid').style.display='none';
}else{
    document.getElementById('last-name-invalid').style.display='block';
    document.getElementById('last-name-valid').style.display='none';
    error=true
}
//  ************************EMAIL************************* 
/*
-whether exist?
-@
-.
-After last .there should be atleast2 characters
-First Charcter should not be @
ankit@gmail.com
*/
if(Email && Email.includes('@') && Email.includes('.') && Email.lastIndexOf('.') <= Email.length-3 && Email.indexOf('@')!==0
){
    document.getElementById('email-valid').style.display='block';
    document.getElementById('email-invalid').style.display='none';
}else{
    document.getElementById('email-invalid').style.display='block';
    document.getElementById('email-valid').style.display='none';
    error=true
}

// ************************City************************* 

if(city && city.length>=3 && !parseInt(city)){
    document.getElementById('city-valid').style.display='block'
    document.getElementById('city-invalid').style.display='none'
}else{
    document.getElementById('city-valid').style.display='none'
    document.getElementById('city-invalid').style.display='block'
    error=true
}


// ************************State************************* 
if(State !== 'None'){
    document.getElementById('state-valid').style.display = "block";
    document.getElementById('state-invalid').style.display = "none";
} else {
    document.getElementById('state-invalid').style.display = "block";
    document.getElementById('state-valid').style.display = "none";
    error = true
}

// ************************Zip************************* 
if(zip && zip.length===6 && parseInt(zip)){
    document.getElementById('zip-valid').style.display='block'
    document.getElementById('zip-invalid').style.display='none'
}else{
    document.getElementById('zip-valid').style.display='none'
    document.getElementById('zip-invalid').style.display='block'
    error=true
}


// ************************TNC************************* 
if(tnC){
    document.getElementById('Tcn-check').style.display='none'
}else{
    document.getElementById('Tcn-check').style.display="block"
    error=true
}
if(!error){
    alert('none')
    firstNameInput=document.getElementById('FirstName').value=''
 lastNameInput=document.getElementById('LastName').value=''
 Email=document.getElementById('email').value=''
 city=document.getElementById('city').value=''
 State=document.getElementById('state').value='None'
 zip=document.getElementById('zip').value=''
 tnC=document.getElementById('tnC').checked=''
  


 document.getElementById('first-name-validate').style.display='none';
 document.getElementById('last-name-valid').style.display='none';
 document.getElementById('email-valid').style.display='none';
 document.getElementById('city-valid').style.display='none'
 document.getElementById('state-valid').style.display='none'
 document.getElementById('zip-valid').style.display='none'

}
}