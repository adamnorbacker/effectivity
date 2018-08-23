//Variable declarations
var d = document;

//getID function
function getId(id) {
	return d.getElementById(id);
}

//getClass function
function getClass(c) {
	return d.getElementsByClassName(c);
}

//Check if variable is empty.
function isEmpty (v) {
	var k;
	if (v === "" || v === 0 || v === "0" || v === null || v === false || v === undefined ) {
	 return true;
	}
	if (typeof v == 'object') {
	 for (k in v) {
	  return false;
	 }
	 return true;
	}
	return false;
   }
   
   
 //Validate if email  
 function validateEmail(email) {
	var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	return re.test(String(email).toLowerCase());
}

//Get Query String
function getQueryString(qs){
var fQ = new RegExp('[?&]' + qs).test(location.search);
return fQ;
}
