import React , {useContext, useEffect, useState} from 'react'
import GraphContext from '../../context/Graph'


function SelectCoin() {
    const {CoinData , Coin , setCoinVal } = useContext(GraphContext)

    // console.log(Coin)
    console.log('selectCoin')


    return (
    <div >
      <select className=" custom-select custom-select-lg mb-3" onChange={e => {console.log(e.target.value) 
        setCoinVal({token:e.target.value})}}>
        {
          CoinData.map(el => 
          <option value={el.name + '$' + el.uuid + '$' + el.symbol} key={el.uuid} >{el.name}</option> 
        
          )
        }

         
    </select>  
  </div>
  )
}

export default SelectCoin
