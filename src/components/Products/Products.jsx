import React from "react";
import Product from "../Product";
import { Loading } from "../Loading/Loading";

const Products = ({products, onAddToCart}) => {
  if(products.length < 1) return <Loading mark={true} /> ;
  return (
    <section className="py-12 sm:py-12 lg:py-12 bg-gray-50 dark:bg-gray-900">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        {/* Head */}
        {/* <div className="flex items-center justify-center lg:justify-between">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            Electronics &amp; Personal Computing
          </h2>

          <div className="hidden lg:flex">
            <a
              href="#"
              title=""
              className="inline-flex items-center justify-center p-1 -m-1 text-sm font-bold text-gray-600 dark:text-gray-100 transition-all duration-200 rounded-md focus:text-gray-900 focus:ring-gray-900 focus:ring-2 focus:ring-offset-2 focus:outline-none hover:text-gray-900"
            >
              View All
              <svg
                className="w-5 h-5 ml-2 text-gray-400 dark:text-gray-100"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div> */}
        {/* Products */}
        <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:mt-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-500 rounded-xl group"
            >
              <Product  product={product} onAddToCart={onAddToCart} />
            </div>
          ))}
        </div>
        {/* Small Screen View All */}
        <div className="mt-12 text-center lg:hidden">
          <a
            href="#"
            title=""
            className="inline-flex items-center justify-center p-1 text-sm font-bold text-gray-600 transition-all duration-200 rounded-md focus:text-gray-900 focus:ring-gray-900 focus:ring-2 focus:ring-offset-2 focus:outline-none hover:text-gray-900"
          >
            View all
            <svg
              className="w-5 h-5 ml-2 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;



// const products = [
//   {
//     id: 1,
//     brand: "Apple",
//     name: "APPLE iPhone 13 (Midnight, 128 GB)",
//     imageSrc:
//       "https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/products/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70",
//     href: "#",
//     price: "₹61,999",
//     color: "Midnight",
//     imageAlt: "APPLE iPhone 13 (Midnight, 128 GB)",
//     quantity: 1,
//     ratings: "12,873",
//   },
//   {
//     id: 2,
//     brand: "Apple",
//     name: "APPLE Airpods Pro Bluetooth Headset",
//     imageSrc:
//       "https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/products/mwp22hn-a-apple-original-imag3qe9eqkfhmg8.jpeg?q=70",
//     href: "#",
//     price: "₹22,500",
//     color: "White, True Wireless",
//     imageAlt: "APPLE Airpods Pro Bluetooth Headset",
//     quantity: 1,
//     ratings: "8,381",
//   },
//   {
//     id: 3,
//     brand: "Apple",
//     name: "APPLE iPad (9th Gen) 64 GB ROM 10.2 inch",
//     imageSrc:
//       "https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/products/mk2k3hn-a-apple-original-imag6yy7xjjugz4w.jpeg?q=70",
//     href: "#",
//     price: "₹29,900",
//     color: "Space Grey",
//     imageAlt: "APPLE iPad (9th Gen) 64 GB ROM 10.2 inch",
//     quantity: 1,
//     ratings: "1,530",
//   },
//   {
//     id: 4,
//     brand: "Iphone 14 pro MAx",
//     name: "APPLE iPad (9th Gen) 64 GB ROM 10.2 inch",
//     imageSrc:
//       "https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/products/mk2k3hn-a-apple-original-imag6yy7xjjugz4w.jpeg?q=70",
//     href: "#",
//     price: "₹79,900",
//     color: "Space Grey",
//     imageAlt: "APPLE iPad (9th Gen) 64 GB ROM 10.2 inch",
//     quantity: 1,
//     ratings: "1,665",
//   },
//   {
//     id: 5,
//     brand: "Iphone 14 pro MAx",
//     name: "APPLE iPad (9th Gen) 64 GB ROM 10.2 inch",
//     imageSrc:
//       "https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/products/mk2k3hn-a-apple-original-imag6yy7xjjugz4w.jpeg?q=70",
//     href: "#",
//     price: "₹79,900",
//     color: "Space Grey",
//     imageAlt: "APPLE iPad (9th Gen) 64 GB ROM 10.2 inch",
//     quantity: 1,
//     ratings: "1,665",
//   },
//   {
//     id: 6,
//     brand: "Iphone 14 pro MAx",
//     name: "APPLE iPad (9th Gen) 64 GB ROM 10.2 inch",
//     imageSrc:
//       "https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/products/mk2k3hn-a-apple-original-imag6yy7xjjugz4w.jpeg?q=70",
//     href: "#",
//     price: "₹79,900",
//     color: "Space Grey",
//     imageAlt: "APPLE iPad (9th Gen) 64 GB ROM 10.2 inch",
//     quantity: 1,
//     ratings: "1,665",
//   },
//   {
//     id: 7,
//     brand: "Iphone 14 pro MAx",
//     name: "APPLE iPad (9th Gen) 64 GB ROM 10.2 inch",
//     imageSrc:
//       "https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/products/mk2k3hn-a-apple-original-imag6yy7xjjugz4w.jpeg?q=70",
//     href: "#",
//     price: "₹79,900",
//     color: "Space Grey",
//     imageAlt: "APPLE iPad (9th Gen) 64 GB ROM 10.2 inch",
//     quantity: 1,
//     ratings: "1,665",
//   },
//   {
//     id: 8,
//     brand: "Iphone 14 pro MAx",
//     name: "APPLE iPad (9th Gen) 64 GB ROM 10.2 inch",
//     imageSrc:
//       "https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/products/mk2k3hn-a-apple-original-imag6yy7xjjugz4w.jpeg?q=70",
//     href: "#",
//     price: "₹79,900",
//     color: "Space Grey",
//     imageAlt: "APPLE iPad (9th Gen) 64 GB ROM 10.2 inch",
//     quantity: 1,
//     ratings: "1,665",
//   },
//   // More products...
// ];
