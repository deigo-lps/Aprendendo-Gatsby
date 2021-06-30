import * as React from 'react';
import Header from '../components/Header';
import IncreaseMuscle from '../components/IncreaseMuscle';
import IncreaseMuscle2 from '../components/IncreaseMuscle2';
import Videos from '../components/Videos'
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';
import '../assets/scss/main.scss'
// markup
export default function Index() {
  return (
    <main>
      <Header></Header>
      <IncreaseMuscle></IncreaseMuscle>
      <Videos></Videos>
      <IncreaseMuscle2></IncreaseMuscle2>
      <Reviews></Reviews>
      <Footer></Footer>
    </main>
  );
}
