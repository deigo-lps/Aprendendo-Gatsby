import React from 'react';
import { FaDumbbell } from 'react-icons/fa';
import { FaThumbsUp } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa';
import { IconContext } from "react-icons";
export default function Navbar() {
  return (
    <IconContext.Provider value={{ className: "navbar__icones" }}>
    <ul class="navbar">
      <li>BODYBUILDING</li>
      <ul class="navbar__content">
        <li> <a href="#increase_muscle1"><FaDumbbell/> Increase 1</a> </li>
        <li> <a href="#videos"><FaPlay /> Videos</a> </li>
        <li> <a href="#increase_muscle2"><FaDumbbell/> Increase 2</a> </li>
        <li> <a href="#reviews"><FaThumbsUp/> Reviews</a> </li>
      </ul>
    </ul>
    </IconContext.Provider>
  )
}