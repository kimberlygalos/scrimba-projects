import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js';

const appSettings = {
  databaseURL:
    'https://add-to-cart-54c82-default-rtdb.asia-southeast1.firebasedatabase.app/',
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, 'shoppingList');
const shoppingList = document.getElementById('shopping-list');

const addBTn = document.getElementById('add-button');
const inputField = document.getElementById('input-field');

function appendList(item) {
  let itemID = item[0];
  let itemValue = item[1];
  const listItem = document.createElement('li');
  listItem.textContent = itemValue;

  listItem.addEventListener('click', () => {
    let exactLocationOfItem = ref(database, `shoppingList/${itemID}`);
    remove(exactLocationOfItem);
  });

  shoppingList.appendChild(listItem);
}

function clearInputFieldEl() {
  inputField.value = '';
}

function clearShoppingList() {
  shoppingList.innerHTML = '';
}

addBTn.addEventListener('click', () => {
  let inputValue = inputField.value;
  push(shoppingListInDB, inputValue);
  clearInputFieldEl();
});

onValue(shoppingListInDB, (snapshot) => {
  if (snapshot.exists()) {
    let itemArray = Object.entries(snapshot.val());
    clearShoppingList();
    for (let i = 0; i < itemArray.length; i++) {
      let currentItem = itemArray[i];
      let currentItemID = currentItem[0];
      let currentItemValue = currentItem[1];
      appendList(currentItem);
    }
  } else {
    shoppingList.innerHTML = 'No items here...yet';
  }
});

// appSetting: https://add-to-cart-54c82-default-rtdb.asia-southeast1.firebasedatabase.app//
