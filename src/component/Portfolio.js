import React from 'react'

 

export default class Portfolio extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
    
      return (
        <div className="card" onClick={()=>{this.props.toggleCard()}}>
            <div className="card_inner" id="inner" ref={this.props.refs}>
                <div className="card_face card_face-front">   
                    <img src={this.props.port.img} alt="project" className="portClass"/>
                    {/* <p className="portName">{this.props.port.name}</p> */}
                </div> 

                <div className="card_face card_face-back" id="wordAndLink">
                    <p className="portwords">{this.props.port.words}</p>
                    <div className='portLink-main-div'>
                      <div className="portLink-div">
                        {this.props.port.github ? 
                          <div className="gitLink-div">
                          <a href={this.props.port.github} target="_blank"className="buttonClass gitButton">
                              GitHub <i className="fab -github"></i>
                          </a>
                        </div>
                        : null}
                        
                        <div>
                          <a href={this.props.port.link} target="_blank"className="buttonClass viewButton">View Live</a>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>   
      );
    }
  }