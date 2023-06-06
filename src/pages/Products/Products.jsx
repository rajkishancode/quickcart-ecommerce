import { useEffect } from "react";
import { ProductCard } from "../../components";
import { useProducts, useDocumentTitle } from "../../hooks";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./products.css";

export const Products = () => {
  const { state, dispatch, filteredProducts } = useProducts();
  const params = useParams();
  const { categoryName } = params;

  useEffect(() => {
    if (categoryName !== undefined) {
      dispatch({ type: "CATEGORY", category: categoryName });
    }
    return () => dispatch({ type: "CLEAR" });
  }, [categoryName]);

  const { products, category, sortBy, rating, filterPrice, brand } = state;

  useDocumentTitle("Products | Quickcart");

  useEffect(() => {
    (async () => {
      try {
        const response = await axios("/api/products");
        dispatch({ type: "FETCH", payload: response.data.products });
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  const priceRangeValues = {
    min: products.reduce(
      (acc, curr) =>
        curr.price < acc.price
          ? {
              ...acc,
              price: curr.price,
            }
          : acc,
      { price: Infinity }
    ),
    max: products.reduce(
      (acc, curr) =>
        curr.price > acc.price
          ? {
              ...acc,
              price: curr.price,
            }
          : acc,
      { price: -Infinity }
    ),
  };

  

  return (
    <div className="product-container">
      <aside className="filters px-8 pt-8">
        <div className="filter-header d-flex content-space-between">
          <h3 className="m-0">Filter</h3>
          <button
            className="btn btn-link-primary"
            onClick={() => dispatch({ type: "CLEAR" })}
          >
            Clear All
          </button>
        </div>

        <section className="my-6">
          <p className="mb-2">Price</p>
          <label
            className="price-range d-flex content-space-between"
            for="price-range"
          >
            <span>{priceRangeValues.min.price}</span>
            <span>{priceRangeValues.max.price}</span>
          </label>
          <input
            className="w-100"
            type="range"
            id="price-range"
            min={priceRangeValues.min.price}
            max={priceRangeValues.max.price}
            value={filterPrice}
            onChange={(e) =>
              dispatch({ type: "PRICE_FILTER", filterPrice: e.target.value })
            }
          />
        </section>

        <section className="my-6">
          <h5 className=" mb-2">Category</h5>
          <ul>
            <li className="my-2 d-flex">
              <input
                className="mr-2"
                type="checkbox"
                id="category-shirts"
                onChange={() =>
                  dispatch({ type: "CATEGORY", category: "Shirts" })
                }
              />
              <label for="category-shirts">Shirts</label>
            </li>
            <li className="my-2 d-flex">
              <input
                className="mr-2"
                type="checkbox"
                id="category-hoodie"
                onChange={() =>
                  dispatch({ type: "CATEGORY", category: "Hoodies" })
                }
              />
              <label for="category-hoodie"> Hoodies</label>
            </li>
            <li className="my-2 d-flex">
              <input
                className="mr-2"
                type="checkbox"
                id="category-Jackets"
                onChange={() =>
                  dispatch({ type: "CATEGORY", category: "Jackets" })
                }
              />
              <label for="category-Jackets"> Jackets</label>
            </li>
            <li className="my-2 d-flex">
              <input
                className="mr-2"
                type="checkbox"
                id="category-Tshirt"
                onChange={() =>
                  dispatch({ type: "CATEGORY", category: "Tshirt" })
                }
              />
              <label for="category-Tshirt"> Tshirt</label>
            </li>
            <li className="my-2 d-flex">
              <input
                className="mr-2"
                type="checkbox"
                id="category-Suit"
                onChange={() =>
                  dispatch({ type: "CATEGORY", category: "Suit" })
                }
              />
              <label for="category-Suit"> Suit</label>
            </li>
          </ul>
        </section>

        <section className="my-6">
          <h5 className=" mb-2">Brands</h5>
          <ul>
            <li className="my-2 d-flex">
              <input
                className="mr-2"
                type="checkbox"
                id="brand-h&m"
                onChange={() => dispatch({ type: "BRAND", brand: "h&m" })}
                checked={brand.includes("h&m")}
              />
              <label for="brand-h&m"> H&M</label>
            </li>
            <li className="my-2 d-flex">
              <input
                className="mr-2"
                type="checkbox"
                id="brand-jack&jones"
                onChange={() =>
                  dispatch({ type: "BRAND", brand: "JACK & JONES" })
                }
                checked={brand.includes("JACK & JONES")}
              />
              <label for="brand-jack&jones"> Jack & Jones</label>
            </li>
            <li className="my-2 d-flex">
              <input
                className="mr-2"
                type="checkbox"
                id="brand-spykar"
                onChange={() => dispatch({ type: "BRAND", brand: "SPYKAR" })}
                checked={brand.includes("SPYKAR")}
              />
              <label for="brand-spykar"> Spykar</label>
            </li>
            <li className="my-2 d-flex">
              <input
                className="mr-2"
                type="checkbox"
                id="brand-Louis-Philippe"
                onChange={() =>
                  dispatch({ type: "BRAND", brand: "Louis Philippe" })
                }
                checked={brand.includes("Louis Philippe")}
              />
              <label for="brand-Louis-Philippe">Louis Philippe</label>
            </li>
          </ul>
        </section>

        <section className="my-6">
          <h5 className="mb-2">Rating</h5>
          <ul>
            <li className="my-2 d-flex">
              <input
                className="mr-2"
                type="radio"
                name="rating"
                id="rating-4"
                onClick={() => dispatch({ type: "RATING", rating: 4 })}
                checked={rating === 4}
              />
              <label for="rating-4"> 4 stars & above</label>
            </li>
            <li className="my-2 d-flex">
              <input
                className="mr-2"
                type="radio"
                name="rating"
                id="rating-3"
                onClick={() => dispatch({ type: "RATING", rating: 3 })}
                checked={rating === 3}
              />
              <label for="rating-3"> 3 stars & above</label>
            </li>
            <li className="my-2 d-flex">
              <input
                className="mr-2"
                type="radio"
                name="rating"
                id="rating-2"
                onClick={() => dispatch({ type: "RATING", rating: 2 })}
                checked={rating === 2}
              />
              <label for="rating-2"> 2 stars & above</label>
            </li>
            <li className="my-2 d-flex">
              <input
                className="mr-2"
                type="radio"
                name="rating"
                id="rating-1"
                onClick={() => dispatch({ type: "RATING", rating: 1 })}
                checked={rating === 1}
              />
              <label for="rating-1"> 1 stars & above</label>
            </li>
          </ul>
        </section>

        <section className="my-6 ">
          <h4 className="mb-2">Sort By</h4>
          <ul>
            <li className="my-2 d-flex">
              <input
                className="mr-2"
                type="radio"
                name="price-sort"
                id="price-low-to-high"
                onChange={() => dispatch({ type: "SORT", sort: "LOW_TO_HIGH" })}
                checked={sortBy === "LOW_TO_HIGH"}
              />
              <label for="price-low-to-high"> Price - low to high</label>
            </li>
            <li className="my-2 d-flex">
              <input
                className="mr-2"
                type="radio"
                name="price-sort"
                id="price-high-to-low"
                onChange={() => dispatch({ type: "SORT", sort: "HIGH_TO_LOW" })}
                checked={sortBy === "HIGH_TO_LOW"}
              />
              <label for="price-high-to-low"> Price - high to low</label>
            </li>
          </ul>
        </section>
      </aside>

      <main className="products mb-10 product-list">
        <h3 className="h3 text-center mt-10 mb-6 ">
          Showing{" "}
          {category.length === 0 || category.length === 5
            ? "All Categories"
            : category.reduce((acc, curr) => acc + ", " + curr)}
          <span className="ml-4">
            (Showing {filteredProducts.length} products)
          </span>
        </h3>

        <div className="auth-container">
          {filteredProducts.map((prod) => (
            <ProductCard key={prod._id} info={{ prod }} />
          ))}

          {filteredProducts.length === 0 && (
            <h3 className="no-products-msg">
              No products matchting filters :/
            </h3>
          )}
        </div>
      </main>
    </div>
  );
};
