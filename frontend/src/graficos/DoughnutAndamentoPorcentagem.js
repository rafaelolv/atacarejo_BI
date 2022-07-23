import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import style from '../style/GraficosDashboard.module.css';

ChartJS.register(ArcElement, Tooltip, Legend);


const DoughnutAndamentoPorcentagem = ({ produtosCompraVenda, metaMes }) => {

    const [andamentoPorcentagemMetaMes, setAndamentoPorcentagemMetaMes] = useState([]);

    useEffect(() => {
        console.log("-------Entrou no useEffect de BarraAndamentoPorcentagem????????");
        calculaAndamentoMeta(produtosCompraVenda, metaMes)
        // o  que eu coloco no lugar desses
    }, []);


    // Fazer algo para quando a meta já tiver sido atingida, ou seja, quando já tiver dado mais de 100% no andamentoPorcentagemMetaMes, quando da mais, a barra nao aparece.
    // 
    const calculaAndamentoMeta = (lista, meta) => {
        const porcentagemMetaMes = [];
        let metaMesValorPorcentagemAlcancada = 0;
        let metaMesValorPorcentagemRestante = 0;

        // Nesse caso, por enquanto, esta sendo pego o valor alcançado no mês, correspondente ao último mês, que esta na posição 2 do array lista  
        let metaValorR$AlcancadoMes = lista[2];  
        metaMesValorPorcentagemAlcancada = Math.floor(lista[2]/meta * 100);
        porcentagemMetaMes.push(metaMesValorPorcentagemAlcancada.toFixed(2));
        metaMesValorPorcentagemRestante = (100 - porcentagemMetaMes[0]);
        porcentagemMetaMes.push(metaMesValorPorcentagemRestante.toFixed(2));

        setAndamentoPorcentagemMetaMes(porcentagemMetaMes);
        console.log("metaValorR$AlcancadoMes = " + metaValorR$AlcancadoMes + " - " + "metaMesValorPorcentagemAlcancada = " + metaMesValorPorcentagemAlcancada + " - " + "metaMesValorPorcentagemRestante = " + metaMesValorPorcentagemRestante);
    }

    const labels = ["Meta"];

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Meta a ser batida no mês',
                data: andamentoPorcentagemMetaMes,
                backgroundColor: [
                    'rgb(54, 162, 235)',
                    'rgb(255, 99, 132)'
                ],
                hoverOffset: 4
            }
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Andamento do mês',
            },
        }
    };

    return (
        <div className={style.divGraficoDoughnutAndamentoPorcentagem}>
            <div className={style.divVisorPorcentagemCentroDoughnut}>
                <p>{andamentoPorcentagemMetaMes[0]}</p>
            </div>
            <Doughnut options={options} data={data} />
        </div>
    )
}

export default DoughnutAndamentoPorcentagem;