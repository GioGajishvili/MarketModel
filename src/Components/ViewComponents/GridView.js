import "./GridView.css";
import TestProductPhoto from "../../assets/images/TestProductPhoto.png";
import TestProductPhoto2 from "../../assets/images/TestProductPhoto2.png";
import TestProductPhoto3 from "../../assets/images/TestProductPhoto3.png";
import TestProductPhoto4 from "../../assets/images/TestProductPhoto4.png";
import TestProductPhoto5 from "../../assets/images/TestProductPhoto5.png";
import { BsCheckCircleFill } from "react-icons/bs";
import { BsFillStarFill } from "react-icons/bs";

const GridViewComponent = () => {
  return (
    <div className="container-grid-view">
      <div className="grid-view-product">
        <div className="stock-indicator">
          <BsCheckCircleFill color="green" />
          <p style={{ margin: "0px 0px 0px 10px" }}>In Stock</p>
        </div>
        <img className="product-photo" src={TestProductPhoto} />
        <div className="review-stars">
          <BsFillStarFill color="orange" size={"18px"} />
          <BsFillStarFill color="orange" size={"18px"} />
          <BsFillStarFill color="orange" size={"18px"} />
          <BsFillStarFill color="orange" size={"18px"} />
          <BsFillStarFill size={"18px"} />
          <p style={{ margin: "0px 0px 2px 12px", color: "grey" }}>
            (4 reviews)
          </p>
        </div>
        <p className="product-describe">
          EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH
        </p>
        <div className="prices-container">
          <p className="start-price">200$</p>
          <p style={{ marginLeft: "40px" }} className="discounted-price">
            150$
          </p>
        </div>
      </div>
      <div className="grid-view-product">
        <div className="stock-indicator">
          <BsCheckCircleFill color="green" />
          <p style={{ margin: "0px 0px 0px 10px" }}>In Stock</p>
        </div>
        <img className="product-photo" src={TestProductPhoto2} />
        <div className="review-stars">
          <BsFillStarFill color="orange" size={"18px"} />
          <BsFillStarFill color="orange" size={"18px"} />
          <BsFillStarFill color="orange" size={"18px"} />
          <BsFillStarFill color="orange" size={"18px"} />
          <BsFillStarFill size={"18px"} />
          <p style={{ margin: "0px 0px 2px 12px", color: "grey" }}>
            (4 reviews)
          </p>
        </div>
        <p className="product-describe">
          EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH
        </p>
        <div className="prices-container">
          <p className="start-price">200$</p>
          <p style={{ marginLeft: "40px" }} className="discounted-price">
            150$
          </p>
        </div>
      </div>
      <div className="grid-view-product">
        <div className="stock-indicator">
          <BsCheckCircleFill color="green" />
          <p style={{ margin: "0px 0px 0px 10px" }}>In Stock</p>
        </div>
        <img className="product-photo" src={TestProductPhoto3} />
        <div className="review-stars">
          <BsFillStarFill color="orange" size={"18px"} />
          <BsFillStarFill color="orange" size={"18px"} />
          <BsFillStarFill color="orange" size={"18px"} />
          <BsFillStarFill color="orange" size={"18px"} />
          <BsFillStarFill size={"18px"} />
          <p style={{ margin: "0px 0px 2px 12px", color: "grey" }}>
            (4 reviews)
          </p>
        </div>
        <p className="product-describe">
          EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH
        </p>
        <div className="prices-container">
          <p className="start-price">200$</p>
          <p style={{ marginLeft: "40px" }} className="discounted-price">
            150$
          </p>
        </div>
      </div>
      <div className="grid-view-product">
        <div className="stock-indicator">
          <BsCheckCircleFill color="green" />
          <p style={{ margin: "0px 0px 0px 10px" }}>In Stock</p>
        </div>
        <img className="product-photo" src={TestProductPhoto4} />
        <div className="review-stars">
          <BsFillStarFill color="orange" size={"18px"} />
          <BsFillStarFill color="orange" size={"18px"} />
          <BsFillStarFill color="orange" size={"18px"} />
          <BsFillStarFill color="orange" size={"18px"} />
          <BsFillStarFill size={"18px"} />
          <p style={{ margin: "0px 0px 2px 12px", color: "grey" }}>
            (4 reviews)
          </p>
        </div>
        <p className="product-describe">
          EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH
        </p>
        <div className="prices-container">
          <p className="start-price">200$</p>
          <p style={{ marginLeft: "40px" }} className="discounted-price">
            150$
          </p>
        </div>
      </div>
      <div className="grid-view-product">
        <div className="stock-indicator">
          <BsCheckCircleFill color="green" />
          <p style={{ margin: "0px 0px 0px 10px" }}>In Stock</p>
        </div>
        <img className="product-photo" src={TestProductPhoto5} />
        <div className="review-stars">
          <BsFillStarFill color="orange" size={"18px"} />
          <BsFillStarFill color="orange" size={"18px"} />
          <BsFillStarFill color="orange" size={"18px"} />
          <BsFillStarFill color="orange" size={"18px"} />
          <BsFillStarFill size={"18px"} />
          <p style={{ margin: "0px 0px 2px 12px", color: "grey" }}>
            (4 reviews)
          </p>
        </div>
        <p className="product-describe">
          EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH
        </p>
        <div className="prices-container">
          <p className="start-price">200$</p>
          <p style={{ marginLeft: "40px" }} className="discounted-price">
            150$
          </p>
        </div>
      </div>
      <div className="grid-view-product">
        <div className="stock-indicator">
          <BsCheckCircleFill color="green" />
          <p style={{ margin: "0px 0px 0px 10px" }}>In Stock</p>
        </div>
        <img className="product-photo" src={TestProductPhoto} />
        <div className="review-stars">
          <BsFillStarFill color="orange" size={"18px"} />
          <BsFillStarFill color="orange" size={"18px"} />
          <BsFillStarFill color="orange" size={"18px"} />
          <BsFillStarFill color="orange" size={"18px"} />
          <BsFillStarFill size={"18px"} />
          <p style={{ margin: "0px 0px 2px 12px", color: "grey" }}>
            (4 reviews)
          </p>
        </div>
        <p className="product-describe">
          EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH
        </p>
        <div className="prices-container">
          <p className="start-price">200$</p>
          <p style={{ marginLeft: "40px" }} className="discounted-price">
            150$
          </p>
        </div>
      </div>
      <div className="grid-view-product">
        <div className="stock-indicator">
          <BsCheckCircleFill color="green" />
          <p style={{ margin: "0px 0px 0px 10px" }}>In Stock</p>
        </div>
        <img className="product-photo" src={TestProductPhoto2} />
        <div className="review-stars">
          <BsFillStarFill color="orange" size={"18px"} />
          <BsFillStarFill color="orange" size={"18px"} />
          <BsFillStarFill color="orange" size={"18px"} />
          <BsFillStarFill color="orange" size={"18px"} />
          <BsFillStarFill size={"18px"} />
          <p style={{ margin: "0px 0px 2px 12px", color: "grey" }}>
            (4 reviews)
          </p>
        </div>
        <p className="product-describe">
          EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH
        </p>
        <div className="prices-container">
          <p className="start-price">200$</p>
          <p style={{ marginLeft: "40px" }} className="discounted-price">
            150$
          </p>
        </div>
      </div>
      <div className="grid-view-product">
        <div className="stock-indicator">
          <BsCheckCircleFill color="green" />
          <p style={{ margin: "0px 0px 0px 10px" }}>In Stock</p>
        </div>
        <img className="product-photo" src={TestProductPhoto3} />
        <div className="review-stars">
          <BsFillStarFill color="orange" size={"18px"} />
          <BsFillStarFill color="orange" size={"18px"} />
          <BsFillStarFill color="orange" size={"18px"} />
          <BsFillStarFill color="orange" size={"18px"} />
          <BsFillStarFill size={"18px"} />
          <p style={{ margin: "0px 0px 2px 12px", color: "grey" }}>
            (4 reviews)
          </p>
        </div>
        <p className="product-describe">
          EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH
        </p>
        <div className="prices-container">
          <p className="start-price">200$</p>
          <p style={{ marginLeft: "40px" }} className="discounted-price">
            150$
          </p>
        </div>
      </div>
      <div className="grid-view-product">
        <div className="stock-indicator">
          <BsCheckCircleFill color="green" />
          <p style={{ margin: "0px 0px 0px 10px" }}>In Stock</p>
        </div>
        <img className="product-photo" src={TestProductPhoto4} />
        <div className="review-stars">
          <BsFillStarFill color="orange" size={"18px"} />
          <BsFillStarFill color="orange" size={"18px"} />
          <BsFillStarFill color="orange" size={"18px"} />
          <BsFillStarFill color="orange" size={"18px"} />
          <BsFillStarFill size={"18px"} />
          <p style={{ margin: "0px 0px 2px 12px", color: "grey" }}>
            (4 reviews)
          </p>
        </div>
        <p className="product-describe">
          EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH
        </p>
        <div className="prices-container">
          <p className="start-price">200$</p>
          <p style={{ marginLeft: "40px" }} className="discounted-price">
            150$
          </p>
        </div>
      </div>
      <div className="grid-view-product">
        <div className="stock-indicator">
          <BsCheckCircleFill color="green" />
          <p style={{ margin: "0px 0px 0px 10px" }}>In Stock</p>
        </div>
        <img className="product-photo" src={TestProductPhoto5} />
        <div className="review-stars">
          <BsFillStarFill color="orange" size={"18px"} />
          <BsFillStarFill color="orange" size={"18px"} />
          <BsFillStarFill color="orange" size={"18px"} />
          <BsFillStarFill color="orange" size={"18px"} />
          <BsFillStarFill size={"18px"} />
          <p style={{ margin: "0px 0px 2px 12px", color: "grey" }}>
            (4 reviews)
          </p>
        </div>
        <p className="product-describe">
          EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH
        </p>
        <div className="prices-container">
          <p className="start-price">200$</p>
          <p style={{ marginLeft: "40px" }} className="discounted-price">
            150$
          </p>
        </div>
      </div>
      <div className="grid-view-product">
        <div className="stock-indicator">
          <BsCheckCircleFill color="green" />
          <p style={{ margin: "0px 0px 0px 10px" }}>In Stock</p>
        </div>
        <img className="product-photo" src={TestProductPhoto} />
        <div className="review-stars">
          <BsFillStarFill color="orange" size={"18px"} />
          <BsFillStarFill color="orange" size={"18px"} />
          <BsFillStarFill color="orange" size={"18px"} />
          <BsFillStarFill color="orange" size={"18px"} />
          <BsFillStarFill size={"18px"} />
          <p style={{ margin: "0px 0px 2px 12px", color: "grey" }}>
            (4 reviews)
          </p>
        </div>
        <p className="product-describe">
          EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH
        </p>
        <div className="prices-container">
          <p className="start-price">200$</p>
          <p style={{ marginLeft: "40px" }} className="discounted-price">
            150$
          </p>
        </div>
      </div>
      <div className="grid-view-product">
        <div className="stock-indicator">
          <BsCheckCircleFill color="green" />
          <p style={{ margin: "0px 0px 0px 10px" }}>In Stock</p>
        </div>
        <img className="product-photo" src={TestProductPhoto2} />
        <div className="review-stars">
          <BsFillStarFill color="orange" size={"18px"} />
          <BsFillStarFill color="orange" size={"18px"} />
          <BsFillStarFill color="orange" size={"18px"} />
          <BsFillStarFill color="orange" size={"18px"} />
          <BsFillStarFill size={"18px"} />
          <p style={{ margin: "0px 0px 2px 12px", color: "grey" }}>
            (4 reviews)
          </p>
        </div>
        <p className="product-describe">
          EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH
        </p>
        <div className="prices-container">
          <p className="start-price">200$</p>
          <p style={{ marginLeft: "40px" }} className="discounted-price">
            150$
          </p>
        </div>
      </div>
    </div>
  );
};

export default GridViewComponent;
