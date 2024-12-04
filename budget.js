const transactionsList = document.getElementById('budget-list');

transactionsList.addEventListener('click',(e) => {
    if (e.target.className === 'remove') {
        const lineItem = e.target.parentElement;
        lineItem.remove();
    }
});

const addTransaction = function(e) {
    e.preventDefault();
    const input = document.getElementById('transaction');
    // console.log(input);
    const inputText = input.value;
    const span = document.createElement('span');
    span.textContent = inputText;
    const li = document.createElement('li');
    li.appendChild(span);
    transactionsList.appendChild(li);
}

//The below code works, but baybe add the eventlistener to parent element instead
const addBtn = document.querySelector('a.add-item');
addBtn.addEventListener('click', (e)=> {
    addTransaction(e);
});
