// import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: "be51624b-c4a5-44f2-9c16-69b284e5fd5c",
    src: "https://i.postimg.cc/K8zD01dx/hm-shirt-1.jpg",
    categoryName: "Shirts",
    rating: "3.9",
    brand: "h&m",
    description: "Slim Fit Waffled polo shirt",
    title: "Polo shirt",
    trending: false,
    original_price: "1899",
    price: "899",
    delivery_time: "9",
    reviews: "2.9k",
    in_stock: true,
  },
  {
    _id: "7116b8e1-5b68-4b8f-a616-425762e9238zsd",
    title: "Solid Hoodie",
    original_price: "2400",
    description: "Relaxed Fit Hoodie",
    price: "1199",
    rating: "4.5",
    brand: "h&m",
    src: "https://i.postimg.cc/tgntHLqc/hm-hoodie-1.jpg",
    categoryName: "Hoodies",
    trending: true,
    reviews: "1.5k",
    in_stock: true,
    delivery_time: "3",
  },
  {
    _id: "4b56b4ef-c361-4c72-b39e-97dee6711bb9",
    src: "https://i.postimg.cc/MTy7nVjb/hm-shirt-2.jpg",
    categoryName: "Shirts",
    rating: "3.8",
    brand: "h&m",
    description: "Regular Fit Terry resort shirt",
    title: "Resort shirt",
    trending: false,
    original_price: "2599",
    price: "1299",
    delivery_time: "6",
    reviews: "2.4k",
    in_stock: true,
  },
  {
    _id: "1f302642-447a-4694-bb27-9703d6524aa4",
    src: "https://i.postimg.cc/ncT1K4S3/hm-jacket-1.webp",
    categoryName: "Jackets",
    rating: "4.3",
    brand: "h&m",
    description: "Linen bomber jacket",
    title: "bomber jacket",
    trending: true,
    original_price: "3599",
    price: "1799",
    delivery_time: "8",
    reviews: "605",
    in_stock: false,
  },
  {
    _id: "556603b0-2c56-4462-848e-448dfc69bc3d",
    src: "https://i.postimg.cc/RhSdhfjJ/j-j-shirt-1.webp",
    categoryName: "Shirts",
    rating: "4.2",
    brand: "JACK & JONES",
    description: "GREY FLORAL CO-ORD SET SHIRT",
    title: "Floral shirt",
    trending: true,
    original_price: "1699",
    price: "899",
    delivery_time: "1",
    reviews: "2.5k",
    in_stock: true,
  },
  {
    _id: "7116b8e1-5b68-4b8f-a616-42asa110762e91121zad",
    title: "H&M Printed hoodie",
    original_price: "2899",
    description: "Relaxed Fit Printed hoodie",
    price: "1499",
    rating: "4.1",
    brand: "h&m",
    src: "https://i.postimg.cc/zGcS6JrW/hm-hoodie-2.jpg",
    categoryName: "Hoodies",
    trending: true,
    reviews: "1.5k",
    in_stock: false,
    delivery_time: "7",
  },
  {
    _id: "ff06eaed-9a9c-4f42-a525-e233baaaa294",
    src: "https://i.postimg.cc/LXdk4Nh8/hm-jacket-2.jpg",
    categoryName: "Jackets",
    rating: "4.3",
    brand: "h&m",
    description: "Regular Fit jacket",
    title: "H&M Jacket",
    trending: true,
    original_price: "3599",
    price: "1799",
    delivery_time: "2",
    reviews: "205",
    in_stock: true,
  },
  {
    _id: "7ef09383-3ef3-4eeb-ba05-23b2aa4d0553",
    src: "https://i.postimg.cc/qvS1wNCW/j-j-shirt-2.webp",
    categoryName: "Shirts",
    rating: "4.3",
    brand: "JACK & JONES",
    description: "METAVERSE WHITE STRIPED FULL SLEEVES SHIRT",
    title: "J&J STRIPED SHIRT",
    trending: false,
    original_price: "1899",
    price: "1450",
    delivery_time: "5",
    reviews: "4k",
    in_stock: true,
  },
  {
    _id: "c1dd7db4-0830-4e01-a968-bdbcce36d4de",
    src: "https://i.postimg.cc/tgnMG3jX/j-j-jacket-1.webp",
    categoryName: "Jackets",
    rating: "4.5",
    brand: "JACK & JONES",
    description: "DARK BLUE TRUCKER DENIM JACKET",
    title: "DENIM JACKET",
    trending: false,
    original_price: "3398",
    price: "1647",
    delivery_time: "4",
    reviews: "7.9K",
    in_stock: true,
  },
  {
    _id: "7116b8e1-5b68-4b8f-a616-431232fjf762e97d7d",
    title: "HOODED SWEATSHIRT",
    original_price: "2599",
    description: "ORANGE HOODED SWEATSHIRT",
    price: "1299",
    rating: "3.9",
    brand: "JACK & JONES",
    src: "https://i.postimg.cc/BvjdQWxf/j-j-hoodie-1.webp",
    categoryName: "Hoodies",
    trending: true,
    reviews: "1.5k",
    in_stock: true,
    delivery_time: "11",
  },
  {
    _id: "75e79f27-b6fa-4f10-8829-b4d003e77b43",
    src: "https://i.postimg.cc/02PwX5cW/spykar-shirt-2.png",
    categoryName: "Shirts",
    rating: "4.5",
    brand: "SPYKAR",
    description: "SPYKAR MEN BOTTLE GREEN COTTON SLIM FIT PRINTED SHIRT",
    title: "MEN SHIRTS",
    trending: false,
    original_price: "2499",
    price: "1249",
    delivery_time: "3",
    reviews: "3k",
    in_stock: true,
  },
  {
    _id: "1bb27d9f-1720-449e-ada1-7fad574344d7",
    src: "https://i.postimg.cc/nz7gBvRd/j-j-jacket-2.webp",
    categoryName: "Jackets",
    rating: "3.5",
    brand: "JACK & JONES",
    description: "CHOCOLATE BROWN LEATHER JACKET",
    title: "LEATHER JACKET",
    trending: false,
    original_price: "1998",
    price: "998",
    delivery_time: "4",
    reviews: "200",
    in_stock: true,
  },
  {
    _id: "4694797c-e044-4464-97f0-102c18a48142",
    src: "https://i.postimg.cc/CKrWhsVq/lp-jacket-1.webp",
    categoryName: "Jackets",
    rating: "3.5",
    brand: "Louis Philippe",
    description: "Men Casual Navy Solid Jackets",
    title: "LP Jacket",
    trending: false,
    original_price: "4998",
    price: "1998",
    delivery_time: "4",
    reviews: "200",
    in_stock: true,
  },
  {
    _id: "f17f6d0b-3bf0-4dbd-ad8b-24801572c7a0",
    title: "FLORAL SHIRT",
    description: "SPYKAR MEN WINE RED COTTON SLIM FIT FLORAL SHIRT",
    original_price: "2499",
    price: "1250",
    rating: "4",
    brand: "SPYKAR",
    src: "https://i.postimg.cc/c4h8pqzs/spykar-shirt-1.png",
    categoryName: "Shirts",
    trending: false,
    delivery_time: "10",
    reviews: "1000",
    in_stock: false,
  },
  {
    _id: "c1dd7db4-0830-4e01-a968-bdbccasa12d4de",
    src: "https://i.postimg.cc/RZRk8zsG/lp-jacket-2.webp",
    categoryName: "Jackets",
    rating: "4.2",
    brand: "Louis Philippe",
    description: "Men Casual Navy Solid Jackets",
    title: "LP JACKET",
    trending: true,
    original_price: "1887",
    price: "890",
    delivery_time: "4",
    reviews: "1.9K",
    in_stock: true,
  },
  {
    _id: "1a11dd3c-a8a8-4d66-acff-9c5015673c2b",
    title: "SPYKAR JACKET",
    description: "SPYKAR BLACK POLYESTER MEN JACKET",
    original_price: "3699",
    price: "1887",
    rating: "3.8",
    brand: "SPYKAR",
    trending: true,
    delivery_time: "3",
    reviews: "229",
    in_stock: true,
    src: "https://i.postimg.cc/h49m0QbQ/spykar-jacket-2.png",
    categoryName: "Jackets",
  },
  {
    _id: "8e7d52e2-75e7-489c-9e43-74875ebbc187",
    title: "MEN JACKETS",
    description: "SPYKAR RED FULL SLEEVE DENIM JACKET FOR MEN",
    original_price: "4248",
    price: "2199",
    rating: "3.2",
    brand: "SPYKAR",
    src: "https://i.postimg.cc/sg2Zy6F5/spykar-jacket-1.png",
    categoryName: "Jackets",
    trending: false,
    reviews: "3k",
    in_stock: true,
    delivery_time: "9",
  },
  {
    _id: "7116b8e1-5b68-4b8f-a616-4257dfdjfo997d7d",
    title: "PRINTED HOODIE",
    original_price: "2099",
    description: "GREEN LOGO PRINT HOODED SWEATSHIRT",
    price: "999",
    rating: "4.3",
    brand: "JACK & JONES",
    src: "https://i.postimg.cc/kg10mMRy/jandj-hoodie-2.webp",
    categoryName: "Hoodies",
    trending: false,
    reviews: "20",
    in_stock: true,
    delivery_time: "11",
  },

  {
    _id: "7116b8e1-5213sf-4458f-a616-4257dfdjf2397d7d",
    title: "SPYKAR HOODIES",
    original_price: "2099",
    description:
      "SPYKAR MEN RIFLE GREEN BLENDED REGULAR FIT HOODED PLAIN SWEATSHIRT",
    price: "1050",
    rating: "3.5",
    brand: "SPYKAR",
    src: "https://i.postimg.cc/yNtRLFbc/spykar-hoodie-1.png",
    categoryName: "Hoodies",
    trending: false,
    reviews: "134",
    in_stock: true,
    delivery_time: "12",
  },

  {
    _id: "81d1fb3a-8052-4e6b-b4c6-4070302f04bd",
    title: "SPYKAR SWEATSHIRT",
    description: "SPYKAR BLUE COTTON SWEATSHIRT FOR MEN",
    original_price: "2499",
    price: "1299",
    rating: "4.4",
    brand: "SPYKAR",
    src: "https://i.postimg.cc/sfSY0NyX/spykar-hoodie-2.png",
    categoryName: "Hoodies",
    trending: false,
    reviews: "3.4k",
    in_stock: true,
    delivery_time: "7",
  },
  {
    _id: "df4f0325-5ccf-451c-91ec-04a9cf1bc11a",
    title: "Cotton T-shirt",
    description: "Relaxed Fit Cotton T-shirt",
    original_price: "2499",
    price: "1249",
    rating: "4.4",
    brand: "h&m",
    src: "https://i.postimg.cc/jq1r8X19/h-m-tshirt-1.webp",
    categoryName: "Tshirt",
    trending: false,
    reviews: "2.4k",
    in_stock: true,
    delivery_time: "7",
  },
  {
    _id: "d6d2d2ca-6135-4eef-be4f-c5aead355a55",
    title: "Printed T-shirt",
    description: "Relaxed Fit Printed T-shirt",
    original_price: "3499",
    price: "1799",
    rating: "4.1",
    brand: "h&m",
    src: "https://i.postimg.cc/dtTcgCP0/h-m-tshirt-2.webp",
    categoryName: "Tshirt",
    trending: true,
    reviews: "1.4k",
    in_stock: true,
    delivery_time: "7",
  },
  {
    _id: "830994f9-2249-4779-ba0d-2607836a50be",
    title: "LP TSHIRT",
    description: "Men Navy Solid Polo Neck T-Shirt",
    original_price: "2499",
    price: "1249",
    rating: "4.2",
    brand: "Louis Philippe",
    src: "https://i.postimg.cc/nzsNC9Hw/lp-tshirt-1.webp",
    categoryName: "Tshirt",
    trending: true,
    reviews: "3.4k",
    in_stock: true,
    delivery_time: "7",
  },
  {
    _id: "aafd9773-8f49-49f9-aa9c-80ef130a4e8b",
    title: "LP TSHIRT",
    description: "Men Navy Print Polo Neck T-Shirt",
    original_price: "2799",
    price: "1399",
    rating: "3.4",
    brand: "Louis Philippe",
    src: "https://i.postimg.cc/3JjV4TT7/lp-tshirt-2.webp",
    categoryName: "Tshirt",
    trending: false,
    reviews: "2.4k",
    in_stock: true,
    delivery_time: "7",
  },
  {
    _id: "02aa50d3-e9ce-4234-b4d6-3bfe3241655d",
    title: "PRINTED T-SHIRT",
    description:
      "SPYKAR MEN SLATE GREY COTTON REGULAR FIT HALF SLEEVE PRINTED T-SHIRT",
    original_price: "1899",
    price: "1449",
    rating: "4.4",
    brand: "SPYKAR",
    src: "https://i.postimg.cc/W3WPc61d/spykar-tshirt-1.webp",
    categoryName: "Tshirt",
    trending: true,
    reviews: "3.4k",
    in_stock: true,
    delivery_time: "7",
  },
  {
    _id: "4d083558-9fc2-418d-8d23-71a2a1b5bf08",
    title: "CASUAL T-SHIRT",
    description:
      "SPYKAR NAVY BLUE COTTON HALF SLEEVE PRINTED CASUAL T-SHIRT FOR MEN",
    original_price: "2399",
    price: "1249",
    rating: "4.1",
    brand: "SPYKAR",
    src: "https://i.postimg.cc/7h5rHG5m/spykar-tshirt-2.webp",
    categoryName: "Tshirt",
    trending: false,
    reviews: "1.4k",
    in_stock: true,
    delivery_time: "7",
  },
  {
    _id: "1e4b2b01-7356-45c8-8f29-9ca372ffb63e",
    title: "Cotton T-shirt",
    description: "DARK BLUE LOGO PRINT CREW NECK T-SHIRT",
    original_price: "2199",
    price: "1099",
    rating: "4.1",
    brand: "JACK & JONES",
    src: "https://i.postimg.cc/QxVG7xQc/jack-tshirt-1.webp",
    categoryName: "Tshirt",
    trending: false,
    reviews: "3.4k",
    in_stock: true,
    delivery_time: "7",
  },

  {
    _id: "9ce1e708-5953-4fac-8618-800a81442f08",
    title: "Crew T-shirt",
    description: "BROWN LOGO PRINT CREW NECK T-SHIRT",
    original_price: "2499",
    price: "1249",
    rating: "3.9",
    brand: "JACK & JONES",
    src: "https://i.postimg.cc/fW8Qk09w/jack-tshirt-2.webp",
    categoryName: "Tshirt",
    trending: true,
    reviews: "2.4k",
    in_stock: true,
    delivery_time: "7",
  },
  {
    _id: "77a6dc54-6cfa-4be1-94d2-41d3d9e54c55",
    title: "TEAL SUIT-SET BLAZER",
    description: "Men's suit-set blazer cut in a slim fit",
    original_price: "2199",
    price: "1099",
    rating: "4.2",
    brand: "JACK & JONES",
    src: "https://i.postimg.cc/XNh0jpqG/jack-blazer-1.webp",
    categoryName: "Suit",
    trending: false,
    reviews: "3.4k",
    in_stock: true,
    delivery_time: "5",
  },
  {
    _id: "526fea60-41d8-4bcf-83a1-1df3f9070e65",
    title: "MAROON SUIT-SET BLAZER",
    description: "Men's suit-set blazer cut in a slim fit",
    original_price: "2199",
    price: "1099",
    rating: "3.1",
    brand: "JACK & JONES",
    src: "https://i.postimg.cc/vTpR3SkL/jack-blazer-2.webp",
    categoryName: "Suit",
    trending: true,
    reviews: "1.4k",
    in_stock: true,
    delivery_time: "4",
  },
  {
    _id: "fa6b3737-7c73-4118-a36e-f8968977733c",
    title: "LP Formal Blazers",
    description: "Men Navy Slim Fit Textured Formal Blazer",
    original_price: "8999",
    price: "4449",
    rating: "3.9",
    brand: "Louis Philippe",
    src: "https://i.postimg.cc/kgqrf5cB/lp-blazer-1.webp",
    categoryName: "Suit",
    trending: false,
    reviews: "2.6k",
    in_stock: true,
    delivery_time: "6",
  },
  {
    _id: "ef3577b0-3059-4c51-9034-37cca117e6d9",
    title: "LP Casual Blazers",
    description: "Men Grey Super Slim Fit Textured Casual Blazer",
    original_price: "7499",
    price: "3799",
    rating: "4.1",
    brand: "Louis Philippe",
    src: "https://i.postimg.cc/43xDRFjG/lp-blazer-2.webp",
    categoryName: "Suit",
    trending: true,
    reviews: "2.8k",
    in_stock: true,
    delivery_time: "4",
  },
  {
    _id: "f3bdd64c-45c2-49e4-864a-34501f9c32fc",
    src: "https://i.postimg.cc/4NRjx3jB/lp-shirt-1.webp",
    categoryName: "Shirts",
    rating: "4.1",
    brand: "Louis Philippe",
    description: "Men Orange Printed Sleeves Casual Shirt",
    title: "LP Shirt",
    trending: true,
    original_price: "2587",
    price: "1290",
    delivery_time: "5",
    reviews: "2.9K",
    in_stock: true,
  },
  {
    _id: "b6ba513d-be16-4ee9-9951-cfe4b4a786aa",
    src: "https://i.postimg.cc/8k6qGvX7/lp-shirt-2.webp",
    categoryName: "Shirts",
    rating: "4.4",
    brand: "Louis Philippe",
    description: "Men Green Super Slim Fit Solid Full Sleeves Casual Shirt",
    title: "LP Shirt",
    trending: true,
    original_price: "2587",
    price: "1290",
    delivery_time: "6",
    reviews: "1.6K",
    in_stock: false,
  },
  {
    _id: "2587eaea-35f0-47f1-b132-9b1ae283bcac",
    src: "https://i.postimg.cc/Y9JZg202/lp-hoodie-1.webp",
    categoryName: "Hoodies",
    rating: "3.9",
    brand: "Louis Philippe",
    description: "Men Casual Blue Stripe Sweatshirt",
    title: "LP Sweatshirt",
    trending: false,
    original_price: "2787",
    price: "1390",
    delivery_time: "5",
    reviews: "2.9K",
    in_stock: true,
  },
  {
    _id: "35399efc-5d4d-461e-84a7-3a6f858b6b0f",
    src: "https://i.postimg.cc/wMLPkKRX/lp-hoodie-2.webp",
    categoryName: "Hoodies",
    rating: "4.2",
    brand: "Louis Philippe",
    description: "Men Casual Red Graphic Print Sweatshirt",
    title: "LP Sweatshirt",
    trending: false,
    original_price: "2587",
    price: "1290",
    delivery_time: "3",
    reviews: "1.6K",
    in_stock: true,
  },
  {
    _id: "8ec5fc34-5a66-4ce0-a715-85e117b08487",
    src: "https://i.postimg.cc/R0RB4dJ4/h-m-blazer-1.webp",
    categoryName: "Suit",
    rating: "4.1",
    brand: "h&m",
    description: "Single-breasted blazer timelessly tailored in a soft weave",
    title: "THE BLAZER",
    trending: true,
    original_price: "4587",
    price: "2290",
    delivery_time: "5",
    reviews: "2.9K",
    in_stock: true,
  },
  {
    _id: "3524f6c9-6050-4457-bb88-87e850df313f",
    src: "https://i.postimg.cc/yxJ4hzQ8/h-m-blazer-2.jpg",
    categoryName: "Suit",
    rating: "4.4",
    brand: "h&m",
    description:
      "Regular fit with side pockets, welt back pockets and legs with creases.",
    title: "Regular Fit Linen suit ",
    trending: true,
    original_price: "3587",
    price: "1790",
    delivery_time: "6",
    reviews: "1.6K",
    in_stock: false,
  },
  {
    _id: "2ad1febb-965a-497e-ba38-59aff5de65be",
    src: "https://i.postimg.cc/d1NcT09f/spykar-blazer-1.webp",
    categoryName: "Suit",
    rating: "3.9",
    brand: "SPYKAR",
    description: "Men Self Design Single Breasted Casual Blazer(Grey)",
    title: "Spykar Blazer",
    trending: false,
    original_price: "2787",
    price: "1390",
    delivery_time: "5",
    reviews: "2.9K",
    in_stock: true,
  },
  {
    _id: "98fe590e-da12-469d-95ef-6f5c59d77e9d",
    src: "https://i.postimg.cc/RFZzFtwf/spykar-blazer-2.webp",
    categoryName: "Suit",
    rating: "4.2",
    brand: "SPYKAR",
    description: "Men Solid Single Breasted Casual Blazer(Black)",
    title: "Spykar Blazer",
    trending: false,
    original_price: "8599",
    price: "4299",
    delivery_time: "3",
    reviews: "2.6K",
    in_stock: true,
  },
];
