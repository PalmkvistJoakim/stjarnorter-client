const categories = [
  {
    _id: "10",
    name: "Örtteer",
    path: "/örtteer",
    img: "./images/Inate2-1.jpg",
  },
  {
    _id: "11",
    name: "Kryddor",
    path: "/kryddor",
    img: "images/Inakrydd1-1.jpg",
  },
  {
    _id: "12",
    name: "Salvor/Cerat",
    path: "/salvor&cerat",
    img: "images/scinbalance1-1.jpg",
  },
  {
    _id: "13",
    name: "Örtblandningar",
    path: "/örtblandningar",
    img: "images/Örter1-1.jpg",
  },
];

export const getCategories = () => {
  return categories;
};
