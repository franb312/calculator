function addToInput(number) {
   // const input = document.getElementById('calculator-input');
    input.value += number;
  }

  document.addEventListener('keydown', event => {
    const key = event.key;
    //const input = document.getElementById('calculator-input');
    
    if (/\d/.test(key) && !/^F\d{1,2}$/.test(key)) {
        input.value += key;
      }
    });
  
  
  const input = document.getElementById('calculator-input');

input.disabled = true;

const numberButtons = document.querySelectorAll('.number');
const simbolsButtons = document.querySelectorAll('.simbol')
for (const buttons of simbolsButtons){
    buttons.addEventListener('click', () => {
        input.value+= buttons.dataset.key
    })
}
for (const button of numberButtons) {
  button.addEventListener('click', () => {
    input.value += button.dataset.key;
  });
}


const clearButton = document.querySelector('button[data-key="67"]');

clearButton.addEventListener('click', () => {
  input.value = '';
});

const backspaceButton = document.querySelector('#backspace');

backspaceButton.addEventListener('click', () => {
  input.value = input.value.slice(0, -1);
});


document.addEventListener("keydown", function(event) {
    if (event.key === "Backspace") {
      event.preventDefault(); // prevent default backspace behavior
      input.value = input.value.slice(0, -1); // remove last character
    }
  });


  //const btnPlus = document.querySelector('#btn-plus');
  const btnEqual = document.querySelector('#btn-equal');
  
  //function addNumbers() {
    //let numbers = input.value.split('+');
    //let sum = 0;
    //for (let i = 0; i < numbers.length; i++) {
      //let num = parseFloat(numbers[i]);
      //if (!isNaN(num)) {
      //  sum += num;
      //}
    //}
    //input.value = sum;
  //}
  
  let operator = "+";

const btnPlus = document.querySelector('.simbol[data-key="+"]');
const btnMinus = document.querySelector('.simbol[data-key="-"]');
const btnMultiply = document.querySelector('.simbol[data-key="*"]');
const btnDivision = document.querySelector('.simbol[data-key="/"]')

btnPlus.addEventListener('click', () => {
  operator = "+";
});

btnMinus.addEventListener('click', () => {
  operator = "-";
});

btnMultiply.addEventListener('click', () => {
  operator = "*"
})

btnDivision.addEventListener('click', () => {
  operator = "/"
})

function addNumbers() {
  let inputStr = input.value;
  let operators = inputStr.replace(/[\d.]+/g, '').split('');
  let numbers = inputStr.split(/[-+/*÷]/);

  // Remove any empty strings from the array of numbers
  numbers = numbers.filter((num) => num !== '');

  let result = parseFloat(numbers[0]);

  for (let i = 0; i < operators.length; i++) {
    let num = parseFloat(numbers[i + 1]);
    if (!isNaN(num)) {
      if (operators[i] === "+") {
        result += num;
      } else if (operators[i] === "-") {
        result -= num;
      } else if (operators[i] === "*") {
        result *= num;
      } else if (operators[i] === "/") {
        result /= num;
      }
    }
  }

  input.value = result;
}

btnEqual.addEventListener('click', () => {
  addNumbers();
});


  
  
 // btnEqual.addEventListener('click', () => {
   // addNumbers();
  //});