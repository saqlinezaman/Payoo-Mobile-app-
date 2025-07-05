document.getElementById('btn-login').
    addEventListener('click',function(event){

        // remove loading issue

        event.preventDefault();

        // get the phone number

        const phoneNumber = document.getElementById('phone-number').value;
        const pinNumber = document.getElementById('pin-number').value;
        
        // validate
        if(phoneNumber === '112233' && pinNumber === '1234' ){
            console.log('you are logged in');
            window.location.href = ('/home.html');
        }
        else{
            alert('Wrong Phone Number or Pin');
        }

    });