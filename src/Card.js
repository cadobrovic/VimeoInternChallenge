import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { picture, title, blurb } = this.props.data
        return(
            <div className="container">
                <div className="bg-image" style={{backgroundImage: `linear-gradient(
          rgba(25, 37, 90, 0.7), 
          rgba(25, 37, 90, 0.7)
        ), url(${picture})`}}></div>
                <div className="wrap">
                    {/* <button style={{marginRight: "10px;"}}>
                        Hello
                    </button> */}
                    <div className="content">
                        <img className="pic" src={picture}/>
                        <div className="info">
                            <h3>{title}</h3>
                            <p>{blurb}</p>
                            <div className="buttons">
                                <button>
                                    Buy Now
                                </button>

                                <button>
                                    Watch Trailer
                                </button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;