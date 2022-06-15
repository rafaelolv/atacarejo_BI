import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import GraficoBarraTripla from '../components/GraficoBarraTripla';
import Placar from '../components/Placar';
import GraficoBarraProdutos from './../graficos/GraficoBarraProdutos';
// import GraficoProdutosLucroAbsolutoRelativo from './../graficos/GraficoBarraProdutos';
import MultiChartBarLine from './../graficos/MultiChartBarLine';

// import { retrieveRelatoriosSatisfacao } from "../actions/relatorioSatisfacaoAction";
import { retrieveAllProducts } from './../actions/produtoAction';

import style from '../style/Dashboard.module.css';
import styleGraficos from '../style/GraficosDashboard.module.css';


const Dashboard = () => {

    // const relatorios = useSelector(state => state.relatorios);
    const produtos = useSelector(state => state.produtos);
    console.log("e isso aqui?? " + produtos);
    console.log(Object.values(produtos));
    const dispatch = useDispatch();
    
    useEffect(() => {
        console.log("-------Entrou no useEffect de produto??????");
        dispatch(retrieveAllProducts());
    }, []);
    

    return (
        <div className={style.dashBoard}>
            <header className={style.header}>
                <h1>Gráfico barra triplaaaaaaaa</h1>
            </header>
            <div>
                <section className={style.sectionProdutos}>
                    <Placar />
                    <GraficoBarraProdutos produtosCompraVenda={produtos} />

                    {/* <div className={styleGraficos.divGraficoProdutosLucroAbsolutoRelativo}>
                        <GraficoProdutosLucroAbsolutoRelativo />
                    </div> */}
                    <MultiChartBarLine />
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