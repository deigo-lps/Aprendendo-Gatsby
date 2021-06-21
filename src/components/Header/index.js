import React from 'react';
import Navbar from '../Navbar';
import { FaCheckSquare } from 'react-icons/fa';
import { IconContext } from "react-icons";
function Input(props){
  return(
    <input type="text" placeholder={props.nome} id={props.id} required></input>
  )
}
export default function Header() {
  return (
    <div class="header">
      <Navbar></Navbar>
      <h1>EVERYTHING YOU NEED TO CHISEL<br></br>YOUR MUSCLE</h1>
      <div class="get_started">
        <h2>GET STARTED NOW</h2>
        <form id="get_started_form">
          <Input nome="Full Name" id="input_name"></Input>
          <Input nome="Phone Number" id="input_number"></Input>
          <Input nome="Email Address" id="input_email"></Input>
          <Input nome="Zip Code" id="input_zip"></Input>
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