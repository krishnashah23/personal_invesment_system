function validate()
{
	var name=document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var mob = document.getElementById('mob').value;
	var uname = document.getElementById('uname').value;
	var pass = document.getElementById('pass').value;
	var re_pass = document.getElementById('repass').value;

	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var filter1 = /^[0-9]+$/;
	var letters = /^[A-Za-z]+$/;
	if(name == "" )
		document.getElementById('name_err').innerHTML = "&nbsp;*Required"
	if (!filter.test(email))
		document.getElementById('mail_err').innerHTML = "&nbsp;*Invalid Email"
	if(!filter1.test(mob))
		document.getElementById('mob_err').innerHTML = "&nbsp;*Invalid Mobile Number"
	if(!letter.test(uname))
		document.getElementById('uname_err').innerHTML = "&nbsp;*Username should only contain alphabets"
	if(re_pass != pass)
		document.getElementById('pass_err').innerHTML = "&nbsp;Password donot match"


}