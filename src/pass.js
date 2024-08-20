
let loginPassword = document.getElementById('password');
const sectionDiv = document.getElementById('section-div');
const sectionButton = document.querySelector('.section-button');
const phoneNumber = document.getElementById('phonenumber');



let currentAccount;

sectionButton.addEventListener('click', function() {
  currentAccount = accounts.find((x) => 
    (x.phoneNumber === Number(phoneNumber.value))
) 
console.log(currentAccount)
 if ( currentAccount.pin === Number(loginPassword.value) )  {
    localStorage.setItem('currentAccount', JSON.stringify(currentAccount))

    window.location.replace('/main.html')
    
} 

});


/*

   let isPinCorrect = false;

sectionButton.addEventListener('click', function () {
    for (const acc of accounts) {
        if ( acc.pin === Number(loginPassword.value)) {
            isPinCorrect = true;
           
            break;

        }
       
    }

      
 if ( isPinCorrect) {
   
    window.location.replace('/main.html')
   
} else {
   alert('wrong password')
}


});

*/