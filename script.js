'strict mode';



const buttonLogin = document.querySelector(".button-login");
const inputNumber = document.querySelector('.input-number');
const password = document.querySelector('.password');
const opacity = document.querySelector('.section-opacity');
const text = document.querySelector('.text3');
const flexContainer = document.querySelector('.flex-container3');
const spanContainer = document.querySelector('.span-container');
const div1 = document.querySelector('.div1');
const text5 = document.querySelector('.text5');
const text8 = document.querySelector('.text8');
const balancee = document.querySelector('.balance');
const sendButton = document.querySelector('.send-button');
const inputAmount = document.querySelector('.input-amount');
const inputAccount = document.querySelector('.input-account');
const contain1 = document.getElementById('contain1');
const contain2 = document.getElementById('contain2');
const inputownerAccount = document.querySelector(".input-ownerAccount");


const act = localStorage.getItem('currentAccount')
const parsedAcct = JSON.parse(act)     //the parse is turn the string to an object or readable object
   accounts.find((x) => {

    text.textContent = `Welcome back, ${parsedAcct.owner.split(' ')[0]}`
text5.textContent = ` ACCOUNT # ${parsedAcct.accountNumber} `

  });                                              
  

  
const withDraw = () => {

  parsedAcct.movements.forEach   ((x)  => {
                                                  // toFixed(2)/it add decimal to the number at the ending
  const isDebit = (x < 0) 

contain2.innerHTML += 

  `
      <div class="cont1">
      <svg class="${isDebit? 'svgicon6' : 'svgicon5'}">
          <use xlink:href="/sprite.svg#icon-arrow-down2">
          </use>
      </svg>
  <span> 
  <p class="acc-name">${parsedAcct.owner}</p>
  <p class="acc-date">May 24, 2024</p>
  </span>
      <p class="${isDebit? 'acc-debit' : 'acc-credit'}">${x.toFixed(2)}</p>
      </div>
      ` 
     
  })
  
}

withDraw();




const totalBal =  () =>  {
const balance = parsedAcct.movements.filter ((x) => 

   // const formattedAmount = x.toFixed(2); 
     x > 0 
)
.reduce((x, y) => x + y, 0);
balancee.textContent =  `# ${balance.toFixed(2)}`;

}

totalBal ();

sendButton.addEventListener('click', function (ab) {
    ab.preventDefault();
    const amount = Number(inputAmount.value);
    account = Number(inputAccount.value);
    recieverAcc = accounts.find((acc) =>  
    acc.accountNumber && acc.accountNumber === account
    )
    
      // inputAccount.value = inputAccount.value = '';
      if (amount > 0 && recieverAcc  && recieverAcc?.accountNumber 
        !== parsedAcct.accountNumber) {
            console.log('Transfer valid')
    
            parsedAcct.movements.push(-amount);
        recieverAcc.movements.push(amount);

    
        updateUI();
        }
        
    });

// && parsedAcct.balance >= amount

const updateUI = () => {
    withDraw();
    totalBal ();
   
}





