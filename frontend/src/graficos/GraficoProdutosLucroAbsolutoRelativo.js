import React, { useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import style from '../style/GraficosDashboard.module.css';


const GraficoProdutosLucroAbsolutoRelativo = () => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Valor de compra',
                data: produtosCompraVenda.map((obj) => {
                    return obj.valorCompra;
                }),

                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Valor de venda',
                data: produtosCompraVenda.map((obj) => {
                    return obj.valorVenda;
                }),

                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    const state = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'Rainfall',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [65, 59, 80, 81, 56]
            }
        ]
    }

    data={state}
    options={{
        title:{
            display:true,
            text:'Average Rainfall per month',
            fontSize:20
        },
        legend:{
            display:true,
            position:'right'
        }
    }}

    

    return (
        <div className={style.divGraficoProdutosCompraVenda}>
            <Bar options={options} data={data} />
        </div>
    )
}

export default GraficoProdutosLucroAbsolutoRelativo;