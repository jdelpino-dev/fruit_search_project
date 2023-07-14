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
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Bilberry",
  "Boysenberry",
  "Cantaloupe",
  "Cherry",
  "Clementine",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard Apple",
  "Currant",
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
  "Honeydew",
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
  "Mandarine",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
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
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Salmonberry",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Tangerine",
  "Tomato",
  "Watermelon",
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

/** This is the map of categories by fruit.
 * The key is the fruit name, and the value is an array of categories.
 * @type {Map<string, string[]>}
 */

const categoriesByFruit = new Map();

categoriesByFruit.set("Bilberry", [
  "category: berries",
  "color: blue/purple",
  "size: small",
  "flavor: sweet",
  "texture: soft",
  "climate: temperate",
  "used in: desserts",
]);
categoriesByFruit.set("Blackberry", [
  "category: berries",
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
  "category: berries",
  "color: blue/purple",
  "size: small",
  "nutritional value: highly balanced",
  "nutritional value: high vitamin K",
  "nutritional value: high antioxidants",
  "climate: temperate",
  "used in: desserts",
]);
categoriesByFruit.set("Boysenberry", [
  "category: berries",
  "size: small",
  "nutritional value: high antioxidants",
]);
categoriesByFruit.set("Raspberry", [
  "category: berries",
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
  "category: berries",
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
  "category: berries",
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
  "category: berries",
  "size: small",
  "nutritional value: high antioxidants",
  "flavor: bitter",
  "climate: temperate",
]);
categoriesByFruit.set("Gooseberry", [
  "category: berries",
  "size: small",
  "flavor: sweet-sour",
  "texture: soft",
  "climate: temperate",
  "used in: desserts",
]);
categoriesByFruit.set("Elderberry", [
  "category: berries",
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
  "category: berries",
  "color: blue/purple",
  "color: black/dark purple",
  "size: small",
  "flavor: sour",
  "nutritional value: high vitamin C",
  "nutritional value: high antioxidants",
  "nutritional value: high calcium",
]);
categoriesByFruit.set("Redcurrant", [
  "category: berries",
  "color: red",
  "size: small",
]);
categoriesByFruit.set("Currant", ["category: berries", "size: small"]);
categoriesByFruit.set("Salmonberry", ["category: berries", "size: small"]);
categoriesByFruit.set("Huckleberry", ["category: berries", "size: small"]);
categoriesByFruit.set("Juniper berry", ["category: berries"]);
categoriesByFruit.set("Honeyberry", [
  "category: berries",
  "color: blue/purple",
  "flavor: sweet",
  "texture: soft",
  "climate: temperate",
  "used in: desserts",
]);
categoriesByFruit.set("Marionberry", [
  "category: berries",
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
  "category: citrus",
  "color: yellow/green",
  "flavor: sour",
  "flavor: bitter",
  "nutritional value: high vitamin C",
  "used in: alcoholic drinks",
]);
categoriesByFruit.set("Lime", [
  "category: citrus",
  "color: yellow/green",
  "flavor: sour",
  "flavor: bitter",
  "nutritional value: high vitamin C",
  "used in: alcoholic drinks",
]);
categoriesByFruit.set("Orange", [
  "category: citrus",
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
  "category: citrus",
  "color: orange",
  "nutritional value: high vitamin C",
]);
categoriesByFruit.set("Mandarine", [
  "category: citrus",
  "color: orange",
  "nutritional value: high vitamin C",
]);
categoriesByFruit.set("Tangerine", [
  "category: citrus",
  "color: orange",
  "flavor: sweet-sour",
  "nutritional value: high vitamin C",
]);
categoriesByFruit.set("Yuzu", ["category: citrus"]);
categoriesByFruit.set("Grapefruit", [
  "category: citrus",
  "flavor: sour",
  "flavor: bitter",
  "used in: alcoholic drinks",
  "nutritional value: highly balanced",
]);
categoriesByFruit.set("Pomelo", ["category: citrus"]);
categoriesByFruit.set("Satsuma", [
  "category: citrus",
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
  "category: citrus",
  "category: stone fruits",
  "category: exotic",
  "color: orange",
  "flavor: sweet-sour",
  "texture: soft",
  "climate: subtropical",
  "used in: desserts",
]);
categoriesByFruit.set("Banana", [
  "category: tropical",
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
  "category: tropical",
  "color: brown",
  "flavor: neutral",
  "texture: soft",
  "texture: firm",
  "category: drupes",
  "used in: desserts",
  "used in: alcoholic drinks",
]);
categoriesByFruit.set("Mango", [
  "category: tropical",
  "category: stone fruits",
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
  "category: tropical",
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
  "category: tropical",
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
categoriesByFruit.set("Star fruit", ["category: tropical"]);
categoriesByFruit.set("Guava", [
  "category: tropical",
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
categoriesByFruit.set("Dragonfruit", ["category: tropical"]);
categoriesByFruit.set("Passionfruit", [
  "category: tropical",
  "category: vine fruits",
  "texture: skin not edible",
  "flavor: spicy",
  "nutritional value: high potassium",
  "nutritional value: high vitamin B",
  "used in: desserts",
  "used in: alcoholic drinks",
]);
categoriesByFruit.set("Durian", ["category: tropical"]);
categoriesByFruit.set("Jackfruit", ["category: tropical", "size: large"]);
categoriesByFruit.set("Avocado", [
  "category: tropical",
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
categoriesByFruit.set("Rambutan", ["category: tropical"]);
categoriesByFruit.set("Salak", ["category: tropical"]);
categoriesByFruit.set("Tamarillo", ["category: tropical"]);
categoriesByFruit.set("Tamarind", ["category: tropical"]);
categoriesByFruit.set("Feijoa", ["category: tropical"]);
categoriesByFruit.set("Plantain", [
  "category: tropical",
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
  "category: berries",
  "category: tropical",
  "category: exotic",
  "texture: soft",
  "used in: desserts",
]);
categoriesByFruit.set("Lychee", [
  "category: tropical",
  "category: stone fruits",
  "flavor: sweet",
  "texture: soft",
  "shape: round",
]);
categoriesByFruit.set("Apricot", [
  "category: stone fruits",
  "color: orange",
  "nutritional value: high vitamin A",
  "climate: temperate",
  "texture: skin edible",
  "used in: desserts",
]);
categoriesByFruit.set("Cherry", [
  "category: stone fruits",
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
  "category: stone fruits",
  "texture: fleshy",
  "category: drupes",
  "climate: temperate",
  "shape: round",
  "season: summer",
  "used in: desserts",
]);
categoriesByFruit.set("Plum", [
  "category: stone fruits",
  "color: blue/purple",
  "texture: firm",
  "category: drupes",
  "climate: temperate",
  "shape: round",
  "used in: desserts",
]);
categoriesByFruit.set("Nectarine", [
  "category: stone fruits",
  "color: red",
  "color: orange",
  "shape: round",
  "used in: savory dishes",
  "used in: salads",
]);
categoriesByFruit.set("Olive", [
  "category: vegetable-fruits",
  "category: stone fruits",
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
  "category: stone fruits",
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
categoriesByFruit.set("Loquat", ["category: stone fruits"]);
categoriesByFruit.set("Damson", [
  "category: stone fruits",
  "color: blue/purple",
  "climate: temperate",
  "shape: oval",
  "used in: desserts",
]);
categoriesByFruit.set("Melon", ["category: melons"]);
categoriesByFruit.set("Cantaloupe", [
  "category: melons",
  "texture: juicy",
  "nutritional value: highly balanced",
  "nutritional value: high vitamin A",
]);
categoriesByFruit.set("Honeydew", [
  "category: melons",
  "color: yellow/green",
  "texture: juicy",
  "texture: skin not edible",
  "flavor: mild",
]);
categoriesByFruit.set("Watermelon", [
  "category: melons",
  "texture: juicy",
  "texture: fleshy",
  "texture: seeded",
  "texture: skin not edible",
  "size: large",
  "season: summer",
  "nutritional value: highly balanced",
]);
categoriesByFruit.set("Apple", [
  "category: pomes",
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
  "category: pomes",
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
categoriesByFruit.set("Quince", ["category: pomes", "color: yellow/green"]);
categoriesByFruit.set("Miracle fruit", ["category: exotic"]);
categoriesByFruit.set("Jabuticaba", ["category: exotic"]);
categoriesByFruit.set("Jambul", ["category: exotic"]);
categoriesByFruit.set("Longan", ["category: exotic"]);
categoriesByFruit.set("Mangosteen", ["category: exotic"]);
categoriesByFruit.set("Kumquat", [
  "category: exotic",
  "size: small",
  "nutritional value: high calcium",
]);
categoriesByFruit.set("Nance", ["category: exotic"]);
categoriesByFruit.set("Soursop", ["category: exotic"]);
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
  "category: melons",
  "color: yellow/green",
  "texture: juicy",
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
categoryFeatures.set("category: berries", {
  type: "general category",
  shortName: "berries",
  forRelationship: "in berries",
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
    "Custard Apple",
  ],
});
categoryFeatures.set("category: citrus", {
  type: "general category",
  shortName: "citrus",
  forRelationship: "in citrus",
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
categoryFeatures.set("category: tropical", {
  type: "general category",
  shortName: "tropical",
  forRelationship: "in tropical fruits",
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
categoryFeatures.set("category: stone fruits", {
  type: "general category",
  shortName: "stone fruits",
  forRelationship: "in stone fruits",
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
categoryFeatures.set("category: melons", {
  type: "general category",
  shortName: "melons",
  forRelationship: "in melons",
  fruits: ["Melon", "Cantaloupe", "Honeydew", "Honeydew Melon", "Watermelon"],
});
categoryFeatures.set("category: pomes", {
  type: "general category",
  shortName: "pomes",
  forRelationship: "in pomes",
  fruits: ["Apple", "Pear", "Quince"],
});
categoryFeatures.set("category: exotic", {
  type: "general category",
  shortName: "exotic",
  forRelationship: "in exotic fruits",
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
  forRelationship: "in vegetable-fruits",
  fruits: ["Tomato", "Cucumber", "Avocado", "Olive"],
});
categoryFeatures.set("category: wild", {
  type: "general category",
  shortName: "wild",
  forRelationship: "in wild fruits",
  fruits: ["Elderberry", "Blackberry"],
});
categoryFeatures.set("color: red", {
  type: "color",
  shortName: "red",
  forRelationship: "is red",
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
  forRelationship: "is yellow/green",
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
    "Honeydew Melon",
    "Quince",
  ],
});
categoryFeatures.set("color: brown", {
  type: "color",
  shortName: "brown",
  forRelationship: "is brown",
  fruits: ["Coconut", "Date"],
});
categoryFeatures.set("color: orange", {
  type: "color",
  shortName: "orange",
  forRelationship: "color is orange",
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
  forRelationship: "is blue/purple",
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
  forRelationship: "is black/dark purple",
  fruits: ["Blackberry", "Blackcurrant", "Mulberry", "Elderberry", "Olive"],
});
categoryFeatures.set("flavor: sweet", {
  type: "flavor",
  shortName: "sweet",
  forRelationship: "is sweet",
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
  forRelationship: "is sour",
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
  forRelationship: "is bitter",
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
  forRelationship: "is neutral-flavored",
  fruits: ["Avocado", "Banana", "Coconut", "Plantain"],
});
categoryFeatures.set("flavor: spicy", {
  type: "flavor",
  shortName: "spicy",
  forRelationship: "is spicy",
  fruits: ["Pineapple", "Passionfruit"],
});
categoryFeatures.set("texture: soft", {
  type: "texture",
  shortName: "soft",
  forRelationship: "is soft",
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
  forRelationship: "is crunchy",
  fruits: ["Apple", "Pear", "Grape", "Pomegranate", "Pear"],
});
categoryFeatures.set("texture: juicy", {
  type: "texture",
  shortName: "juicy",
  forRelationship: "is juicy",
  fruits: [
    "Orange",
    "Watermelon",
    "Pineapple",
    "Cantaloupe",
    "Honeydew",
    "Honeydew Melon",
    "Satsuma",
  ],
});
categoryFeatures.set("texture: firm", {
  type: "texture",
  shortName: "firm",
  forRelationship: "is firm",
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
  forRelationship: "is creamy",
  fruits: ["Banana", "Avocado", "Mango", "Papaya"],
});
categoryFeatures.set("texture: fleshy", {
  type: "texture",
  shortName: "fleshy",
  forRelationship: "is fleshy",
  fruits: ["Orange", "Peach", "Kiwi", "Watermelon"],
});
categoryFeatures.set("texture: gritty", {
  type: "texture",
  shortName: "gritty",
  forRelationship: "is gritty",
  fruits: ["Pear", "Guava"],
});
categoryFeatures.set("nutritional value: high fiber", {
  type: "nutritional value",
  shortName: "high fiber",
  forRelationship: "high fiber",
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
  shortName: "high vitamin C",
  forRelationship: "high vitamin C",
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
  forRelationship: "high potassium",
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
  forRelationship: "high vitamin A",
  fruits: ["Mango", "Cantaloupe", "Papaya", "Guava", "Kiwi", "Apricot"],
});
categoryFeatures.set("nutritional value: high vitamin B", {
  type: "nutritional value",
  shortName: "high vitamin B",
  forRelationship: "high vitamin B",
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
  forRelationship: "high vitamin K",
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
  shortName: "high antioxidants",
  forRelationship: "high antioxidants",
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
  forRelationship: "high magnesium",
  fruits: ["Banana", "Avocado", "Guava", "Date", "Cherry"],
});
categoryFeatures.set("nutritional value: highly balanced", {
  type: "nutritional value",
  shortName: "highly balanced",
  forRelationship: "highly balanced",
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
  forRelationship: "temperate climate",
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
  forRelationship: "used in desserts",
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
  forRelationship: "used in savory dishes",
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
  forRelationship: "used in alcoholic drinks",
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
  forRelationship: "used in jams/jellies",
  fruits: ["Strawberry", "Raspberry", "Blackberry", "Marionberry"],
});
categoryFeatures.set("used in: salads", {
  type: "used in",
  shortName: "salads",
  forRelationship: "used in salads",
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
  forRelationship: "long shelf life",
  fruits: ["Apple", "Orange", "Banana", "Satsuma"],
});
categoryFeatures.set("climate: mediterranean", {
  type: "climate",
  shortName: "mediterranean",
  forRelationship: "mediterranean climate",
  fruits: ["Olive", "Fig", "Pomegranate"],
});
categoryFeatures.set("climate: subtropical", {
  type: "climate",
  shortName: "subtropical",
  forRelationship: "subtropical climate",
  fruits: ["Orange", "Avocado", "Satsuma", "Kiwi", "Date", "Persimmon"],
});
categoryFeatures.set("texture: skin edible", {
  type: "texture",
  shortName: "skin edible",
  forRelationship: "skin edible",
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
  forRelationship: "skin not edible",
  fruits: [
    "Passionfruit",
    "Orange",
    "Avocado",
    "Watermelon",
    "Pomegranate",
    "Banana",
    "Papaya",
    "Honeydew Melon",
    "Honeydew",
  ],
});
categoryFeatures.set("texture: seedless", {
  type: "texture",
  shortName: "seedless",
  forRelationship: "seedless texture",
  fruits: ["Banana", "Pineapple", "Cucumber"],
});
categoryFeatures.set("texture: seeded", {
  type: "texture",
  shortName: "seeded",
  forRelationship: "seeded texture",
  fruits: ["Watermelon", "Pomegranate", "Guava"],
});

categoryFeatures.set("nutritional value: high folic acid", {
  type: "nutritional value",
  shortName: "high folic acid",
  forRelationship: "high folic acid",
  fruits: ["Orange", "Banana", "Papaya", "Strawberry"],
});
categoryFeatures.set("shape: round", {
  type: "shape",
  shortName: "round",
  forRelationship: "is round",
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
  forRelationship: "is oval",
  fruits: ["Mango", "Avocado", "Papaya", "Date", "Damson", "Cucumber"],
});
categoryFeatures.set("size: small", {
  type: "size",
  shortName: "small",
  forRelationship: "small",
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
  forRelationship: "large",
  fruits: ["Watermelon", "Pineapple", "Jackfruit"],
});
categoryFeatures.set("nutritional value: high calcium", {
  type: "nutritional value",
  shortName: "high calcium",
  forRelationship: "high calcium",
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
  forRelationship: "high vitamin E",
  fruits: ["Kiwi", "Papaya"],
});
categoryFeatures.set("season: summer", {
  type: "season",
  shortName: "summer",
  forRelationship: "summer season",
  fruits: ["Watermelon", "Peach", "Cherry"],
});
categoryFeatures.set("season: winter", {
  type: "season",
  shortName: "winter",
  forRelationship: "winter season",
  fruits: ["Orange", "Kiwi", "Satsuma", "Pomegranate"],
});
categoryFeatures.set("category: drupes", {
  type: "category",
  shortName: "drupes",
  forRelationship: "in drupes",
  fruits: ["Coconut", "Olive", "Date", "Peach", "Plum", "Cherry"],
});
categoryFeatures.set("category: vine fruits", {
  type: "category",
  shortName: "vine fruits",
  forRelationship: "in vine fruits",
  fruits: ["Grape", "Kiwi", "Passionfruit"],
});
categoryFeatures.set("color: multi-colored", {
  type: "color",
  shortName: "multi-colored",
  forRelationship: "multi-colored",
  fruits: ["Grape", "Apple"],
});
categoryFeatures.set("flavor: mild", {
  type: "flavor",
  shortName: "mild",
  forRelationship: "mild",
  fruits: ["Cucumber", "Honeydew Melon", "Honeydew"],
});

// Function to check for inconsistencies
function checkInconsistencies() {
  // Variables to hold inconsistencies
  let inconsistencies = [];

  // Check from categories to fruits
  categoryFeatures.forEach((value, key) => {
    let fruits = value.fruits;
    fruits.forEach((fruit) => {
      if (categoriesByFruit.has(fruit)) {
        if (!categoriesByFruit.get(fruit).includes(key)) {
          inconsistencies.push(
            `Inconsistency: Fruit '${fruit}' does not list category '${key}'`
          );
        }
      } else {
        inconsistencies.push(
          `Inconsistency: Fruit '${fruit}' does not exist in 'categoriesByFruit' map`
        );
      }
    });
  });

  // Check from fruits to categories
  categoriesByFruit.forEach((value, key) => {
    let categories = value;
    categories.forEach((category) => {
      if (categoryFeatures.has(category)) {
        if (!categoryFeatures.get(category).fruits.includes(key)) {
          inconsistencies.push(
            `Inconsistency: Category '${category}' does not list fruit '${key}'`
          );
        }
      } else {
        inconsistencies.push(
          `Inconsistency: Category '${category}' does not exist in 'categoryFeatures' map`
        );
      }
    });
  });

  return inconsistencies;
}

// Use the function to check for inconsistencies
let inconsistencies = checkInconsistencies();
console.log([inconsistencies]);

export {
  fruitsArray,
  fruitCategoriesArray,
  categoriesByFruit,
  categoryFeatures,
};
