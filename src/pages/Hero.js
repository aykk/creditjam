import React, { useState } from 'react';


export const Hero = () => {

        const [object, setObject] = useState(null);
        const [loading, setLoading] = useState(false);
      
        const fetchRandomObject = () => { 
          setLoading(true);
          //fetch json object
          fetch('/data/creditcardsformatted.json')
            .then(response => response.json()) //convert response to json
            .then(data => {
            // select ranndom object data becomes json data
            const randomIndex = Math.floor(Math.random()*data.length);
            setObject(data[randomIndex]); //update to random obj
            setLoading(false); //hide loading
          })
          .catch(error => {
            console.error('Error fetching data; ', error);
            setLoading(false); //hide loading
          }); 
      };
      
        return (
          <div>
            <h1>Random Credit Card Displayer</h1>
            <button onClick={fetchRandomObject}>Get Random Credit Card</button>
            {loading && <p>Loading...</p>}
            {object && (
        <div>
          <h2>{object.Name}</h2>
          <p><strong>Issuer:</strong> {object.Issuer}</p>
          <p><strong>Category:</strong> {object.Category}</p>
          <p><strong>Credit Level:</strong> {object.CreditLevel}</p>
          <p><strong>APR:</strong> {object.APR}</p>
          <p><strong>Annual Fee:</strong> {object.AnnualFee}</p>
          <p><strong>Rewards:</strong></p>
          <ul>
            {Array.isArray(object.Rewards) ? (
              object.Rewards.map((reward, index) => (
                <li key={index}>{reward}</li>
              ))
            ) : (
              <li>{object.Rewards}</li>
            )}
          </ul>
          <p><strong>Credits:</strong></p>
          <ul>
            {Array.isArray(object.Credits) ? (
              object.Credits.map((credit, index) => (
                <li key={index}>{credit}</li>
              ))
            ) : (
              <li>{object.Credits}</li>
            )}
          </ul>
          <p><strong>Cashback Points:</strong> {object.CashbackPoints}</p>
          <p><strong>Signup Bonus:</strong> {object.SignupBonus}</p>
        </div>
      )}
      
          </div>
    );
      
}