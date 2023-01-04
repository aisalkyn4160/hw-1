import './App.css'
import Expenses from './components/Expenses'


function App(){
    const expense = [
        {
          id: 'el1',
          title: 'Toilet Paper',
          date: new Date(2023, 4, 12),
          amount: 1.5
        },
        {
          id: 'el2',
          title: 'Car Insurance',
          date: new Date(2023, 2, 20),
          amount: 1.5
        },
      ]
    return (
        <div className = 'App'>
            <Expenses expense = {expense}/>
        </div>
    )
}

export default App