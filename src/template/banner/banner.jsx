import React from 'react';
import Images from '../../template/banner/images';
import './banner.css';


export default props => (
<div className={props.name + " banner"}>
    {/*
    <Images 
        src="https://static.wixstatic.com/media/d3848b_74c17c7802724e92b6a9bd13db8a9e55~mv2_d_4170_1604_s_2.png/v1/fill/w_988,h_380,al_c,q_90,usm_0.66_1.00_0.01/1.webp">
    </Images>
    */}
    <Images
            src="https://i1.wp.com/crazykiwi.com.br/wp-content/uploads/2015/05/Oit%C3%AD_1.jpg">
    </Images>
</div>
)