document.getElementById('cash-in-btn').
    addEventListener('click',function(event){
        event.preventDefault();
    // get input value

    const addMoneyInput = getInputValueById('input-cash-in');

    // get pin

    const getPinNumber = getInputValueById('input-pin-number');

    // validate pin number

        if(getPinNumber === 1234){

    // get the current balance 
        
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance + addMoneyInput ; 
           
        document.getElementById('account-balance').innerText = newBalance;
        const p = document.createElement('p');
        p.innerText = `Cash in ${addMoneyInput} Tk. New balance is ${newBalance}`;

            document.getElementById('transaction-container').appendChild(p);
            
        }
        else{
            alert('Cash in faild');
        }

    });