/**
 *	Fruit Search Project
 *	Unit [11] of Springboard SWE Bootcamp
 *
 *	Solution by José Delpino
 *
 */

//** Global variables */

/** The main data structure is a map with the fruit categories as keys.
 * There are also two arrays: one with the fruit categories and
 * one with the fruits, both ordered alphabetically.
 */
import {
  fruitsArray,
  fruitCategoriesArray,
  typesOfCategories,
  fruitCategoriesMap,
} from "./fruits.js";

//** DOM elements */

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
  if (event !== undefined) {
    event.preventDefault(); // Prevents the input field default behavior.
  }
  clearSuggestions(); // Clears the suggestions list from the DOM.
  // Gets the input value
  const inputField = document.querySelector("#fruit-input");
  const inputVal = inputField.value.toLowerCase();
  // Filters the fruit array using the input value.
  let results = searchSuggestions(inputVal);
  // Shows or hides the suggestions list.
  if (inputVal !== "") {
    // Sorts the results by relevance and shows them.
    results = sortResults(results, inputVal);
    showSuggestions(results, inputVal);
    return;
  }
  hideSuggestions();
}

/** This function searches for the string in the fruit array
 * and in the fruit categories array.
 * @param {string} string - The string to search for.
 * @returns {Set.<Array.<string>>} - A set with the results.
 * @todo Implement this function.
 */
function searchSuggestions(string) {
  let resultsArray = [];
  // Gets fruit suggestions from the fruit array and label them as fruits.
  // Then adds them to the results array.
  const resultsFromFruits = searchFruits(string);
  resultsArray.push(...resultsFromFruits);
  // Gets category suggestions from the category array and labels
  // them as categories. Then adds them to the results array.
  const relevantCategories = searchrelevantCategories(string);
  resultsArray.push(...relevantCategories);
  // Gets fruit suggestions from the categories/fruit map
  // and label them as fruits. Then adds them to the results array.
  const resultsFromCategoriesMap = searchRelatedFruits(
    string,
    relevantCategories
  );
  resultsArray.push(...resultsFromCategoriesMap);
  // Creates the results set and adds the no results message if needed.
  const results = new Set(resultsArray);
  if (resultsArray.length === 0) {
    results.add(["No results available", "no-results-message"]);
  }
  return results;
}

function searchFruits(string) {
  return fruitsArray.reduce((resultsFromFruits, fruit) => {
    if (fruit.toLowerCase().includes(string)) {
      resultsFromFruits.push([fruit, "fruit-suggestion"]);
    }
    return resultsFromFruits;
  }, []);
}

function searchrelevantCategories(string) {
  return fruitCategoriesArray.reduce((relevantCategories, category) => {
    if (category.toLowerCase().includes(string)) {
      relevantCategories.push([category, "category-suggestion"]);
      return relevantCategories;
    }
    return relevantCategories;
  }, []);
}

function searchRelatedFruits(string, relevantCategories) {
  if (relevantCategories.length === 0) {
    return [];
  }
  const relatedFruits = relevantCategories.reduce((relatedFruits, category) => {
    let fruitsFromCategory = fruitCategoriesMap.get(category[0]);
    if (fruitsFromCategory === undefined) {
      return relatedFruits;
    }
    fruitsFromCategory = fruitsFromCategory.reduce(
      (fruitsFromCategory, fruit) => {
        if (fruit !== string) {
          fruitsFromCategory.push(["related: " + fruit, "related-fruit"]);
        }
        return fruitsFromCategory;
      },
      []
    );
    relatedFruits.push(...fruitsFromCategory);
    return relatedFruits;
  }, []);
  return relatedFruits;
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
    suggestion.textContent = result[0];
    suggestion.classList.add(result[1]);
    suggestionsList.appendChild(suggestion);
  });
  suggestions.appendChild(suggestionsList);
}

function isCategory(result) {
  return typesOfCategories.some((type) => {
    return result.includes(type);
  });
}

function isNoResult(result) {
  return result[0] === "No results available";
}

function isFruit(result) {
  return fruitsArray.includes(result);
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
  const selectedSuggestionElement = event.target;
  const selectedSuggestionClass = event.target.classList;
  console.log("selectedSuggestion", selectedSuggestionElement);
  console.log("selectedSuggestionClass", selectedSuggestionClass);
  console.log("event.target", event.target);
  console.log("className", selectedSuggestionElement.className);
  if (selectedSuggestionElement === "No results available") {
    console.log("Results available");
    console.log("input.value", input.value);
    console.log("clearSuggestions", "hideSuggestions");
    clearSuggestions();
    hideSuggestions;
    return;
  }
  if (selectedSuggestionClass.contains("fruit")) {
    console.log("isFruit");
    console.log("hideSuggestions");
    hideSuggestions();
  } else {
    console.log("isCategory");
    console.log("searchHandler");
    searchHandler(undefined);
  }
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
