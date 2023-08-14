document.getElementById('login-btn').addEventListener('click', function(){
                    //    fetching user mail
       const mailField = document.getElementById('user-mail')
       const email = mailField.value
       console.log(email);

   //    fetching user password
       const passwordField = document.getElementById('user-pass')
       const pass = passwordField.value
       console.log(pass);

    //    validation checking

    if( email === "jamildx4@gmail.com" && pass === 'password'){
       window.location.href = 'bank.html'
    }
    else{
       return alert('Invalid User Name Or Password')
    }

})