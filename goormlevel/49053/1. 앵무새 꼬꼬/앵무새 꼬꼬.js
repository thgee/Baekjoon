// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let input = []
	for await (const line of rl) {
		input.push(line)
		rl.close();
	}
	
	const isMo = (x)=>{
		
		x = x.toLowerCase()
		if(x === 'a' || x === 'i'||x === 'o'||x === 'e'||x === 'u') return true;
		return false
	}
	let res = [];
	const N = Number(input.shift())
	arr = input.map(it=>it.trim());
	for(let x of arr){
		tmp = ""
		for(let i = 0; i < x.length; i++){
			if(isMo(x[i])) tmp += x[i];
		}
		if(tmp === "") res.push("???")
		else res.push(tmp)
	}
	console.log(res.join("\n"))
	
	process.exit();
})();
