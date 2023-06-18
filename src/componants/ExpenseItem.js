import "./ExpenseItem.css";
function ExpenseItem(props) {
  const formatted = Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "long",
  }).format(props.date);
  const formattedYear = Intl.DateTimeFormat("en-US", {
    year: "numeric",
  }).format(props.date);

  return (
    <div className="expense-item">
      <div className="expense-item__date">
        <div>{formatted}</div>
        <div>{formattedYear}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.name}</h2>
        <div onClick={()=>{console.log("fucked")}} className="expense-item__price">Rs - {props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
