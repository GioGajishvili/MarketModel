import "./GridView.css";
import { testProductArray } from "./TestProductArray";
import ProductModel from "./ProductModel";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MdArrowBackIosNew } from "react-icons/md";

const GridViewComponent = () => {
  const [product, setProduct] = useState(testProductArray);
  const [toggleCategory, setToggleCategory] = useState(false);
  const [togglePrice, setTogglePrice] = useState(false);

  const toggleButton = () => {
    setToggleCategory(!toggleCategory);
  };

  return (
    <div className="grid-view-filter-container">
      <div className="leftside-filter">
        <div>
          <h1 style={{ fontSize: "28px", marginTop: "20px" }}>Filters</h1>
          <button className="clear-filters-button">Clear Filters</button>
        </div>
        <div>
          <button
            className="filter-category-button"
            onClick={() => toggleButton()}
          >
            Category
            <MdArrowBackIosNew
              style={{ margin: "0px 0px 1px 16" }}
              size="12px"
            />
          </button>
        </div>
        {toggleCategory && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "8px",
            }}
          >
            <Link className="filter-links">Desktop Pcs</Link>
            <Link className="filter-links">Laptops</Link>
            <Link className="filter-links">Pc Parts</Link>
          </div>
        )}
        <div>
          <button
            className="filter-price-button"
            onClick={() => setTogglePrice(!togglePrice)}
          >
            Price
            <MdArrowBackIosNew
              style={{ margin: "0px 0px 1px 16" }}
              size="12px"
            />
          </button>
        </div>
        {togglePrice && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "8px",
            }}
          >
            <Link className="filter-links">$0.00 - $100</Link>
            <Link className="filter-links">$100 - $200</Link>
            <Link className="filter-links">$200 - $400</Link>
            <Link className="filter-links">$400 - $600</Link>
            <Link className="filter-links">$600 - $1,000</Link>
            <Link className="filter-links">$1000 - $1000+</Link>
          </div>
        )}
      </div>
      <div className="container-grid-view">
        {product.map((item) => (
          <ProductModel
            key={item.id}
            id={item.id}
            inStock={item.inStock}
            stockColor={item.stockColor}
            stockIndicator={item.stockIndicator}
            photo={item.photo}
            colorfulStarsCount={item.colorfulStarCount}
            reviewCount={item.reviewCount}
            description={item.description}
            specialPrice={item.specialPrice}
            discountedPrice={item.discountedPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default GridViewComponent;
