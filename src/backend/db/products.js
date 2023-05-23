import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: "be51624b-c4a5-44f2-9c16-69b284e5fd5c",
    image: "https://i.postimg.cc/K8zD01dx/hm-shirt-1.jpg",
    category: "Shirts",
    rating: "3.9",
    brand: "h&m",
    description: "Slim Fit Waffled polo shirt",
    title: "Polo shirt",
    trending: false,
    original_price: "1199",
    price: "719",
    delivery_time: "9",
    reviews: "2.9k",
    in_stock: true,
  },
  {
    _id: "7116b8e1-5b68-4b8f-a616-425762e9238zsd",
    title: "Solid Hoodie",
    original_price: "900",
    description: "Relaxed Fit Hoodie",
    price: "499",
    rating: "4.5",
    brand: "h&m",
    image: "https://i.postimg.cc/tgntHLqc/hm-hoodie-1.jpg",
    category: "Hoodies",
    trending: true,
    reviews: "1.5k",
    in_stock: true,
    delivery_time: "3",
  },
  {
    _id: "4b56b4ef-c361-4c72-b39e-97dee6711bb9",
    image: "https://i.postimg.cc/MTy7nVjb/hm-shirt-2.jpg",
    category: "Shirts",
    rating: "3.8",
    brand: "h&m",
    description: "Regular Fit Terry resort shirt",
    title: "Resort shirt",
    trending: false,
    original_price: "1199",
    price: "719",
    delivery_time: "6",
    reviews: "2.4k",
    in_stock: true,
  },
  {
    _id: "1f302642-447a-4694-bb27-9703d6524aa4",
    image: "https://i.postimg.cc/ncT1K4S3/hm-jacket-1.webp",
    category: "Jackets",
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
    image: "https://i.postimg.cc/RhSdhfjJ/j-j-shirt-1.webp",
    category: "Shirts",
    rating: "4.2",
    brand: "JACK & JONES",
    description: "GREY FLORAL CO-ORD SET SHIRT",
    title: "Floral shirt",
    trending: true,
    original_price: "699",
    price: "384",
    delivery_time: "1",
    reviews: "2.5k",
    in_stock: true,
  },
  {
    _id: "7116b8e1-5b68-4b8f-a616-42asa110762e91121zad",
    title: "H&M Printed hoodie",
    original_price: "2899",
    description: "Relaxed Fit Printed hoodie",
    price: "1699",
    rating: "4.1",
    brand: "h&m",
    image: "https://i.postimg.cc/zGcS6JrW/hm-hoodie-2.jpg",
    category: "Hoodies",
    trending: true,
    reviews: "1.5k",
    in_stock: false,
    delivery_time: "7",
  },
  {
    _id: "ff06eaed-9a9c-4f42-a525-e233baaaa294",
    image: "https://i.postimg.cc/LXdk4Nh8/hm-jacket-2.jpg",
    category: "Jackets",
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
    image: "https://i.postimg.cc/qvS1wNCW/j-j-shirt-2.webp",
    category: "Shirts",
    rating: "4.3",
    brand: "JACK & JONES",
    description: "METAVERSE WHITE STRIPED FULL SLEEVES SHIRT",
    title: "J&J STRIPED SHIRT",
    trending: false,
    original_price: "1899",
    price: "1234",
    delivery_time: "5",
    reviews: "4k",
    in_stock: true,
  },
  {
    _id: "c1dd7db4-0830-4e01-a968-bdbcce36d4de",
    image: "https://i.postimg.cc/tgnMG3jX/j-j-jacket-1.webp",
    category: "Jackets",
    rating: "4.5",
    brand: "JACK & JONES",
    description: "DARK BLUE TRUCKER DENIM JACKET",
    title: "DENIM JACKET",
    trending: false,
    original_price: "1398",
    price: "447",
    delivery_time: "4",
    reviews: "7.9K",
    in_stock: true,
  },
  {
    _id: "7116b8e1-5b68-4b8f-a616-431232fjf762e97d7d",
    title: "HOODED SWEATSHIRT",
    original_price: "1599",
    description: "ORANGE HOODED SWEATSHIRT",
    price: "1000",
    rating: "3.9",
    brand: "JACK & JONES",
    image: "https://i.postimg.cc/BvjdQWxf/j-j-hoodie-1.webp",
    category: "Hoodies",
    trending: true,
    reviews: "1.5k",
    in_stock: true,
    delivery_time: "11",
  },
  {
    _id: "75e79f27-b6fa-4f10-8829-b4d003e77b43",
    image: "https://i.postimg.cc/02PwX5cW/spykar-shirt-2.png",
    category: "Shirts",
    rating: "4.5",
    brand: "SPYKAR",
    description: "SPYKAR MEN BOTTLE GREEN COTTON SLIM FIT PRINTED SHIRT",
    title: "MEN SHIRTS",
    trending: false,
    original_price: "1499",
    price: "974",
    delivery_time: "3",
    reviews: "3k",
    in_stock: true,
  },
  {
    _id: "1bb27d9f-1720-449e-ada1-7fad574344d7",
    image: "https://i.postimg.cc/nz7gBvRd/j-j-jacket-2.webp",
    category: "Jackets",
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
    image: "https://i.postimg.cc/Y094XKj0/levis-jacket-1.jpg",
    category: "Jackets",
    rating: "3.5",
    brand: "LEVI",
    description: "LEVI'S® MEN'S STANDARD TRUCKER JACKET",
    title: "LEVI JACKET",
    trending: false,
    original_price: "1998",
    price: "998",
    delivery_time: "4",
    reviews: "200",
    in_stock: true,
  },
  {
    _id: "f17f6d0b-3bf0-4dbd-ad8b-24801572c7a0",
    title: "FLORAL SHIRT",
    description: "SPYKAR MEN WINE RED COTTON SLIM FIT FLORAL SHIRT",
    original_price: "1499",
    price: "704",
    rating: "4",
    brand: "SPYKAR",
    image: "https://i.postimg.cc/c4h8pqzs/spykar-shirt-1.png",
    category: "Shirts",
    trending: false,
    delivery_time: "10",
    reviews: "1000",
    in_stock: false,
  },
  {
    _id: "c1dd7db4-0830-4e01-a968-bdbccasa12d4de",
    image: "https://i.postimg.cc/fy2dZW1Y/levis-jacket-2.jpg",
    category: "Jackets",
    rating: "4.2",
    brand: "LEVI",
    description: "LEVI'S® MEN'S REGULAR FIT JACKET",
    title: "LEVI JACKET",
    trending: true,
    original_price: "1587",
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
    price: "887",
    rating: "3.8",
    brand: "SPYKAR",
    trending: true,
    delivery_time: "3",
    reviews: "229",
    in_stock: true,
    image: "https://i.postimg.cc/h49m0QbQ/spykar-jacket-2.png",
    category: "Jackets",
  },
  {
    _id: "8e7d52e2-75e7-489c-9e43-74875ebbc187",
    title: "MEN JACKETS",
    description: "SPYKAR RED FULL SLEEVE DENIM JACKET FOR MEN",
    original_price: "4248",
    price: "1699",
    rating: "3.2",
    brand: "SPYKAR",
    image: "https://i.postimg.cc/sg2Zy6F5/spykar-jacket-1.png",
    category: "Jackets",
    trending: false,
    reviews: "3k",
    in_stock: true,
    delivery_time: "9",
  },
  {
    _id: "7116b8e1-5b68-4b8f-a616-4257dfdjfo997d7d",
    title: "PRINTED HOODIE",
    original_price: "1099",
    description: "GREEN LOGO PRINT HOODED SWEATSHIRT",
    price: "999",
    rating: "4.3",
    brand: "JACK & JONES",
    image: "https://i.postimg.cc/kg10mMRy/jandj-hoodie-2.webp",
    category: "Hoodies",
    trending: false,
    reviews: "20",
    in_stock: true,
    delivery_time: "11",
  },

  


  {
    _id: "7116b8e1-5213sf-4458f-a616-4257dfdjf2397d7d",
    title: "SPYKAR HOODIES",
    original_price: "1099",
    description:
      "SPYKAR MEN RIFLE GREEN BLENDED REGULAR FIT HOODED PLAIN SWEATSHIRT",
    price: "619",
    rating: "3.5",
    brand: "SPYKAR",
    image: "https://i.postimg.cc/yNtRLFbc/spykar-hoodie-1.png",
    category: "Hoodies",
    trending: false,
    reviews: "134",
    in_stock: true,
    delivery_time: "12",
  },
 

  {
    _id: "81d1fb3a-8052-4e6b-b4c6-4070302f04bd",
    title: "SPYKAR SWEATSHIRT",
    description: "SPYKAR BLUE COTTON SWEATSHIRT FOR MEN",
    original_price: "1499",
    price: "1299",
    rating: "4.4",
    brand: "SPYKAR",
    image: "https://i.postimg.cc/sfSY0NyX/spykar-hoodie-2.png",
    category: "Hoodies",
    trending: false,
    reviews: "3.4k",
    in_stock: true,
    delivery_time: "7",
  },

  
  
];
