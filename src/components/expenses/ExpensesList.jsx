import { ExpenseItem } from "./ExpenseItem"
import './ExpensesList.css'

// компнент, который возвращает нам отфильтрованные массивы при выполнении условий
const ExpensesList = (props) => {
    
    // Если длина массива равно к нулью и значение селекта не равно к строке 'All', то возвращается просто текст
    if (props.filteredExpenses.length === 0 && props.filteredYear !== 'All') {
        return <h2 className='expenses-list__fallback'>No Expenses Found</h2>
    }

    // Если длина массива больше нулья, выводим список данных
    if (props.filteredExpenses.length > 0) {
        return <ul className='expenses-list'>
            {props.filteredExpenses.map(expense => (
                <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
            ))}
        </ul>
    }

    // Если значение селекта равно к строке 'All', то выводим весь список
    if (props.filteredYear === 'All') {
        return (
            <ul className='expenses-list'>
                {props.expenses.map(expense => {
                    return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
                })}
            </ul>
        )
    }
}

export default ExpensesList