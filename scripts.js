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


const amountElementID = document.getElementById('amountInput');
const amountErrorElementID = document.getElementById('amountError');

const termElementID = document.getElementById('termInput');
const termErrorElementID = document.getElementById('termError');

const interestElementID = document.getElementById('interestInput');
const interestErrorElementID = document.getElementById('interestError');


handleInput = (elementIDString) => {
    
    let inputBoxElementID;
    let inputValue;

    switch(elementIDString) {
        case 'amountInput':
            inputValue = amountElementID.value;
            inputBoxElementID = document.getElementById('amountInputBox');

            if(inputValue == null || inputValue == "") {
                // show error text if input is empty
                amountErrorElementID.style.display = 'block'

                // add error class to input-box if it's empty
                inputBoxElementID.classList.add('invalid')
            } else {
                amountErrorElementID.style.display = 'none'

                // remove error class from input-box if it's NOT empty
                inputBoxElementID.classList.remove('invalid')
            }
        break;

        case 'termInput':
            inputValue = termElementID.value;
            inputBoxElementID = document.getElementById('termInputBox');

            if(inputValue == null || inputValue == "") {
                // show error text if input is empty
                termErrorElementID.style.display = 'block'

                // add error class to input-box if it's empty
                inputBoxElementID.classList.add('invalid')
            } else {
                termErrorElementID.style.display = 'none'

                // remove error class from input-box if it's NOT empty
                inputBoxElementID.classList.remove('invalid')
            }
        break;

        case 'interestInput':
            inputValue = interestElementID.value;
            inputBoxElementID = document.getElementById('interestInputBox');

            if(inputValue == null || inputValue == "") {
                // show error text if input is empty
                interestErrorElementID.style.display = 'block'

                // add error class to input-box if it's empty
                inputBoxElementID.classList.add('invalid')
            } else {
                interestErrorElementID.style.display = 'none'

                // remove error class from input-box if it's NOT empty
                inputBoxElementID.classList.remove('invalid')
            }
        break;
    }
}