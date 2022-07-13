let obj = {num:2}
let sample = function(a,b,c){
	return this.num + a + b + c;
}

console.log(sample.call(obj,1,2,3));