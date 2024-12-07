//variables to store balance total, income total and expenses total
let balanceTotal = 0;
let incTotal = 0;
let expTotal = 0;

//NOTES:
//add an income -> balance increases, income total increases, expense total neutral
//add an expense -> balance decreases, expense total increases, income total neutral
//remove an income -> balance decreases, income total decreases, expense total neutral
//remove an expense -> balance increases, expense total decreases, income total neutral

//function to increase total balance and update it on screen
function increaseBal(amount) {
    balanceTotal += amount;
    const balanceHead = document.getElementById('balance');
    balanceHead.textContent = `Balance: $${balanceTotal}`;
}

//function to increase total income or total expenses and update it on screen
function increaseTtl(amount, incOrExp) {
    if (incOrExp === 'income') {
        incTotal += amount;
        let incHeader = document.getElementById('income-header');
        incHeader.textContent = `Income Total: $${incTotal}`;
        console.log(incHeader.textContent);
    } else {
        expTotal += amount;
        let expHeader = document.getElementById('expense-header');
        expHeader.textContent = `Expenses Total: $${expTotal}`;
        console.log(expHeader.textContent);
    }
}

//function to reduce total balance and update it on screem
function reduceBal(amount) {
    balanceTotal -= amount;
    const balanceHead = document.getElementById('balance');
    balanceHead.textContent = `Balance: $${balanceTotal}`;
}

//function to reduce total income or total expenses and update it on screen
function reduceTtl(amount, amtChangeClass) {
    if (amtChangeClass === 'income') {
        incTotal -= amount;
        let incHeader = document.getElementById('income-header');
        incHeader.textContent = `Income Total: $${incTotal}`;
        console.log(incHeader.textContent);
    } else {
        expTotal -= amount;
        let expHeader = document.getElementById('expense-header');
        expHeader.textContent = `Expenses Total: $${expTotal}`;
        console.log(expHeader.textContent);
    }
}

//TO DO: make 'balance' change color accordingly if neg, pos or neutral

//when user clicks the 'remove' button of a transaction line item, 
//that item is deleted and then depending on if the item is an income 
//or expense then the balance, income total and expenses total update (or don't) accordingly.
//example- user removes an expense line item, then balance increases, expenses total decreases
//and income total stays the same.
const transList = document.getElementById('budget-list');
transList.addEventListener('click',(e) => {
    if (e.target.className === 'remove') {
        const lineItem = e.target.parentElement;
        const amtChangeStr = e.target.previousElementSibling.textContent;
        const amtChange = Number(amtChangeStr.slice(1));
        const amtChangeClass = e.target.previousElementSibling.className;

        if (amtChangeClass === 'income') {
            reduceBal(amtChange);
            reduceTtl(amtChange, amtChangeClass);
        } else {
            increaseBal(amtChange);
            reduceTtl(amtChange, amtChangeClass);
        }

        lineItem.remove();

    }
});

//add transaction function. this is a function that adds the user's 
//inputted data (transaction description and $ amount) from the form fields 
//to 'transactions'. also depending on if the transaction is an income or expense,
//the balance, income total and expense total update (or don't) accordingly.
const addTrans = function(e) {
    e.preventDefault();
    
    const inputTrans = document.getElementById('transaction');
    const inputTransText = inputTrans.value;
    const spanTrans = document.createElement('span');
    spanTrans.textContent = `${inputTransText}: `;

    const inputAmt = document.getElementById('amount');
    const inputAmtText = Number(inputAmt.value);
    const spanAmt = document.createElement('span');
    spanAmt.textContent = `$${inputAmtText} `;

    let incOrExp = document.getElementById('income-expense-choice').value;
    console.log(incOrExp);

    if (incOrExp === 'choose') {
        alert('Please choose either Income or Expense');
    } else {
        if (incOrExp === 'income') {
            spanAmt.className = 'income';
            spanTrans.className = 'income';
            const li = document.createElement('li');
            li.appendChild(spanTrans);
            li.appendChild(spanAmt);
            transList.appendChild(li);
            const newRemoveBtn = document.createElement('a');
            newRemoveBtn.textContent = 'Remove';
            newRemoveBtn.className = 'remove';
            li.appendChild(newRemoveBtn);
            increaseBal(inputAmtText);
            increaseTtl(inputAmtText, incOrExp);
        } else {
            spanAmt.className = 'expense';
            spanTrans.className = 'expense';
            const li = document.createElement('li');
            li.appendChild(spanTrans);
            li.appendChild(spanAmt);
            transList.appendChild(li);
            const newRemoveBtn = document.createElement('a');
            newRemoveBtn.textContent = 'Remove';
            newRemoveBtn.className = 'remove';
            li.appendChild(newRemoveBtn);
            reduceBal(inputAmtText);
            increaseTtl(inputAmtText, incOrExp);
        }

        inputTrans.value = '';
        inputAmt.value = '';
        //TO DO: figure out how to clear 'income or expense' form input
    }

}

//TO DO: the below code works, but is it better to add the eventlistener to parent element instead? 
//what would that do?

//when user clicks the 'add' button, the 'add transaction function' ('addTrans') is called 
const addBtn = document.querySelector('a.add-item');
addBtn.addEventListener('click', (e)=> {
    addTrans(e);
});

//API fetch
fetch("https://zenquotes.io/api/random")
    .then(function(response) {
    return response.json();
    })
    .then(function(data) {
    console.log(data);
    console.log(data[0].q);
    console.log(data[0].h);
    console.log(data[0].a);
    const quote = data[0].h;
    const divQuote = document.getElementById('quote');
    divQuote.innerHTML = quote;
    });

//remove quote from page after 5 seconds
const elQuote = document.getElementById('quote');
const removeQuote = () => {
    elQuote.remove();
}
setTimeout(removeQuote, 7000);