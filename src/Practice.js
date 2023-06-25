// import './practice.css'

// let name="charan";
// function Practice(){
//     return(
//         <>
//             {/* <nav>
//                 <li>Home</li>
//                 <li>About</li>
//                 <li>Contact us.</li>

//             </nav>
//             <br/>
//             <b><h1>Hello  {name} !</h1></b> 

//             <div className='container'>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, laborum eius illo in neque reprehenderit magni ipsam, sint eos facilis vel incidunt nemo consectetur sapiente at. Omnis similique quod cum repellendus facere ducimus rem?</p>
//             </div> */}

            

//         </>
//     );
// }

// export default Practice;

import React, { useState } from 'react';

const countries = {
  USA: ['New York', 'Los Angeles', 'Chicago'],
  UK: ['London', 'Manchester', 'Birmingham'],
  Australia: ['Sydney', 'Melbourne', 'Brisbane']
};

const App = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [cities, setCities] = useState([]);

  const handleCountryChange = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);
    setCities(countries[country] || []);
  };

  return (
    <div>
      <label htmlFor="country">Select a country:</label>
      <select id="country" value={selectedCountry} onChange={handleCountryChange}>
        <option value="">--Select--</option>
        {Object.keys(countries).map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>

      <br />

      {selectedCountry && (
        <div>
          <label htmlFor="city">Select a city:</label>
          <select id="city">
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default App;
