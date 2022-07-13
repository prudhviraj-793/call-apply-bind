let obj = {num:2}
let sample = function(a,b,c){
	return this.num + a + b + c;
}
let bound = sample.bind(obj);
console.log(bound(1,2,3));