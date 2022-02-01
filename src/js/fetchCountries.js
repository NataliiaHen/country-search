function fetchCountries(letterSearch) {
  return fetch(
    `https://restcountries.com/v2/name/${letterSearch}?fields=name,capital,population,languages,flags`,
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .catch(error => console.log(error));
}

export default { fetchCountries };
