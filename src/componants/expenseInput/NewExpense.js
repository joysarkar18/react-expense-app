import "./newExpense.css";
const NewExpense = () => {
    const onAmountChangeListener = (event)=>{
        console.log(event.target.value)
    }
     const onDetailsChangeListener = (event) => {
        console.log(event.target.value)
     }
     const onDateChangeListener = (event) => {
        console.log(event.target.value)
     }

     const onSubmit = (event)=>{
        event.preventDefault();
     }
  return (
    <div className="new-expense" >
      <form className="new-expense__controls">
        <div className="new-expense__control">
          <label>Enter Amount</label>
          <input type="number" onChange={onAmountChangeListener} />
        </div>
        <div className="new-expense__control">
          <label>Enter Details</label>
          <input type="text" onChange={onDetailsChangeListener} />
        </div>
        <div className="new-expense__control">
          <label>Enter Date</label>
          <input type="date" onChange={onDateChangeListener} />
        </div>
     
        <button type="submit" onClick={onSubmit} >SUBMIT</button>
        
        
      </form>
    </div>
  );
};

export default NewExpense;
