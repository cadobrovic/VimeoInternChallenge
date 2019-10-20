import React, { Component } from 'react';

class Slide extends Component {
    render() {
        var divStyle={
           backgroundImage: 'url(https://i.vimeocdn.com/vod_poster/' + this.props.image + '_310x459.jpg)',
        }
        var colorStyle={
            backgroundColor:'#'+this.props.color
        }
        return (
            <div className="slide">
                <div className="slidebg" style={divStyle}></div>
                <div className="slidecolor" style={colorStyle}></div>
                <div className="content">
                    <div className="image">
                        <img 
                            src={"https://i.vimeocdn.com/vod_poster/"+this.props.image+"_310x459.jpg"} 
                            alt={this.props.title + "image preview"}
                        />
                    </div>
                    <div className="text">
                        <h2>{this.props.title}</h2>
                        <p>{this.props.desc}</p>
                        <div className="links"><a href={"https://vimeo.com/store/ondemand/buy/"+this.props.buy} className="buy pointer" style={colorStyle}><svg viewBox="0 0 25 25" width="25" height="25"><path class="fill" d="M19.602,4.716l-7.665-4.385C11.169-0.108,9.91-0.111,9.139,0.327L1.4,4.721C0.63,5.158,0,6.234,0,7.112v8.776c0,0.878,0.63,1.955,1.398,2.393l0.526,0.3l7.176,4.09c0.77,0.438,2.028,0.438,2.798,0l7.702-4.39c0.77-0.438,1.4-1.516,1.4-2.393V7.112C21,6.234,20.37,5.156,19.602,4.716z M7.336,15.761L7.337,7.24l8.008,4.26L7.336,15.761z"></path></svg>Buy Now</a>
                        <a href={"https://player.vimeo.com/video/"+this.props.watch} className="watch pointer">Watch Trailer</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Slide;
