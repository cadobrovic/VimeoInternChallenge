import React, { Component } from 'react';
import Card from './Card';
import './Carousel.css';
import data from './data.js';

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageState:0,
            properties: data.properties,
            property: data.properties[0],
            position: 0,
        }
    }

    slideRight = () => {
        if (this.state.position < 400) {
          this.setState({
            position: this.state.position + 100
          });
        }
      }
    
      slideLeft = () => {
        if (this.state.position >= 100) {
          this.setState({
            position: this.state.position - 100
          });
        }
      }



    render() {
        const { properties } = this.state;
        return (
            <div className="carousel">
                <div className="row">
                    <button 
                        className="left pointer" 
                        onClick={() => this.slideLeft()} 
                        href=""
                    >
                        <div className="chevron-left"></div>
                    </button>
                    
                    <button 
                        className="right pointer" 
                        onClick={() => this.slideRight()} 
                        href="">
                            <div className="chevron-right"></div>
                    </button>
                </div>

                
                <div className="card-wrap" style={{marginLeft: `-${this.state.position}%`}}>
                {
                    properties.map(property => 
                    <Card 
                        image={property.image} 
                        color={property.color} 
                        buttonColor={property.buttonColor}
                        title={property.title} 
                        buy={property.buy}
                        watch={property.watch}
                        desc={property.desc}
                        key={property._id} 
                    />)
                }
                </div>
                
            </div>
        );
    }
}

export default Carousel;
