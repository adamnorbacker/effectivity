//Variable declarations
var d = document;

//getID function
function getId(id){
	return d.getElementById(id);
}

//getClass function
function getClass(c){
	return d.getElementsByClassName(c);
}

function isClassOrId(s){
	if(!isEmpty(getId(s))){
		return getId(s);
	} elseif(!isEmpty(getClass(s))){
		return getClass(s);
	} else {
		console.error("No selector found");
		return false;
	}
}

//Check if variable is empty.
function isEmpty (v){
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
 function validateEmail(email){
	var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	return re.test(String(email).toLowerCase());
}

//Get Query String
function getQueryString(qs){
	var fQ = new RegExp('[?&]' + qs).test(location.search);
	return fQ;
}

//Get current height of element
function getHeight(s){
	if(isClassOrId(s) !== false){
		isClassOrId(s).offsetHeight;
	} else {
		console.error("No selector found to calculate height");
		return false;
	}
	
}

//Get current width of element
function getWidth(s){
	if(isClassOrId(s) !== false){
		isClassOrId(s).offsetWidth;
	} else {
		console.error("No selector found to calculate width");
		return false;
	}
}

//Hide element
function hide(s){
	if(isClassOrId(s) !== false){
		isClassOrId(s).style.display = "none";
	} else {
		console.error("No selector found to hide");
		return false;
	}
    
}

//Hide element
function show(s){
	if(isClassOrId(s) !== false){
		isClassOrId(s).style.display = "block";
	} else {
		console.error("No selector found to show");
		return false;
	} 
}
