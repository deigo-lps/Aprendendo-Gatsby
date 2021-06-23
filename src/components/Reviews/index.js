import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
// import { IconContext } from "react-icons";
function Review(props) {
  return (
    <div>
      <FaQuoteLeft className="reviews__icone"></FaQuoteLeft>
      <p>{props.children}</p>
      <footer>{props.name}</footer>
    </div>
  )
}
export default function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <Review name="JASON SCOTT">There are many variations of passages of Lorem Ipsum available,
       but the majority have suffered alteration in some form, by injected humour.</Review>
      <Review name="DONALD LEE">There are many variations of passages of Lorem Ipsum available,
       but the majority have suffered alteration in some form, by injected humour.</Review>
      <Review name="RICHARD HALL">There are many variations of passages of Lorem Ipsum available,
       but the majority have suffered alteration in some form, by injected humour.</Review>
    </section>
  )
}