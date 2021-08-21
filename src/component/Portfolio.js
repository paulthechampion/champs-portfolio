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
                    <p className="portwords">{props.port.words}</p>
                    <div className="portLink-div">
                    <div className="gitLink-div">
                    <a href={props.port.github} target="_blank"className="buttonClass gitButton">
                        GitHub <i class="fab fa-github"></i>
                    </a>
                    </div>
                    <div>
                    <a href={props.port.link} target="_blank"className="buttonClass viewButton">View Live</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>   
    )  
    
      
} 
 

