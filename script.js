/**
 *	Fruit Search Project
 *	Unit [11] of Springboard SWE Bootcamp
 *
 *	Solution by José Delpino
 *
 */

//** Global variables */
/** @type {HTMLInputElement} */
const input = document.querySelector("#fruit-input");

/** @type {HTMLUListElement} */
const suggestions = document.querySelector(".suggestions ul");

/** @type {Array.<string>} */
const fruitsArray = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

/** This map contains the fruit categories and the fruits that belong to each category.
 * The categories are not exclusive */
/** @type {Map<string, Array<string>>} */
const fruitCategories = new Map();
fruitCategories.set("berries", [
  "Bilberry",
  "Blackberry",
  "Blueberry",
  "Boysenberry",
  "Raspberry",
  "Strawberry",
  "Mulberry",
  "Cranberry",
  "Gooseberry",
  "Elderberry",
  "Blackcurrant",
  "Redcurrant",
  "Currant",
  "Salmonberry",
  "Huckleberry",
  "Juniper berry",
  "Honeyberry",
]);
fruitCategories.set("citrus", [
  "Lemon",
  "Lime",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Yuzu",
  "Grapefruit",
  "Pomelo",
]);
fruitCategories.set("tropical", [
  "Banana",
  "Coconut",
  "Mango",
  "Papaya",
  "Pineapple",
  "Star fruit",
  "Guava",
  "Dragonfruit",
  "Passionfruit",
  "Durian",
  "Jackfruit",
  "Avocado 🥑",
  "Rambutan",
  "Salak",
  "Tamarillo",
  "Tamarind",
  "Feijoa",
]);
fruitCategories.set("stone fruit", [
  "Apricot",
  "Cherry",
  "Peach",
  "Plum",
  "Nectarine",
  "Olive",
  "Persimmon",
  "Date",
  "Mango",
  "Lychee",
  "Loquat",
  "Damson",
]);
fruitCategories.set("melons", [
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
]);
fruitCategories.set("pomes", ["Apple", "Pear", "Quince"]);
fruitCategories.set("exotic", [
  "Miracle fruit",
  "Jabuticaba",
  "Jambul",
  "Custard apple",
  "Longan",
  "Mangosteen",
  "Kumquat",
  "Nance",
  "Soursop",
]);

// Printing

//** Main program */
initializeApp();

//** Subroutines */

/**
 * This fuctions initializes the app and loads
 * the info saved in local storage in case it is available.
 *
 * @param {paramType} paramName - Description of the parameter.
 * @returns {returnType} Description of the return value.
 */
function initializeApp() {
  loadStettings();
  loadStorage();
  registerEventListeners();
}

/** Main program subroutines */

/** This function registers the event listeners for the app.
 * @returns {undefined}
 */
function registerEventListeners() {
  input.addEventListener("keyup", searchHandler);
  suggestions.addEventListener("click", useSuggestion);
}

/** This function handles the search event.
 * @param {Event} event - The event object.
 * @returns {undefined}
 * @todo Implement this function.
 */
function searchHandler(event) {
  event.preventDefault(); // Prevents the input field default behavior.
  // Gets the input value
  const inputField = document.querySelector("#fruit-input");
  const inputVal = inputField.value;
  // Filters the fruit array using the input value.
  const results = searchFruits(inputVal);
  console.log(inputVal);
  console.log(results);
  // Shows the suggestions in the suggestions list.
  showSuggestions(results, inputVal);
}

/** This function searches for the string in the fruit array.
 * @param {string} string - The string to search for.
 * @returns {Array.<string>} - An array with the results.
 * @todo Implement this function.
 */
function searchFruits(string) {
  return fruitsArray.filter((fruit) => fruit.includes(string));
}

/** This function shows the suggestions in the suggestions list.
 * @param {Array.<string>} results - The results to show.
 * @param {string} inputVal - The value of the input field.
 * @returns {undefined}
 * @todo Implement this function.
 */
function showSuggestions(results, inputVal) {
  // TODO
}

/** This function uses the suggestion selected by the user.
 * @param {Event} event - The event object.
 * @returns {undefined}
 * @todo Implement this function.
 */
function useSuggestion(event) {
  // TODO
}

/** This function clears the suggestions list.
 * @returns {undefined}
 * @todo Implement this function.
 */
function clearSuggestions() {
  // TODO
}

//** Settings subroutines */

/** This function loads the settings from local storage.
 * @returns {undefined}
 * @todo Implement this function.
 */
function loadStettings() {
  // TODO
}

/** This function creates the settings in local storage.
 * @returns {undefined}
 * @todo Implement this function.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
 */

//** Local storage subroutines */

/** This function loads the data from local storage.
 * @returns {undefined}
 * @todo Implement this function.
 */
function loadStorage() {
  // TODO
}

/** This function saves the data to local storage.
 * @returns {undefined}
 * @todo Implement this function.
 */
function saveStorage() {
  // TODO
}

/** This function clears the data from local storage.
 * @returns {undefined}
 * @todo Implement this function.
 */
function clearStorage() {
  // TODO
}

/** This function checks if local storage is available.
 * @returns {boolean} - True if local storage is available, false otherwise.
 * @todo Implement this function.
 */
function isStorageAvailable() {
  // TODO
}

/** This function checks if local storage is empty.
 * @returns {boolean} - True if local storage is empty, false otherwise.
 * @todo Implement this function.
 */

function isStorageEmpty() {
  // TODO
}

/** This function checks if local storage is full.
 * @returns {boolean} - True if local storage is full, false otherwise.
 * @todo Implement this function.
 */
function isStorageFull() {
  // TODO
}

/** This function checks if local storage is supported.
 * @returns {boolean} - True if local storage is supported, false otherwise.
 * @todo Implement this function.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
 */
function isStorageSupported() {
  // TODO
}
