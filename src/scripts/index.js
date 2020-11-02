import $ from 'jquery';

import '../styles/index.css';

import api from './api';
import shoppingList from './shopping-list';

const main = function () {
  api.getItems()
    .then(res => res.json())
    .then(resJson => console.log(resJson)); // Step 3: error in log
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);