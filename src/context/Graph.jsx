import { createContext, useState, useEffect } from 'react'
import moment, { duration } from 'moment'


const GraphContext = createContext()
const API_KEY = 'coinranking591029efe3486ea5657ae7cbfd5324d01a39b023d2603194'


export const GraphProvider = ({children}) => {
    // const [dateFrom, setDateFrom] = useState(moment().subtract(7 , 'd').format('YYYY-MM-DD[T]HH[%3A]mm[%3A]ss[Z]'))
    // const [dateTo , setdateTo] = useState(moment().format('YYYY-MM-DD[T]HH[%3A]mm[%3A]ss[Z]'))
    const [TimeLabel , setTL] = useState([])
    const [Prices , setPrices] = useState()
    const [Fetching , setFetching] = useState(false)
    const [Coin , setCoin] = useState({ uuid: 'TpHE2IShQw-sJ', name: 'Algorand', symbol: 'ALGO' })
    const [Duration , setDuration] = useState('7d')
    

    var CoinData = ([ { uuid: 'TpHE2IShQw-sJ', name: 'Algorand', symbol: 'ALGO' },
    { uuid: 'dvUj0CzDZ', name: 'Avalanche', symbol: 'AVAX' },
    { uuid: 'gpRKmM16k', name: 'Axie Infinity', symbol: 'AXS' },
    { uuid: 'WcwrkfNI4FUAe', name: 'Binance Coin', symbol: 'BNB' },
    { uuid: 'vSo2fu9iE1s0Y', name: 'Binance USD', symbol: 'BUSD' },
    { uuid: 'N2IgQ9Xme', name: 'BitDAO ', symbol: 'BIT' },
    { uuid: 'Qwsogvtv82FCd', name: 'Bitcoin', symbol: 'BTC' },
    { uuid: 'ZlZpzOJo43mIo', name: 'Bitcoin Cash', symbol: 'BCH' },
    { uuid: 'sfab31CXM', name: 'Bloktopia', symbol: 'BLOK' },
    { uuid: 'qzawljRxB5bYu', name: 'Cardano', symbol: 'ADA' },
    { uuid: 'VLqpJwogdhHNb', name: 'Chainlink', symbol: 'LINK' },
    { uuid: 'p_GHkOeDNKw0', name: 'Compound Ether', symbol: 'CETH' },
    { uuid: 'Knsels4_Ol-Ny', name: 'Cosmos', symbol: 'ATOM' },
    { uuid: '65PHZTpmE55b', name: 'Crypto.com Chain', symbol: 'CRO' },
    { uuid: 'MoTuySvg7', name: 'Dai', symbol: 'DAI' },
    { uuid: 'tEf7-dnwV3BXS', name: 'Decentraland', symbol: 'MANA' },
    { uuid: 'a91GCGd_u96cF', name: 'Dogecoin', symbol: 'DOGE' },
    { uuid: 'omwkOTglq', name: 'Elrond', symbol: 'EGLD' },
    { uuid: 'razxDUgYGNAdQ', name: 'Ethereum', symbol: 'ETH' },
    { uuid: 'hnfQfsYfeIGUQ',
      name: 'Ethereum Classic',
      symbol: 'ETC' },
    { uuid: 'NfeOYfNcl', name: 'FTX Token', symbol: 'FTT' },
    { uuid: 'uIEWfMFnQo9K_', name: 'Fantom', symbol: 'FTM' },
    { uuid: '9K7m6ufraZ6gh', name: 'HEX', symbol: 'HEX' },
    { uuid: 'jad286TjB', name: 'Hedera HashGraph', symbol: 'HBAR' },
    { uuid: 'aMNLwaUbY',
      name: 'Internet Computer (DFINITY)',
      symbol: 'ICP' },
    { uuid: 'mqtUpyBxu8O8', name: 'LEO', symbol: 'LEO' },
    { uuid: 'VINVMYf0u', name: 'Lido Staked Ether', symbol: 'STETH' },
    { uuid: 'D7B1x_ks7WhV5', name: 'Litecoin', symbol: 'LTC' },
    { uuid: '3mVx2FX_iJFp5', name: 'Monero', symbol: 'XMR' },
    { uuid: 'DCrsaMv68', name: 'NEAR Protocol', symbol: 'NEAR' },
    { uuid: 'PDKcptVnzJTmN', name: 'OKB', symbol: 'OKB' },
    { uuid: '25W7FG7om', name: 'Polkadot', symbol: 'DOT' },
    { uuid: 'uW2tk-ILY0ii', name: 'Polygon', symbol: 'MATIC' },
    { uuid: 'ZO4D7EBy3', name: 'SENSO', symbol: 'SENSO' },
    { uuid: 'xz24e0BjL', name: 'SHIBA INU', symbol: 'SHIB' },
    { uuid: 'zNZHO_Sjf', name: 'Solana', symbol: 'SOL' },
    { uuid: 'f3iaFeCKEmkaZ', name: 'Stellar', symbol: 'XLM' },
    { uuid: 'qUhEFk1I61atv', name: 'TRON', symbol: 'TRX' },
    { uuid: 'AaQUAs2Mc', name: 'Terra', symbol: 'LUNA' },
    { uuid: 'cKExCczgV', name: 'TerraUSD', symbol: 'UST' },
    { uuid: 'HIVsRcGKkPFtW', name: 'Tether USD', symbol: 'USDT' },
    { uuid: 'fsIbGOEJWbzxG', name: 'Tezos', symbol: 'XTZ' },
    { uuid: 'pxtKbG5rg', name: 'The Sandbox', symbol: 'SAND' },
    { uuid: 'B42IRxNtoYmwK', name: 'Theta Token', symbol: 'THETA' },
    { uuid: 'aKzUVe4Hh_CON', name: 'USDC', symbol: 'USDC' },
    { uuid: '_H5FVG9iW', name: 'Uniswap', symbol: 'UNI' },
    { uuid: 'FEbS54wxo4oIl', name: 'VeChain', symbol: 'VET' },
    { uuid: '08CsQa-Ov', name: 'WEMIX TOKEN', symbol: 'WEMIX' },
    { uuid: 'x4WXHge-vvFY', name: 'Wrapped BTC', symbol: 'WBTC' },
    { uuid: '-l8Mn2pVlRs-p', name: 'XRP', symbol: 'XRP' } ])

    CoinData.sort(function (a,b){
        if(a.name < b.name ) return -1
        if(a.name > b.name) return 1
        return 0
    })

    const PredictionData = ({days , symbol})=>{
        var arr = []
        for (let index = 0; index < days; index++) {
            arr.push(moment().add(index , 'days').format('DD MMM YY'))
            
        }
        console.log(arr)
    }

    const setCoinVal = ({token}) =>{
        
        fetchHistory({Dur : Duration})
        return setCoin({name : token.split('$')[0] , uuid : token.split('$')[1] , symbol:token.split('$')[2]})
    }

    const setDurationRemote = ({dur}) =>{
        console.log(dur + 'remoteeeeee')
        setDuration(dur)
        fetchHistory({Dur : dur})
    }

    function  fetchHistory({Dur}){
        setDuration(Dur)
        setFetching(true)
        fetch(`https://coinranking1.p.rapidapi.com/coin/${Coin.uuid}/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=${Dur}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coinranking1.p.rapidapi.com",
		"x-rapidapi-key": "527a722143msh647fbcb572b6a8fp1fd8e9jsn86102cfb3192"
	}
})
.then((response)=>response.json()).then((res)=>{
    var p = []
    var Tl = []
    console.log('FetchHistory')
    // console.log(Dur)
    // console.log(res.data.history[0].timestamp)
    for(var i = 0; i < res.data.history.length ; i++){
        // console.log(res.data.history[i].timestamp)

        p.push(res.data.history[i].price)

        Tl.push(moment.unix(res.data.history[i].timestamp).format('DD MMM YY'))
    }

    // res.data.history.map((item)=>{
    //     p.push(item.price)
    //     Tl.push(moment.unix(item.timestamp).format('DD MMMM YYYY'))
    // })

    // console.log(Tl)
    Tl.reverse()
    p.reverse()
    // console.log(Tl)

    setTL(Tl)
    // console.log(TimeLabel)
    setPrices(p)

    setFetching(false)
})

    }

    useState(()=>{

        // console.log(Dur)
        // let startDate = moment().subtract(Dur.val,Dur.flag).format('YYYY-MM-DD[T]HH[%3A]mm[%3A]ss[Z]')

        // setDateFrom(startDate)
        // setdateTo(moment().format('YYYY-MM-DD[T]HH[%3A]mm[%3A]ss[Z]'))

        // FetchData()
        console.log('USE STATE CONTEXT')


        // console.log(Dur)
        // FetchData({val : 7 , flag : 'd'})
        // fetchFromRapid()


        fetchHistory({Dur : Duration})


        
    },[])

    return (
      <GraphContext.Provider
        value={{
            Prices,
            TimeLabel,
            Fetching,
            fetchHistory,
            CoinData,
            setCoinVal,
            setDurationRemote,
            PredictionData,
            Coin,
            Duration


        }}
      >
          {children}
      </GraphContext.Provider>
    )
  }

  

  
  export default GraphContext
