import {useContext, useEffect, useState} from 'react'
import GraphContext from '../../context/Graph'



function GraphDuration() {
  
  const {Duration , setDurationRemote} = useContext(GraphContext)
 
  useEffect(()=>{

  },[Duration])

    return (
          <div className="d-flex justify-content-end">
            <div className="btn-group w-25 h-25 px-2">
                
                  <button className= { Duration === '1y' ? "btn btn-success rounded fs-6 active " : "btn btn-secondary rounded fs-6"}  id='1y' href="#" onClick={function(){  
                  setDurationRemote({dur :'1y'})}}>1Y</button>
               
                  <button className= {Duration === '3m' ? "btn btn-success rounded fs-6 active " : "btn btn-secondary rounded fs-6"} id='3m' href="#"  onClick={()=>{  
                  setDurationRemote({dur :'3m'})}}>3M</button>

                  <button className= {Duration === '30d' ? "btn btn-success rounded fs-6 active " : "btn btn-secondary rounded fs-6"} id='30d' href="#"  onClick={()=>{  
                  setDurationRemote({dur :'30d'})}}>4W</button>
                
                  <button className= {Duration === '7d' ? "btn btn-success rounded fs-6 active " : "btn btn-secondary rounded fs-6"} id='7d' href="#"  onClick={()=>{  
                  setDurationRemote({dur :'7d'})}}>1W</button>
               
                  <button className= {Duration === '24h' ? "btn btn-success rounded fs-6 active " : "btn btn-secondary rounded fs-6"} id='24h' href="#"  onClick={()=>{  
                  setDurationRemote({dur :'24h'})}}>1D</button>
                
            </div>
            </div>  
  )
}

export default GraphDuration
