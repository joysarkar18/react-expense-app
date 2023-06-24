import "./App.css";
import { useState , useEffect} from "react";
import ExpenseItem from "./componants/ExpenseItem";
import NewExpense from "./componants/expenseInput/NewExpense";
import FilterExpense from "./componants/filterExpenses/FilterExpense";
import LoginScreen from "./componants/LogIn/LoginScreen";
const DUMMY_DATA = [
  { id: "0.9999", date: new Date(2023, 3, 13), title: "Food", amount: 300 },
  { id: "0.9991", date: new Date(2023, 3, 5), title: "Marker", amount: 206 },
  {
    id: "0.9992",
    date: new Date(2023, 3, 11),
    title: "Traveling",
    amount: 130,
  },
  { id: "0.9993", date: new Date(2023, 3, 2), title: "Books", amount: 500 },
];
function App() {
  const [isLogin, setisLogin] = useState(false);
 
  useEffect(()=>{
    const loginornot = localStorage.getItem("isLogin");
    if(loginornot==="1"){
      setisLogin(true);
    }
    
  } , []);

  const logOutHAndeler = ()=>{
    setisLogin(false)
    localStorage.removeItem("isLogin");

  }
  

  const [expenses, setExpenses] = useState(DUMMY_DATA);
  const onSaveExpenseHandaler = (entered) => {
    const expenseData = {
      ...entered,
      id: Math.random().toString(),
    };

    setExpenses((prev) => {
      return [expenseData, ...prev];
    });

    console.log(expenseData);
  };
  const [selectedYear, setSelectedYear] = useState("2023");

  const onSelectedChangeHandaler = (selectedValue) => {
    setSelectedYear(selectedValue);
  };

  return (
    <>
      {!isLogin && <LoginScreen isLogin = {isLogin} setisLogin = {setisLogin}></LoginScreen>}
      {isLogin && <div className="appdiv">
        <NewExpense
          selectedValue={selectedYear}
          onSaveExpense={onSaveExpenseHandaler}
        ></NewExpense>
        <div className="expenses">
          <FilterExpense
            onSelectedChange={onSelectedChangeHandaler}
          ></FilterExpense>
          <button onClick={logOutHAndeler}>logOut</button>
          {expenses.map((expense) => {
            return (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                date={expense.date}
                amount={expense.amount}
              ></ExpenseItem>
            );
          })}
        </div>
      </div>}
    </>
  );
}

export default App;
