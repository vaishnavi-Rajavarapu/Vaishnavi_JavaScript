function on_click() {
                 var phone=document.getElementById('phone')
	var mail = document.getElementById('email')
	var password = document.getElementById('psw')
	var repeat=document.getElementById('psw-repeat')
	if(mail.value.length==0 && password.value.length==0)
		alert("Username and Password cannot be empty.")
	else if(mail.value.length==0)
		alert("Username cannot be empty.")
	else if(password.value.length==0)
		alert("Password cannot be empty.")
                  else if(((phone.value).toString()).length!=10)
		alert("please enter a valid mobile number")
	else if(password.value!=repeat.value)
		alert("password mismatch")

}
function onclick_login(){
	var mail = document.getElementById('emaill')
	var password = document.getElementById('pswl')
	if(mail.value.length==0 && password.value.length==0)
		alert("Username and Password cannot be empty.")
	else if(mail.value.length==0)
		alert("Username cannot be empty.")
	else if(password.value.length==0)
		alert("Password cannot be empty.")
}