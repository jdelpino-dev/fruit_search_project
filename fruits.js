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
  "shelf life: long",
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
fruitsByCategory.set("pomes", ["Apple", "Pear", "Quince"]);
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
]);
fruitsByCategory.set("nutritional value: high vitamin C", [
  "Kiwi",
  "Orange",
  "Strawberry",
  "Papaya",
  "Plantain",
  "Satsuma",
  "Mango",
]);
fruitsByCategory.set("nutritional value: high potassium", [
  "Banana",
  "Avocado",
  "Papaya",
]);
fruitsByCategory.set("nutritional value: high vitamin A", [
  "Mango",
  "Apricot",
  "Cantaloupe",
  "Plantain",
]);
fruitsByCategory.set("nutritional value: high vitamin K", [
  "Kiwi",
  "Blackberry",
  "Blueberry",
  "Fig",
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
fruitsByCategory.set("texture: seeded", ["Watermelon", "Pomegranate"]);
fruitsByCategory.set("texture: seedless", ["Banana", "Cucumber"]);
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
fruitsByCategory.set("texture: seedless", ["Banana", "Pineapple", "Cucumber"]);
fruitsByCategory.set("nutritional value: high vitamin B", [
  "Banana",
  "Avocado",
  "Orange",
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
fruitsByCategory.set("shelf life: long", [
  "Apple",
  "Orange",
  "Banana",
  "Satsuma",
]);
fruitsByCategory.set("climate: mediterranean", ["Olive", "Fig", "Pomegranate"]);

const categoriesByFruit = new Map();

categoriesByFruit.set("Bilberry", [
  "berries",
  "color: blue/purple",
  "flavor: sweet",
  "texture: soft",
  "climate: temperate",
  "used in: desserts",
]);
categoriesByFruit.set("Blackberry", [
  "berries",
  "color: blue/purple",
  "color: black/dark purple",
  "texture: soft",
  "nutritional value: high vitamin K",
  "nutritional value: high antioxidants",
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
  "nutritional value: high vitamin K",
  "nutritional value: high antioxidants",
  "climate: temperate",
  "used in: desserts",
]);
categoriesByFruit.set("Boysenberry", ["berries"]);
categoriesByFruit.set("Raspberry", [
  "berries",
  "color: red",
  "flavor: sour",
  "texture: soft",
  "nutritional value: high antioxidants",
  "climate: temperate",
  "used in: desserts",
  "used in: alcoholic drinks",
  "used in: jams/jellies",
]);
categoriesByFruit.set("Strawberry", [
  "berries",
  "color: red",
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
  "flavor: sweet",
  "texture: soft",
  "climate: temperate",
  "used in: desserts",
]);
categoriesByFruit.set("Cranberry", [
  "berries",
  "flavor: bitter",
  "climate: temperate",
]);
categoriesByFruit.set("Gooseberry", [
  "berries",
  "flavor: sweet-sour",
  "texture: soft",
  "climate: temperate",
  "used in: desserts",
]);
categoriesByFruit.set("Elderberry", [
  "berries",
  "color: blue/purple",
  "color: black/dark purple",
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
  "flavor: sour",
]);
categoriesByFruit.set("Redcurrant", ["berries", "color: red"]);
categoriesByFruit.set("Currant", ["berries"]);
categoriesByFruit.set("Salmonberry", ["berries"]);
categoriesByFruit.set("Huckleberry", ["berries"]);
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
  "used in: alcoholic drinks",
]);
categoriesByFruit.set("Lime", [
  "citrus",
  "color: yellow/green",
  "flavor: sour",
  "flavor: bitter",
  "used in: alcoholic drinks",
]);
categoriesByFruit.set("Orange", [
  "citrus",
  "color: orange",
  "flavor: sweet-sour",
  "texture: juicy",
  "texture: fleshy",
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
  "shelf life: long",
]);
categoriesByFruit.set("Clementine", ["citrus"]);
categoriesByFruit.set("Mandarine", ["citrus", "color: orange"]);
categoriesByFruit.set("Tangerine", ["citrus", "flavor: sweet-sour"]);
categoriesByFruit.set("Yuzu", ["citrus"]);
categoriesByFruit.set("Grapefruit", [
  "citrus",
  "flavor: sour",
  "flavor: bitter",
  "used in: alcoholic drinks",
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
  "shelf life: long",
]);
categoriesByFruit.set("Persimmon", [
  "citrus",
  "stone fruits",
  "exotic",
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
  "nutritional value: high fiber",
  "nutritional value: high potassium",
  "nutritional value: high folic acid",
  "nutritional value: high magnesium",
  "texture: seedless",
  "texture: skin not edible",
  "nutritional value: high vitamin B",
  "used in: desserts",
  "shelf life: long",
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
  "nutritional value: high vitamin C",
  "nutritional value: high potassium",
  "nutritional value: high folic acid",
  "nutritional value: high vitamin E",
  "texture: skin not edible",
  "shape: oval",
  "used in: savory dishes",
]);
categoriesByFruit.set("Pineapple", [
  "tropical",
  "color: yellow/green",
  "flavor: sweet-sour",
  "texture: juicy",
  "texture: firm",
  "texture: seedless",
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
  "nutritional value: high magnesium",
  "used in: desserts",
]);
categoriesByFruit.set("Dragonfruit", ["tropical"]);
categoriesByFruit.set("Passionfruit", [
  "tropical",
  "category: vine fruits",
  "texture: skin not edible",
  "flavor: spicy",
  "used in: desserts",
  "used in: alcoholic drinks",
]);
categoriesByFruit.set("Durian", ["tropical"]);
categoriesByFruit.set("Jackfruit", ["tropical", "size: large"]);
categoriesByFruit.set("Avocado", [
  "tropical",
  "color: yellow/green",
  "flavor: neutral",
  "texture: soft",
  "texture: creamy",
  "nutritional value: high potassium",
  "nutritional value: high magnesium",
  "climate: subtropical",
  "texture: skin not edible",
  "shape: oval",
  "nutritional value: high vitamin B",
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
  "nutritional value: high vitamin C",
  "nutritional value: high vitamin A",
  "used in: desserts",
  "used in: savory dishes",
]);
categoriesByFruit.set("Custard Apple", [
  "tropical",
  "exotic",
  "texture: soft",
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
  "flavor: sweet",
  "texture: firm",
  "category: drupes",
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
]);
categoriesByFruit.set("Apple", [
  "pomes",
  "color: red",
  "flavor: sweet",
  "texture: crunchy",
  "texture: firm",
  "nutritional value: high fiber",
  "climate: temperate",
  "texture: skin edible",
  "color: multi-colored",
  "shape: round",
  "used in: desserts",
  "shelf life: long",
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
]);
categoriesByFruit.set("Quince", ["pomes", "color: yellow/green"]);
categoriesByFruit.set("Miracle fruit", ["exotic"]);
categoriesByFruit.set("Jabuticaba", ["exotic"]);
categoriesByFruit.set("Jambul", ["exotic"]);
categoriesByFruit.set("Longan", ["exotic"]);
categoriesByFruit.set("Mangosteen", ["exotic"]);
categoriesByFruit.set("Kumquat", ["exotic", "size: small"]);
categoriesByFruit.set("Nance", ["exotic"]);
categoriesByFruit.set("Soursop", ["exotic"]);
categoriesByFruit.set("Pomegranate", [
  "color: red",
  "flavor: sweet-sour",
  "flavor: bitter",
  "texture: crunchy",
  "texture: firm",
  "nutritional value: high antioxidants",
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
  "color: yellow/green",
  "flavor: sour",
  "flavor: sweet-sour",
  "texture: soft",
  "texture: fleshy",
  "nutritional value: high vitamin C",
  "nutritional value: high vitamin K",
  "climate: subtropical",
  "nutritional value: high vitamin E",
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
]);
categoriesByFruit.set("Cucumber", [
  "color: yellow/green",
  "texture: firm",
  "texture: seedless",
  "texture: skin edible",
  "flavor: mild",
  "shape: oval",
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
categoriesByFruit.set("Tomato", ["used in: savory dishes", "used in: salads"]);

/**
 * Function to create a Map of fruits with their respective categories.
 * @param {Map} fruitsByCategory
 * @return {Map} categoriesByFruit
 */
function createCategoriesByFruit(fruitsByCategory) {
  let categoriesByFruit = new Map();

  for (let [category, fruits] of fruitsByCategory) {
    for (let fruit of fruits) {
      if (categoriesByFruit.has(fruit)) {
        let categories = categoriesByFruit.get(fruit);
        categories.push(category);
        categoriesByFruit.set(fruit, categories);
      } else {
        categoriesByFruit.set(fruit, [category]);
      }
    }
  }

  return categoriesByFruit;
}

export {
  fruitsArray,
  fruitCategoriesArray,
  typesOfCategories,
  fruitsByCategory,
  categoriesByFruit,
};
