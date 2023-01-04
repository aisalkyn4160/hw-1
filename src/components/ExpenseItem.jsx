import ExpenseDate from './ExpenseDate';
import './ExpensesItem.css'

export function ExpenseItem(props) {
    const expenseTitle = props.title  //"Car Insurance"
    const expenseAmount = props.amount //200
    return (
      <div className="expense-item">
        <ExpenseDate date = {props.date}/>
        <h2 className="expense-item__description">{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    );
}

// export default ExpenseItem