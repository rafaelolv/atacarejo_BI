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
        // const res = await JSON.parse(vendaProdutos);
        // const { meses } = res;
        let arrayValoresGerados = gerarValoresDefault();

        console.log("testeArray!");
        console.log(Object.values(arrayValoresGerados));
        arrayValoresGerados.sort((a, b) => {
            // console.log("date " + a.data);
            return a.data - b.data;
        })
        console.log("--- + ");
        console.log(Object.values(arrayValoresGerados));
        
        // let allProducts = [];
        
        // meses[0].categorias.forEach((categoria) => {            
        //     allProducts = [...allProducts, ...categoria.produtos];            
        // });

        dispatch({
            type: ALL_PRODUCTS,
            payload: arrayValoresGerados,
        });
    } catch (err) {
        console.log("Erro no access data " + err)
    }
}

// 
export const generateAbsoluteValuesByMonth = (mesesProdutos) => {
    try {
        let productAbsoluteValues = [];
        const arrayProductAbsoluteValues = mesesProdutos.slice(0, 8);

        arrayProductAbsoluteValues.forEach((produto) => {
                productAbsoluteValues = [...productAbsoluteValues, {nome: produto.nome, valorAbsoluto: produto.valorVenda - produto.valorCompra }];                  
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
    let dia = 1;
    let mes = 9;
    d.setDate(dia)
    d.setMonth(mes);

    let produtos = [
        {data: d, valorTotal: '', nome: "cerveja", valorVenda: 11, valorCompra: 4, categoriaNome: "Bebidas", metaMes: 36000 },
        {data: d, valorTotal: '', nome: "agua", valorVenda: 7, valorCompra: 2, categoriaNome: "Bebidas", metaMes: 36000 },
        {data: d, valorTotal: '', nome: "energetico", valorVenda: 10, valorCompra: 5, categoriaNome: "Bebidas", metaMes: 36000 },
        {data: d, valorTotal: '', nome: "feijão", valorVenda: 12, valorCompra: 6, categoriaNome: "Alimentos", metaMes: 20000 },
        {data: d, valorTotal: '', nome: "arroz", valorVenda: 7, valorCompra: 3, categoriaNome: "Alimentos", metaMes: 20000 },
        {data: d, valorTotal: '', nome: "macarrão", valorVenda: 7, valorCompra: 3, categoriaNome: "Alimentos", metaMes: 20000 },
        {data: d, valorTotal: '', nome: "sabão", valorVenda: 6, valorCompra: 3, categoriaNome: "Limpeza", metaMes: 7000 },
        {data: d, valorTotal: '', nome: "desinfetante", valorVenda: 9, valorCompra: 4, categoriaNome: "Limpeza", metaMes: 7000 },
        {data: d, valorTotal: '', nome: "água sanitária", valorVenda: 8, valorCompra: 3, categoriaNome: "Limpeza", metaMes: 7000 },
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
    console.log("**** produtosGerados ");
    console.log(Object.values(produtosGerados));

    return produtosGerados;
}

// 
export const getMes = () => {

}

// 
export const getMetaMes = (mes, lista) => {
    console.log("------------ getMetaMes " + " - " + mes + " - " + lista);
    let obj = lista.find(element => {
        return element.data.getMonth() == mes;
    });
    console.log("-----------obj.metaMes " + obj + " " + obj.metaMes + " " + obj.nome);
    return obj.metaMes;
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