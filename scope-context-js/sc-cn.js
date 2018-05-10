// var scopeandconetxt{

// 	tittle : 'what is the difference between scope snd conetext in OOJS'
// 	author : 'Smruti ranjan UI Developer'
// };



// Details of Scope and context :
// Below with Example :

// Example - #1
// scope example
var model = 'BMW'; // gobal Varialble

function_name = function () {
	return model;
};
console.log(function_name()); // return the Model of the name variable holding the value (BMW)
document.write(function_name() + '<br>');

// Example - #2

modelname = function () {
	var model = 'Audi A7'  //private Variable
};
modelname();
console.log(modelname()); //  Result of the example 2 is (undefiend)
document.write(modelname() + '<br>');


// Example - #3

modelname = function () {
	var model = 'Audi A8'
	return model;

};
console.log(modelname()); //  Result of the example 3 is holding the value (model)
document.write(modelname() + '<br>');

//Example - #4


modelnamenew = function () {
	var modelnameNew = 'Mercedes-Benz C -class';
	return modelnameNew;
};

console.log(modelnamenew()); // modelname is showing what the variable is holdig the value.
document.write(modelnamenew() + '<br>');

//example #5 

// context of JS example
//obj - #1
var mercedesBenz = {
    Company :'MercedesBenz',
	saymodel : function(){
		console.log(this.Company);
		 alert(this.Company);
	}
}
//obj - #2
var jaguar = {
    Company :'jaguar',
	saymodel : function(){
			console.log(this.Company);
			 alert(this.Company);
	}
}
mercedesBenz.saymodel();  // refer to #1

jaguar.saymodel(); // refer to #2

mercedesBenz.saymodel.apply(jaguar); // we use apply method to bind the obj also


