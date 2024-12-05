const transList = document.getElementById('budget-list');

transList.addEventListener('click',(e) => {
    if (e.target.className === 'remove') {
        const lineItem = e.target.parentElement;
        lineItem.remove();
        //Deduct $amount from balance
    }
});

let balanceTotal = 0;
function updateBalance(amount) {
    balanceTotal += amount;
}

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

    const li = document.createElement('li');
    li.appendChild(spanTrans);
    li.appendChild(spanAmt);
    transList.appendChild(li);
    const newRemoveBtn = document.createElement('a');
    newRemoveBtn.textContent = 'Remove';
    newRemoveBtn.className = 'remove';
    li.appendChild(newRemoveBtn);

    updateBalance(inputAmtText);
    const balanceHead = document.getElementById('balance');
    balanceHead.textContent = `Balance: $${balanceTotal}`;

}

//The below code works, but maybe add the eventlistener to parent element instead
const addBtn = document.querySelector('a.add-item');
addBtn.addEventListener('click', (e)=> {
    addTrans(e);
});
