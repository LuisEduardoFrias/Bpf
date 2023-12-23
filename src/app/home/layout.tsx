"use client"
//
//import type { Metadata } from 'next'
import Icon from 'cp/icon';
import Link from 'next/link';
import Menu, { OptionMenu } from './menu';
import "./layout.css"
import LdDualRing from "cp/ld_dual_ring";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useStorage from "h/usestorage";
import useFetch from "h/usefetch";

// export const metadata: Metadata = {
//   title: 'Back proyect Folder',
//   description: 'App bancking',
// }

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter();
  const [getData, setData] = useStorage();
  const [isLoading, fetchError, fetchData, getFetch] =
  useFetch("http://localhost:3000/api/logout");
  
  const unchecked =()=> {
   const checkbox = document.querySelector("#floatMenuBtn");
   checkbox.checked = false;
  }
  const options: OptionMenu[] = [
    {name:"Logout", callback: async (event:any)=>{
     unchecked();
     
     const credential = getData("credentials");
   
     if(await fetchData({user: credential.user, password: credential.password})) {
      router.push("/");
     }
    }},
    {name:"Requests", link:"/home/request", callback: (event:any) => {unchecked()}},
    {name:"Transactions", link:"/home/transactions", callback: (event:any) => {unchecked();}},
    {name:"Services pay", link:"/home/services_pay", callback: (event:any) => {unchecked();}},
   ];
  
  useEffect(() => {
   (async () => {
    const credential = getData("credentials");
   
    if(!await fetchData({token: credential.token}, "http://localhost:3000/api/checktoken")) {
    // router.push("/");
    }
   })()
  },[])
  
  return (
   <div className="layout-home">
    <header>
     <div>
      <label for="floatMenuBtn">
       <Icon>drag_handle</Icon>
      </label>
      <input type="checkbox" id="floatMenuBtn" />
     </div>
     
     <div className="layout-home-logo">
      <h1>
       <span>B</span>
       <span>P</span>
       <span>F</span>
      </h1>
     </div>

     <div>
      <label for="floatSettingsBtn">
       <Icon>settings</Icon>
      </label>
      <input type="checkbox" id="floatSettingsBtn" />
     </div>
     
    </header>
    
    <div className="shadow"></div>
    <Menu className="floatMenu" optionsMenu={options} />
  
    <div className="layout-home-main">
     {isLoading ? <LdDualRing show="true" /> :
     <>{children}</>}
    </div>
   
    <fooder>
     <button>
      <Link href="/home/transactions">
       <Icon>move_item</Icon>
      </Link>
     </button>
         
     <button>
      <Link href="/home">
       <Icon>home</Icon>
      </Link>
     </button>
         
     <button>
      <Link href="/home/services_pay">
       <Icon>paid</Icon>
      </Link>
     </button>
    </fooder>
   </div>
  )
}
