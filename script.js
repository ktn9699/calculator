let displayScreen = document.querySelector('.display');
let previouScreen = document.querySelector('.previousScreen');
let numKeys = document.querySelectorAll('.num');
let operateKeys = document.querySelectorAll('.symbol');
let equal = document.querySelector('#equal')
let clear = document.querySelector('#AC')
let negative = document.querySelector('#plusminus')
let backspace = document.querySelector('#backspace')
let decimal = document.querySelector('#decimal')
let operationSymbol = '';
let firstNum = ''
let secondNum = '';
let tempHolder = '';
let result = 0;
let total = ''

// 
for (let i = 0; i < numKeys.length; i++) {    
    numKeys[i].addEventListener('click', () => {
        if (tempHolder === '0') {
            tempHolder = ''; 
        }
           tempHolder += numKeys[i].textContent;
            displayScreen.innerHTML = tempHolder;
        })
        }
       
        for (let i = 0; i < operateKeys.length; i++) {
            operateKeys[i].addEventListener('click', () => { 
                if (firstNum == '') {
                    firstNum = tempHolder;
                    tempHolder = '';
                }
        if (firstNum !== '' && operationSymbol !== '') {
            secondNum = tempHolder;
        
        }
       
        if (firstNum !== '' && operationSymbol !== '' && secondNum !== ''){
            displayScreen.textContent= 0;
            operate(firstNum,secondNum, operationSymbol)
            firstNum = total;   
            secondNum = '';
            tempHolder = '0';
        }       
        
        if (firstNum == '' && operationSymbol !== '' && secondNum !== ''){
            firstNum = tempHolder;
        }       
        operationSymbol = operateKeys[i].innerHTML;
            previouScreen.textContent = firstNum+ " " + operationSymbol;   

        if (firstNum == '0') {
                previouScreen.textContent = '';
            }
    })}
            clear.addEventListener('click', () => {
                firstNum = '';
                secondNum = ''
                tempHolder = '';
                total = '0';
                    displayScreen.textContent = total;
                    firstNum = total;
                    previouScreen.textContent = '';})
 
              decimal.addEventListener('click', () => {
                if (!tempHolder.includes(".")) {
                    tempHolder += '.'; }
            })
        
            negative.addEventListener('click', () => {
                if (tempHolder !== '') {
                    tempHolder = parseFloat(tempHolder) * -1;
                    displayScreen.textContent = tempHolder;
                }});

            equal.addEventListener('click', () => {
                if (tempHolder != '' && firstNum !== '') {
                    secondNum = tempHolder;
                    operate(firstNum, secondNum, operationSymbol);
                } 
            } )
            backspace.addEventListener('click', () => {
                    tempHolder = tempHolder.slice(0, -1);
                    displayScreen.textContent = tempHolder;
                }
            )
    
            function operate(firstNum,secondNum, operationSymbol){
                firstNum = parseFloat(firstNum);
                secondNum = parseFloat(secondNum);
            
                switch(operationSymbol) {
                    case '+': 
                    result = firstNum + secondNum;
                    break;

                    case '-':
                    result = firstNum - secondNum;
                    break;
                    case '*':
                    result = firstNum * secondNum;
                        break;
                    case '/':
                    result = firstNum / secondNum;
                        break;
                    }
                    total = result.toString()
                    displayScreen.textContent =  total;
                  
            }

