import './Expenses.css'
import Card from '../ui/Card'
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

// компонентная функция, которая возвращает компоненты внуртри оболочки Card
const Expenses = (props) => {
 
  // хук, который хранит состояние селекта
  const [filteredYear, setFilteredYear] = useState('2023')

  // функция, которая передается как пропс и вызывается в дочернем компоненте для передачи значения из селекта
  const selectYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }
  // функция которая передается как пропс вызывается в дочернем компоненте для получения отфильтрованных данных по годам
  const filteredExpenses = props.expenses.filter(expense => {
    // с помощью метода фильтр отфильтровываем элементы массива. Так как элмент дата, он возвращает число, поэтому превращаем его в строку для выполнения условия
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <Card className='expenses'>
      <ExpensesChart expenses={props.expenses} filteredExpenses={filteredExpenses}/>
      <ExpensesFilter onSelect={selectYearHandler} selected={filteredYear} />
      <ExpensesList filteredExpenses={filteredExpenses} filteredYear={filteredYear} expenses={props.expenses} />
    </Card>
  )
}

export default Expenses
