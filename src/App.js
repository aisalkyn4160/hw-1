import './App.css'
import Expenses from './components/expenses/Expenses'
import NewExpense from './components/newExpenses/NewExpense'
import { useState } from 'react';


// Данные с бэкенда
const initData = [
    {
      id: 'el1',
      title: 'Toilet Paper',
      date: new Date(2023, 4, 12),
      amount: 1.5
    },
    {
      id: 'el2',
      title: 'Car Insurance',
      date: new Date(2024, 3, 20),
      amount: 100
    },
    {
      id: 'el3',
      title: 'Car Insurance',
      date: new Date(2025, 6, 20),
      amount: 300
    },
    {
      id: 'el4',
      title: 'Car Insurance',
      date: new Date(2025, 7, 20),
      amount: 400
    },
  ]


// основной функциональный компонент, который вызывает основные компоненты
function App(){

// хук, который хранит состояние данных из бекэнда
  const [expenses, setExpenses] = useState(initData)

  // Функция, которая добавляет новые данные из формы в список
    const getExpenseHandler = (expenseItem) =>{
      setExpenses((prevState) => {
        return [expenseItem, ...prevState]
      })
      // setExpenses([expenseItem, ...expenses])
    }
    return (
        <div className = 'App'>
          <NewExpense onGet = {getExpenseHandler}/>
          <Expenses expenses = {expenses}/>
        </div>
    )
}

export default App