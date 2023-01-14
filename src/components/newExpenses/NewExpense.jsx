import ExpenseForm from './ExpenseForm'
import './NewExpense.css'


// родительский компонент формы
const NewExpense = (props) => {

    // функция обработчика события, которая передается как пропс к другой функции
    const saveExpenseHandler = (expenseItem) => {
        // создается ID для новых данных
        const dataWithId = {
            ...expenseItem,
            id: Math.random().toString()
        }
        // пропс, который получает новые данные с ID
        props.onGet(dataWithId)
    }

    return <div className='new-expense'>
        <ExpenseForm onSaveExpense = {saveExpenseHandler}/>
    </div>
}

export default NewExpense