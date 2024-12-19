import React, { useContext } from 'react';
import './Navbar.css';
import logo from '../../assets/Logo.png';
import arrow from '../../assets/Arrow.png';
import Github from '../../assets/Github.png';
import { CoinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { currency,setCurrency  } = useContext(CoinContext);

  const currencyHandler = (e) => {
    switch (e.target.value) {
      case 'usd':
        setCurrency({
          name: 'usd',
          symbol: '$',
        });
        break;
      case 'eur':
        setCurrency({
          name: 'eur',
          symbol: '€',
        });
        break;
      case 'inr':
        setCurrency({
          name: 'inr',
          symbol: '₹',
        });
        break;
      default:
        setCurrency({
          name: 'usd',
          symbol: '$',
        });
        break;
    }
  };

  return (
    <div className="Navbar">
      <Link to={'/'}><img src={logo} alt="Crypto Marketplace Logo" className="logo" /></Link>
      <ul>
      <Link to={'/'}>  <li>Home</li></Link>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
        
      </ul>

      <div className="nav-right">
     <a href='https://github.com/Saquib-Anjum'> <img src={Github} alt='Github' className='Github'/></a>
        <select  onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <button className="signUp">
          SignUp
          <img src={arrow} alt="Arrow Icon" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
