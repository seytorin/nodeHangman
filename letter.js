var letter = function(let){
	this.charac = let;
	this.appear = false;
	this.letterRender = function(){
		if(this.appear != false){
			return this.charac;
		}
		else{
			return "-";
		}
	};
};


module.exports = letter;