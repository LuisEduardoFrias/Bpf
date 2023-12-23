"use client"
//
import Icon from "cp/icon";
import Card from "./card";
import { useRouter } from "next/navigation";
import useStorage from "h/usestorage";
import useFetch from "h/usefetch";
import { useEffect } from "react";

export default function Home() {
 const router = useRouter();
 const [getData, setData] = useStorage();
 const [isLoading, fetchError, fetchData, getFetch] =
 useFetch("http://localhost:3000/api/checktoken");

 useEffect(()=>{
  /* (async () => {
   const credential = getData("credentials");
   
   if(!await fetchData({token: credential.token})) {
    router.push("/");
   }
  })()*/
 },[]);
 
 const key = Reflect.ownKeys(products);
 
 return <div style={{color:"white", paddingBottom: "50px"}}>
 {
  key.map(o => products[o].map((ob,index) => <Card key={index} data={ob} title={o} />))
 }
{/* <Icon>credit_card</Icon>
 <Icon>attach_money</Icon>
 <Icon>account_balance</Icon>
 <Icon>account_balance</Icon>
 <Icon>account_balance_wallet</Icon>
 <Icon>monetization_on</Icon>
 <Icon>savings</Icon>
 <Icon>currency_exchange</Icon>
 <Icon>request_quote</Icon>
 <Icon>credit_score</Icon>
 <Icon>add_card</Icon>
 <Icon>credit_card_off</Icon>
 <Icon>credit_card_gear</Icon>
 
 <Icon>home13</Icon>
 <Icon>home14</Icon> */}
 </div>
}

const products = {
 cuentas: [
  {
   numeroCuenta: "274746284948103",
   valance: 2500.56,
  },
  {
   numeroCuenta: "274746284948103",
   valance: 2500.56,
  },
  {
   numeroCuenta: "274746284948103",
   valance: 2500.56,
  }
 ],
 tarjetasCredito: [
  {
   numeroCuenta: "1635284615382615",
   valance: 2500.56,
  },
  {
   numeroCuenta: "1635284615382615",
   valance: 2500.56,
  },
  {
   numeroCuenta: "1635284615382615",
   valance: 2500.56,
  },
  {
   numeroCuenta: "5373629153845252",
   valance: 10000.56,
  }
 ],
 prestamos: [
  {
   numeroCuenta: "174638194635201",
   monto: 120300.00,
  },
  {
   numeroCuenta: "174638194635201",
   monto: 120300.00,
  },
  {
   numeroCuenta: "174638194635201",
   monto: 120300.00,
  }
 ]
}

