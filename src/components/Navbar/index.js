import React from 'react';
import { FaDumbbell } from 'react-icons/fa';
import { FaThumbsUp } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { Link } from "react-scroll";
function LinkComponent(props){
  return (
    <li><Link to={props.target} smooth={true} duration={700}>{props.icon} {props.children}</Link></li>
  )
}
export default function Navbar() {
  return (
    <IconContext.Provider value={{ className: "navbar__icones" }}>
    <ul className="navbar">
      <li>BODYBUILDING</li>
      <ul className="navbar__content">
        <LinkComponent target="increase_muscle1" icon={<FaDumbbell/>}>Increase 1</LinkComponent>
        <LinkComponent target="videos" icon={<FaPlay/>}>Videos</LinkComponent>
        <LinkComponent target="increase_muscle2" icon={<FaDumbbell/>}>Increase 2</LinkComponent>
        <LinkComponent target="reviews" icon={<FaThumbsUp/>}>Reviews</LinkComponent>
      </ul>
    </ul>
    </IconContext.Provider>
  )
}