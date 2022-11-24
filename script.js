function calculateBudget(event){
    event.preventDefault();
    
    try {
        var fullname = document.getElementById("fullname").value;
        var income = document.getElementById("income").value;
        setTimeout(() => {
            console.log(income);
        }, 2000)
        const budgetCategories = {
            "Housing": 25,
            "Food": 15,
            "Saving, Investing & Debt Payments": 10,
            "Transportation": 10,
            "Utilities": 10,
            "Insurance": 10,
            "Medical & Healthcare": 5,
            "Personal Spendng": 5,
            "Recreation & Entertainment": 5,
            "Miscellaneous": 5
        }
        
        var budget = [];
        for (const category in budgetCategories) {
            let percentage = budgetCategories[category];
            let estimatePerCategory = (percentage / 100) * income;
            let arr = [category, percentage, estimatePerCategory];
            budget.push(arr);
            console.log(category + ": " + estimatePerCategory);
        }

        localStorage.setItem("budget", JSON.stringify(budget));

        window.location.href = "http://127.0.0.1:5500/output.html";

    } catch (error) {
       console.log(error);
    }

    alert("Hi " + fullname + ", your budget is ready");
}