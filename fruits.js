/**
 *	Fruit Search Project
 *	Unit [11] of Springboard SWE Bootcamp
 *
 *	Solution by José Delpino
 *
 */

/* Part of this maps and arrays were taken created using generative AI
with GPT-4 from OpenAI and Claude 2 from Anthropic. */

/** @type {Array.<string>} */
const fruitsArray = [
  "Apple",
  "Apricot",
  "Avocado",
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
  "Custard Apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Grapefruit",
  "Green Apple",
  "Guava",
  "Honeyberry",
  "Honeydew Melon",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwi",
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
  "Tomato",
  "Yuzu",
];

//** Fruit categories array */
/** @type {Array<string>} */
const fruitCategoriesArray = [
  "category: berries",
  "category: citrus",
  "category: stone fruits",
  "category: melons",
  "category: pomes",
  "category: exotic",
  "category: tropical",
  "category: vine fruits",
  "category: drupes",
  "category: wild",
  "category: vegetable-fruits",
  "climate: mediterranean",
  "climate: temperate",
  "climate: subtropical",
  "color: red",
  "color: yellow/green",
  "color: orange",
  "color: blue/purple",
  "color: multi-colored",
  "color: brown",
  "color: black/dark purple",
  "flavor: sweet",
  "flavor: sour",
  "flavor: sweet-sour",
  "flavor: bitter",
  "flavor: neutral",
  "flavor: mild",
  "flavor: spicy",
  "nutritional value: highly balanced",
  "nutritional value: high fiber",
  "nutritional value: high potassium",
  "nutritional value: high calcium",
  "nutritional value: high vitamin A",
  "nutritional value: high vitamin B",
  "nutritional value: high vitamin C",
  "nutritional value: high vitamin E",
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
  "texture: seedless",
  "texture: seeded",
  "texture: skin edible",
  "texture: skin not edible",
  "shape: round",
  "shape: oval",
  "size: small",
  "size: large",
  "season: summer",
  "season: winter",
  "used in: desserts",
  "used in: savory dishes",
  "used in: alcoholic drinks",
  "used in: jams/jellies",
  "used in: salads",
  "shelf life: long shelf life",
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
  "climate",
  "shape",
  "size",
  "season",
  "used in",
  "shelf life",
];

/** This map contains the fruit categories and the fruits that belong to each category.
 * The categories are not exclusive */
/** @type {Map<string, Array<string>>} */
const fruitsByCategory = new Map();
fruitsByCategory.set("berries", [
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
  "Marionberry",
]);
fruitsByCategory.set("citrus", [
  "Lemon",
  "Lime",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Yuzu",
  "Grapefruit",
  "Pomelo",
  "Satsuma",
  "Persimmon",
]);
fruitsByCategory.set("tropical", [
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
  "Avocado",
  "Rambutan",
  "Salak",
  "Tamarillo",
  "Tamarind",
  "Feijoa",
  "Plantain",
  "Custard Apple",
  "Lychee",
]);
fruitsByCategory.set("stone fruits", [
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
fruitsByCategory.set("melons", [
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
]);
fruitsByCategory.set("pomes", ["Apple", "Pear", "Quince", "Loquat"]);
fruitsByCategory.set("exotic", [
  "Miracle fruit",
  "Jabuticaba",
  "Jambul",
  "Custard Apple",
  "Longan",
  "Mangosteen",
  "Kumquat",
  "Nance",
  "Soursop",
  "Persimmon",
]);
fruitsByCategory.set("color: red", [
  "Apple",
  "Cherry",
  "Strawberry",
  "Raspberry",
  "Pomegranate",
  "Redcurrant",
  "Mulberry",
  "Nectarine",
]);
fruitsByCategory.set("color: yellow/green", [
  "Lemon",
  "Lime",
  "Avocado",
  "Kiwi",
  "Green Apple",
  "Pear",
  "Grape",
  "Cucumber",
  "Olive",
  "Pineapple",
  "Honeydew",
  "Quince",
]);
fruitsByCategory.set("color: brown", ["Coconut", "Date"]);
fruitsByCategory.set("color: orange", [
  "Orange",
  "Mandarine",
  "Apricot",
  "Papaya",
  "Satsuma",
  "Nectarine",
]);
fruitsByCategory.set("color: blue/purple", [
  "Blueberry",
  "Blackberry",
  "Plum",
  "Blackcurrant",
  "Marionberry",
  "Damson",
  "Elderberry",
  "Bilberry",
  "Honeyberry",
]);
fruitsByCategory.set("color: black/dark purple", [
  "Blackberry",
  "Blackcurrant",
  "Mulberry",
  "Elderberry",
  "Olive",
]);
fruitsByCategory.set("flavor: sweet", [
  "Apple",
  "Banana",
  "Mango",
  "Papaya",
  "Cherry",
  "Grape",
  "Marionberry",
  "Plantain",
  "Mulberry",
  "Bilberry",
  "Honeyberry",
  "Lychee",
]);
fruitsByCategory.set("flavor: sour", [
  "Lemon",
  "Lime",
  "Grapefruit",
  "Kiwi",
  "Raspberry",
  "Blackcurrant",
]);
fruitsByCategory.set("flavor: sweet-sour", [
  "Orange",
  "Pineapple",
  "Pomegranate",
  "Tangerine",
  "Persimmon",
  "Elderberry",
  "Gooseberry",
  "Kiwi",
]);
fruitsByCategory.set("flavor: bitter", [
  "Grapefruit",
  "Cranberry",
  "Green Apple",
  "Lemon",
  "Olive",
  "Lime",
  "Pomegranate",
]);
fruitsByCategory.set("flavor: neutral", [
  "Avocado",
  "Banana",
  "Coconut",
  "Plantain",
]);
fruitsByCategory.set("texture: soft", [
  "Banana",
  "Avocado",
  "Mango",
  "Papaya",
  "Raspberry",
  "Blackberry",
  "Marionberry",
  "Plantain",
  "Fig",
  "Date",
  "Persimmon",
  "Mulberry",
  "Bilberry",
  "Custard Apple",
  "Elderberry",
  "Gooseberry",
  "Honeyberry",
  "Kiwi",
  "Lychee",
  "Olive",
  "Coconut",
  "Pear",
]);
fruitsByCategory.set("texture: crunchy", [
  "Apple",
  "Pear",
  "Grape",
  "Pomegranate",
  "Pear",
]);
fruitsByCategory.set("texture: juicy", [
  "Orange",
  "Watermelon",
  "Pineapple",
  "Cantaloupe",
  "Honeydew",
  "Satsuma",
]);
fruitsByCategory.set("texture: firm", [
  "Apple",
  "Pear",
  "Cherry",
  "Plum",
  "Plantain",
  "Coconut",
  "Cucumber",
  "Pomegranate",
  "Pineapple",
]);
fruitsByCategory.set("texture: creamy", [
  "Banana",
  "Avocado",
  "Mango",
  "Papaya",
]);
fruitsByCategory.set("texture: fleshy", [
  "Orange",
  "Peach",
  "Kiwi",
  "Watermelon",
]);
fruitsByCategory.set("texture: gritty", ["Pear", "Guava"]);
fruitsByCategory.set("nutritional value: high fiber", [
  "Apple",
  "Banana",
  "Orange",
  "Strawberry",
  "Plantain",
  "Date",
  "Raspberry",
  "Blackberry",
  "Guava",
  "Avocado",
]);
fruitsByCategory.set("nutritional value: high vitamin C", [
  "Kiwi",
  "Orange",
  "Strawberry",
  "Papaya",
  "Satsuma",
  "Mango",
  "Guava",
  "Pineapple",
  "Clementine",
  "Tangerine",
  "Lime",
  "Lemon",
  "Mandarine",
  "Blackcurrant",
  "Raspberry",
]);
fruitsByCategory.set("nutritional value: high potassium", [
  "Banana",
  "Avocado",
  "Papaya",
  "Plantain",
  "Kiwi",
  "Passionfruit",
  "Guava",
]);
fruitsByCategory.set("nutritional value: high vitamin A", [
  "Mango",
  "Cantaloupe",
  "Papaya",
  "Guava",
  "Kiwi",
  "Apricot",
]);
fruitsByCategory.set("nutritional value: high vitamin K", [
  "Kiwi",
  "Blackberry",
  "Blueberry",
  "Fig",
  "Avocado",
  "Pomegranate",
  "Cucumber",
  "Tomato",
]);
fruitsByCategory.set("nutritional value: high antioxidants", [
  "Blueberry",
  "Blackberry",
  "Strawberry",
  "Raspberry",
  "Pomegranate",
  "Marionberry",
]);
fruitsByCategory.set("nutritional value: high folic acid", [
  "Orange",
  "Banana",
  "Papaya",
  "Strawberry",
]);
fruitsByCategory.set("nutritional value: high magnesium", [
  "Banana",
  "Avocado",
  "Guava",
  "Date",
]);
fruitsByCategory.set("category: vine fruits", ["Grape", "Passionfruit"]);
fruitsByCategory.set("category: drupes", [
  "Coconut",
  "Olive",
  "Date",
  "Peach",
  "Plum",
  "Cherry",
]);
fruitsByCategory.set("climate: temperate", [
  "Apple",
  "Pear",
  "Marionberry",
  "Green Apple",
  "Plum",
  "Cherry",
  "Peach",
  "Apricot",
  "Fig",
  "Grape",
  "Blackberry",
  "Blueberry",
  "Raspberry",
  "Strawberry",
  "Cranberry",
  "Gooseberry",
  "Bilberry",
  "Honeyberry",
  "Elderberry",
  "Mulberry",
  "Damson",
]);
fruitsByCategory.set("climate: subtropical", [
  "Orange",
  "Avocado",
  "Satsuma",
  "Kiwi",
  "Date",
  "Persimmon",
]);
fruitsByCategory.set("texture: seedless", ["Banana", "Pineapple", "Cucumber"]);
fruitsByCategory.set("texture: seeded", ["Watermelon", "Pomegranate", "Guava"]);
fruitsByCategory.set("nutritional value: high vitamin E", ["Kiwi", "Papaya"]);
fruitsByCategory.set("nutritional value: high calcium", ["Orange", "Fig"]);
fruitsByCategory.set("texture: skin edible", [
  "Grape",
  "Cherry",
  "Apricot",
  "Apple",
  "Pear",
  "Cucumber",
  "Kiwi",
  "Elderberry",
  "Blackberry",
  "Satsuma",
]);
fruitsByCategory.set("texture: skin not edible", [
  "Passionfruit",
  "Orange",
  "Avocado",
  "Watermelon",
  "Pomegranate",
  "Banana",
  "Papaya",
  "Honeydew Melon",
]);
fruitsByCategory.set("flavor: spicy", ["Passionfruit"]);
fruitsByCategory.set("flavor: mild", ["Cucumber", "Honeydew Melon"]);
fruitsByCategory.set("color: multi-colored", ["Grape", "Apple"]);
fruitsByCategory.set("category: wild", ["Elderberry", "Blackberry"]);
fruitsByCategory.set("shape: round", [
  "Apple",
  "Orange",
  "Peach",
  "Lychee",
  "Plum",
  "Nectarine",
  "Olive",
  "Pomegranate",
  "Green Apple",
  "Grape",
]);
fruitsByCategory.set("shape: oval", [
  "Mango",
  "Avocado",
  "Papaya",
  "Date",
  "Damson",
  "Cucumber",
]);
fruitsByCategory.set("size: small", ["Strawberry", "Grape", "Kumquat"]);
fruitsByCategory.set("size: large", ["Watermelon", "Pineapple", "Jackfruit"]);
fruitsByCategory.set("nutritional value: high vitamin B", [
  "Banana",
  "Avocado",
  "Orange",
  "Guava",
  "Banana",
  "Passionfruit",
  "Date",
]);
fruitsByCategory.set("season: summer", ["Watermelon", "Peach", "Cherry"]);
fruitsByCategory.set("season: winter", [
  "Orange",
  "Kiwi",
  "Pomegranate",
  "Satsuma",
]);
fruitsByCategory.set("used in: desserts", [
  "Strawberry",
  "Banana",
  "Cherry",
  "Marionberry",
  "Plantain",
  "Satsuma",
  "Fig",
  "Date",
  "Persimmon",
  "Mulberry",
  "Damson",
  "Bilberry",
  "Custard Apple",
  "Elderberry",
  "Gooseberry",
  "Honeyberry",
  "Kiwi",
  "Pineapple",
  "Pomegranate",
  "Raspberry",
  "Blackberry",
  "Blueberry",
  "Apple",
  "Apricot",
  "Green Apple",
  "Plum",
  "Coconut",
  "Guava",
  "Mango",
  "Passionfruit",
  "Peach",
]);
fruitsByCategory.set("used in: savory dishes", [
  "Tomato",
  "Avocado",
  "Pineapple",
  "Plantain",
  "Cucumber",
  "Papaya",
  "Mango",
  "Pomegranate",
  "Nectarine",
  "Date",
  "Olive",
]);
fruitsByCategory.set("used in: alcoholic drinks", [
  "Lemon",
  "Lime",
  "Orange",
  "Satsuma",
  "Pineapple",
  "Cherry",
  "Pomegranate",
  "Coconut",
  "Strawberry",
  "Blackberry",
  "Grapefruit",
  "Passionfruit",
  "Mango",
  "Raspberry",
]);
fruitsByCategory.set("used in: jams/jellies", [
  "Strawberry",
  "Raspberry",
  "Blackberry",
  "Marionberry",
]);
fruitsByCategory.set("used in: salads", [
  "Tomato",
  "Cucumber",
  "Avocado",
  "Pomegranate",
  "Pineapple",
  "Mango",
  "Nectarine",
  "Date",
  "Olive",
]);
fruitsByCategory.set("shelf life: long shelf life", [
  "Apple",
  "Orange",
  "Banana",
  "Satsuma",
]);
fruitsByCategory.set("climate: mediterranean", ["Olive", "Fig", "Pomegranate"]);

/** This is the map of categories by fruit.
 * The key is the fruit name, and the value is an array of categories.
 * @type {Map<string, string[]>}
 */

const categoriesByFruit = new Map();

categoriesByFruit.set("Bilberry", [
  "berries",
  "color: blue/purple",
  "size: small",
  "flavor: sweet",
  "texture: soft",
  "climate: temperate",
  "used in: desserts",
]);
categoriesByFruit.set("Blackberry", [
  "berries",
  "color: blue/purple",
  "color: black/dark purple",
  "size: small",
  "texture: soft",
  "nutritional value: highly balanced",
  "nutritional value: high vitamin K",
  "nutritional value: high antioxidants",
  "nutritional value: high fiber",
  "climate: temperate",
  "texture: skin edible",
  "category: wild",
  "used in: desserts",
  "used in: alcoholic drinks",
  "used in: jams/jellies",
]);
categoriesByFruit.set("Blueberry", [
  "berries",
  "color: blue/purple",
  "size: small",
  "nutritional value: highly balanced",
  "nutritional value: high vitamin K",
  "nutritional value: high antioxidants",
  "climate: temperate",
  "used in: desserts",
]);
categoriesByFruit.set("Boysenberry", [
  "berries",
  "size: small",
  "nutritional value: high antioxidants",
]);
categoriesByFruit.set("Raspberry", [
  "berries",
  "color: red",
  "size: small",
  "flavor: sour",
  "texture: soft",
  "nutritional value: highly balanced",
  "nutritional value: high antioxidants",
  "nutritional value: high vitamin C",
  "nutritional value: high fiber",
  "climate: temperate",
  "used in: desserts",
  "used in: alcoholic drinks",
  "used in: jams/jellies",
]);
categoriesByFruit.set("Strawberry", [
  "berries",
  "color: red",
  "nutritional value: highly balanced",
  "nutritional value: high fiber",
  "nutritional value: high vitamin C",
  "nutritional value: high antioxidants",
  "nutritional value: high folic acid",
  "climate: temperate",
  "size: small",
  "used in: desserts",
  "used in: alcoholic drinks",
  "used in: jams/jellies",
]);
categoriesByFruit.set("Mulberry", [
  "berries",
  "color: red",
  "color: black/dark purple",
  "size: small",
  "flavor: sweet",
  "texture: soft",
  "climate: temperate",
  "used in: desserts",
  "nutritional value: high calcium",
]);
categoriesByFruit.set("Cranberry", [
  "berries",
  "size: small",
  "nutritional value: high antioxidants",
  "flavor: bitter",
  "climate: temperate",
]);
categoriesByFruit.set("Gooseberry", [
  "berries",
  "size: small",
  "flavor: sweet-sour",
  "texture: soft",
  "climate: temperate",
  "used in: desserts",
]);
categoriesByFruit.set("Elderberry", [
  "berries",
  "color: blue/purple",
  "color: black/dark purple",
  "size: small",
  "flavor: sweet-sour",
  "texture: soft",
  "climate: temperate",
  "texture: skin edible",
  "category: wild",
  "used in: desserts",
]);
categoriesByFruit.set("Blackcurrant", [
  "berries",
  "color: blue/purple",
  "color: black/dark purple",
  "size: small",
  "flavor: sour",
  "nutritional value: high vitamin C",
  "nutritional value: high antioxidants",
  "nutritional value: high calcium",
]);
categoriesByFruit.set("Redcurrant", ["berries", "color: red", "size: small"]);
categoriesByFruit.set("Currant", ["berries", "size: small"]);
categoriesByFruit.set("Salmonberry", ["berries", "size: small"]);
categoriesByFruit.set("Huckleberry", ["berries", "size: small"]);
categoriesByFruit.set("Juniper berry", ["berries"]);
categoriesByFruit.set("Honeyberry", [
  "berries",
  "color: blue/purple",
  "flavor: sweet",
  "texture: soft",
  "climate: temperate",
  "used in: desserts",
]);
categoriesByFruit.set("Marionberry", [
  "berries",
  "color: blue/purple",
  "size: small",
  "flavor: sweet",
  "texture: soft",
  "nutritional value: high antioxidants",
  "climate: temperate",
  "used in: desserts",
  "used in: jams/jellies",
]);
categoriesByFruit.set("Lemon", [
  "citrus",
  "color: yellow/green",
  "flavor: sour",
  "flavor: bitter",
  "nutritional value: high vitamin C",
  "used in: alcoholic drinks",
]);
categoriesByFruit.set("Lime", [
  "citrus",
  "color: yellow/green",
  "flavor: sour",
  "flavor: bitter",
  "nutritional value: high vitamin C",
  "used in: alcoholic drinks",
]);
categoriesByFruit.set("Orange", [
  "citrus",
  "color: orange",
  "flavor: sweet-sour",
  "texture: juicy",
  "texture: fleshy",
  "nutritional value: highly balanced",
  "nutritional value: high fiber",
  "nutritional value: high vitamin C",
  "nutritional value: high folic acid",
  "climate: subtropical",
  "nutritional value: high calcium",
  "texture: skin not edible",
  "shape: round",
  "nutritional value: high vitamin B",
  "season: winter",
  "used in: alcoholic drinks",
  "shelf life: long shelf life",
]);
categoriesByFruit.set("Clementine", [
  "citrus",
  "color: orange",
  "nutritional value: high vitamin C",
]);
categoriesByFruit.set("Mandarine", [
  "citrus",
  "color: orange",
  "nutritional value: high vitamin C",
]);
categoriesByFruit.set("Tangerine", [
  "citrus",
  "color: orange",
  "flavor: sweet-sour",
  "nutritional value: high vitamin C",
]);
categoriesByFruit.set("Yuzu", ["citrus"]);
categoriesByFruit.set("Grapefruit", [
  "citrus",
  "flavor: sour",
  "flavor: bitter",
  "used in: alcoholic drinks",
  "nutritional value: highly balanced",
]);
categoriesByFruit.set("Pomelo", ["citrus"]);
categoriesByFruit.set("Satsuma", [
  "citrus",
  "color: orange",
  "texture: juicy",
  "nutritional value: high vitamin C",
  "climate: subtropical",
  "texture: skin edible",
  "season: winter",
  "used in: desserts",
  "used in: alcoholic drinks",
  "shelf life: long shelf life",
]);
categoriesByFruit.set("Persimmon", [
  "citrus",
  "stone fruits",
  "exotic",
  "color: orange",
  "flavor: sweet-sour",
  "texture: soft",
  "climate: subtropical",
  "used in: desserts",
]);
categoriesByFruit.set("Banana", [
  "tropical",
  "flavor: sweet",
  "flavor: neutral",
  "texture: soft",
  "texture: creamy",
  "nutritional value: highly balanced",
  "nutritional value: high fiber",
  "nutritional value: high potassium",
  "nutritional value: high folic acid",
  "nutritional value: high magnesium",
  "texture: seedless",
  "texture: skin not edible",
  "nutritional value: high vitamin B",
  "used in: desserts",
  "shelf life: long shelf life",
]);
categoriesByFruit.set("Coconut", [
  "tropical",
  "color: brown",
  "flavor: neutral",
  "texture: soft",
  "texture: firm",
  "category: drupes",
  "used in: desserts",
  "used in: alcoholic drinks",
]);
categoriesByFruit.set("Mango", [
  "tropical",
  "stone fruits",
  "flavor: sweet",
  "texture: soft",
  "texture: creamy",
  "nutritional value: highly balanced",
  "nutritional value: high vitamin C",
  "nutritional value: high vitamin A",
  "shape: oval",
  "used in: desserts",
  "used in: savory dishes",
  "used in: alcoholic drinks",
  "used in: salads",
]);
categoriesByFruit.set("Papaya", [
  "tropical",
  "color: orange",
  "flavor: sweet",
  "texture: soft",
  "texture: creamy",
  "nutritional value: highly balanced",
  "nutritional value: high vitamin C",
  "nutritional value: high vitamin A",
  "nutritional value: high potassium",
  "nutritional value: high folic acid",
  "nutritional value: high vitamin E",
  "nutritional value: high calcium",
  "texture: skin not edible",
  "shape: oval",
  "used in: savory dishes",
]);
categoriesByFruit.set("Pineapple", [
  "tropical",
  "color: yellow/green",
  "flavor: sweet-sour",
  "flavor: spicy",
  "texture: juicy",
  "texture: firm",
  "texture: seedless",
  "nutritional value: highly balanced",
  "nutritional value: high vitamin C",
  "size: large",
  "used in: desserts",
  "used in: savory dishes",
  "used in: alcoholic drinks",
  "used in: salads",
]);
categoriesByFruit.set("Star fruit", ["tropical"]);
categoriesByFruit.set("Guava", [
  "tropical",
  "texture: gritty",
  "texture: seeded",
  "nutritional value: highly balanced",
  "nutritional value: high vitamin C",
  "nutritional value: high vitamin A",
  "nutritional value: high vitamin B",
  "nutritional value: high magnesium",
  "nutritional value: high potassium",
  "nutritional value: high fiber",
  "used in: desserts",
]);
categoriesByFruit.set("Dragonfruit", ["tropical"]);
categoriesByFruit.set("Passionfruit", [
  "tropical",
  "category: vine fruits",
  "texture: skin not edible",
  "flavor: spicy",
  "nutritional value: high potassium",
  "nutritional value: high vitamin B",
  "used in: desserts",
  "used in: alcoholic drinks",
]);
categoriesByFruit.set("Durian", ["tropical"]);
categoriesByFruit.set("Jackfruit", ["tropical", "size: large"]);
categoriesByFruit.set("Avocado", [
  "tropical",
  "category: vegetable-fruits",
  "color: yellow/green",
  "flavor: neutral",
  "texture: soft",
  "texture: creamy",
  "nutritional value: highly balanced",
  "nutritional value: high potassium",
  "nutritional value: high magnesium",
  "nutritional value: high fiber",
  "nutritional value: high vitamin K",
  "nutritional value: high vitamin B",
  "climate: subtropical",
  "texture: skin not edible",
  "shape: oval",
  "used in: savory dishes",
  "used in: salads",
]);
categoriesByFruit.set("Rambutan", ["tropical"]);
categoriesByFruit.set("Salak", ["tropical"]);
categoriesByFruit.set("Tamarillo", ["tropical"]);
categoriesByFruit.set("Tamarind", ["tropical"]);
categoriesByFruit.set("Feijoa", ["tropical"]);
categoriesByFruit.set("Plantain", [
  "tropical",
  "flavor: sweet",
  "flavor: neutral",
  "texture: soft",
  "texture: firm",
  "nutritional value: high fiber",
  "nutritional value: high potassium",
  "nutritional value: high vitamin B",
  "used in: desserts",
  "used in: savory dishes",
]);
categoriesByFruit.set("Custard Apple", [
  "tropical",
  "exotic",
  "texture: soft",
  "size: small",
  "used in: desserts",
]);
categoriesByFruit.set("Lychee", [
  "tropical",
  "stone fruits",
  "flavor: sweet",
  "texture: soft",
  "shape: round",
]);
categoriesByFruit.set("Apricot", [
  "stone fruits",
  "color: orange",
  "nutritional value: high vitamin A",
  "climate: temperate",
  "texture: skin edible",
  "used in: desserts",
]);
categoriesByFruit.set("Cherry", [
  "stone fruits",
  "color: red",
  "size: small",
  "flavor: sweet",
  "texture: firm",
  "category: drupes",
  "nutritional value: highly balanced",
  "nutritional value: high antioxidants",
  "nutritional value: high potassium",
  "nutritional value: high magnesium",
  "climate: temperate",
  "texture: skin edible",
  "season: summer",
  "used in: desserts",
  "used in: alcoholic drinks",
]);
categoriesByFruit.set("Peach", [
  "stone fruits",
  "texture: fleshy",
  "category: drupes",
  "climate: temperate",
  "shape: round",
  "season: summer",
  "used in: desserts",
]);
categoriesByFruit.set("Plum", [
  "stone fruits",
  "color: blue/purple",
  "texture: firm",
  "category: drupes",
  "climate: temperate",
  "shape: round",
  "used in: desserts",
]);
categoriesByFruit.set("Nectarine", [
  "stone fruits",
  "color: red",
  "color: orange",
  "shape: round",
  "used in: savory dishes",
  "used in: salads",
]);
categoriesByFruit.set("Olive", [
  "category: vegetable-fruits",
  "stone fruits",
  "color: yellow/green",
  "color: black/dark purple",
  "flavor: bitter",
  "texture: soft",
  "category: drupes",
  "shape: round",
  "used in: savory dishes",
  "used in: salads",
  "climate: mediterranean",
]);
categoriesByFruit.set("Date", [
  "stone fruits",
  "color: brown",
  "texture: soft",
  "category: drupes",
  "nutritional value: high vitamin B",
  "nutritional value: high potassium",
  "nutritional value: high magnesium",
  "nutritional value: high fiber",
  "climate: subtropical",
  "shape: oval",
  "used in: desserts",
  "used in: savory dishes",
  "used in: salads",
]);
categoriesByFruit.set("Loquat", ["stone fruits"]);
categoriesByFruit.set("Damson", [
  "stone fruits",
  "color: blue/purple",
  "climate: temperate",
  "shape: oval",
  "used in: desserts",
]);
categoriesByFruit.set("Melon", ["melons"]);
categoriesByFruit.set("Cantaloupe", [
  "melons",
  "texture: juicy",
  "nutritional value: highly balanced",
  "nutritional value: high vitamin A",
]);
categoriesByFruit.set("Honeydew", [
  "melons",
  "color: yellow/green",
  "texture: juicy",
]);
categoriesByFruit.set("Watermelon", [
  "melons",
  "texture: juicy",
  "texture: fleshy",
  "texture: seeded",
  "texture: skin not edible",
  "size: large",
  "season: summer",
  "nutritional value: highly balanced",
]);
categoriesByFruit.set("Apple", [
  "pomes",
  "color: red",
  "flavor: sweet",
  "texture: crunchy",
  "texture: firm",
  "nutritional value: high fiber",
  "nutritional value: high antioxidants",
  "nutritional value: highly balanced",
  "climate: temperate",
  "texture: skin edible",
  "color: multi-colored",
  "shape: round",
  "used in: desserts",
  "shelf life: long shelf life",
]);
categoriesByFruit.set("Pear", [
  "pomes",
  "color: yellow/green",
  "texture: soft",
  "texture: crunchy",
  "texture: firm",
  "texture: gritty",
  "climate: temperate",
  "texture: skin edible",
  "nutritional value: high antioxidants",
  "nutritional value: highly balanced",
]);
categoriesByFruit.set("Quince", ["pomes", "color: yellow/green"]);
categoriesByFruit.set("Miracle fruit", ["exotic"]);
categoriesByFruit.set("Jabuticaba", ["exotic"]);
categoriesByFruit.set("Jambul", ["exotic"]);
categoriesByFruit.set("Longan", ["exotic"]);
categoriesByFruit.set("Mangosteen", ["exotic"]);
categoriesByFruit.set("Kumquat", [
  "exotic",
  "size: small",
  "nutritional value: high calcium",
]);
categoriesByFruit.set("Nance", ["exotic"]);
categoriesByFruit.set("Soursop", ["exotic"]);
categoriesByFruit.set("Pomegranate", [
  "color: red",
  "flavor: sweet-sour",
  "flavor: bitter",
  "texture: crunchy",
  "texture: firm",
  "nutritional value: highly balanced",
  "nutritional value: high antioxidants",
  "nutritional value: high vitamin K",
  "texture: seeded",
  "texture: skin not edible",
  "shape: round",
  "season: winter",
  "used in: desserts",
  "used in: savory dishes",
  "used in: alcoholic drinks",
  "used in: salads",
  "climate: mediterranean",
]);
categoriesByFruit.set("Kiwi", [
  "category: vine fruits",
  "color: yellow/green",
  "flavor: sour",
  "flavor: sweet-sour",
  "texture: soft",
  "texture: fleshy",
  "nutritional value: highly balanced",
  "nutritional value: high vitamin C",
  "nutritional value: high vitamin A",
  "nutritional value: high vitamin K",
  "nutritional value: high calcium",
  "climate: subtropical",
  "nutritional value: high vitamin E",
  "nutritional value: high potassium",
  "texture: skin edible",
  "season: winter",
  "used in: desserts",
]);
categoriesByFruit.set("Green Apple", [
  "color: yellow/green",
  "flavor: bitter",
  "climate: temperate",
  "shape: round",
  "used in: desserts",
]);
categoriesByFruit.set("Grape", [
  "color: yellow/green",
  "flavor: sweet",
  "texture: crunchy",
  "category: vine fruits",
  "climate: temperate",
  "texture: skin edible",
  "color: multi-colored",
  "shape: round",
  "size: small",
  "nutritional value: highly balanced",
]);
categoriesByFruit.set("Cucumber", [
  "category: vegetable-fruits",
  "color: yellow/green",
  "texture: firm",
  "texture: seedless",
  "texture: skin edible",
  "flavor: mild",
  "shape: oval",
  "nutritional value: high vitamin K",
  "used in: savory dishes",
  "used in: salads",
]);
categoriesByFruit.set("Fig", [
  "texture: soft",
  "nutritional value: high vitamin K",
  "climate: temperate",
  "nutritional value: high calcium",
  "used in: desserts",
  "climate: mediterranean",
]);
categoriesByFruit.set("Honeydew Melon", [
  "texture: skin not edible",
  "flavor: mild",
]);
categoriesByFruit.set("Tomato", [
  "category: vegetable-fruits",
  "nutritional value: high vitamin C",
  "nutritional value: high vitamin K",
  "nutritional value: high potassium",
  "used in: savory dishes",
  "used in: salads",
]);

/** This map contains the fruit categories and the category's features.
 * The categories are not exclusive */
/** @type {Map<string, object>} */
const categoryFeatures = new Map();
categoryFeatures.set("berries", {
  type: "general category",
  shortName: "berries",
  fruits: [
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
    "Marionberry",
  ],
});
categoryFeatures.set("citrus", {
  type: "general category",
  shortName: "citrus",
  fruits: [
    "Lemon",
    "Lime",
    "Orange",
    "Clementine",
    "Mandarine",
    "Tangerine",
    "Yuzu",
    "Grapefruit",
    "Pomelo",
    "Satsuma",
    "Persimmon",
  ],
});
categoryFeatures.set("tropical", {
  type: "general category",
  shortName: "tropical",
  fruits: [
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
    "Avocado",
    "Rambutan",
    "Salak",
    "Tamarillo",
    "Tamarind",
    "Feijoa",
    "Plantain",
    "Custard Apple",
    "Lychee",
  ],
});
categoryFeatures.set("stone fruits", {
  type: "general category",
  shortName: "stone fruits",
  fruits: [
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
  ],
});
categoryFeatures.set("melons", {
  type: "general category",
  shortName: "melons",
  fruits: ["Melon", "Cantaloupe", "Honeydew", "Watermelon"],
});
categoryFeatures.set("pomes", {
  type: "general category",
  shortName: "pomes",
  fruits: ["Apple", "Pear", "Quince"],
});
categoryFeatures.set("exotic", {
  type: "general category",
  shortName: "exotic",
  fruits: [
    "Miracle fruit",
    "Jabuticaba",
    "Jambul",
    "Custard Apple",
    "Longan",
    "Mangosteen",
    "Kumquat",
    "Nance",
    "Soursop",
    "Persimmon",
  ],
});
categoryFeatures.set("category: vegetable-fruits", {
  type: "general category",
  shortName: "vegetable-fruits",
  fruits: ["Tomato", "Cucumber", "Avocado", "Olive"],
});
categoryFeatures.set("category: wild", {
  type: "general category",
  shortName: "wild",
  fruits: ["Elderberry", "Blackberry"],
});
categoryFeatures.set("color: red", {
  type: "color",
  shortName: "red",
  fruits: [
    "Apple",
    "Cherry",
    "Strawberry",
    "Raspberry",
    "Pomegranate",
    "Redcurrant",
    "Mulberry",
    "Nectarine",
  ],
});
categoryFeatures.set("color: yellow/green", {
  type: "color",
  shortName: "yellow/green",
  fruits: [
    "Lemon",
    "Lime",
    "Avocado",
    "Kiwi",
    "Green Apple",
    "Pear",
    "Grape",
    "Cucumber",
    "Olive",
    "Pineapple",
    "Honeydew",
    "Quince",
  ],
});
categoryFeatures.set("color: brown", {
  type: "color",
  shortName: "brown",
  fruits: ["Coconut", "Date"],
});
categoryFeatures.set("color: orange", {
  type: "color",
  shortName: "orange",
  fruits: [
    "Orange",
    "Mandarine",
    "Apricot",
    "Papaya",
    "Satsuma",
    "Nectarine",
    "Clementine",
    "Tangerine",
    "Persimmon",
  ],
});
categoryFeatures.set("color: blue/purple", {
  type: "color",
  shortName: "blue/purple",
  fruits: [
    "Blueberry",
    "Blackberry",
    "Plum",
    "Blackcurrant",
    "Marionberry",
    "Damson",
    "Elderberry",
    "Bilberry",
    "Honeyberry",
  ],
});
categoryFeatures.set("color: black/dark purple", {
  type: "color",
  shortName: "black/dark purple",
  fruits: ["Blackberry", "Blackcurrant", "Mulberry", "Elderberry", "Olive"],
});
categoryFeatures.set("flavor: sweet", {
  type: "flavor",
  shortName: "sweet",
  fruits: [
    "Apple",
    "Banana",
    "Mango",
    "Papaya",
    "Cherry",
    "Grape",
    "Marionberry",
    "Plantain",
    "Mulberry",
    "Bilberry",
    "Honeyberry",
    "Lychee",
  ],
});
categoryFeatures.set("flavor: sour", {
  type: "flavor",
  shortName: "sour",
  fruits: ["Lemon", "Lime", "Grapefruit", "Kiwi", "Raspberry", "Blackcurrant"],
});
categoryFeatures.set("flavor: sweet-sour", {
  type: "flavor",
  shortName: "sweet-sour",
  fruits: [
    "Orange",
    "Pineapple",
    "Pomegranate",
    "Tangerine",
    "Persimmon",
    "Elderberry",
    "Gooseberry",
    "Kiwi",
  ],
});
categoryFeatures.set("flavor: bitter", {
  type: "flavor",
  shortName: "bitter",
  fruits: [
    "Grapefruit",
    "Cranberry",
    "Green Apple",
    "Lemon",
    "Olive",
    "Lime",
    "Pomegranate",
  ],
});
categoryFeatures.set("flavor: neutral", {
  type: "flavor",
  shortName: "neutral",
  fruits: ["Avocado", "Banana", "Coconut", "Plantain"],
});
categoryFeatures.set("flavor: spicy", {
  type: "flavor",
  shortName: "spicy",
  fruits: ["Pineapple", "Passionfruit"],
});
categoryFeatures.set("texture: soft", {
  type: "texture",
  shortName: "soft",
  fruits: [
    "Banana",
    "Avocado",
    "Mango",
    "Papaya",
    "Raspberry",
    "Blackberry",
    "Marionberry",
    "Plantain",
    "Fig",
    "Date",
    "Persimmon",
    "Mulberry",
    "Bilberry",
    "Custard Apple",
    "Elderberry",
    "Gooseberry",
    "Honeyberry",
    "Kiwi",
    "Lychee",
    "Olive",
    "Coconut",
    "Pear",
  ],
});
categoryFeatures.set("texture: crunchy", {
  type: "texture",
  shortName: "crunchy",
  fruits: ["Apple", "Pear", "Grape", "Pomegranate", "Pear"],
});
categoryFeatures.set("texture: juicy", {
  type: "texture",
  shortName: "juicy",
  fruits: [
    "Orange",
    "Watermelon",
    "Pineapple",
    "Cantaloupe",
    "Honeydew",
    "Satsuma",
  ],
});
categoryFeatures.set("texture: firm", {
  type: "texture",
  shortName: "firm",
  fruits: [
    "Apple",
    "Pear",
    "Cherry",
    "Plum",
    "Plantain",
    "Coconut",
    "Cucumber",
    "Pomegranate",
    "Pineapple",
  ],
});
categoryFeatures.set("texture: creamy", {
  type: "texture",
  shortName: "creamy",
  fruits: ["Banana", "Avocado", "Mango", "Papaya"],
});
categoryFeatures.set("texture: fleshy", {
  type: "texture",
  shortName: "fleshy",
  fruits: ["Orange", "Peach", "Kiwi", "Watermelon"],
});
categoryFeatures.set("texture: gritty", {
  type: "texture",
  shortName: "gritty",
  fruits: ["Pear", "Guava"],
});
categoryFeatures.set("nutritional value: high fiber", {
  type: "nutritional value",
  shortName: "high fiber",
  fruits: [
    "Apple",
    "Banana",
    "Orange",
    "Strawberry",
    "Plantain",
    "Date",
    "Raspberry",
    "Blackberry",
    "Guava",
    "Avocado",
  ],
});
categoryFeatures.set("nutritional value: high vitamin C", {
  type: "nutritional value",
  shortName: "vitamin C",
  fruits: [
    "Kiwi",
    "Orange",
    "Strawberry",
    "Papaya",
    "Satsuma",
    "Mango",
    "Guava",
    "Pineapple",
    "Clementine",
    "Tangerine",
    "Lime",
    "Lemon",
    "Mandarine",
    "Blackcurrant",
    "Raspberry",
    "Tomato",
  ],
});
categoryFeatures.set("nutritional value: high potassium", {
  type: "nutritional value",
  shortName: "high potassium",
  fruits: [
    "Avocado",
    "Banana",
    "Plantain",
    "Papaya",
    "Kiwi",
    "Passionfruit",
    "Guava",
    "Date",
    "Tomato",
    "Cherry",
  ],
});
categoryFeatures.set("nutritional value: high vitamin A", {
  type: "nutritional value",
  shortName: "high vitamin A",
  fruits: ["Mango", "Cantaloupe", "Papaya", "Guava", "Kiwi", "Apricot"],
});
categoryFeatures.set("nutritional value: high vitamin B", {
  type: "nutritional value",
  shortName: "high vitamin B",
  fruits: [
    "Banana",
    "Avocado",
    "Orange",
    "Guava",
    "Banana",
    "Passionfruit",
    "Date",
    "Plantain",
  ],
});
categoryFeatures.set("nutritional value: high vitamin K", {
  type: "nutritional value",
  shortName: "high vitamin K",
  fruits: [
    "Kiwi",
    "Blackberry",
    "Blueberry",
    "Fig",
    "Avocado",
    "Pomegranate",
    "Cucumber",
    "Tomato",
  ],
});
categoryFeatures.set("nutritional value: high antioxidants", {
  type: "nutritional value",
  shortName: "antioxidants",
  fruits: [
    "Apple",
    "Cranberry",
    "Cherry",
    "Blueberry",
    "Blackberry",
    "Strawberry",
    "Raspberry",
    "Pomegranate",
    "Marionberry",
    "Blackcurrant",
    "Boysenberry",
    "Pear",
  ],
});
categoryFeatures.set("nutritional value: high magnesium", {
  type: "nutritional value",
  shortName: "high magnesium",
  fruits: ["Banana", "Avocado", "Guava", "Date", "Cherry"],
});
categoryFeatures.set("nutritional value: highly balanced", {
  type: "nutritional value",
  shortName: "highly balanced",
  fruits: [
    "Guava",
    "Blackberry",
    "Kiwi",
    "Papaya",
    "Watermelon",
    "Cantaloupe",
    "Orange",
    "Strawberry",
    "Pineapple",
    "Blueberry",
    "Grapefruit",
    "Raspberry",
    "Pomegranate",
    "Banana",
    "Mango",
    "Avocado",
    "Pear",
    "Apple",
    "Cherry",
    "Grape",
  ],
});
categoryFeatures.set("climate: temperate", {
  type: "climate",
  shortName: "temperate",
  fruits: [
    "Apple",
    "Pear",
    "Marionberry",
    "Green Apple",
    "Plum",
    "Cherry",
    "Peach",
    "Apricot",
    "Fig",
    "Grape",
    "Blackberry",
    "Blueberry",
    "Raspberry",
    "Strawberry",
    "Cranberry",
    "Gooseberry",
    "Bilberry",
    "Honeyberry",
    "Elderberry",
    "Mulberry",
    "Damson",
  ],
});
categoryFeatures.set("used in: desserts", {
  type: "used in",
  shortName: "desserts",
  fruits: [
    "Strawberry",
    "Banana",
    "Cherry",
    "Marionberry",
    "Plantain",
    "Satsuma",
    "Fig",
    "Date",
    "Persimmon",
    "Mulberry",
    "Damson",
    "Bilberry",
    "Custard Apple",
    "Elderberry",
    "Gooseberry",
    "Honeyberry",
    "Kiwi",
    "Pineapple",
    "Pomegranate",
    "Raspberry",
    "Blackberry",
    "Blueberry",
    "Apple",
    "Apricot",
    "Green Apple",
    "Plum",
    "Coconut",
    "Guava",
    "Mango",
    "Passionfruit",
    "Peach",
  ],
});
categoryFeatures.set("used in: savory dishes", {
  type: "used in",
  shortName: "savory dishes",
  fruits: [
    "Tomato",
    "Avocado",
    "Pineapple",
    "Plantain",
    "Cucumber",
    "Papaya",
    "Mango",
    "Pomegranate",
    "Nectarine",
    "Date",
    "Olive",
  ],
});
categoryFeatures.set("used in: alcoholic drinks", {
  type: "used in",
  shortName: "alcoholic drinks",
  fruits: [
    "Lemon",
    "Lime",
    "Orange",
    "Satsuma",
    "Pineapple",
    "Cherry",
    "Pomegranate",
    "Coconut",
    "Strawberry",
    "Blackberry",
    "Grapefruit",
    "Passionfruit",
    "Mango",
    "Raspberry",
  ],
});
categoryFeatures.set("used in: jams/jellies", {
  type: "used in",
  shortName: "jams/jellies",
  fruits: ["Strawberry", "Raspberry", "Blackberry", "Marionberry"],
});
categoryFeatures.set("used in: salads", {
  type: "used in",
  shortName: "salads",
  fruits: [
    "Tomato",
    "Cucumber",
    "Avocado",
    "Pomegranate",
    "Pineapple",
    "Mango",
    "Nectarine",
    "Date",
    "Olive",
  ],
});
categoryFeatures.set("shelf life: long shelf life", {
  type: "shelf life",
  shortName: "long",
  fruits: ["Apple", "Orange", "Banana", "Satsuma"],
});
categoryFeatures.set("climate: mediterranean", {
  type: "climate",
  shortName: "mediterranean",
  fruits: ["Olive", "Fig", "Pomegranate"],
});
categoryFeatures.set("climate: subtropical", {
  type: "climate",
  shortName: "subtropical",
  fruits: ["Orange", "Avocado", "Satsuma", "Kiwi", "Date", "Persimmon"],
});
categoryFeatures.set("texture: skin edible", {
  type: "texture",
  shortName: "skin edible",
  fruits: [
    "Grape",
    "Cherry",
    "Apricot",
    "Apple",
    "Pear",
    "Cucumber",
    "Kiwi",
    "Elderberry",
    "Blackberry",
    "Satsuma",
  ],
});
categoryFeatures.set("texture: skin not edible", {
  type: "texture",
  shortName: "skin not edible",
  fruits: [
    "Passionfruit",
    "Orange",
    "Avocado",
    "Watermelon",
    "Pomegranate",
    "Banana",
    "Papaya",
    "Honeydew Melon",
  ],
});
categoryFeatures.set("texture: seedless", {
  type: "texture",
  shortName: "seedless",
  fruits: ["Banana", "Pineapple", "Cucumber"],
});
categoryFeatures.set("texture: seeded", {
  type: "texture",
  shortName: "seeded",
  fruits: ["Watermelon", "Pomegranate", "Guava"],
});

categoryFeatures.set("nutritional value: high folic acid", {
  type: "nutritional value",
  shortName: "high folic acid",
  fruits: ["Orange", "Banana", "Papaya", "Strawberry"],
});
categoryFeatures.set("shape: round", {
  type: "shape",
  shortName: "round",
  fruits: [
    "Apple",
    "Orange",
    "Peach",
    "Lychee",
    "Plum",
    "Nectarine",
    "Olive",
    "Pomegranate",
    "Green Apple",
    "Grape",
  ],
});
categoryFeatures.set("shape: oval", {
  type: "shape",
  shortName: "oval",
  fruits: ["Mango", "Avocado", "Papaya", "Date", "Damson", "Cucumber"],
});
categoryFeatures.set("size: small", {
  type: "size",
  shortName: "small",
  fruits: [
    "Strawberry",
    "Grape",
    "Kumquat",
    "Blueberry",
    "Raspberry",
    "Blackberry",
    "Bilberry",
    "Elderberry",
    "Marionberry",
    "Mulberry",
    "Custard Apple",
    "Cherry",
    "Currant",
    "Cranberry",
    "Huckleberry",
    "Boysenberry",
    "Blackcurrant",
    "Gooseberry",
    "Salmonberry",
    "Redcurrant",
  ],
});
categoryFeatures.set("size: large", {
  type: "size",
  shortName: "large",
  fruits: ["Watermelon", "Pineapple", "Jackfruit"],
});
categoryFeatures.set("nutritional value: high calcium", {
  type: "nutritional value",
  shortName: "high calcium",
  fruits: [
    "Orange",
    "Fig",
    "Kiwi",
    "Papaya",
    "Kumquat",
    "Blackcurrant",
    "Mulberry",
  ],
});
categoryFeatures.set("nutritional value: high vitamin E", {
  type: "nutritional value",
  shortName: "high vitamin E",
  fruits: ["Kiwi", "Papaya"],
});
categoryFeatures.set("season: summer", {
  type: "season",
  shortName: "summer",
  fruits: ["Watermelon", "Peach", "Cherry"],
});
categoryFeatures.set("season: winter", {
  type: "season",
  shortName: "winter",
  fruits: ["Orange", "Kiwi", "Satsuma", "Pomegranate"],
});
categoryFeatures.set("category: drupes", {
  type: "category",
  shortName: "drupes",
  fruits: ["Coconut", "Olive", "Date", "Peach", "Plum", "Cherry"],
});
categoryFeatures.set("category: vine fruits", {
  type: "category",
  shortName: "vine fruits",
  fruits: ["Grape", "Kiwi", "Passionfruit"],
});
categoryFeatures.set("color: multi-colored", {
  type: "color",
  shortName: "multi-colored",
  fruits: ["Grape", "Apple"],
});
categoryFeatures.set("flavor: mild", {
  type: "flavor",
  shortName: "mild",
  fruits: ["Cucumber", "Honeydew Melon"],
});

export {
  fruitsArray,
  fruitCategoriesArray,
  typesOfCategories,
  fruitsByCategory,
  categoriesByFruit,
  categoryFeatures,
};
