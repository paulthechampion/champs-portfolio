import React from 'react'



export default function Portfolio(props) {
    
    
    
    return (
        
        <div className="card" >
            <div className="card_inner" id="inner">
                <div className="card_face card_face-front">   
                    <img src={props.port.img} alt="project" className="portClass"/>
                    <p className="portName">{props.port.name}</p>
                </div> 

                <div className="card_face card_face-back" id="wordAndLink">
                    <p>{props.port.words}</p>
                    <a href={props.port.link} target="_blank"className="buttonClass viewButton">VIEW LIVE</a>
                </div>
            </div>
        </div>   
    )  
    
      
} 
 

