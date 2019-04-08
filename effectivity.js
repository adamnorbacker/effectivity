//Variable declarations
var d = document;

class effectivity {
//Click handler
  static click(s, s1) {
  if(isClassOrId(s) !== false)
  isClassOrId(s).addEventListener("click", function(_this) {
    s1(this);
  });
  }
 
//Validate if email  
 static validateEmail(email){
	var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	return re.test(String(email).toLowerCase());
}

//Get Query String
static getQueryString(qs){
	return new RegExp('[?&]' + qs).test(location.search);
}
//Get current height of element
static getHeight(s){
	return isClassOrId(s).offsetHeight;
}

//Get current width of element
static getWidth(s){
	return isClassOrId(s).offsetWidth;
}
//Hide element
static hide(s){
	isClassOrId(s).style.display = "none";
}

//show element
static show(s){
	isClassOrId(s).style.display = "block";
}
}

//getID function
function getId(id){
	return d.getElementById(id);
}

//getClass function
function getClass(c){
	return d.querySelector('.'+c);
}

function isClassOrId(s){
	if(!isEmpty(getId(s))){
		return getId(s);
	} else if(!isEmpty(getClass(s))){
		return getClass(s);
	} else {
		// console.error("No selector found");
		return false;
	}
}

//Check if variable is empty.
function isEmpty(v){
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
