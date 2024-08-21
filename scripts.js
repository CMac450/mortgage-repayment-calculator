// setCurrency = (string location)  => {
//     switch (currency) {
//         case "United States" :
//         return "$"
//         break;

//         case "United Kingdom" :
//         return "£"
//         break;
//     }
// }

// setCurrency = (bool useAmericanCurrency)  => {
//     return useAmericanCurrency ? "$" : "£";
// }

document.addEventListener('DOMContentLoaded', function () {

    //set display values for results
    const resultsCompleteID = document.getElementById('resultsComplete');
    const resultsEmptyID = document.getElementById('resultsEmpty');

    resultsEmptyID.style.display = 'flex';
    resultsCompleteID.style.display = 'none';

    let inputBoxElementID;
    let amount = document.getElementById('amountInput').value;
    let term = document.getElementById('termInput').value;
    let interestRate = document.getElementById('interestInput').value;

    // Add event listener to amount input and set error state
    // and message when value is empty
    const amountElementID = document.getElementById('amountInput');
    const amountErrorElementID = document.getElementById('amountError');
    amountElementID.addEventListener('input', function () {
        inputBoxElementID = document.getElementById('amountInputBox');
        
        if (amountElementID.value.trim() === '') {
            amountErrorElementID.style.display = 'inline';
            inputBoxElementID.classList.add('invalid')
        } else {
            amountErrorElementID.style.display = 'none';
            inputBoxElementID.classList.remove('invalid')
        }

        amount = amountElementID.value;
    });

    // Add event listener to term input and set error state
    // and message when value is empty
    const termElementID = document.getElementById('termInput');
    const termErrorElementID = document.getElementById('termError');
    termElementID.addEventListener('input', function () {
        inputBoxElementID = document.getElementById('termInputBox');
        
        if (termElementID.value.trim() === '') {
            termErrorElementID.style.display = 'inline';
            inputBoxElementID.classList.add('invalid')
        } else {
            termErrorElementID.style.display = 'none';
            inputBoxElementID.classList.remove('invalid')
        }

        term = termElementID.value;
    });

    // Add event listener to interest input and set error state
    // and message when value is empty
    const interestElementID = document.getElementById('interestInput');
    const interestErrorElementID = document.getElementById('interestError');
    interestElementID.addEventListener('input', function () {
        inputBoxElementID = document.getElementById('interestInputBox');
        
        if (interestElementID.value.trim() === '') {
            interestErrorElementID.style.display = 'inline';
            inputBoxElementID.classList.add('invalid')
        } else {
            interestErrorElementID.style.display = 'none';
            inputBoxElementID.classList.remove('invalid')
        }

        interestRate = interestElementID.value;
    });

    // Make isRepayment type the automatic radio button selection
    let isRepaymentType = true;
    let isInterestOnlyType;

    const radioBtns = document.querySelectorAll('input[name="typeRadioBtn"]');
    // Loop through radio buttons to get selected choice
    // and set boolean values
    radioBtns.forEach(radio => {
        radio.addEventListener('change', function () {

            if (this.value == 'option1') {
                isRepaymentType = true;
            } else {
                isRepaymentType = false;
            }

            if(this.value == 'option2'){
                isInterestOnlyType = true;
            } else {
                isInterestOnlyType = false;
            }

        })
    })

    // Add event listener to 'Calculate Repayments' button
    // and call different calculation methods based on the mortgage type selection
    const calcButtonElementID = document.getElementById('calcBtn');
    calcButtonElementID.addEventListener('click', function () {
        
        if(isInterestOnlyType) {
            calculateInterestOnlyRepayment(interestRate, amount, term);
        }
        
        if(isRepaymentType) {
            calculateRepayment(interestRate, amount, term);
        }

        //show results panels
        resultsEmptyID.style.display = 'none';
        resultsCompleteID.style.display = 'flex';

    });

    // Clear inputs 
    const clearAllElementID = document.getElementById('clearAll');
    clearAllElementID.addEventListener('click', function () {
        amountElementID.value = "";
        termElementID.value = "";
        interestElementID.value = "";
    });
});

// Calculation for interest only repayments
calculateInterestOnlyRepayment = (i, a, t) => {
    const annualRate = i / 100;
    const numMonthsTotal = t * 12;

    const monthlyPaymentAmount = ((a * annualRate) / 12);
    const repaymentOverTerm = (monthlyPaymentAmount * numMonthsTotal).toFixed(2);

    console.log(`monthlyPaymentAmount1: ${monthlyPaymentAmount}`);
    console.log(`repaymentOverTerm1: ${repaymentOverTerm}`);

    // Format the price above to USD using the locale, style, and currency.
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    //show text
    const monthlyPaymentElementID = document.getElementById('monthlyPayment');
    const totalPaymentElementID = document.getElementById('totalPayment');

    monthlyPaymentElementID.textContent = USDollar.format(monthlyPaymentAmount);
    totalPaymentElementID.textContent = USDollar.format(repaymentOverTerm);

}

// Calculation based off of Amortization formula
calculateRepayment = (i, a, t) => {
    const annualRate = i / 100;
    const numMonthsTotal = t * 12;
    const monthlyRate = (annualRate / 12);

    const monthlyPaymentAmount = (a * (monthlyRate * (1 + monthlyRate) ** numMonthsTotal) / (((1 + monthlyRate) ** numMonthsTotal) -1));
    const repaymentOverTerm = (monthlyPaymentAmount * numMonthsTotal);

    
    console.log(`monthlyPaymentAmount2: ${monthlyPaymentAmount}`);
    console.log(`repaymentOverTerm2: ${repaymentOverTerm}`);

    // Format the price above to USD using the locale, style, and currency.
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    //show text
    const monthlyPaymentElementID = document.getElementById('monthlyPayment');
    const totalPaymentElementID = document.getElementById('totalPayment');

    monthlyPaymentElementID.textContent = USDollar.format(monthlyPaymentAmount);
    totalPaymentElementID.textContent = USDollar.format(repaymentOverTerm);

};