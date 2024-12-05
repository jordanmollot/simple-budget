let balanceTotal = 0;
// function updateBalance(amount, incExp) {
//     if (incExp === 'income') {
//         balanceTotal += amount;
//         const balanceHead = document.getElementById('balance');
//         balanceHead.textContent = `Balance: $${balanceTotal}`;
//     } else {
//         // balanceTotal -= amount;
//         // const balanceHead = document.getElementById('balance');
//         // balanceHead.textContent = `Balance: $${balanceTotal}`;
//         reduceBalance(amount);
//     }
// }

function increaseBalance(amount) {
    balanceTotal += amount;
    const balanceHead = document.getElementById('balance');
    balanceHead.textContent = `Balance: $${balanceTotal}`;
}

function reduceBalance(amount) {
    balanceTotal -= amount;
    const balanceHead = document.getElementById('balance');
    balanceHead.textContent = `Balance: $${balanceTotal}`;
}

const transList = document.getElementById('budget-list');
transList.addEventListener('click',(e) => {
    if (e.target.className === 'remove') {
        const lineItem = e.target.parentElement;
        
        const amtChangeStr = e.target.previousElementSibling.textContent;
        const amtChange = Number(amtChangeStr.slice(1));
        const amtChangeClass = e.target.previousElementSibling.className;

        if (amtChangeClass === 'income') {
            reduceBalance(amtChange);
        } else {
            increaseBalance(amtChange);
        }

        lineItem.remove();

    }
});

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
    // spanAmt.id = 'amountLineItm';

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
            increaseBalance(inputAmtText);
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
            reduceBalance(inputAmtText);
        }

        // updateBalance(inputAmtText, incOrExp);

        // const li = document.createElement('li');
        // li.appendChild(spanTrans);
        // li.appendChild(spanAmt);
        // transList.appendChild(li);
        // const newRemoveBtn = document.createElement('a');
        // newRemoveBtn.textContent = 'Remove';
        // newRemoveBtn.className = 'remove';
        // li.appendChild(newRemoveBtn);

        inputTrans.value = '';
        inputAmt.value = '';
    }

}

//The below code works, but maybe add the eventlistener to parent element instead
const addBtn = document.querySelector('a.add-item');
addBtn.addEventListener('click', (e)=> {
    addTrans(e);
});
