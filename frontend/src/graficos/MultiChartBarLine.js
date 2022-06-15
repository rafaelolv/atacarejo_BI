import { React } from 'react';
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

import style from '../style/GraficosDashboard.module.css';

ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip
);


const MultiChartBarLine = () => {

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const data = {
        labels: labels,
        datasets: [
            {
                type: 'line',
                label: 'Dataset 1',
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 2,
                fill: false,
                data: [65, 70, 89, 22, 80, 81, 90],
            },
            {
                type: 'bar',
                label: 'Dataset 2',
                backgroundColor: 'rgb(75, 192, 192)',
                data: [65, 59, 80, 81, 56, 26, 72],
                borderColor: 'white',
                borderWidth: 2,
            },
        ],
    };

    return (
        <div className={style.divGraficoMultiChartBarLine} >
            <Chart type='bar' data={data} />
        </div>
    );
}

export default MultiChartBarLine;