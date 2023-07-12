/**
 *	Fruit Search Project
 *	Unit [11] of Springboard SWE Bootcamp
 *
 *	Solution by José Delpino
 *
 */

//** Global variables */
import {
  fruitsArray,
  fruitCategoriesArray,
  fruitCategoriesMap,
} from "./fruits.js";

/** @type {HTMLInputElement} */
const input = document.querySelector("#fruit-input");

/** @type {HTMLUListElement} */
const suggestions = document.querySelector(".suggestions");

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
 */
function searchHandler(event) {
  event.preventDefault(); // Prevents the input field default behavior.
  clearSuggestions(); // Clears the suggestions list from the DOM.
  // Gets the input value
  const inputField = document.querySelector("#fruit-input");
  const inputVal = inputField.value.toLowerCase();
  // Filters the fruit array using the input value.
  let results = searchFruits(inputVal);
  // Shows or hides the suggestions list.
  if (results.size !== 0 && inputVal !== "") {
    // Sorts the results by relevance and shows them.
    results = sortResults(results, inputVal);
    showSuggestions(results, inputVal);
    return;
  } else if (inputVal === "") {
    hideSuggestions();
    return;
  }
  if (inputVal !== "") {
    const noResultsMessage = "No results available";
    const noResults = [noResultsMessage];
    showSuggestions(noResults, inputVal);
  }
}

/** This function searches for the string in the fruit array
 * and in the fruit categories array.
 * @param {string} string - The string to search for.
 * @returns {Set.<string>} - A set with the results.
 * @todo Implement this function.
 */
function searchFruits(string) {
  const resultsFromFruits = fruitsArray.filter((fruit) =>
    fruit.toLowerCase().includes(string)
  );
  const relevantCategories = fruitCategoriesArray.filter((category) =>
    category.toLowerCase().includes(string)
  );
  const resultsFromCategories = relevantCategories.reduce(
    (fruits, category) => {
      const fruitsFromCategory = fruitCategoriesMap.get(category);
      return fruits.concat(fruitsFromCategory);
    },
    []
  );
  let results = new Set([
    ...resultsFromFruits,
    ...resultsFromCategories,
    ...relevantCategories,
  ]);
  return results;
}

/** This funtion turns the results set into an array and sorte it by relevance.
 * @param {Set.<string>} results - The results to sort.
 * @param {string} inputVal - The value of the input field.
 * @returns {Array.<string>} - The sorted results in the form of an array.
 * @todo Implement this function.
 */
function sortResults(results, inputVal) {
  return results;
}

/** This function shows the suggestions in the suggestions list.
 * @param {Array.<string>} results - The results to show.
 * @param {string} inputVal - The value of the input field.
 * @returns {undefined}
 * @todo Implement this function.
 */
function showSuggestions(results, inputVal) {
  addSuggestionsToDOM(results, inputVal);
  suggestions.classList.remove("visually-hidden");
}

/** This function hides the suggestions list.
 * @returns {undefined}
 */
function hideSuggestions() {
  suggestions.classList.add("visually-hidden");
  clearSuggestions();
}

/** This function adds the suggestions to the DOM.
// FOR NOW IT TAKE A SET BUT IT EVENTUALLY WILL DO IT WITH A SORTED ARRAY
* @param {Array.<string>} results - The results to add.
 * @param {string} inputVal - The value of the input field.
 * @returns {undefined}
 */
function addSuggestionsToDOM(results, inputVal) {
  const suggestionsList = document.createElement("ul");
  results.forEach((result) => {
    const suggestion = document.createElement("li");
    suggestion.textContent = result;
    suggestionsList.appendChild(suggestion);
  });
  suggestions.appendChild(suggestionsList);
}

/** This function clears the suggestions list.
 * @returns {undefined}
 * @todo Implement this function.
 */
function clearSuggestions() {
  // suggestions.outerHTML = "";
  suggestions.innerHTML = "";
}

/** This function uses the suggestion selected by the user.
 * @param {Event} event - The event object.
 * @returns {undefined}
 * @todo Implement this function.
 */
function useSuggestion(event) {
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
