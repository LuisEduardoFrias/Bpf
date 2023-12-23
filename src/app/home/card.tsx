
import Icon from "cp/icon";
import "./card.css"

export default function Card({data, title}: {data:obejct, title: string}) {
 
 return (
  <div className="card-container" >
   {
    <Icon className="icon_" >
     {
      title === "cuentas" ? 
      "account_balance_wallet" :
      title === "tarjetasCredito" ? 
      "credit_card" : "currency_exchange"
     }
    </Icon>
   }
   <label>{title}</label>
   <span>{data.numeroCuenta}</span>
   <label>Valance:</label>
   <span>{data.valance}</span>
  </div>
 )
}