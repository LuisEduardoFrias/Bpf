//
"use client"
//
import Link from "next/link";
import Icon from "cp/icon"
import Input from "cp/input"
import Form from "cp/form";
import useFetch from "h/usefetch";
import useStorage from "h/usestorage";
import {Token} from "dajts";

import { useRouter } from "next/navigation"
import "./login.css"

export default function Login() {
 const router = useRouter();
 const [getData, setData] = useStorage();
 const [isLoading, fetchError, fetchData, getFetch] =
 useFetch("http://localhost:3000/api/login");
 
 async function handleSubmit(
    data: object[],
    setLoader: (show: boolean) => void,
    setNotif: (obj: INotification) => void) 
 {
   const token: Token = await fetchData({data});
  
   setLoader(false);
   
   if(token.token && !fetchError) {
    setData("credentials", {...data, token: token.token});
    router.push("/home");
    return true;
   }
   else {
    return false;
   }
 }

 return (
 <div className="login-cotainer">
 
  <Form onSubmit={handleSubmit} >
  
   <fieldset className="login-logo">
    <h1>
     <span>B</span>
     <span>P</span>
     <span>F</span>
    </h1>
    <span>Banck Proyect Folder</span>
   </fieldset>

   <fieldset className="login-filds">
   
    <Input 
    id="user"
    name="user"
    autoComplete="off"
    placeholder="User or email"
    label="Usuario o correo"
    required_text="Campo requerido"
    icon="account_circle"
    className="login-form-group" />
   
    <Input 
    id="password"
    name="password"
    autoComplete="off"
    type="Password"
    placeholder="Password"
    label="Contraseña"
    required_text="Campo requerido"
    icon="password" 
    className="login-form-group" />
 
    <button type="submit" >Acceder</button>
    
   </fieldset>
  
   <fieldset className="login-register">
    <span>Registrate
     <Link href="/register" className="login-link-register"> click aquí</Link>
    </span>
   </fieldset> 
 
  </Form>
  
 </div>)
}