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
numKeys.forEach((element) => element.addEventListener('click', () => {
    if (tempHolder === '0') {
        tempHolder = ''; 
    }
       tempHolder += element.textContent;
        displayScreen.innerHTML = tempHolder;
    }))
    
operateKeys.forEach((element) => element.addEventListener('click', () => { 
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
    tempHolder = '';
}       

if (firstNum == '' && operationSymbol !== '' && secondNum !== '' && result != Infinity){
    firstNum = tempHolder;
}       
operationSymbol = element.innerHTML;
    previouScreen.textContent = firstNum+ " " + operationSymbol;   


}))
            
clear.addEventListener('click', () => {
                    flush ();
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
                    previouScreen.textContent = total+ " " + operationSymbol;   
                } 
                if (result === Infinity || result === -Infinity) {
                    flush();
                }
            } 
            )
backspace.addEventListener('click', () => {
                    tempHolder = tempHolder.slice(0, -1);
                    displayScreen.textContent = tempHolder;
                }
            )
            function flush () {
                firstNum = '';
                secondNum = '';
                tempHolder = '';
                total = '';
            }
            
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
                    case '%':
                    result = firstNum % secondNum;
                            break;
                        }
                        if (isNaN(result) || result == Infinity || result == -Infinity) {
                            displayScreen.textContent =  "Can't divide by 0!"
                            previouScreen.textContent =  ""
                        }
                    else {
                        total = Number((result).toFixed(4)).toString()
                        displayScreen.textContent =  total;
                      
                    }    
<<<<<<< HEAD
            }
=======
            }
>>>>>>> c5cf7003e87897d8f5a6acb38989be840dc328cc
