//
"use client"
//
import Link from "next/link";
import Input from "cp/input";
import Form from "cp/form";
import useFetch from "h/usefetch";
import { useState } from 'react';
import './register.css'

export default function Register() {
 
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
 
 function activarInputFile() {
  document.getElementById('fileInput').click();
 }

 return (
 <div className="register-cotainer" >
 
  <h1>Registro de Cliente</h1>
 
  <Form onSubmit={handleSubmit} dataFile >
  
    <h2>Información personal</h2>
   
      <Input 
       id="name"
       name="name"
       autoComplete="off"
       type="text"
       placeholder="name"
       label="Name"
       required_text="Campo requerido"
       icon="account_circle" 
       className="register-form-group" />
       
      <Input 
       id="lastName"
       name="lastName"
       autoComplete="off"
       type="text"
       placeholder="lastName"
       label="Apellidos"
       required_text="Campo requerido"
       icon="account_circle" 
       className="registee-form-group" />
    
      <Input 
       id="birthday"
       name="birthday"
       autoComplete="off"
       type="datetime-local"
       placeholder="lastName"
       label="Fecha de nacimiento"
       required_text="Campo requerido"
       className="register-form-group" />
    
    <div className="form-group">
      <label for="sex">Género:</label>
      <select id="sex" name="genero">
        <option checked value="masculino">Masculino</option>
        <option value="femenino">Femenino</option>
      </select>
    </div>
    
    <div className="form-group">
      <label for="maritalStatus">Estado Civil:</label>
      <select id="maritalStatus" name="maritalStatus">
        <option value="soltero">Soltero/a</option>
        <option value="casado">Casado/a</option>
        <option value="otro">Otro</option>
      </select>
    </div>
    
      <Input 
       id="dniNumber"
       name="dniNumber"
       autoComplete="off"
       type="number"
       placeholder="dni number"
       label="Número de Identificación"
       required_text="Campo requerido"
       className="register-form-group" />
       
    <div class="custom-input-file">
     <label for="dni">Documento de identidad:</label>
     <input type="file" id="dni" name="dni" change={(e) => { setFile(e.target.value) }} />
     <div id="custom-input-file-text-btn">
      <label id="FileText" for="dni">{file}</label>
      <label id="FileBtn" for="dni">Seleccionar archivo</label>
     </div>
     <span  for="dni">Campo requerido</span>
    </div>
   
    <h2>Información de usurio</h2>
   
      <Input 
       id="user"
       name="user"
       autoComplete="off"
       type="text"
       placeholder="user"
       label="Usuario"
       required_text="Campo requerido"
       icon="account_circle" 
       className="register-form-group" />
       
      <Input 
       id="password"
       name="password"
       autoComplete="off"
       type="password"
       placeholder="password"
       label="Contraseña"
       required_text="Campo requerido"
       icon="account_circle" 
       className="register-form-group" />
       
      <Input 
       id="password2"
       autoComplete="off"
       type="password"
       placeholder="password2"
       label="Confirmal contraseña"
       required_text="Campo requerido"
       icon="account_circle" 
       className="register-form-group" />
       
    <h2>Información de contacto</h2>
   
      <Input 
       id="direction"
       name="direction"
       autoComplete="off"
       type="text"
       placeholder="Dirección de Domicilio"
       label="Dirección de Domicilio"
       required_text="Campo requerido"
       className="register-form-group" />
       
      <Input 
       id="email"
       name="email"
       autoComplete="off"
       type="email"
       placeholder="Correo Electrónico"
       label="Correo Electrónico"
       required_text="Campo requerido"
       className="register-form-group" />

    <h2>Información laboral</h2>
  
      <Input 
       id="ocupation"
       name="ocupation"
       autoComplete="off"
       type="text"
       placeholder="Ocupación"
       label="Ocupación"
       required_text="Campo requerido"
       className="register-form-group" />
       
      <Input 
       id="income"
       name="income"
       autoComplete="off"
       type="number"
       placeholder="Ingresos Mensuales"
       label="Ingresos Mensuales"
       required_text="Campo requerido"
       className="register-form-group" />
      
      <Input 
       id="empoyerName"
       name="empoyerName"
       autoComplete="off"
       type="text"
       placeholder="Nombre del Empleador"
       label="Nombre del Empleador"
       required_text="Campo requerido"
       className="register-form-group" />
    
      <Input 
       id="workAddress"
       name="workAddress"
       autoComplete="off"
       type="text"
       placeholder="Dirección del Lugar de Trabajo"
       label="Dirección del Lugar de Trabajo"
       required_text="Campo requerido"
       className="register-form-group" />
    
      <Input 
       id="workPhoneNumber"
       name="workPhoneNumber"
       autoComplete="off"
       type="number"
       placeholder="Número Teléfonico del Trabajo"
       label="Número Teléfonico del Trabajo"
       required_text="Campo requerido"
       className="register-form-group" />
    
      <Input 
       id="workTenure"
       name="workTenure"
       autoComplete="off"
       type="number"
       placeholder="Antigüedad Laboral"
       label="Antigüedad Laboral"
       required_text="Campo requerido"
       className="register-form-group" />

    <h2>Información financiera</h2>
 
    <div className="form-group">
      <label for="acountType">Tipo de Cuenta Deseada:</label>
      <select id="acountType" name="acountType">
        <option value="corriente">Cuenta Corriente</option>
        <option value="ahorros">Cuenta de Ahorros</option>
      </select>
    </div>
 
      <Input 
       id="SourceOfFunds"
       name="SourceOfFunds"
       autoComplete="off"
       type="text"
       placeholder="Origen de los Fondos"
       label="Origen de los Fondos"
       required_text="Campo requerido"
       className="register-form-group" />
    
      <Input 
       id="IncomeAmount"
       name="IncomeAmount"
       autoComplete="off"
       type="number"
       placeholder="Monto Promedio de Ingresos Mensuales"
       label="Monto Promedio de Ingresos Mensuales"
       required_text="Campo requerido"
       className="register-form-group" />
       
    <div className="custom-input-file">
      <label for="creditHistory">Historial Crediticio:</label>
     <input type="file" id="creditHistory" name="creditHistory" change={(e) => {
     setFile(e.target.value) }} />
     <div id="custom-input-file-text-btn">
      <label id="FileText">{file}</label>
      <label id="FileBtn" for="creditHistory">Seleccionar archivo</label>
     </div>
     <span  for="creditHistory">Campo requerido</span>
    </div>

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