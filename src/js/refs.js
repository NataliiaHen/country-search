export default function getRefs() {
    return {
      inputSearch: document.querySelector('input#search-box'),
      countryList: document.querySelector('.country-list'),
      countryInfo: document.querySelector('.country-info'),
    };
}