import React from 'react'



export default function Portfolio(props) {
    return (
        
        <div className="portDiv" >
            <div className="theCard">
                    <div className="portImg">   
                <img src={props.port.img} alt="project" className="portClass"/>
                <p className="portName">{props.port.name}</p>
                </div> 

                <div className="wordsAndLink" id="wordAndLink">
                    <p>{props.port.words}</p>
                    <a href={props.port.link} target="_blank"className="buttonClass viewButton">VIEW LIVE</a>
                    </div>
            </div>
        </div>
        
    )

} 
 

