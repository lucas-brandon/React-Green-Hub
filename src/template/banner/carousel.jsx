import React, {Component} from 'react';
import Images from '../../template/banner/images';
import './carousel.css';
import './banner.css';

export default class Carousel extends Component {
    constructor(props) {
        super(props);
    }

    scripts = () => {
        const script1 = document.createElement("script");
        script1.src = "https://code.jquery.com/jquery-3.4.1.slim.min.js";
        script1.async = true;
        document.body.appendChild(script1);

        const script2 = document.createElement("script");
        script2.src = "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js";
        script2.async = true;
        document.body.appendChild(script2);

        const script3 = document.createElement("script");
        script3.src = "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js";
        script3.async = true;
        document.body.appendChild(script3);
    }

    componentDidMount(){
        this.scripts();
    }
    render(){
        return (
        <div className={this.props.name}>
            
            <div id="carousel" className="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carousel" data-slide-to="0" class="active"></li>
                <li data-target="#carousel" data-slide-to="1"></li>
                <li data-target="#carousel" data-slide-to="2"></li>
                <li data-target="#carousel" data-slide-to="3"></li>
            </ol>
            <div className="carousel-inner">
            <Images class="carousel-item active"
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
            <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
                
            </div>
        </div>
        )
    }
}