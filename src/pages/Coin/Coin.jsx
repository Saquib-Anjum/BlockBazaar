import React, { useContext, useEffect, useState } from "react";
import "./Coin.css";
import { useParams } from "react-router-dom";
import { CoinContext } from "../../context/CoinContext";
import ClipLoader from "react-spinners/ClipLoader";
import LineChart from "../../components/LineChart/LineChart";

const Coin = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState(null);
  const [historcalData, setHistoricalData] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  const { currency } = useContext(CoinContext);

  const fetchCoinData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-Ljen9iobMXZfK1wCffuudM75",
      },
    };

    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}`,
        options
      );
      const data = await response.json();
      setCoinData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // Ensure loading stops after fetching data
    }
  };
//this fetch function for the  historical chart data
  const fetchHistoricalData =async()=>{

    const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-Ljen9iobMXZfK1wCffuudM75'}
    };
    
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=30`, options)
      .then(res => res.json())
      .then(res => setHistoricalData(res))
      .catch(err => console.error(err));
  }

  useEffect(() => {
    fetchCoinData();
    fetchHistoricalData();
  }, [currency]);

  if (loading) {
    // Show spinner while loading
    return (
      <div className="sweet-loading spinner">
        <ClipLoader
          color="#36d7b7" // Provide a valid color
          loading={loading}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  if (coinData , historcalData) {
    // Show coin data when available
    return (
      <div className="coin">
        <div className="coin-name">
          <img src={coinData.image.large} alt={coinData.name} />
          <p>
            <b>
              {coinData.name} - {coinData.symbol.toUpperCase()}
            </b>
          </p>
        </div>
        <div className="coin-charts">
          <LineChart historcalData={historcalData}/>
        </div>

        <div className="coin-info">
          <ul>
            <li>Crypto Market Rank</li>
            <li>{coinData.market_cap_rank}</li>
          </ul>
          <ul>
            <li>Current Price</li>
            <li>{currency.symbol}   {coinData.market_data.current_price[currency.name].toLocaleString()}</li>
          </ul>

          <ul>
            <li>Market Cap</li>
            <li>{currency.symbol}   {coinData.market_data.market_cap[currency.name].toLocaleString()}</li>
          </ul>

          <ul>
            <li>24 Hour High</li>
            <li>{currency.symbol}   {coinData.market_data.high_24h[currency.name].toLocaleString()}</li>
          </ul>

          <ul>
            <li>24 Hour Low</li>
            <li>{currency.symbol}   {coinData.market_data.low_24h[currency.name].toLocaleString()}</li>
          </ul>



        </div>
      </div>
    );
  }

  // Fallback for error or no data
  return <p>Error fetching data or no data available.</p>;
};

export default Coin;
