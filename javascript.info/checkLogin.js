
let userLogin = prompt ("Login: ", "");
if(userLogin =="Admin"){
	let password = prompt("Password: ","");
	if(password=="TheMaster"){
		alert("Welcome!");
	}
	else if (password ==null || password ==''){
		alert("Canceled.");
	}
	else{
		alert("Wrong password");
	}

}
else if(userLogin == null || userLogin == ''){
	alert("Canceled");
}
else{
	alert("I don't know you");
}