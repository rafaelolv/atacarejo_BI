import { RETRIEVE_PRODUTOS, ACCESS_DATA, ALL_PRODUCTS, ACCESS_ABSOLUTE_VALUES_PRODUCTS } from "./actionTypes/produtoActionType";

import vendaProdutos from './../dadosSimulados/produtos';

// 
// export const retrieveProdutos = () => async (dispatch) => {
//     try {
//         console.log("entrou aqui no action de produtos???");
//         // const res = RelatorioSatisfacaoService.getAll();

//         const res = await JSON.parse(vendaProdutos);

//         const { meses } = res;

//         dispatch({
//             type: RETRIEVE_PRODUTOS,
//             payload: meses,
//         });
//     } catch (err) {
//         console.log(err);
//     }
// };

// 
export const retrieveAllProducts = () => async (dispatch) => {
    try {
        const res = await JSON.parse(vendaProdutos);
        const { meses } = res;
        let arrayValoresGerados = gerarValoresDefault();

        console.log("testeArray!");
        console.log(Object.values(arrayValoresGerados));
        arrayValoresGerados.sort((a, b) => {
            // console.log("date " + a.data);
            return a.data - b.data;
        })
        console.log("--- + ");
        console.log(Object.values(arrayValoresGerados));
        
        let allProducts = [];
        
        meses[0].categorias.forEach((categoria) => {            
            allProducts = [...allProducts, ...categoria.produtos];            
        });

        dispatch({
            type: ALL_PRODUCTS,
            payload: allProducts,
        });
    } catch (err) {
        console.log("Erro no access data " + err)
    }
}

// 
export const generateAbsoluteValuesByMonth = (mesesProdutos) => {
    try {
        let productAbsoluteValues = []; 

        mesesProdutos.forEach((produto) => {
                productAbsoluteValues = [...productAbsoluteValues, {nome: produto.produto, valorAbsoluto: produto.valorVenda - produto.valorCompra }];                  
        });
        return productAbsoluteValues;
    } catch (err) {
        console.log("Erro no generateAbsoluteValuesByMonth " + err)
    }
}

// 
export const generateRelativeValuesByMonth = (mesesProdutos) => {
    try {
        let productRelativeValues = []; 

        mesesProdutos.forEach((produto) => {
            productRelativeValues = [...productRelativeValues, {nome: produto.produto, valorRelativo: ((produto.valorVenda - produto.valorCompra) * 100) / produto.valorCompra}];                  
        });
        return productRelativeValues;
    } catch (err) {
        console.log("Erro no generateAbsoluteValuesByMonth " + err)
    }
}

// 
// export const gerarFaturamento = ([]) => {

//     const arrayOrdenadoByMonth = [].sort  
// }


// -Meta do mês

// -Meta das semanas será feita atraves da meta estipulada para o mes;

// 
const gerarValoresDefault = () => {

    let produtosGerados = [];
    const meses31 = [9, 11];
    const meses30 = [10];
    // Nesse caso eu estou gerando as datas, mas em um json gerado, as datas já vao vim, entao tenho que ver aqui outro esquema para pegar essa datas que já irão vim no json gerado.
    const d = new Date();
    console.log("teste data " + d.getMonth() + " " + d.getDate());
    let dia = 1;
    let mes = 9;
    d.setDate(dia)
    d.setMonth(mes);
    console.log("teste dataa2 - " + d.getMonth() + " " + d.getDate());

    let produtos = [
        {data: d, valorTotal: '', nome: "cerveja", valorVenda: 8, valorCompra: 6, categoriaNome: "Bebidas", metaMes: 25.000 }, 
        {data: d, valorTotal: '', nome: "agua", valorVenda: 8, valorCompra: 6, categoriaNome: "Bebidas", metaMes: 25.000 },
        {data: d, valorTotal: '', nome: "energetico", valorVenda: 11, valorCompra: 6, categoriaNome: "Bebidas", metaMes: 25.000 },
        {data: d, valorTotal: '', nome: "feijão", valorVenda: 12, valorCompra: 6, categoriaNome: "Alimentos", metaMes: 150.000 },
        {data: d, valorTotal: '', nome: "arroz", valorVenda: 8, valorCompra: 5, categoriaNome: "Alimentos", metaMes: 150.000 },
        {data: d, valorTotal: '', nome: "macarrão", valorVenda: 8, valorCompra: 3, categoriaNome: "Alimentos", metaMes: 150.000 },
        {data: d, valorTotal: '', nome: "sabão", valorVenda: 8, valorCompra: 6, categoriaNome: "Limpeza", metaMes: 10.000 },
        {data: d, valorTotal: '', nome: "desinfetante", valorVenda: 7, valorCompra: 3, categoriaNome: "Limpeza", metaMes: 10.000 },
        {data: d, valorTotal: '', nome: "água sanitária", valorVenda: 8, valorCompra: 6, categoriaNome: "Limpeza", metaMes: 10.000 },
    ];

    for (let i = 0; i <= 91; i++) {

        if(meses31.includes(mes) && dia > 31) {
            dia = 1;
            console.log("mes " + mes + " - " + d.getMonth());
            // d.setMonth(mes++);
            mes++
            d.setDate(32);
            console.log("ms " + mes);
            console.log(d.getMonth());
        }
        if(meses30.includes(mes) && dia > 30) {
            console.log("entrou aqui?");
            dia = 1;
            d.setDate(31);
            console.log(d.getMonth());
            // d.setMonth(mes++);
        }
        
        produtos.forEach(produto => {
            produtosGerados = [...produtosGerados, {...produto, data: new Date(d), valorTotal: Math.floor(Math.random() * 200)}];
        });

        d.setDate(dia++);
    }
    console.log("produtosGerados ");
    console.log(Object.values(produtosGerados));

    return produtosGerados;
}


// gera array com todos os produtos de todos os meses
// export const generatesAbsoluteValue = (meses) => {
//     var i, categoria;
//     let productAbsoluteValues = [];
//     for(i = 0; i < meses.length; i++) {
//         categoria = meses.categoria[i];

//         categoria.produtos.forEach((produto) => {
//             productAbsoluteValues = [...productAbsoluteValues, {nome: produto.produto, valorAbsoluto: produto.valorVenda - produto.valorCompra }]
//         })
//     }
//     console.log(Object.values(productAbsoluteValues));
//     return productAbsoluteValues;
// }

// gera um array com os produtos de um mês escolhido


// gera um array


// var i, features;
// for (i = 0; i < locationObject.features.length; i++) {

//     features = locationObject.features[i];
//     document.write(features.geometry.coordinates + " ");
//     console.log(features.geometry.coordinates);
// }