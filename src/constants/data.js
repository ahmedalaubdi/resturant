/* eslint-disable quotes */
import images from "./images";

const wines = [
  {
    title: "Strawberry",
    price: "$6",
    tags: "Ye | Glass",
  },
  {
    title: "Banana with Milk",
    price: "$3",
    tags: "Ye | Cup",
  },
  {
    title: "Pepsi",
    price: "$1",
    tags: "Pepsi | 350 ml",
  },
  {
    title: "Cocktail Fruit",
    price: "$10",
    tags: "Egy | 600 ml",
  },
  {
    title: "Oranges Drink",
    price: "$10",
    tags: "Ye | 500 ml",
  },
];

const cocktails = [
  {
    title: "Mandi Meat",
    price: "$30",
    tags: "Yemeni | with lamb Meat 1 kilo",
  },
  {
    title: "Mandi Checken",
    price: "$16",
    tags: "Yemeni | Rice Mandi",
  },
  {
    title: "Mandi",
    price: "$25",
    tags: "Yemeni | Mandi Cow Meat",
  },
  {
    title: "Fish Mova",
    price: "$27",
    tags: "Mova | Salamon Fish Mova",
  },
  {
    title: "Fish Mova & Sauce",
    price: "$27",
    tags: "Mova | Fish salad & Sauceh ",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Bib Gourmond",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award01,
    title: "Rising Star",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award05,
    title: "AA Hospitality",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award03,
    title: "Outstanding Chef",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
];

export default { wines, cocktails, awards };
