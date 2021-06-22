import * as React from 'react';
import Header from '../components/Header';
import IncreaseMuscle from '../components/IncreaseMuscle';
import '../css/main.scss'
// markup
export default function Index() {
  return (
    <main>
     <Header></Header>
     <IncreaseMuscle op='1'></IncreaseMuscle>
     <IncreaseMuscle></IncreaseMuscle>
    </main>
  );
}
