import React from 'react'
import img1 from '../../images/img3.jpg';
import img2 from '../../images/img4.jpg';
import img3 from '../../images/img5.jpg';
function Video(props) {
  return (
    <div>
      <img src={props.img} alt="mais ferro" />
      <p>{props.children}</p>
    </div>
  )
}
export default function Videos() {
  return (
    <section className="videos">
      <h2>RECENT VIDEOS</h2>
      <div className="videos__content">
        <Video img={img1}>Lorem Ipsum is simply dummy text of the printing</Video>
        <Video img={img2}>Lorem Ipsum is simply dummy text of the printing</Video>
        <Video img={img3}>Lorem Ipsum is simply dummy text of the printing</Video>
      </div>
    </section>
  )
}