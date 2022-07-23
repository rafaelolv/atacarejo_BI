import React, {useEffect, useState } from 'react';
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

import { getMetaMes } from './../actions/produtoAction';

import DoughnutAndamentoPorcentagem from './DoughnutAndamentoPorcentagem';

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

const MultiChartBarLine = ({ allProducts }) => {

    const [meta, setMeta] = useState(0);
    const [valoresTotaisMeses, setValoresTotaisMeses] = useState([]);

    useEffect(() => {
        console.log("-------Entrou no useEffect de MultiChartBarLine??????");
        console.log(Object.values(allProducts));
        gerarValorTotalMes(allProducts);
        getMetaVendaProdutosByMes(11, allProducts);
    }, []);


    // 
    const gerarDadosTotalMeses = () => {

    }

    // 
    const gerarValorTotalMes = (allProducts) => {

        console.log("gerarValorTotalMes ");
        console.log(Object.values(allProducts));

        let valoresTotaisPorMes = [];

        for (let i = 0; i <= 11; i++) {
            let total = null;
            allProducts.forEach(produto => {
                if(produto.data.getMonth() == i) {
                    total = total + produto.valorTotal;
                }
            })

            if(total != null) {
                valoresTotaisPorMes.push(total);
            }
        }
        setValoresTotaisMeses(valoresTotaisPorMes);
    }

    // 
    const gerarGraficoEmDiasByMes = () => {
        
    }


    // 
    const gerarLabelsMes = (allProducts) => {

    }

    console.log(Object.values(allProducts));

    // 
    const getMetaVendaProdutosByMes = (mes, allProducts) => {
        let metaRetornada = getMetaMes(mes, allProducts);
        setMeta(metaRetornada);
    }


    const labels = ['Outubro', 'Novembro', 'Dezembro'];

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Valores de compra e venda dos produtos no mês!',
            },
        },
        scales: {
            y: {
                max: 50000,
                min: 0,
                // ticks: {
                //     stepSize: 0.5
                // }
            }
        },
    };
    
    const data = {
        labels: labels,
        datasets: [
            {
                type: 'line',
                label: 'Dataset 1',
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 2,
                fill: false,
                data: [31000, 19000, 40000],
            },
            {
                type: 'bar',
                label: 'Dataset 2',
                backgroundColor: 'rgb(75, 192, 192)',
                data: valoresTotaisMeses,
                borderColor: 'white',
                borderWidth: 2,
            },
        ],
    };

    return (
        <>
            <div className={style.divGraficoMultiChartBarLine} >
                <Chart type='bar' options={options} data={data} />
            </div>
            <DoughnutAndamentoPorcentagem produtosCompraVenda={valoresTotaisMeses} metaMes={meta}/>
        </>
    );
}

export default MultiChartBarLine;