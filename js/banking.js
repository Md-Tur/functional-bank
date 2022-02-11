// common function for getting deposit & withdraw input value

function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmount = inputField.value;
    const totalAmount = parseFloat(inputAmount);

    // clear deposit input field

    inputField.value = '';

    return totalAmount;
}

// common function for updating deposit & withdraw total value

function updateTotalField(totalField, amount) {
    const totalElement = document.getElementById(totalField);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}

// common function for updating main balance after deposit & withdraw

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}

// deposit part including btn & input

document.getElementById('deposit-button').addEventListener('click', function () {
    /* 
    const depostiInput = document.getElementById('deposit-input');
    const depositAmountText = depostiInput.value;
    const depositAmount = parseFloat(depositAmountText); 
    */

    // get & update current deposit

    /*     
        const depositTotal = document.getElementById('deposit-total');
        const depositTotaltext = depositTotal.innerText;
        const previousDepositTotal = parseFloat(depositTotaltext);
        depositTotal.innerText = previousDepositTotal + depositAmount; 
    */

    // update balance

    /* 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount; 
    */
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }

});

// withdraw part including btn & input

document.getElementById('withdraw-button').addEventListener('click', function () {
    /*     
        const withdrawInput = document.getElementById('withdraw-input');
        const withdrawAmountText = withdrawInput.value;
        const withdrawAmount = parseFloat(withdrawAmountText); 
    */

    // get & update withdraw total

    /*     
        const withdrawTotal = document.getElementById('withdraw-total');
        const previousWithdrawTotalText = withdrawTotal.innerText;
        const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
        withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;
    */

    // update balance after withdraw

    /*     
        const balanceTotal = document.getElementById('balance-total');
        const balanceTotalText = balanceTotal.innerText;
        const previousBalanceTotal = parseFloat(balanceTotalText);
        balanceTotal.innerText = previousBalanceTotal - withdrawAmount; 
    */

    /* 
        // clear withdraw input field
    
        withdrawInput.value = ''; 
    */

    const withdrawAmount = getInputValue('withdraw-input');
    if (withdrawAmount > 0) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }

})