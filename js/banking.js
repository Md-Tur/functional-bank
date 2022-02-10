// deposit part including btn & input

function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmount = inputField.value;
    const totalAmount = parseFloat(inputAmount);

    // clear deposit input field

    inputField.value = '';

    return totalAmount;
}

document.getElementById('deposit-button').addEventListener('click', function () {
    /* const depostiInput = document.getElementById('deposit-input');
    const depositAmountText = depostiInput.value;
    const depositAmount = parseFloat(depositAmountText); */
    const depositAmount = getInputValue('deposit-input');

    // get current deposit

    const depositTotal = document.getElementById('deposit-total');
    const depositTotaltext = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotaltext);
    depositTotal.innerText = previousDepositTotal + depositAmount;

    // update balance

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount;

});

// withdraw part including btn & input

document.getElementById('withdraw-button').addEventListener('click', function () {
    /*     const withdrawInput = document.getElementById('withdraw-input');
        const withdrawAmountText = withdrawInput.value;
        const withdrawAmount = parseFloat(withdrawAmountText); */
    const withdrawAmount = getInputValue('withdraw-input');

    // update withdraw total

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

    // update balance after withdraw

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
    /* 
        // clear withdraw input field
    
        withdrawInput.value = ''; */
})