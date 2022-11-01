import React, { Component } from "react";
import "./App.css";


let j = -1;

class App extends Component {
  
  render() {
    const nextClick = () => {
      j++
      if (j > 99) {
        j = 0
      }
      document.getElementById("counter").innerHTML = `${j + 1}/203`
      fetch("https://covid-19-api-production-91c7.up.railway.app/covid")
        .then((res) => res.json())
        .then((res) => {
          let countryArr = [];
          for (let i in res) {
            countryArr.push(res[i]);
          }
          document.querySelector("#CountryName").innerHTML = countryArr[j].country;
          document.querySelector("#Population").innerHTML = `Population: ${countryArr[j].population}`;
          document.querySelector("#CovidCases").innerHTML = `Covid Cases: ${countryArr[j].confirmed}`;
          document.querySelector("#Deaths").innerHTML = `Covid Deaths: ${countryArr[j].deaths}`;
          document.querySelector("#LifeExpectancy").innerHTML = `Life Expectancy: ${countryArr[j].life_expectancy
          }`;
          console.log(countryArr[j])
        })
    };

    const backClick = () => {
      j--
      if (j < 0) {
        j = 99
      }
      document.getElementById("counter").innerHTML = `${j + 1}/203`
      fetch("https://covid-19-api-production-91c7.up.railway.app/covid")
        .then((res) => res.json())
        .then((res) => {
          let countryArr = [];
          for (let i in res) {
            countryArr.push(res[i]);
          }
          document.querySelector("#CountryName").innerHTML = countryArr[j].country;
          document.querySelector("#Population").innerHTML = `Population: ${countryArr[j].population}`;
          document.querySelector("#CovidCases").innerHTML = `Covid Cases: ${countryArr[j].confirmed}`;
          document.querySelector("#Deaths").innerHTML = `Covid Deaths: ${countryArr[j].deaths}`;
          document.querySelector("#LifeExpectancy").innerHTML = `Life Expectancy: ${countryArr[j].life_expectancy
          }`;
          console.log(countryArr[j])
        })
    };

    const randomClick = () => {
      j = Math.floor(Math.random() * 99)
      document.getElementById("counter").innerHTML = `${j + 1}/203`
      fetch("https://covid-19-api-production-91c7.up.railway.app/covid")
        .then((res) => res.json())
        .then((res) => {
          let countryArr = [];
          for (let i in res) {
            countryArr.push(res[i]);
          }
          document.querySelector("#CountryName").innerHTML = countryArr[j].country;
          document.querySelector("#Population").innerHTML = `Population: ${countryArr[j].population}`;
          document.querySelector("#CovidCases").innerHTML = `Covid Cases: ${countryArr[j].confirmed}`;
          document.querySelector("#Deaths").innerHTML = `Covid Deaths: ${countryArr[j].deaths}`;
          document.querySelector("#LifeExpectancy").innerHTML = `Life Expectancy: ${countryArr[j].life_expectancy
          }`;
          console.log(countryArr[j])
        })
    };
    return (
      <div className="App">
        <h1>Country Covid Data</h1>
        <h2 onClick={nextClick} id="nextButton">Next</h2>
        <h2 onClick={randomClick} id="randomButton">Random Country</h2>
        <h2 onClick={backClick} id="backButton">Back</h2>
        <h3 id="counter"></h3>
        <div id="statsCont">
          <h2 id="CountryName" />
          <h3 id="Population" />
          <h3 id="CovidCases"/>
          <h3 id="Deaths" />
          <h3 id="LifeExpectancy"/>
        </div>
      </div>
    );
  }
}

export default App;