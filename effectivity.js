//Variable declarations
var d = document;

class effectivity {
//Click handler
  static click(s, s1) {
  isClassOrId(s).addEventListener("click", () => {
    s1();
  });
  }
 
//Validate if email  
 static validateEmail(email){
	var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	return re.test(String(email).toLowerCase());
}

//Get Query String
static getQueryString(qs){
	var fQ = new RegExp('[?&]' + qs).test(location.search);
	return fQ;
}
	//Get current height of element
static getHeight(s){
	if(isClassOrId(s) !== false){
		isClassOrId(s).offsetHeight;
	} else {
		console.error("No selector found to calculate height");
		return false;
	}
	
}

//Get current width of element
static getWidth(s){
	if(isClassOrId(s) !== false){
		isClassOrId(s).offsetWidth;
	} else {
		console.error("No selector found to calculate width");
		return false;
	}
}
	//Hide element
static hide(s){
	if(isClassOrId(s) !== false){
		isClassOrId(s).style.display = "none";
	} else {
		console.error("No selector found to hide");
		return false;
	} 
}

//show element
static show(s){
	if(isClassOrId(s) !== false){
		isClassOrId(s).style.display = "block";
	} else {
		console.error("No selector found to show");
		return false;
	} 
}
}

//getID function
function getId(id){
	return d.getElementById(id);
}

//getClassTag function
function getClassTag(c){
	return d.querySelector(c);
}

function isClassOrId(s){
	if(!isEmpty(getId(s))){
		return getId(s);
	} else if(!isEmpty(getClassTag(s))){
		return getClassTag(s);
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
