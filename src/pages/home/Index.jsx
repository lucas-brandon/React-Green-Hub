import React, { Component } from "react";
import "./index.css";
import GridCard from "../../template/card/gridCard";
import Carousel from '../../template/banner/carousel';

export default class Index extends Component {
  render() {
    return (
      <>
        <Carousel name="container carousel-c"/>

        {/*<!--Cards-->*/}
        <div className="container">
          <GridCard />

          <GridCard />
        </div>

    {/*<!-- Banner bottom -->*/}
    <div class=" botton-barr col12">
        <img src="https://evolutionnutritionlab.com.br/media/wysiwyg/Hair_Skin_Nails_Mobile.jpg" width="1253px" height="250px" class="d-block w-100"></img>
    </div>
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
            </>
        )
        
    }
}
