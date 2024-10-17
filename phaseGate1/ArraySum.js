let arr = [1,2,3,4,5];
let sum = 0;

function getsum( arr ){

for(let count =0;  count<arr.length;count++){
	sum += arr[count]; 

}
return sum;
}

console.log(getsum(arr));