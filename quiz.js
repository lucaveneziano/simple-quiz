const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var first_val, second_val, operator;

const question1 = () => {
  return new Promise((resolve, reject) => {
    rl.question('First Value? ', (answer) => {
		first_val = answer;
        resolve()
    })
  })
}

const question2 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Second Value?  ', (answer) => {
		second_val = answer;
        resolve()
    })
  })
}

const question3 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Operator(+, -, *)?  ', (answer) => {
		operator = answer;
        resolve()
    })
  })
}

console.log(`- Simple Calcuator -\n`);
console.log(`please input 'q' if you want to close\n`);


const main = async () => {
	while(1){
	  await question1()
	  if(first_val == 'q')
	  	break;
	  await question2()
	  if(second_val == 'q')
	  	break;
	  await question3()
	  if(operator == 'q')
	  	break;

	  first_val = parseInt(first_val);
	  second_val = parseInt(second_val);
	  if(operator == '+')
	  	console.log(first_val + second_val);
	  else if(operator == '-')
	  	console.log(first_val - second_val);
	 else if(operator == '*')
	  	console.log(first_val * second_val);
	   
	}
  	rl.close()
}

main()