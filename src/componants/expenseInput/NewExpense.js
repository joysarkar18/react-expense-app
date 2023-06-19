import { useState } from "react";
import "./newExpense.css";
const NewExpense = (props) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const onAmountChangeListener = (event) => {
    console.log(event.target.value);
    setAmount(event.target.value);
  };
  const onDetailsChangeListener = (event) => {
    console.log(event.target.value);
    setTitle(event.target.value);
  };
  const onDateChangeListener = (event) => {
    console.log(event.target.value);
    setDate(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    props.onSaveExpense(expenseData);
    setTitle("");
    setAmount("");
    setDate("");

  };
  return (
    <div className="new-expense">
      <form className="new-expense__controls">
        <div className="new-expense__control">
          <label>Enter Amount</label>
          <input
            type="number"
            value={amount}
            onChange={onAmountChangeListener}
          />
        </div>
        <div className="new-expense__control">
          <label>Enter Details</label>
          <input type="text" value={title} onChange={onDetailsChangeListener} />
        </div>
        <div className="new-expense__control">
          <label>Enter Date</label>
          <input type="date" value={date} onChange={onDateChangeListener} />
        </div>

        <button type="submit" onClick={onSubmit}>
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default NewExpense;
