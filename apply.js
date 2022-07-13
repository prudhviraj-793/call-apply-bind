let obj = {num:2}
let sample = function(a,b,c){
	return this.num + a + b + c;
}
let arr= [1,2,3];
console.log(sample.apply(obj,arr));