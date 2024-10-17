console.log("keys			values")
let total = 0;
let expenses = {

		gloceries: 150, 
		dinningOut:100,
		transportation:50,
		entertainment:80,
};

for (let keys in expenses){
	total += expenses[keys];
	console.log(`${keys}:		${expenses[keys]}`);;
	
	}
	console.log(total)