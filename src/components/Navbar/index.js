import React from 'react';
import { FaDumbbell } from 'react-icons/fa';
import { FaThumbsUp } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa';
import { IconContext } from "react-icons";
export default function Navbar() {
  return (
    <IconContext.Provider value={{ color:"#ce0a00", size:20 }}>
    <ul class="navbar">
      <li>BODYBUILDING</li>
      <ul class="navbar__content">
        <li> <a href="#increase_muscle1"><FaDumbbell size="26"/> Increase 1</a> </li>
        <li> <a href="#videos"><FaPlay /> Videos</a> </li>
        <li> <a href="#increase_muscle2"><FaDumbbell size="26"/> Increase 2</a> </li>
        <li> <a href="#reviews"><FaThumbsUp/> Reviews</a> </li>
      </ul>
    </ul>
    </IconContext.Provider>
  )
}