function validate()
{
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if ( username == "user1" && password == "user1")
	{
		alert ("Login successfully");
		window.open("home_1.html");
		return false;
	}
	else
	{
		alert("Invalid Credentials")
		return false;
	}
}