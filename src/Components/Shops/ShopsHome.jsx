import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ShopsHome.css";
import { useNavigate } from "react-router-dom";
import whey from "../../assets/Images/whey_isolate.jpeg";
import bcaa from "../../assets/Images/bcaa.jpeg";
import creatine from "../../assets/Images/Creatine_Monohydrate.jpeg";
import wheyGold from "../../assets/Images/whey_gold.jpeg";
import banner1 from "../../assets/Images/banner1.jpg";
import banner2 from "../../assets/Images/banner2.jpg";
import banner3 from "../../assets/Images/banner3.jpg";
import banner4 from "../../assets/Images/banner4.webp";
import supplement1 from "../../assets/Images/supplement1.jpeg";
import barbells from "../../assets/Images/barbells.jpeg";
import gymAcc from "../../assets/Images/gym_acc.jpg";

const featuredProducts = [
  {
    id: 1,
    name: "Whey Protein Isolate",
    image: whey,
    description: "2kg Chocolate Flavoured.",
    price: 29.99,
  },
  {
    id: 2,
    name: "BCAA Protein Powder",
    image: bcaa,
    description: "250g Unflavoured.",
    price: 39.99,
  },
  {
    id: 3,
    name: "Creatine Monohydrate",
    image: creatine,
    description: "250g 100% Micronized.",
    price: 29.99,
  },
  {
    id: 4,
    name: "Whey Protein Gold",
    image: wheyGold,
    description: "2kg Gourmet Vanilla Flavoured.",
    price: 39.99,
  },
  // Add more featured products as needed
];

const FitnessHomePage = () => {
  const navi = useNavigate();

  const toAllProducts = () => {
    navi("/allProducts");
  };

  return (
    <div className="fitness-home-page">
      <section className="hero">
        <Carousel showThumbs={false} autoPlay interval={2000} infiniteLoop>
          <div>
            <img src={banner1} alt="Hero Image 1" />
          </div>
          <div>
            <img src={banner2} alt="Hero Image 2" />
          </div>
          <div>
            <img src={banner3} alt="Hero Image 3" />
          </div>
          <div>
            <img src={banner4} alt="Hero Image 4" />
          </div>
        </Carousel>
      </section>

      <section className="categories">
        <h2>Product Categories</h2>
        <div className="category-list">
          <div className="category-item">
            <img src={supplement1} alt="Category 1" />
            <h3>Supplements</h3>
          </div>
          <div className="category-item">
            <img src={barbells} alt="Category 2" />
            <h3>Fitness Equipment</h3>
          </div>
          <div className="category-item">
            <img src={gymAcc} alt="Category 3" />
            <h3>Accessories</h3>
          </div>
          {/* Add more categories as needed */}
        </div>
      </section>

      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-list">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-item">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="price">${product.price.toFixed(2)}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
        <div className="see-all-products">
          <button onClick={toAllProducts}>See All Products</button>
        </div>
      </section>
    </div>
  );
};

export default FitnessHomePage;
