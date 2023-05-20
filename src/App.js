import { useEffect, useState } from 'react';
import './App.css';
import TableRow from './TableRow';

function App() {
  const [coins,setCoins]=useState([])
  useEffect(()=>{
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false").then(response=>response.json()).then(data=>setCoins(data)).catch((error)=>console.log(error))
  },[])
  return (
    <div className="App">
      <table>
      <tbody>
     {coins.map((i)=>(
      <TableRow coin={i}/>
     ))}
     </tbody>
     </table>
    </div>
  );
}

export default App;
