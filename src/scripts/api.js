const BASE_URL = 'https://thinkful-list-api.herokuapp.com/Christina';

const getItems = function () {
  fetch(`${BASE_URL}/items`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .catch(err => {
      $('#js-error-message').text(`Something went wrong: ${err.message}`);
    });
};

export default {
  getItems
};