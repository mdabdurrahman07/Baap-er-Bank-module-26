// step 1
document.getElementById('deposit-btn').addEventListener('click' , function(){
    // step2
    const depoinput = document.getElementById('deposit-input')
    const newDeposit = depoinput.value
   
    //  step3
    const previousdepo = document.getElementById('deposit-amount')
    const preDepoAmountTotal = previousdepo.innerText
    
    // step4

    const currentDepositAmmount = parseFloat(preDepoAmountTotal) + parseFloat(newDeposit)
    
    previousdepo.innerText = currentDepositAmmount;

    // step5
    const previousbalance = document.getElementById('current-balance')
    const previousBalanceTotal = previousbalance.innerText

    const totalBalance = parseFloat(previousBalanceTotal) +  parseFloat(newDeposit)

    previousbalance.innerText = totalBalance;

    
    
    // clear deposit input
    depoinput.value = "";
})









