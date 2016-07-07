//letter.js should control whether or not a letter appears as a "_" or as itself on-screen.

var Word = function(){
	this.setCharAt = function(str, index, chr){
		if (index > str.length - 1) return str;
    return str.substr(0, index) + chr + str.substr(index + 1);
	}
}