import ExpenseDate from './ExpenseDate';
import './ExpensesItem.css'

export function ExpenseItem(props) {   // ExpenseItem = 

    const expenseTitle = props.title  
    const expenseAmount = props.amount 
    
    return (
      <div className="expense-item">
        <ExpenseDate date = {props.date}/>
        <h2 className="expense-item__description">{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    );
}
