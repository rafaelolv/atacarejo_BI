import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import GraficoBarraTripla from '../components/GraficoBarraTripla';
import Placar from '../components/Placar';
import GraficoBarraProdutos from './../graficos/GraficoBarraProdutos';
import GraficoProdutosLucroAbsolutoRelativo from './../graficos/GraficoProdutosLucroAbsolutoRelativo';
import MultiChartBarLine from './../graficos/MultiChartBarLine';

// import { retrieveRelatoriosSatisfacao } from "../actions/relatorioSatisfacaoAction";
import { retrieveAllProducts, generateAbsoluteValuesByMonth } from './../actions/produtoAction';

import style from '../style/Dashboard.module.css';
import styleGraficos from '../style/GraficosDashboard.module.css';


const Dashboard = () => {

    const [produtos, setProdutos] = useState([]);
    const [produtosValorAbsoluto, setProdutosValorAbsoluto] = useState([]);
    // const relatorios = useSelector(state => state.relatorios);
    const listaProdutos = useSelector(state => state.produtos);
    const dispatch = useDispatch();
    
    useEffect(() => {
        console.log("-------Entrou no useEffect de produto?????????");
        dispatch(retrieveAllProducts());
        console.log("- - -useEffect de produto? " + listaProdutos);
        setProdutos(listaProdutos);
        console.log("produtos " + produtos);
    }, []);
    

    return (
        <div className={style.dashBoard}>
            <header className={style.header}>
                <h1>Gráfico barra triplaaaaaaaa</h1>
            </header>
            <div>
                <section className={style.sectionProdutos}>
                    <Placar />
                    <GraficoBarraProdutos produtosCompraVenda={listaProdutos} />
                    <GraficoProdutosLucroAbsolutoRelativo mesesProdutos={listaProdutos} />
                    <MultiChartBarLine allProducts={listaProdutos} />
                </section>
                <section className={style.sectionAvaliacoes}>
                    <div>Algum grafico relacionado a relatoriosatisfacao</div>
                    <GraficoBarraTripla />
                </section>
            </div>
        </div>
    )
}

export default Dashboard;