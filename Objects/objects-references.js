let myAccount = {
    name: 'Andrew Mead',
    expenses: 0,
    income: 0
}

function addExpense(account, amount) {
    account.expenses = account.expenses + amount
}

function addIncome(account, amount) {
    account.income = account.income + amount
}

function resetAccount(account) {
    account.income = 0;
    account.expenses = 0;
}

function getAccountSummary(account) {
    let balance = account.income - account.expenses;
    return `Account for ${account.name} has $${balance}.  $${account.income} in income.  $${account.expenses}.`
}

console.log(getAccountSummary(myAccount));

addIncome(myAccount, 2000)
addExpense(myAccount, 2.50)
addExpense(myAccount, 160)

console.log(getAccountSummary(myAccount));

resetAccount(myAccount);

console.log(getAccountSummary(myAccount));

