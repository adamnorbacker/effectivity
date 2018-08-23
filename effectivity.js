//Variable declarations
var d = document;

//getID function
function getId(id) {
	return d.getElementById(id);
}

//getClass function
function getClass(class) {
	return d.getElementsByClassName(class);
}

//Check if variable is empty.
function isEmpty (emptyvar) {
	var key;
	if (emptyvar === "" || emptyvar === 0 || emptyvar === "0" || emptyvar === null || emptyvar === false || emptyvar === undefined ) {
	 return true;
	}
	if (typeof emptyvar == 'object') {
	 for (key in emptyvar) {
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
function getQueryString(queryString){
var findQuery = new RegExp('[?&]' + queryString).test(location.search);
return findQuery;
}
