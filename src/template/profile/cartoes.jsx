import React, {Component} from 'react';
import CardCartao from './cardCartao'
import Pagination from "react-js-pagination";

export default props => {
    const activePage = 1;
    const handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        activePage = pageNumber;
    }
    const exibirCartoes = () => {
        const list = props.cartoes || [];

        return  list.map(item  => {        
                return (
                    <>
                        <CardCartao bandeira={item.bandeira} nrCartao={item.nr_cartao} validade={item.validade}/>
                    </>
                )
            }
        )
    }

    return (
        <>
            <div class="row display-flex justify-content-space-around">
                {exibirCartoes()}
            </div>
            <div>
                <Pagination
                    activePage={activePage}
                    itemsCountPerPage={10}
                    totalItemsCount={450}
                    pageRangeDisplayed={2}
                    onChange={handlePageChange.bind(this)}
                />
            </div>
        </>
    )
}