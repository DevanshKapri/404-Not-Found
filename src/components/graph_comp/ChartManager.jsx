import React, { useEffect, useState , useContext } from 'react'
import MyChart from './Chart.jsx';
import GraphContext from '../../context/Graph.jsx';
import GraphDuration from './GraphDuration';
import Prediction from './Prediction';
import SelectCoin from './SelectCoin';
import Spinner from './Loading.jsx';

function ChartManager() {
      
      const { Fetching } = useContext(GraphContext)

    return (
        <>
            <div >
                <GraphDuration />
                <MyChart />
                <div className="row my-3">
                   <div className="col">
                       <div className="row">
                           <div className="col-4 ">Coin</div>
                           <div className="col"><SelectCoin /></div>
                       </div>
                   </div>
                   <div className="col">
                   <div className="row">
                           <div className="col">Predict for : </div>
                           <div className="col"><Prediction /></div>
                       </div>
                   </div>
                </div>
            </div>
        </>
  )
}



export default ChartManager
