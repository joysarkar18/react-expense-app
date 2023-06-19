import "./App.css";
import ExpenseItem from "./componants/ExpenseItem";
import NewExpense from "./componants/expenseInput/NewExpense";

function App() {
  const expenses = [
    { date: new Date(2023, 3, 13), name: "Food", amount: 300 },
    { date: new Date(2023, 3, 5), name: "Marker", amount: 206 },
    { date: new Date(2023, 3, 11), name: "Traveling", amount: 130 },
    { date: new Date(2023, 3, 2), name: "Books", amount: 500 },
  ];

  const onSaveExpenseHandaler = (entered)=>{
    const expenseData = {
      ...entered,
      id:Math.random().toString()
    } 
    console.log(expenseData)
;    
  }

  return (
    <div className="appdiv">
      <NewExpense onSaveExpense={onSaveExpenseHandaler}></NewExpense>
      <div className="expenses">
        <ExpenseItem
          name={expenses[0].name}
          amount={expenses[0].amount}
          date={expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
          name={expenses[1].name}
          amount={expenses[1].amount}
          date={expenses[1].date}
        ></ExpenseItem>
        <ExpenseItem
          name={expenses[2].name}
          amount={expenses[2].amount}
          date={expenses[2].date}
        ></ExpenseItem>
        <ExpenseItem
          name={expenses[3].name}
          amount={expenses[3].amount}
          date={expenses[3].date}
        ></ExpenseItem>
      </div>
    </div>
  );
}

export default App;
