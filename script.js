function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let str=s2[0];
	let foundword=false;
	for(let i=0;i<s1.length;i++){
		if(s1[i]===str){
			foundword=true;
			return i;
		}
	}
	if(foundword===false){
		return -1;
	}
}
// Please do not change the code below
const s1 = prompt("Enter s1:"); 
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
