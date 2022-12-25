var arrNumbers = []; 

function addNumber(currentNumber) {
  arrNumbers.push(currentNumber.value);  
  currentNumber.value = "";
}


function sumInput() {
arrNumbers.sort();
alert(arrNumbers);
let sum = 0;
for (let i = 0; i < arrNumbers.length; i++){
  sum = sum + Number(arrNumbers[i]);
} 
alert(sum);
arrNumbers = [];
}
