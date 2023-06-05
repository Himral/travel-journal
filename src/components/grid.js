import React from 'react'

export default function Grid(props){
    return(
        <div className='card'>
            
                <img src = {props.img}/>
                <div className='col2'>
                    <div className='row'>
                        <img src = "loc.png"/>
                        <h3>{props.location}</h3>
                        <a href = {props.link} target="_blank">View on Google Maps</a>
                    </div>
                
            <h1>{props.name}</h1>
            <h5>{props.date}</h5>
<p>{props.vlog}</p>
                </div>
           
            
        </div>
    );
}