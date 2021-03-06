//letter.js should control whether or not a letter appears as a "_" or as itself on-screen.

// var Word = function(){
// 	this.setCharAt = function(str, index, chr){
// 		if (index > str.length - 1) return str;
//     return str.substr(0, index) + chr + str.substr(index + 1);
// 	}
// }

var Letter = function(let) {
	//make a charac property and set it to what you think makes 
	this.charac = let;
	//make an appear property and set it to what makes sense
	this.appear = false;
	//make a letterRender property and set it to a function that does what you think makes sense
	this.letterRender = function(){
		if(this.appear == true){
			return this.charac;
		}
		else{
			return "_ ";
		}

	}
	
};

//export the Letter constructor here

module.exports = Letter;