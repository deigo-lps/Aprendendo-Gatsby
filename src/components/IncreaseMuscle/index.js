import React from 'react';
import imagem2 from '../../images/img2.jpg';
import imagem6 from '../../images/img6.jpg';
export default function IncreaseMuscle(props){
  if(props.op=='1'){
  return(
    <section class="increase_muscle" id="increase_muscle1">
      <img src={imagem2} alt="puxando ferro mt fodamente."/>
      <section class="texto"id="increase_txt1">
        <h2>INCREASE MUSCLE GAIN AND MANTAIN IT <br/><br/></h2>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.<br/><br/> If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined.</p>
      </section>
    </section>
  )
  }
  else {
    return(
      <section class="increase_muscle" id="increase_muscle2">
      <section class="texto"id="increase_txt2">
        <h2>INCREASE MUSCLE GAIN AND MANTAIN IT <br/><br/></h2>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.<br/><br/> If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined.</p>
      </section>
      <img src={imagem6} alt="puxando ferro mt fodamente."/>
    </section>
    )
  }
}