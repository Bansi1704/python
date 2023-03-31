	function checkfname() 
		{
			var f=document.frm.fname.value;
			if (f=="") 
			{
				document.getElementById("fname").innerHTML="Please Enter Your Name";
			}
			else
			{
				document.getElementById("fname").innerHTML="";
			}
		}
		function checklname() 
		{
			var f=document.frm.lname.value;
			if (f=="") 
			{
				document.getElementById("lname").innerHTML="Please Enter Last Your Name";
			}
			else
			{
				document.getElementById("lname").innerHTML="";
			}
		}
		function checkemail() 
		{
			var f=document.frm.email.value;
			if (f=="") 
			{
				document.getElementById("email").innerHTML="Please Enter Your email id";
			}
			else
			{
				document.getElementById("email").innerHTML="";
			}
		}
		function checkmobile() 
		{
			var f=document.frm.mobile.value;
			if (f=="") 
			{
				document.getElementById("mobile").innerHTML="Please Enter Your mobile numer";
			}
			else
			{
				document.getElementById("mobile").innerHTML="";
			}
		}
		function checkaddress() 
		{
			var f=document.frm.address.value;
			if (f=="") 
			{
				document.getElementById("address").innerHTML="Please Enter Your address";
			}
			else
			{
				document.getElementById("email").innerHTML="";
			}
		}
		function checkgender() 
		{
			var f=document.frm.gender.value;
			if (f=="") 
			{
				document.getElementById("gender").innerHTML="Please select your gender";
			}
			else
			{
				document.getElementById("gender").innerHTML="";
			}
		}
		function checkresume() 
		{
			var f=document.frm.resume.value;
			if (f=="") 
			{
				document.getElementById("resume").innerHTML="Please attach your resume";
			}
			else
			{
				document.getElementById("resume").innerHTML="";
			}
		}
		function checkbirthdate() 
		{
			var f=document.frm.birthdate.value;
			if (f=="") 
			{
				document.getElementById("birthdate").innerHTML="Please select your birth date";
			}
			else
			{
				document.getElementById("birthdate").innerHTML="";
			}
		}
		function checkPassword()
		{
			var f=document.frm.password.value;
			var reg=/^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
			if(f=="")
			{
				document.getElementById("password").innerHTML="Please Enter Password";
			}
			
			else if(!reg.test(f))
			{
				document.getElementById("password").innerHTML="Min 1 Upper, Min 1 Lower, Digit & Special Character(8,15)";
			}
			else
			{
				document.getElementById("password").innerHTML="";
			}
		}
		function checkCPassword() 
		{
			var p1=document.frm.password.value;
			var p2=document.frm.cpassword.value;
			if (p2=="") 
			{
				document.getElementById("cpassword").innerHTML="Please Enter comfirm password";
			}
			else if(p1!=p2)
			{
				document.getElementById("cpassword").innerHTML="Password & confirm password does not matched";
			}
			else
			{
				document.getElementById("cpassword").innerHTML="";
			}
		}