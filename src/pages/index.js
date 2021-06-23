import * as React from 'react';
import Header from '../components/Header';
import IncreaseMuscle from '../components/IncreaseMuscle';
import Videos from '../components/Videos'
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';
import '../css/main.scss'
// markup
export default function Index() {
  return (
    <main>
      <Header></Header>
      <IncreaseMuscle>1</IncreaseMuscle>
      <Videos></Videos>
      <IncreaseMuscle></IncreaseMuscle>
      <Reviews></Reviews>
      <Footer></Footer>
    </main>
  );
}
