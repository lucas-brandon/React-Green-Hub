import React from 'react';
import Images from '../../template/banner/images';
import './carousel.css';
import './banner.css';

export default props => (
    <div className={props.name}>
        <div id="carousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
            <Images class="carousel-item active" style={{maxHeight: '280px',
              height: 'auto',
              border: '#056608 solid 10px',
              backgroundColor: 'rgb(145, 192, 145)'}}
                Link="#/home" 
                src="https://static.wixstatic.com/media/d3848b_74c17c7802724e92b6a9bd13db8a9e55~mv2_d_4170_1604_s_2.png/v1/fill/w_988,h_380,al_c,q_90,usm_0.66_1.00_0.01/1.webp">
            </Images>
            {/*
            <Images class="carousel-item active"
            href="#/detalhesDoProduto"
            src="https://i1.wp.com/crazykiwi.com.br/wp-content/uploads/2015/05/Oit%C3%AD_1.jpg">
            </Images>
            */}
            <Images class="carousel-item"
                    link="#/detalhesDoProduto"
                    src="https://images.tcdn.com.br/img/img_prod/798964/1591900464_banner.jpg">
            </Images>
            <Images class="carousel-item"
                    link="#/detalhesDoProduto"
                    src="https://evolutionnutritionlab.com.br/media/wysiwyg/BANNERS_SITE_-_DESKTOP_-_KIT_IMUNIDADE.png">
            </Images>
            <Images class="carousel-item"
                    link="#/detalhesDoProduto.php"
                    src="https://evolutionnutritionlab.com.br/media/wysiwyg/Hair_Skin_Nails_Mobile.jpg">
            </Images>
            </div>
        </div>
    </div>
)