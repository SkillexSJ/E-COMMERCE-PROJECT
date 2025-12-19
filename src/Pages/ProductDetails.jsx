import React, { useState } from "react";
import ProductImg from "../assets/authImage.png";

const ProductDetails = () => {
  const product = {
    name: "Nike Forward Hoodie",
    price: "1,099",
    rating: 4.9,
    reviews: 41,
    colors: ["Black", "White", "Greenish", "Grey"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "Nike Forward catapults your classic hoodie into the future. Exceptionally lightweight, warm and comfortable.",
  };

  const reviews = [
    {
      img: ProductImg,
      name: "Alexander Stewart",
      comment: "This hoodie makes me feel so comfortable! Love it.",
      rating: 5,
      date: "13/12/2024",
    },
    {
      img: ProductImg,
      name: "Simson Will",
      comment: "Very quick and easy! Great service.",
      rating: 5,
      date: "13/12/2024",
    },
  ];

  const [color, setColor] = useState(product.colors[0]);
  const [size, setSize] = useState(product.sizes[0]);

  return (
    <div className="container mx-auto px-5 py-8 space-y-10">
      {/* ------------------------------ IMAGE SECTION ------------------------------ */}
      <div className="grid grid-cols-3 gap-4">
        {/* Big left image */}
        <div className="col-span-2">
          <img
            src={ProductImg}
            className="w-full h-[460px] object-cover rounded-xl"
            alt=""
          />
        </div>

        {/* Right side images */}
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={ProductImg}
              className="h-[220px] rounded-xl object-cover"
            />
            <img
              src={ProductImg}
              className="h-[220px] rounded-xl object-cover"
            />
          </div>
          <img src={ProductImg} className="h-[220px] rounded-xl object-cover" />
        </div>
      </div>

      {/* ------------------------------ BELOW SECTION (SIDE-BY-SIDE) ------------------------------ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT: PRODUCT DETAILS */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-3 text-gray-700">
            <span className="text-yellow-500 text-lg">⭐ {product.rating}</span>
            <span>({product.reviews}) New Reviews</span>
          </div>

          {/* Color */}
          <div>
            <h3 className="font-semibold mb-2">Color</h3>
            <div className="flex gap-2 flex-wrap">
              {product.colors.map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className={`px-4 py-2 rounded-full border ${
                    c === color ? "bg-black text-white" : "bg-gray-200"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div>
            <h3 className="font-semibold mb-2">Size</h3>
            <div className="flex gap-2 flex-wrap">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`px-4 py-2 rounded-full border ${
                    s === size ? "bg-black text-white" : "bg-gray-200"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Price & Button */}
        </div>

        {/* RIGHT: REVIEWS */}

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Reviews ({product.reviews})
          </h3>
          <div className="flex items-center justify-between p-5 bg-gray-100 rounded-xl mb-3">
            <h2 className="text-3xl font-bold">€ {product.price}</h2>
            <button className="btn btn-primary px-6 py-2">Buy Now</button>
          </div>
          <div className="space-y-5">
            {reviews.map((r, i) => (
              <div key={i} className="p-4 border rounded-xl">
                <div className="flex gap-3">
                  <img src={r.img} className="w-12 h-12 rounded-full" />
                  <div>
                    <p className="font-semibold">{r.name}</p>
                    <p className="text-xs text-gray-500">{r.date}</p>
                    <p className="text-gray-700 text-sm mt-1">{r.comment}</p>
                    <p className="mt-1 text-yellow-500 font-bold">
                      ⭐ {r.rating}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
