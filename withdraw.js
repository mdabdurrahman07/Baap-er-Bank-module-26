// step 1
document.getElementById('withdraw-btn').addEventListener('click' , function(){
    // step2
    const withdrawinput = document.getElementById('withdraw-input')
    const newWithdrawal = withdrawinput.value
   
    //  step3
    const previousdraw = document.getElementById('withdraw-ammount')
    const preDrawAmountTotal = previousdraw.innerText
    
    // step4

    const currentWithdrawalAmmount = parseFloat(preDrawAmountTotal) + parseFloat(newWithdrawal)
    
    previousdraw.innerText = currentWithdrawalAmmount;

    // step5
    const previousbalanceDraw = document.getElementById('current-balance')
    const previousBalanceTotalDraw = previousbalanceDraw.innerText

    const totalBalance = parseFloat(previousBalanceTotalDraw) -  parseFloat(newWithdrawal)

    previousbalanceDraw.innerText = totalBalance;

    
    
    // clear deposit input
    withdrawinput.value = "";
})