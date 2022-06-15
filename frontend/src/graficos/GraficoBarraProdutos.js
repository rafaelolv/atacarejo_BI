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

const GraficoBarraProdutos = ({ produtosCompraVenda }) => {

    const [produtosMes, setProdutosMes] = useState([]);
   
    console.log(Array.isArray(produtosCompraVenda));
    // console.log(Object.values(produtosCompraVenda));

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Bar Chart',
            },
        },
        scales: {
            y: {
                // max: 100,
                min: 0,
                // ticks: {
                //     stepSize: 0.5
                // }
            }
        },
    };

    const labels = produtosCompraVenda && produtosCompraVenda.map((obj) => {
        return obj.produto;
    })

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

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    return (
        <div className={style.divGraficoProdutosCompraVenda}>
            <Bar options={options} data={data} />
        </div>
    )
}

export default GraficoBarraProdutos;