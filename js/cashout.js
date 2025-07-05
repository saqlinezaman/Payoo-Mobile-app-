document.getElementById('cash-out-btn').
    addEventListener('click',function(event){
        event.preventDefault();

    const cashout = document.getElementById('input-cash-out').value;
    const cashoutPin = document.getElementById('input-cash-out-pin').value;
        
    
    // check pin
    
    if(cashoutPin === '1234' ){

        const balance = document.getElementById('balance').innerText;
           
            const cashOutMoneyNumber = parseFloat(cashout);
            const balanceNumber = parseFloat(balance);
            const minus = balanceNumber - cashOutMoneyNumber;
        
            document.getElementById('balance').innerText = minus;

        }
        else{
            alert('Wrong Phone Number or Pin');
        }
        
    
    });