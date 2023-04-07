import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Section/Hero/Hero';
import Intro from './components/Section/Intro/Intro';
import Info from './components/Section/works/Info';
const App=()=>{
return (
  <>
  <Header/>
  <main>
    <Hero />
    <Intro/>
    <Info/>
  </main>
  </>
  
)
}
export default App;