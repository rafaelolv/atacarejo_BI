import { RETRIEVE_PRODUTOS, ACCESS_DATA, ALL_PRODUCTS, ACCESS_ABSOLUTE_VALUES_PRODUCTS } from "./actionTypes/produtoActionType";

import vendaProdutos from './../dadosSimulados/produtos';

export const retrieveProdutos = () => async (dispatch) => {
    try {
        console.log("entrou aqui no action de produtos???");
        // const res = RelatorioSatisfacaoService.getAll();

        const res = await JSON.parse(vendaProdutos);

        const { meses } = res;

        dispatch({
            type: RETRIEVE_PRODUTOS,
            payload: meses,
        });
    } catch (err) {
        console.log(err);
    }
};

export const retrieveAllProducts = () => async (dispatch) => {
    try {
        console.log("entrou aqui no action retrieveAllProducts produto???");

        const res = await JSON.parse(vendaProdutos);
        const { meses } = res;
        
        let allProducts = [];
        
        meses[0].categorias.forEach((categoria) => {            
            allProducts = [...allProducts, ...categoria.produtos];            
        });

        console.log(Object.values(allProducts));

        dispatch({
            type: ALL_PRODUCTS,
            payload: allProducts,
        });
    } catch (err) {
        console.log("Erro no access data " + err)
    }
}

// export const generatesAbsoluteValue = (meses) => {
//     let productAbsoluteValues = [];
//     meses.forEach((mes) => {
//         productAbsoluteValues = [];
//     })
// }

// gera array com todos os produtos de todos os meses
export const generatesAbsoluteValue = (meses) => {
    var i, categoria;
    let productAbsoluteValues = [];
    for(i = 0; i < meses.length; i++) {
        categoria = meses.categoria[i];

        categoria.produtos.forEach((produto) => {
            productAbsoluteValues = [...productAbsoluteValues, {nome: produto.produto, valorAbsoluto: produto.valorVenda - produto.valorCompra }]
        })
    }
    console.log(Object.values(productAbsoluteValues));
    return productAbsoluteValues;
}

// gera um array com os produtos de um mês escolhido


// gera um array


// var i, features;
// for (i = 0; i < locationObject.features.length; i++) {

//     features = locationObject.features[i];
//     document.write(features.geometry.coordinates + " ");
//     console.log(features.geometry.coordinates);
// }