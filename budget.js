let balanceTotal = 0;
function updateBalance(amount) {
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
        
        const amtRemoveStr = e.target.previousElementSibling.textContent;
        const amtRemove = Number(amtRemoveStr.slice(1));
        console.log(amtRemove);
        reduceBalance(amtRemove);

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
    spanAmt.id = 'amountLineItm';


    const li = document.createElement('li');
    li.appendChild(spanTrans);
    li.appendChild(spanAmt);
    transList.appendChild(li);
    const newRemoveBtn = document.createElement('a');
    newRemoveBtn.textContent = 'Remove';
    newRemoveBtn.className = 'remove';
    li.appendChild(newRemoveBtn);

    updateBalance(inputAmtText);

    inputTrans.value = '';
    inputAmt.value = '';

    // const balanceHead = document.getElementById('balance');
    // balanceHead.textContent = `Balance: $${balanceTotal}`;

}

//The below code works, but maybe add the eventlistener to parent element instead
const addBtn = document.querySelector('a.add-item');
addBtn.addEventListener('click', (e)=> {
    addTrans(e);
});
