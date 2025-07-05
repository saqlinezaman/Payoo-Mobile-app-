document.getElementById('cash-in-btn').
    addEventListener('click',function(event){
        event.preventDefault();
    
    // get money

        const addMoneyInput = document.getElementById('input-cash-in').value;
        console.log(addMoneyInput);

    // get pin

        const pinNumberInput = document.getElementById('input-pin-number').value;
        console.log(pinNumberInput);

    // validate pin number

        if(pinNumberInput === '1234'){
            console.log('adding your money in your account');

    // get the current balance 
        
        const balance = document.getElementById('balance').innerText;
            console.log(balance);
    
    // sum the cash in money
            
            const addMoneyNumber = parseFloat(addMoneyInput);
            const balanceNumber = parseFloat(balance);
            const newBalance = addMoneyNumber + balanceNumber ;
            console.log(newBalance); 

    // update the amount 
            document.getElementById('balance').innerText = newBalance;

        }
        else{
            alert('Cash in faild');
        }

    });