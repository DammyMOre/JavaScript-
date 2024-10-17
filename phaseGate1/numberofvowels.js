let word = "Hello world";
let counter = 0;
let vowels =["a","e","i","o","u"]

for (let count = 0; count < word.length; count++){
	if(word[count] == "a")
	counter++;
	if(word[count] == "e")
	counter++;
	if(word[count] == "i")
	counter++;
	if(word[count] == "o")
	counter++;
	if(word[count] == "u")
	counter++;
	
}

console.log(counter);
