import React, { useState, useEffect } from 'react';
import './App.css';

const apiKey ="56ef1e19-1fcb-4350-98d1-8fa0184f4ea9"
const url='https://api.thecatapi.com/v1/images/search';

var data = JSON.stringify({
  "image_id": "9ccXTANkb",
  "sub_id": "your-user-1234"
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://api.thecatapi.com/v1/favourites");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("x-api-key", "DEMO-API-KEY");

xhr.send(data);

function App() {
  const [ catUrl, setCatUrl ] = useState("https://cdn2.thecatapi.com/images/9ch.jpg");

  useEffect(() => {
    getCat();
  }, []);


  const getCat = () => {
    console.log("Hello world");

    fetch(url, {
      headers: {
        "x-api-key": apiKey
      }
    })
      .then((res)=> res.json())
      .then((cats) => {
        console.log("Cats: ", cats);
        const catUrl = cats[0].url;

        setCatUrl(catUrl);
      });
    }
    console.log("Cat URL: ", catUrl);


    return (
      <div className="app">
        <h1> Feline find</h1>
        <img src={catUrl} alt=""/>
        <button onClick={getCat}> Get new cat </button>
    </div>
    );
  }
export default App;
