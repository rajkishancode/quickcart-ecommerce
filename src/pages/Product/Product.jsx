import React from 'react';
import "./Product.css";

export const Product = () => {
  return (
    <div className="product-container">
      <aside class="filters px-8 pt-8">
        <div class="filter-header d-flex content-space-between">
          <h3 class="m-0">Filter</h3>
          <button class="btn btn-link-primary">Clear All</button>
        </div>

        <section class="my-6">
          <p class="mb-2">Price</p>
          <label
            class="price-range d-flex content-space-between"
            for="price-range"
          >
            <span>500</span>
            <span>2000</span>
          </label>
          <input class="w-100" type="range" id="price-range" />
        </section>

        <section class="my-6">
          <h5 class=" mb-2">Category</h5>
          <ul>
            <li class="my-2">
              <input class="mr-2" type="checkbox" id="category-shirt" />
              <label for="category-shirts">Shirts</label>
            </li>
            <li class="my-2">
              <input class="mr-2" type="checkbox" id="category-hoodie" />
              <label for="category-hoodie"> Hoodies</label>
            </li>
            <li class="my-2">
              <input class="mr-2" type="checkbox" id="category-Jackets" />
              <label for="category-Jackets"> Jackets</label>
            </li>
          </ul>
        </section>

        <section class="my-6">
          <h5 class=" mb-2">Brands</h5>
          <ul>
            <li class="my-2">
              <input class="mr-2" type="checkbox" id="brand-h&m" />
              <label for="brand-h&m"> H&M</label>
            </li>
            <li class="my-2">
              <input class="mr-2" type="checkbox" id="brand-jack&jones" />
              <label for="brand-jack&jones"> Jack & Jones</label>
            </li>
            <li class="my-2">
              <input class="mr-2" type="checkbox" id="brand-spykar" />
              <label for="brand-spykar"> Spykar</label>
            </li>
            <li class="my-2">
              <input class="mr-2" type="checkbox" id="brand-levi's" />
              <label for="brand-levi's"> Louis Philippe</label>
            </li>
          </ul>
        </section>

        <section class="my-6">
          <h5 class="mb-2">Rating</h5>
          <ul>
            <li class="my-2">
              <input class="mr-2" type="radio" name="rating" id="rating-4" />
              <label for="rating-4"> 4 stars & above</label>
            </li>
            <li class="my-2">
              <input class="mr-2" type="radio" name="rating" id="rating-3" />
              <label for="rating-3"> 3 stars & above</label>
            </li>
            <li class="my-2">
              <input class="mr-2" type="radio" name="rating" id="rating-2" />
              <label for="rating-2"> 2 stars & above</label>
            </li>
            <li class="my-2">
              <input class="mr-2" type="radio" name="rating" id="rating-1" />
              <label for="rating-1"> 1 stars & above</label>
            </li>
          </ul>
        </section>

        <section class="my-6">
          <h4 class="mb-2">Sort By</h4>
          <ul>
            <li class="my-2">
              <input
                class="mr-2"
                type="radio"
                name="price-sort"
                id="price-low-to-high"
              />
              <label for="price-low-to-high"> Price - low to high</label>
            </li>
            <li class="my-2">
              <input
                class="mr-2"
                type="radio"
                name="price-sort"
                id="price-high-to-low"
              />
              <label for="price-high-to-low"> Price - high to low</label>
            </li>
          </ul>
        </section>
      </aside>

      <main class="products mb-10 product-list">
        <h3 class="h3 text-center mt-10 mb-6">
          Showing all Products <span>(showing 9 Products)</span>
        </h3>

        <div class="auth-container">
          <div class="card">
            <span class="card-badge-right">
              <i class="fa-solid fa-heart"></i>
            </span>
            <div>
              <img
                src="https://i.postimg.cc/Hnfb7wd8/yellow-hoodie.webp"
                alt="yellow hoodie"
                class="img-responsive img-square card-image"
              />
            </div>
            <div class="card-body p-4">
              <div class="card-title mb-2 text-center">Yellow Hoodie</div>

              <div class="card-title mb-2 text-center">
                Rs. 2,899{" "}
                <span class="ecom-original-price px-2"> Rs. 5,799 </span>{" "}
                <span class="ecom-discount">(50% OFF) </span>
              </div>
            </div>
            <button class="btn btn-solid-primary w-100">Add to cart</button>
          </div>

          <div class="card">
            <span class="card-badge-right">
              <i class="far fa-heart"></i>
            </span>
            <div>
              <img
                src="https://i.postimg.cc/Hnfb7wd8/yellow-hoodie.webp"
                alt="yellow hoodie"
                class="img-responsive img-square card-image"
              />
            </div>
            <div class="card-body p-4">
              <div class="card-title mb-2 text-center">Yellow Hoodie</div>

              <div class="card-title mb-2 text-center">
                Rs. 2,899{" "}
                <span class="ecom-original-price px-2"> Rs. 5,799 </span>{" "}
                <span class="ecom-discount">(50% OFF) </span>
              </div>
            </div>
            <button class="btn btn-solid-primary w-100">Add to cart</button>
          </div>

          <div class="card">
            <span class="card-badge-right">
              <i class="far fa-heart"></i>
            </span>
            <div>
              <img
                src="https://i.postimg.cc/Hnfb7wd8/yellow-hoodie.webp"
                alt="yellow hoodie"
                class="img-responsive img-square card-image"
              />
            </div>
            <div class="card-body p-4">
              <div class="card-title mb-2 text-center">Yellow Hoodie</div>

              <div class="card-title mb-2 text-center">
                Rs. 2,899{" "}
                <span class="ecom-original-price px-2"> Rs. 5,799 </span>{" "}
                <span class="ecom-discount">(50% OFF) </span>
              </div>
            </div>
            <button class="btn btn-solid-primary w-100">Add to cart</button>
          </div>

          <div class="card">
            <span class="card-badge-right">
              <i class="far fa-heart"></i>
            </span>
            <div>
              <img
                src="https://i.postimg.cc/Hnfb7wd8/yellow-hoodie.webp"
                alt="yellow hoodie"
                class="img-responsive img-square card-image"
              />
            </div>
            <div class="card-body p-4">
              <div class="card-title mb-2 text-center">Yellow Hoodie</div>

              <div class="card-title mb-2 text-center">
                Rs. 2,899{" "}
                <span class="ecom-original-price px-2"> Rs. 5,799 </span>{" "}
                <span class="ecom-discount">(50% OFF) </span>
              </div>
            </div>
            <button class="btn btn-solid-primary w-100">Add to cart</button>
          </div>
          <div class="card">
            <span class="card-badge-right">
              <i class="far fa-heart"></i>
            </span>
            <div>
              <img
                src="https://i.postimg.cc/Hnfb7wd8/yellow-hoodie.webp"
                alt="yellow hoodie"
                class="img-responsive img-square card-image"
              />
            </div>
            <div class="card-body p-4">
              <div class="card-title mb-2 text-center">Yellow Hoodie</div>

              <div class="card-title mb-2 text-center">
                Rs. 2,899{" "}
                <span class="ecom-original-price px-2"> Rs. 5,799 </span>{" "}
                <span class="ecom-discount">(50% OFF) </span>
              </div>
            </div>
            <button class="btn btn-solid-primary w-100">Add to cart</button>
          </div>

          <div class="card">
            <span class="card-badge-right">
              <i class="far fa-heart"></i>
            </span>
            <div>
              <img
                src="https://i.postimg.cc/PxJD33q8/brown-hoodie.webp"
                alt="brown hoodie"
                class="img-responsive img-square card-image"
              />
            </div>
            <div class="card-body p-4">
              <div class="card-title mb-2 text-center">Printed Hoodie</div>

              <div class="card-title mb-2 text-center">
                Rs. 2,500{" "}
                <span class="ecom-original-price px-2"> Rs. 5,000 </span>{" "}
                <span class="ecom-discount">(50% OFF) </span>
              </div>
            </div>
            <button class="btn btn-solid-primary w-100">Add to cart</button>
          </div>
          <div class="card">
            <span class="card-badge-right">
              <i class="far fa-heart"></i>
            </span>
            <div>
              <img
                src="https://i.postimg.cc/PxJD33q8/brown-hoodie.webp"
                alt="brown hoodie"
                class="img-responsive img-square card-image"
              />
            </div>
            <div class="card-body p-4">
              <div class="card-title mb-2 text-center">Printed Hoodie</div>

              <div class="card-title mb-2 text-center">
                Rs. 2,500{" "}
                <span class="ecom-original-price px-2"> Rs. 5,000 </span>{" "}
                <span class="ecom-discount">(50% OFF) </span>
              </div>
            </div>
            <button class="btn btn-solid-primary w-100">Add to cart</button>
          </div>
        </div>
      </main>
    </div>
  );
}
