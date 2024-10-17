console.log("objects	properties")
count=0;
let details = {
		name:  "Alice", 
		age:     30,
		city:  "wonderland",	
		};

for (let keys in details){
	count++
	}
console.log(count);