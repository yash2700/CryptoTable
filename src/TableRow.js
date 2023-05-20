import React from 'react'
import "./TableRow.css"
function TableRow({coin}) {
  console.log(coin);
  return (
    <div>
      
          <tr >
            <td className='name-flex'><img src={coin.image} alt="" /> {coin.name}</td>
            <td style={{textTransform:"uppercase"}}>{coin.symbol}</td>
            <td>${coin.current_price}</td>
            <td>${coin.total_volume}</td>
            <td className={coin.price_change_percentage_24h>0?"green":"red"}>{coin.price_change_percentage_24h.toFixed(2)}%</td>
            <td>${coin.market_cap}</td>
          </tr>
       
    </div>
  )
}

export default TableRow