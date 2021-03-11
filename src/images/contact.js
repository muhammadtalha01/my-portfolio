//  function validate() {
// 	for (var i = 0; i < 5; i++)
// 	{
// 		var a = document.contactform.element[i];
// 		if (a.value=="") {
// 			a.placeholder = 'Please Enter a value';
// 			var b = document.getElementById("errordis");
// 			b.innerHTML= a.name + " can not be empty.";
// 		}
// 		else
// 		{
// 			a.innerHTML= "Message sent successfully";
// 		}
// 	}
// }

function validate(){
	if (document.contactform.fname.value=="") {
		document.contactform.fname.value= "Please Enter Your Name";
		if (document.contactform.email.value=="") {
		document.contactform.email.value= "Please Enter Your Name";
	}
	}else{
			var err = document.getElementById("errordis");
			err.innerHTML("Message Sent  Successfully");
	}
	
}