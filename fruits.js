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

/** This array contains the types of categories that a fruit can have.
 * @type {Array<string>}
 */
const typesOfCategories = [
  "category",
  "color",
  "texture",
  "flavor",
  "nutritional value",
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

const categoriesOfEachFruitMap = new Map();

categoriesOfEachFruitMap.set("Apple", [
  "pomes",
  "color: red",
  "flavor: sweet",
  "texture: crunchy",
  "texture: firm",
  "nutritional value: high fiber",
]);
categoriesOfEachFruitMap.set("Apricot", [
  "stone fruit",
  "color: orange",
  "nutritional value: high vitamin A",
]);
categoriesOfEachFruitMap.set("Avocado 🥑", [
  "tropical",
  "color: yellow/green",
  "flavor: neutral",
  "texture: soft",
  "texture: creamy",
  "nutritional value: high potassium",
  "nutritional value: high magnesium",
]);
categoriesOfEachFruitMap.set("Banana", [
  "tropical",
  "flavor: sweet",
  "flavor: neutral",
  "texture: soft",
  "texture: creamy",
  "nutritional value: high fiber",
  "nutritional value: high potassium",
  "nutritional value: high folic acid",
  "nutritional value: high magnesium",
]);
categoriesOfEachFruitMap.set("Bilberry", ["berries"]);
categoriesOfEachFruitMap.set("Blackberry", [
  "berries",
  "color: blue/purple",
  "texture: soft",
  "nutritional value: high vitamin K",
  "nutritional value: high antioxidants",
]);
categoriesOfEachFruitMap.set("Blackcurrant", [
  "berries",
  "color: blue/purple",
  "flavor: sour",
]);
categoriesOfEachFruitMap.set("Blueberry", [
  "berries",
  "color: blue/purple",
  "nutritional value: high vitamin K",
  "nutritional value: high antioxidants",
]);
categoriesOfEachFruitMap.set("Boysenberry", ["berries"]);
categoriesOfEachFruitMap.set("Cantaloupe", [
  "melons",
  "texture: juicy",
  "nutritional value: high vitamin A",
]);
categoriesOfEachFruitMap.set("Cherry", [
  "stone fruit",
  "color: red",
  "flavor: sweet",
  "texture: firm",
]);
categoriesOfEachFruitMap.set("Clementine", ["citrus"]);
categoriesOfEachFruitMap.set("Coconut", ["tropical", "flavor: neutral"]);
categoriesOfEachFruitMap.set("Cranberry", ["berries", "flavor: bitter"]);
categoriesOfEachFruitMap.set("Currant", ["berries"]);
categoriesOfEachFruitMap.set("Damson", ["stone fruit"]);
categoriesOfEachFruitMap.set("Date", ["stone fruit"]);
categoriesOfEachFruitMap.set("Dragonfruit", ["tropical"]);
categoriesOfEachFruitMap.set("Durian", ["tropical"]);
categoriesOfEachFruitMap.set("Elderberry", ["berries"]);
categoriesOfEachFruitMap.set("Feijoa", ["tropical"]);
categoriesOfEachFruitMap.set("Fig", ["nutritional value: high vitamin K"]);
categoriesOfEachFruitMap.set("Gooseberry", ["berries"]);
categoriesOfEachFruitMap.set("Grapefruit", [
  "citrus",
  "flavor: sour",
  "flavor: bitter",
]);
categoriesOfEachFruitMap.set("Guava", [
  "tropical",
  "texture: gritty",
  "nutritional value: high magnesium",
]);
categoriesOfEachFruitMap.set("Honeyberry", ["berries"]);
categoriesOfEachFruitMap.set("Honeydew", ["melons", "texture: juicy"]);
categoriesOfEachFruitMap.set("Huckleberry", ["berries"]);
categoriesOfEachFruitMap.set("Jabuticaba", ["exotic"]);
categoriesOfEachFruitMap.set("Jackfruit", ["tropical"]);
categoriesOfEachFruitMap.set("Juniper berry", ["berries"]);
categoriesOfEachFruitMap.set("Kiwi", []);
categoriesOfEachFruitMap.set("Kumquat", ["exotic"]);
categoriesOfEachFruitMap.set("Lemon", [
  "citrus",
  "color: yellow/green",
  "flavor: sour",
  "flavor: bitter",
]);
categoriesOfEachFruitMap.set("Lime", [
  "citrus",
  "color: yellow/green",
  "flavor: sour",
]);
categoriesOfEachFruitMap.set("Longan", ["exotic"]);
categoriesOfEachFruitMap.set("Loquat", ["stone fruit"]);
categoriesOfEachFruitMap.set("Lychee", ["stone fruit"]);
categoriesOfEachFruitMap.set("Mandarine", ["citrus"]);
categoriesOfEachFruitMap.set("Mango", [
  "tropical",
  "stone fruit",
  "flavor: sweet",
  "texture: soft",
  "texture: creamy",
  "nutritional value: high vitamin A",
]);
categoriesOfEachFruitMap.set("Mangosteen", ["exotic"]);
categoriesOfEachFruitMap.set("Melon", ["melons"]);
categoriesOfEachFruitMap.set("Miracle fruit", ["exotic"]);
categoriesOfEachFruitMap.set("Mulberry", ["berries"]);
categoriesOfEachFruitMap.set("Nance", ["exotic"]);
categoriesOfEachFruitMap.set("Nectarine", ["stone fruit"]);
categoriesOfEachFruitMap.set("Olive", ["stone fruit"]);
categoriesOfEachFruitMap.set("Orange", [
  "citrus",
  "color: orange",
  "flavor: sweet-sour",
  "texture: juicy",
  "texture: fleshy",
  "nutritional value: high folic acid",
]);
categoriesOfEachFruitMap.set("Papaya", [
  "tropical",
  "color: orange",
  "flavor: sweet",
  "texture: soft",
  "texture: creamy",
  "nutritional value: high vitamin C",
  "nutritional value: high potassium",
  "nutritional value: high folic acid",
]);
categoriesOfEachFruitMap.set("Passionfruit", ["tropical"]);
categoriesOfEachFruitMap.set("Peach", ["stone fruit", "texture: fleshy"]);
categoriesOfEachFruitMap.set("Pear", [
  "pomes",
  "color: yellow/green",
  "texture: crunchy",
  "texture: firm",
  "texture: gritty",
]);
categoriesOfEachFruitMap.set("Persimmon", ["stone fruit"]);
categoriesOfEachFruitMap.set("Pineapple", [
  "tropical",
  "flavor: sweet-sour",
  "texture: juicy",
]);
categoriesOfEachFruitMap.set("Pomegranate", [
  "color: red",
  "flavor: sweet-sour",
  "nutritional value: high antioxidants",
]);
categoriesOfEachFruitMap.set("Pomelo", ["citrus"]);
categoriesOfEachFruitMap.set("Quince", ["pomes"]);
categoriesOfEachFruitMap.set("Rambutan", ["tropical"]);
categoriesOfEachFruitMap.set("Raspberry", [
  "berries",
  "color: red",
  "texture: soft",
  "nutritional value: high antioxidants",
]);
categoriesOfEachFruitMap.set("Redcurrant", ["berries", "color: red"]);
categoriesOfEachFruitMap.set("Salak", ["tropical"]);
categoriesOfEachFruitMap.set("Salmonberry", ["berries"]);
categoriesOfEachFruitMap.set("Star fruit", ["tropical"]);
categoriesOfEachFruitMap.set("Strawberry", [
  "berries",
  "color: red",
  "nutritional value: high fiber",
  "nutritional value: high vitamin C",
  "nutritional value: high antioxidants",
  "nutritional value: high folic acid",
]);
categoriesOfEachFruitMap.set("Tamarillo", ["tropical"]);
categoriesOfEachFruitMap.set("Tamarind", ["tropical"]);
categoriesOfEachFruitMap.set("Tangerine", ["citrus", "flavor: sweet-sour"]);
categoriesOfEachFruitMap.set("Watermelon", [
  "melons",
  "texture: juicy",
  "texture: fleshy",
]);
categoriesOfEachFruitMap.set("Yuzu", ["citrus"]);

export {
  fruitsArray,
  fruitCategoriesArray,
  typesOfCategories,
  fruitCategoriesMap,
  categoriesOfEachFruitMap,
};
