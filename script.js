const addButton = document.querySelector(".add-transaction")
const nameInput = document.querySelector(".name-input")
const amountInput = document.querySelector(".amount-input")
const inOrEx = document.querySelector(".in-ex")
const historyContainer = document.querySelector(".history-container")
const totalBalance = document.querySelector(".total-balance")
const incomeBalance = document.querySelector(".income-balance")
const expenseBalance = document.querySelector(".expense-balance")
const container = document.querySelector(".container")

let historyArr = []
let totalIncome = 0
let totalExpense = 0


  
addButton.addEventListener("click", function (e) {
    e.preventDefault()

    if (!nameInput.value & !amountInput.value) {
        container.classList.add("shake")
        setTimeout(() => {
            container.classList.remove("shake")
            }, 1000);
        return
    } else if (!nameInput.value) {
        container.classList.add("shake")
        setTimeout(() => {
            container.classList.remove("shake")
            }, 1000);
        return
    } else if (!amountInput.value) {
        container.classList.add("shake")
        setTimeout(() => {
            container.classList.remove("shake")
            }, 1000);
        return
    }

    historyContainer.innerHTML = ""
    totalIncome = 0
    totalExpense = 0
    



    historyArr.push({
        "name" : nameInput.value.trim(),
        "amount" : amountInput.value,
        "inOrEx" : inOrEx.value

    })

    localStorage.setItem("historyArr", historyArr)
    


    historyArr.forEach(function (history) { 
        

        const historyDiv = document.createElement("div")
        historyDiv.className = "history"
        historyDiv.innerHTML = `<p class="name">${history.name}</p>
        <p class="balance">$${history.amount}</p>`

        if (history.inOrEx == "income") {
            historyDiv.classList.add("income-color")
            totalIncome += Number(history.amount)
            incomeBalance.innerText = `$${totalIncome}`

        } else if (history.inOrEx == "expense") {
            historyDiv.classList.add("expense-color")
            totalExpense += Number(history.amount)
            expenseBalance.innerText = `$${totalExpense}`

        }





        historyContainer.append(historyDiv)
    })

    totalBalance.innerText = `$${totalIncome - totalExpense}`
    nameInput.value = ""
    amountInput.value = ""
})