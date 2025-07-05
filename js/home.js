document.getElementById('cash-in-btn').
    addEventListener('click',function(event){
        event.preventDefault();
    
    // get money

        const addMoneyInput = document.getElementById('input-cash-in').value;
        console.log(addMoneyInput);

    // get pin

        const pinNumberInput = document.getElementById('input-pin-number').value;
        console.log(pinNumberInput);

    });