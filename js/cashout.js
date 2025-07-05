document.getElementById('cash-out-btn').
    addEventListener('click',function(event){
        event.preventDefault();

    const cashout = getInputValueById('input-cash-out');
    const pinNumber = getInputValueById('input-cash-out-pin');
    console.log(cashout); 
        
    
    // check pin
    
    if(pinNumber === 1234 ){

        const balance = getTextFieldValueById('account-balance');
            const minus = balance - cashout;
        
            document.getElementById('account-balance').innerText = minus;

        }
        else{
            alert('Wrong Phone Number or Pin');
        }
        
    
    });