import { useState } from 'react';
import './App.css';
import data from './data'
import Table from './Table';
import { calculateGamma } from './utils';
function App() {
  // declaring varibles for diffrent classes available
  var class1 = [];
  var class2 = [];
  var class3 = [];

  // mapping through data and pushing values to variables according to class and converting string values to int

  data.data.map(val =>{
    if(val.Alcohol == 1){
      class1.push(Number(val.Flavanoids))
    }else if(val.Alcohol == 2){
      class2.push(Number(val.Flavanoids))
    }else if(val.Alcohol == 3){
      class3.push(Number(val.Flavanoids))
    }
  })

  // calculating gamma and pushing into new arrays 
  var gamma1 = [];
  var gamma2 = [];
  var gamma3 = [];

  data.data.map(val =>{
    if(val.Alcohol == 1){
      gamma1.push(calculateGamma(val.Ash,val.Hue,val.Magnesium))
    }else if(val.Alcohol == 2){
      gamma2.push(calculateGamma(val.Ash,val.Hue,val.Magnesium))
    }else if(val.Alcohol == 3){
      gamma3.push(calculateGamma(val.Ash,val.Hue,val.Magnesium))
    }
  })
  return (
    <div className="App">
      <div className='container'>
        <h1>Calculation of Flavonoids</h1>
        <Table name="Flavonoids" class1={class1} class2={class2} class3={class3}/>
      </div>
      <div className='container'>
        <h1>Calculation of Gamma</h1>
        <Table name="Gamma" class1={gamma1} class2={gamma2} class3={gamma3}/>
      </div>
    </div>
  );
}

export default App;
