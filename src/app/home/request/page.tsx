"use client"

import Link from "next/link";
import Input from "cp/input";
import Form from "cp/form";
import useFetch from "h/usefetch";
import { useState } from 'react';

export default function Request() {
 const [file, setFile] = useState(null);
 const [isLoading, fetchError, fetchData, getFetch] = useFetch("http://localhost:3000/api/register");
 
 async function handleSubmit(
    data: object[],
    setLoader: (show: boolean) => void,
    setNotif: (obj: INotification) => void) : boolean
 {
  const {error, data: _data}: any = await fetchData({data});
  
  setLoader(false)
  if(!error) {
   setNotif({
    show: true,
    type: 0,
    title: "Registro",
    text: "El registro fue guardado exitosamente.",
   });
   return true;
  }
  else {
   return false;
  }
 }
 
 
 return (
 <div className="register-cotainer" >
 
  <h1>Solicitudes</h1>
 
  <Form onSubmit={handleSubmit} dataFile >

    <div className="form-group">
      <label for="acountType">Tipo de Cuenta Deseada:</label>
      <select id="acountType" name="acountType">
        <option value="corriente">Cuenta Corriente</option>
        <option value="ahorros">Cuenta de Ahorros</option>
        <option value="ahorros">Tarjeta de credito</option>
        <option value="ahorros">Prestamo</option>
      </select>
    </div>
 
      <Input 
       id="SourceOfFunds"
       name="SourceOfFunds"
       autoComplete="off"
       type="text"
       placeholder="Monto"
       label="Origen de los Fondos"
       required_text="Campo requerido"
       className="register-form-group" />

    <div className="form-group">
      <button type="submit">Enviar</button>
    </div>
   
   <Link href="/">
   <button type="button">
   Acceder
   </button>
   </Link>
   
  </Form>
  
 </div>)
}