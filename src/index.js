import './sass/main.scss';
import Notiflix from 'notiflix';
import countryCardTpt from './templates/country-card.hbs';
import countryListTpt from './templates/countries-list.hbs';
import API from './js/fetchCountries';
import getRefs from './js/refs';
const debounce = require('lodash.debounce');

const refs = getRefs();
const DEBOUNCE_DELAY = 300;

function onSearch(e) {
  e.preventDefault();
  let letterSearch = e.target.value.trim();

  API.fetchCountries(letterSearch)
    .then(countries => {
      clearData();
      if (countries.length === 1) {
        refs.countryInfo.innerHTML = countryCardTpt(countries[0]);
      }
      if ((countries.length > 1) && (countries.length <= 10)) {
        refs.countryList.innerHTML = countryListTpt(countries)
      }
      if (countries.length > 10) {
        Notiflix.Notify.info('Too many matches found. Please enter a more specific name');
      }
    })
    .catch(error => {
      clearData();
     Notiflix.Notify.failure('Oops, there is no country with that name');
    });
}

function clearData() {
  refs.countryInfo.innerHTML = '';
  refs.countryList.innerHTML = '';
}

refs.inputSearch.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));
