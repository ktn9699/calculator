let displayScreen = document.querySelector('.display');
let previouScreen = document.querySelector('.previousScreen');
let numKeys = document.querySelectorAll('.num');
let operateKeys = document.querySelectorAll('.symbol');
let equal = document.querySelector('#equal')
let clear = document.querySelector('#AC')
let negative = document.querySelector('#plusminus')
let operator = '';
let decimal = document.querySelector('#decimal')
let current = '';
let previous = '';
let result;

// By using the Array.forEach() method, we go through all of the classes for the 
// number keys and add an eventListener to all of them. When a number is clicked, 
// it will be added to the ongoing display total. The display totaled is then converted
// into a float for uses of operation. 

numKeys.forEach((element) => element.addEventListener('click', () => {
if (current === '0') {
    current = '';
}
    current += element.textContent;
    displayScreen.innerHTML = current;
}))

// Getting the symbol that is clicked by going through all of the symbols. 
// When a symbol is clicked, the input will be inside of 'currentKey'. 
function getOperator (element) {
    operator = element;
    previous = current;
    current = '';
}
operateKeys.forEach((element) => element.addEventListener('click', () => {
   
    operator = element.textContent;
    previous = current;
    current = '';
    
if (operator.textContent !== '') {
    previouScreen.textContent = previous + ' ' + operator;
    displayScreen.textContent = previous;
}
  
}))


function operate(current,previous,operator) {
   
    if (operator === '+'){
    result = add(parseFloat(current),parseFloat(previous));
    }
    else if (operator === '-') {
      result = subtract(parseFloat(current),parseFloat(previous));
    }
    else if (operator === '/') {
        result = divide(parseFloat(current),parseFloat(previous));
      }
      else if (operator === '*') {
        result = multiply(parseFloat(current),parseFloat(previous));
      }
      else if (operator === '%') {
        result = modulus(parseFloat(current),parseFloat(previous));
      }
     
    return result;
    }

    equal.addEventListener('click', () => {
        operate(current,previous,operator);
        displayScreen.textContent = result;
        current = result;
        previouScreen.textContent = current;
      
    }
        )

    clear.addEventListener('click', () => {
        current = '';
        previous = ''
        result = '0'
            displayScreen.textContent = result;
            current = result;
            previouScreen.textContent = '';
          
        }
            )

            function dot() {
              if (!current.includes(".")) {
                  current += '.';
              }
              
              }
              
              negative.addEventListener('click', () => {
                  if (current !== '') {
                      current = parseFloat(current) * -1;
                      displayScreen.textContent = current;
                  }
              });
              
              decimal.addEventListener('click', () => {
              dot()
              })

function add(a,b) {
    return b+a;
}
function subtract(a,b) {
    return b-a;
}
function divide(a,b) {
    return b/a
}
function multiply(a,b) {
    return b*a;
}
function modulus(a,b) {
    return b%a;
}


