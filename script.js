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

//** Fruit categories array */
/** @type {Array<string>} */
const fruitCategories = [
  "berries",
  "citrus",
  "tropical",
  "stone fruit",
  "melons",
  "pomes",
  "exotic",
  "color: red",
  "color: yellow/green",
  "color: orange",
  "color: blue/purple",
  "flavor: sweet",
  "flavor: sour",
  "flavor: sweet-sour",
  "texture: soft",
  "texture: crunchy",
  "texture: juicy",
  "nutritional value: high fiber",
  "nutritional value: high vitamin C",
  "nutritional value: high potassium",
  "flavor: bitter",
  "flavor: neutral",
  "nutritional value: high vitamin A",
  "nutritional value: high vitamin K",
  "nutritional value: high antioxidants",
  "nutritional value: high folic acid",
  "nutritional value: high magnesium",
  "texture: firm",
  "texture: creamy",
  "texture: fleshy",
  "texture: gritty",
];

/** This map contains the fruit categories and the fruits that belong to each category.
 * The categories are not exclusive */
/** @type {Map<string, Array<string>>} */
const fruitCategoriesMap = new Map();
fruitCategoriesMap.set("berries", [
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
fruitCategoriesMap.set("citrus", [
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
fruitCategoriesMap.set("tropical", [
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
fruitCategoriesMap.set("stone fruit", [
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
fruitCategoriesMap.set("melons", [
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
]);
fruitCategoriesMap.set("pomes", ["Apple", "Pear", "Quince"]);
fruitCategoriesMap.set("exotic", [
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
fruitCategoriesMap.set("color: red", [
  "Apple",
  "Cherry",
  "Strawberry",
  "Raspberry",
  "Pomegranate",
  "Redcurrant",
]);
fruitCategoriesMap.set("color: yellow/green", [
  "Lemon",
  "Lime",
  "Avocado 🥑",
  "Kiwi",
  "Green apple",
  "Pear",
  "Grapes",
]);
fruitCategoriesMap.set("color: orange", [
  "Orange",
  "Mandarin",
  "Apricot",
  "Papaya",
]);
fruitCategoriesMap.set("color: blue/purple", [
  "Blueberry",
  "Blackberry",
  "Plum",
  "Blackcurrant",
]);
fruitCategoriesMap.set("flavor: sweet", [
  "Apple",
  "Banana",
  "Mango",
  "Papaya",
  "Cherry",
  "Grapes",
]);
fruitCategoriesMap.set("flavor: sour", [
  "Lemon",
  "Lime",
  "Grapefruit",
  "Kiwi",
  "Raspberries",
  "Blackcurrant",
]);
fruitCategoriesMap.set("flavor: sweet-sour", [
  "Orange",
  "Pineapple",
  "Pomegranate",
  "Tangerine",
]);
fruitCategoriesMap.set("flavor: bitter", [
  "Grapefruit",
  "Cranberry",
  "Green apple",
  "Lemon",
]);
fruitCategoriesMap.set("flavor: neutral", ["Avocado 🥑", "Banana", "Coconut"]);
fruitCategoriesMap.set("texture: soft", [
  "Banana",
  "Avocado 🥑",
  "Mango",
  "Papaya",
  "Raspberry",
  "Blackberry",
]);
fruitCategoriesMap.set("texture: crunchy", ["Apple", "Pear", "Grapes"]);
fruitCategoriesMap.set("texture: juicy", [
  "Orange",
  "Watermelon",
  "Pineapple",
  "Cantaloupe",
  "Honeydew",
]);
fruitCategoriesMap.set("texture: firm", ["Apple", "Pear", "Cherry", "Plum"]);
fruitCategoriesMap.set("texture: creamy", [
  "Banana",
  "Avocado 🥑",
  "Mango",
  "Papaya",
]);
fruitCategoriesMap.set("texture: fleshy", [
  "Orange",
  "Peach",
  "Kiwi",
  "Watermelon",
]);
fruitCategoriesMap.set("texture: gritty", ["Pear", "Guava"]);
fruitCategoriesMap.set("nutritional value: high fiber", [
  "Apple",
  "Banana",
  "Oranges",
  "Strawberry",
]);
fruitCategoriesMap.set("nutritional value: high vitamin C", [
  "Kiwi",
  "Oranges",
  "Strawberry",
  "Papaya",
]);
fruitCategoriesMap.set("nutritional value: high potassium", [
  "Banana",
  "Avocado 🥑",
  "Papaya",
]);
fruitCategoriesMap.set("nutritional value: high vitamin A", [
  "Mango",
  "Apricot",
  "Cantaloupe",
]);
fruitCategoriesMap.set("nutritional value: high vitamin K", [
  "Kiwi",
  "Blackberry",
  "Blueberry",
  "Fig",
]);
fruitCategoriesMap.set("nutritional value: high antioxidants", [
  "Blueberry",
  "Blackberry",
  "Strawberry",
  "Raspberry",
  "Pomegranate",
]);
fruitCategoriesMap.set("nutritional value: high folic acid", [
  "Orange",
  "Banana",
  "Papaya",
  "Strawberry",
]);
fruitCategoriesMap.set("nutritional value: high magnesium", [
  "Banana",
  "Avocado 🥑",
  "Guava",
]);

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
  const inputVal = inputField.value.toLowerCase();
  // Filters the fruit array using the input value.
  const results = searchFruits(inputVal);
  console.log(inputVal);
  console.log(results);
  // Shows the suggestions in the suggestions list.
  showSuggestions(results, inputVal);
}

/** This function searches for the string in the fruit array
 * and in the fruit categories array.
 * @param {string} string - The string to search for.
 * @returns {Array.<string>} - An array with the results.
 * @todo Implement this function.
 */
function searchFruits(string) {
  const resultsFromFruits = fruitsArray.filter((fruit) =>
    fruit.toLowerCase().includes(string)
  );
  const relevantCategories = fruitCategories.filter((category) =>
    category.toLowerCase().includes(string)
  );
  const resultsFromCategories = relevantCategories.reduce(
    (fruits, category) => {
      const fruitsFromCategory = fruitCategoriesMap.get(category);
      return fruits.concat(fruitsFromCategory);
    },
    []
  );
  let results = new Set([...resultsFromFruits, ...resultsFromCategories]);
  return results;
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
