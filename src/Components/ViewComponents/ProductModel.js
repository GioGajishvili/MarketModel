import "./GridView.css";
import { BsCheckCircleFill } from "react-icons/bs";
import { BsFillStarFill } from "react-icons/bs";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const ProductModel = (props) => {
  const threeDots = "...";
  const {
    id,
    inStock,
    stockIndicator,
    photo,
    colorfulStarCount,
    reviewCount,
    description,
    specialPrice,
    discountedPrice,
  } = props;

  return (
    <div className="grid-view-product">
      <div className="stock-indicator">
        <BsCheckCircleFill color={inStock ? "green" : "#cf1b2d"} />
        <p
          style={{
            margin: "0px 0px 0px 10px",
            color: inStock ? "green" : "#cf1b2d",
          }}
        >
          {stockIndicator}
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <img className="product-photo" src={photo} />
        <button
          className="product-arrow-icons"
          style={{ position: "absolute", margin: "60px 0px 0px 20px" }}
        >
          <MdArrowBackIosNew />
        </button>
        <button
          className="product-arrow-icons"
          style={{ position: "absolute", margin: "60px 0px 0px 210px" }}
        >
          <MdArrowForwardIos />
        </button>
      </div>
      <div className="review-stars">
        <BsFillStarFill
          color={id && colorfulStarCount > 0 ? "orange" : "gray"}
          size="18"
          style={{ margin: "0px 1px 0px 1px" }}
        />
        <BsFillStarFill
          color={id && colorfulStarCount > 1 ? "orange" : "gray"}
          size="18"
          style={{ margin: "0px 1px 0px 1px" }}
        />
        <BsFillStarFill
          color={id && colorfulStarCount > 2 ? "orange" : "gray"}
          size="18"
          style={{ margin: "0px 1px 0px 1px" }}
        />
        <BsFillStarFill
          color={id && colorfulStarCount > 3 ? "orange" : "gray"}
          size="18"
          style={{ margin: "0px 1px 0px 1px" }}
        />
        <BsFillStarFill
          color={id && colorfulStarCount > 4 ? "orange" : "gray"}
          size="18"
          style={{ margin: "0px 1px 0px 1px" }}
        />
        <p style={{ margin: "0px 0px 2px 12px", color: "grey" }}>
          {reviewCount}
        </p>
      </div>
      <p className="product-describe">
        {description.length < 25
          ? description
          : description.substring(0, 25) + threeDots}
      </p>
      <div className="prices-container">
        <p className="special-price">{specialPrice}</p>
        <p style={{ marginLeft: "40px" }} className="discounted-price">
          {discountedPrice}
        </p>
      </div>
    </div>
  );
};

export default ProductModel;
