import React, { Component } from 'react';
import Slide from './Slide';
import './Carousel.css';
import data from './data.js';

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.setImageState = this.setImageState.bind(this);
        this.state = {
            imageState:0,
            properties: data.properties,
            property: data.properties[0],
            position: 0,
        }
    }

    setImageState(n) {
        if(this.state.imageState+n > 4) {
            this.setState({imageState:0})

        } else if (this.state.imageState+n < 0) {
            this.setState({imageState:4})
        } else {
        this.setState((prevState => ({
            imageState: prevState.imageState+n
        })))
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
        // var touchstart,touchend;
        const { properties, property } = this.state;
        return (
            <div className="carousel"  onTouchStart={(e) => console.log(e.touches[0].clientX)} onTouchMove={(e) => console.log(e.touches)}>
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

                <div className="clip-1">
                    <div className="slide-wrap" style={{marginLeft: `-${this.state.position}%`}}>
                    {
                        properties.map(property => 
                        <Slide 
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
                

                {/* {this.state.imageState===0 && <Slide image="117162" color="3298DA" title="Hunt for the Wilderpeople" buy="85597" watch="182450021" desc="Raised on hip-hop and foster care, defiant city kid Ricky gets a fresh start in the New Zealand countryside. From the director of What We Do In The Shadows."/>}
                {this.state.imageState===1 && <Slide image="112546" color="3298DA" title="Nichts passiert / A Decent Man" buy="82485" watch="178166421" desc="A Swiss family takes a ski vacation and runs into trouble when the father, the titular decent man, finds himself in a series of moral quandries."/>}
                {this.state.imageState===2 && <Slide image="114877" color="715814" title="Vice Versa" buy="82432" watch="178080812" desc="Come along with the crew as they travel throughout the US, Japan, BC, and Quebec to showcase skiing in the best way possible."/>}
                {this.state.imageState===3 && <Slide image="113412" color="3298DA" title="The Fourth Phase" buy="81262" watch="179075058" desc="From the creators of The Art of FLIGHT, Red Bull Media House presents THE FOURTH PHASE, a snowboarding epic starring iconic athlete Travis Rice."/>}
                {this.state.imageState===4 && <Slide image="117464" color="000000" title="Full Moon" buy="85795" watch="180649691" desc="Be inspired by women who push boundaries. FULL MOON showcases the legends, current icons and future prodigies of this ever-evolving lifestyle sport."/>} */}

            </div>
        );
    }
}

export default Carousel;
