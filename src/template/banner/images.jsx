import React from 'react';

import './images.css';

export default props => (
      <div className={props.class}>
          <a href={props.link} className="a-ps">
          {" "}
              <img
              src={props.src}
              
              height="250px"
              className="d-block w-100"
              ></img>
          </a>
      </div>
)
