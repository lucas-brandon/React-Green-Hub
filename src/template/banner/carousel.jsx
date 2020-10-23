import React from 'react';
import Images from '../../template/banner/images';
import './carousel.css';

export default props => (
    <div className={props.name}>
        <div id="carousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
            <Images class="carousel-item active"
            href="#/detalhesDoProduto"
            src="https://evolutionnutritionlab.com.br/media/wysiwyg/BANNER_ONE_MOBILE.png">
            </Images>
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