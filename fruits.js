/**
 *	Fruit Search Project
 *	Unit [11] of Springboard SWE Bootcamp
 *
 *	Solution by José Delpino
 *
 */

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
const fruitCategoriesArray = [
  "category: berries",
  "category: citrus",
  "category: tropical",
  "category: stone fruits",
  "category: melons",
  "category: pomes",
  "category: exotic",
  "color: red",
  "color: yellow/green",
  "color: orange",
  "color: blue/purple",
  "flavor: sweet",
  "flavor: sour",
  "flavor: sweet-sour",
  "flavor: bitter",
  "flavor: neutral",
  "nutritional value: high fiber",
  "nutritional value: high vitamin C",
  "nutritional value: high potassium",
  "nutritional value: high vitamin A",
  "nutritional value: high vitamin K",
  "nutritional value: high antioxidants",
  "nutritional value: high folic acid",
  "nutritional value: high magnesium",
  "texture: soft",
  "texture: crunchy",
  "texture: juicy",
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

export { fruitsArray, fruitCategoriesArray, fruitCategoriesMap };
