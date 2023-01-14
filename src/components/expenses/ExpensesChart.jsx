import Chart from "../chart/Chart"

// создаем компонента для отображения диаграммы 
const ExpensesChart = (props) => {
    //  создаем массив 
    const chartDataPoints = [
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Apr', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Okt', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0}
    ]

    //  с помощью цикла перебираем значение расходов по месяцам для отображения в диаграмме
    for(const expense of props.filteredExpenses) {
        const currentMonth = expense.date.getMonth() 
        chartDataPoints[currentMonth].value += expense.amount
    }
    return <Chart dataPoints = {chartDataPoints}/>
}

export default ExpensesChart