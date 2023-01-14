import {useState} from 'react'
import './ExpenseForm.css'

// компонент, который возвращает форму
const ExpenseForm = (props) => {
    // здесь объявлются состояния для инпутов, которые находятся внутри формы
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')

    // функции обработчиков событий для инпутов, которые при нажатии на кнопку меняет значение интпутов
    const titleChangeHandler = (event) => {
        setTitle(event.target.value)
    }

    const amountChangeHandler = (event) => {
        setAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
       setDate(event.target.value)
    }

    // функция обработчика события, которая при нажатии на кнопку добавляет данные из формы в список с помощью пропса 
    const submitHandler = (event) =>{
        // для предотвращения перезагрузки формы
        event.preventDefault()


        const userData = {
            title,
            amount: Number(amount),
            date: new Date(date)
        }


        props.onSaveExpense(userData)

        // обнуляет интпуты после отправки данных 
        setTitle('')
        setDate('')
        setAmount('')
    }


    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input name = 'text' type="text" onChange={titleChangeHandler} value ={title}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input name='amount' type="number" min={'1'} step='1' onChange={amountChangeHandler} value ={amount}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input name='date' type="date" min='2023-01-01' max={'2026-01-01'} onChange={dateChangeHandler} value={date}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expenses</button>
            </div>
        </form>
    )
}

export default ExpenseForm