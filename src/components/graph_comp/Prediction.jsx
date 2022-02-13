import React, { useContext } from 'react'
import GraphContext from '../../context/Graph'

function Prediction() {
  
  const {PredictionData , Coin} = useContext(GraphContext)


    return (
    <div >
      <select className="custom-select custom-select-lg mb-3 " nChange={ e =>{
          PredictionData({days : parseInt(e.target.value) , symbol : Coin.symbol})
      }}>
        <option value='15' key={1} >15 Days</option> 
        <option value='30' key={2} >30 Days</option>
        <option value='45' key={3} >45 Days</option>
        <option value='60' key={4} >60 Days</option>
         
    </select>
    </div>
  )
}

export default Prediction
