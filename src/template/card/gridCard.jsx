import React from "react";
import Card from "../../template/card/Card";


export default props => {

    const exibirProdutos = () => {
        const list = props.produtos || [];

        

        return list.map(item => {

            let valor = JSON.stringify(item.preco_valor);
            valor = parseFloat(valor).toFixed(2);
            valor = valor.toString();

            valor = valor.replace(".", ",");
        
            return ( 
                <Card divClass ="col-md-4 " img ={item.link_imagem}
                valor={valor} nome={item.nome_produto} marca={item.nm_marca} link={item.id} msg="Ver Produto" key={item.id}/>
            )
        })
    }

    return (
        <div class="row mb-5">
            {exibirProdutos()}                
        </div>
    )
}
