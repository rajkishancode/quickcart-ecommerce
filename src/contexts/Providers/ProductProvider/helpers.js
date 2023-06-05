

const compose = (...filters) => (state,data) => filters.reduce((accu,curr) => curr(state,accu),data);



const categoryFilter = ({ category }, data) =>
  category.length === 0
    ? data
    : data.filter((prod) => category.includes(prod.categoryName));



const priceFilter = ({ filterPrice }, data) =>
  filterPrice ? data.filter((prod) => prod.price > filterPrice) : data;


const ratingFilter = ({ rating },data) => 
rating ? data.filter((prod) => prod.rating >= rating): data;


const sortProducts = ({ sortBy }, data) =>
  sortBy
    ? sortBy === "LOW_TO_HIGH"
      ? [...data].sort((a, b) => a.price - b.price)
      : [...data].sort((a, b) => b.price - a.price)
    : data;


export { compose, categoryFilter, priceFilter, ratingFilter, sortProducts };