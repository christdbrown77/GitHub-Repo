console.log(`Sucessfully connected to JS file`);





document.querySelector('#calc').addEventListener('click', function (){
    const num1 = parseFloat(document.querySelector('#first').value);
    const num2 = parseFloat(document.querySelector('#second').value);
    const op = document.querySelector('#operator').value;
        
    function add(x, y){
        return x + y;
    }

    function subtract(x, y){
        return x - y;
    }

    function multiply(x, y){
        return x * y;
    }

    function divide(x, y){
        return x / y;
    }

    if(op === '+'){
        const ans = add(num1, num2);
        console.log(ans);
        document.querySelector('#answer').innerHTML = ans;
    } 
    else if(op ==='*'){
        const ans = multiply(num1, num2);
        console.log(ans);
    } 
    else if(op ==='-'){
        const ans = subtract(num1, num2);
        console.log(ans);
    } 
    else{
        const ans = divide(num1, num2);
        console.log(ans);
        
    }
    
})