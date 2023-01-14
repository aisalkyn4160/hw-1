import './Chart.css'
import ChartBar from './ChartBar'


// компонент, который возвращает месяцы по диаграмме
const Chart = (props) => {

// функция, которая перебирает все значения из массива с помощью метода map
const chartDataPointsValues = props.dataPoints.map(data => data.value)

// с помощью этого метода получаем максимальное значение из массива
const totalMax = Math.max(...chartDataPointsValues)


    return (
        <div className='chart'>
            {props.dataPoints.map(data => (
                <ChartBar key = {data.label} 
                label = {data.label} 
                value ={data.value} 
                maxValue = {totalMax}
                />
            ))}
            
        </div>
    )
}

export default Chart