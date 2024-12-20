import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";
const Home = () => {
    const {allCoin,currency}=useContext(CoinContext) 
    const [dispalyCoin,setDisplayCoin]=useState([]);
    const [input ,setInput]=useState("") ;
    const inputHandler=(e)=>{
setInput(e.target.value);
if(e.target.value===""){
setDisplayCoin(allCoin)
}
    }
    const searchHandler=async(e)=>{
     e.preventDefault()
   const coins=  await allCoin.filter((item)=>{
return item.name.toLowerCase().includes(input.toLowerCase())
     })
     setDisplayCoin(coins)
    }
    useEffect(()=>{
setDisplayCoin(allCoin)
    },[allCoin , currency])
  return (
    <div className="home">
      <div className="hero">
        <h1>
         Unlock <br />🚀Crypto Power 🌟
        </h1>
        <p>
        Dive into the fascinating world of cryptocurrency 🌐. Discover real-time trends, market insights, and the stories behind every coin—all in one place⚡.
        </p>
        <form onSubmit={searchHandler}>
          <input type="text" value={input}
          list='coinlist' 
          onChange={inputHandler}
          placeholder="Search Crypto" required />
           <datalist id="coinlist">{allCoin.map((item,index)=>(<option key={index} value={item.name}/>))}
           </datalist>



          <button type="submit">Srearch</button>
        </form>
      </div>

      <div className="crypto-table">
        <div className="table-layout">

            <p>#</p>
            <p>Coins</p>
            <p>Price</p>
            <p style={{textAlign:"center"}}>24H Changes</p>
            <p className="market-cap">Market Cap</p>
    
        </div>
        {dispalyCoin.slice(0,20).map((item,idx)=>(
            <Link to={`/coin/${item.id}`}>
            <div className="table-layout" key={idx}>
                <p>{item.market_cap_rank}</p>
                <div> <img src={item.image} alt="IMG" />
                  
                  <p>{item.name +"-"+ item.symbol}</p>
                    </div>

                <p>{currency.symbol} {item.current_price.toLocaleString()} , </p>
                
                <p style={{textAlign:"center"}} className={item.price_change_24h>0?"green":"red"}>{Math.floor(item.price_change_24h*100)/100}</p>

                <p className="market-cap">{currency.symbol} {(item.market_cap).toLocaleString()}</p>
            </div>
            </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
