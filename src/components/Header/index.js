import React from 'react';
import Navbar from '../Navbar';
import { FaCheckSquare } from 'react-icons/fa';
import { IconContext } from "react-icons";
import InputMask from "react-input-mask";

function Input(props){
  return(
    <InputMask placeholder={props.children} id={props.id} mask={props.mask}/>
    // <input type="text" placeholder={props.nome} id={props.id} required></input>
  )
}
export default function Header() {
  return (
    <div className="header">
      <Navbar></Navbar>
      <h1>EVERYTHING YOU NEED TO CHISEL<br></br>YOUR MUSCLE</h1>
      <div className="get_started">
        <h2>GET STARTED NOW</h2>
        <form id="get_started_form">
          <Input id="input_name">Full Name</Input>
          <Input id="input_number" mask="(99) 99999-9999">Phone Number</Input>
          <Input id="input_email">Email Address</Input>
          <Input id="input_zip" mask="99999-999">Zip Code</Input>
          <button type="submit">SIGN UP</button>
        </form>
      </div>
      <IconContext.Provider value={{ className: "header__icones"}}>
        <ul id="check">
          <li><FaCheckSquare/> BUILD AND SUSTAINS MUSCLE</li>
          <li><FaCheckSquare/> PERFORMANCE ENHANCING</li>
          <li><FaCheckSquare/> FEEL STRONGER</li>
        </ul>
      </IconContext.Provider>
    </div>
  )
}