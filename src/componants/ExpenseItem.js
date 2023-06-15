import "./ExpenseItem.css"
function ExpenseItem(props){
    console.log(props.date)
    return (
        <div className="expense-item">
            <div>{props.date.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{props.name}</h2>
                <div className="expense-item__price">Rs - {props.amount}</div>
            </div>
        </div>

    );
}

export default ExpenseItem;