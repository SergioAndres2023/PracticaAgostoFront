import { useState, useContext, useEffect } from 'react';

import './Home.css';

function Home() {
 
  async function onClickHandler(e) {
   
    try {
      await fetch('http://localhost:3001/pictures', {
        //route: `${env.HOST}${e.target.value}`,
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify({ 'name': 'hola'}),
      });
    } catch
    (error) {
      return;
    }

    return;
  }

  return (
    <>
        <div class="mb-3">
          <input class="form-control" type="file" id="formFile"></input>
        </div>
        <input class="btn btn-primary" type="submit"  onClick={(e) => onClickHandler(e)} value="Submit"></input>
    </>
  );

}

export default Home;
