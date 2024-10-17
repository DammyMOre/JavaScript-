const person = {
	firstName : "Chinedu",
	lastName : "Ade",
	age : 17,
	hobbies : ["football", "eating", "singing"]
};
person.sex = "female";

console.log(person)
console.log(person.firstName,)
console.log(person.firstName,person.lastName,)
console.log(person.hobbies[2] +  " " + person.hobbies[0] )








const library = {
	id : "sem|005|02",
	available : true,
	count : 10,
	Name : "Holy Spirit",
	author : "Grace"
};
console.log(library)







let balance = 200;
let amount = 1000;

if(amount<balance){
	console.log("Insufficient fund");
}else{
	console.log("Thank you for banking with us");

}





(amount<balance)?console.log("Insufficient fund"):console.log("Thank you for banking with us")

let result = (amount<balance)?console.log("Insufficient fund"):console.log("Thank you for banking with us")

