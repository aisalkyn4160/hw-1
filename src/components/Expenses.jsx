import {ExpenseItem} from './ExpenseItem';

function Expenses(props) {
  const exp = props.expense 
  return (
    <div>
      <ExpenseItem title={exp[0].title} date = {exp[0].date} amount = {exp[0].amount}/>
      <ExpenseItem title={exp[1].title} date = {exp[1].date} amount = {exp[1].amount}/>
    </div>
  );
}

export default Expenses;
