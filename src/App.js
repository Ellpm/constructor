import React from 'react';
import './App.css';
import Header from './Components/Header'
import ViewItem from "./Components/ViewItem";
import Description from "./Components/Decription";
import FooterNav from "./Component/FooterNav";

function App() {
  return (
    <div className="App">
      <Header />
      <ViewItem />
      <Description />
      <FooterNav />
    </div>
  );
}

export default App;
