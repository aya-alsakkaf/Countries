const fs = require('fs');
// Make the API request
const url = "https://restcountries.com/v3.1/all";

fetch(url)
  .then(response => response.json())
  .then(data => {
    const modifiedData = data.map(countryData => ({
      name: countryData.name.official,
      flags: countryData.flags.png,
      capital: countryData.capital?.[0] || null,
      region: countryData.region,
      subregion: countryData.subregion,
      population: countryData.population,
      map: countryData.maps.googleMaps
    }));
    fs.writeFileSync('./countries-app/data/countries.ts', JSON.stringify(modifiedData, null, 4));
  })




