import "./AboutUs.css";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import PhotoOffice from "../../assets/images/PhotoOffice.png";
import PhotoKeyword from "../../assets/images/Keyword.png";
import PhotoWhitePc from "../../assets/images/WhitePc.png";
import PhotoFuturePc from "../../assets/images/FuturePc.png";
import PhotoPcPhoto from "../../assets/images/PcPhoto.png";
import Review from "../../Components/Review Component/Review";

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <div className="arrow-routing">
        <Link to="/" style={{ marginRight: "20px" }} className="about-us-link">
          Home
        </Link>
        <BiChevronRight
          style={{ marginRight: "20px", color: "rgb(56, 91, 187)" }}
          className="greater-than-icon"
          size={"18px"}
        />
        <Link to="/AboutUs" className="about-us-link">
          About Us
        </Link>
      </div>
      <h1 className="about-us-title">About Us</h1>
      <div>
        <div className="first-container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "400px",
              height: "280px",
              marginRight: "200px",
            }}
          >
            <div style={{ height: "666px", width: "400px" }}>
              <h1
                style={{
                  marginTop: "150px",
                  marginBottom: "60px",
                  color: "white",
                }}
              >
                A Family That Keeps On Growing
              </h1>
              <p style={{ color: "white" }}>
                We always aim to please the home market, supplying great
                computers and hardware at great prices to non-corporate
                customers, through our large Melbourne CBD showroom and our
                online store.
              </p>
              <p style={{ color: "white" }}>
                Shop management approach fosters a strong customer service focus
                in our staff. We prefer to cultivate long-term client
                relationships rather than achieve quick sales, demonstrated in
                the measure of our long-term success.
              </p>
            </div>
          </div>
          <div>
            <img
              style={{
                marginTop: "100px",
                borderRadius: "50px",
                marginRight: "50px",
              }}
              src={PhotoOffice}
            />
          </div>
        </div>
        <div className="second-section-container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginRight: "200px",
            }}
          >
            <div>
              <img
                style={{
                  marginTop: "50px",
                  borderRadius: "50px",
                }}
                src={PhotoKeyword}
              />
            </div>
            <div style={{ marginLeft: "50px" }}>
              <h1
                style={{
                  marginTop: "160px",
                  marginBottom: "60px",
                  color: "black",
                }}
              >
                Market.com
              </h1>
              <p style={{ color: "black", width: "420px" }}>
                Shop is a proudly Australian owned, Melbourne based supplier of
                I.T. goods and services, operating since 1991. Our client base
                encompasses individuals, small business, corporate and
                government organisations. We provide complete business IT
                solutions, centred on high quality hardware and exceptional
                customer service.
              </p>
            </div>
          </div>
        </div>
        <div className="third-section-container">
          <div
            style={{
              marginTop: "40px",
              marginRight: "200px",
            }}
          >
            <h1
              style={{
                marginTop: "180px",
                marginBottom: "60px",
                color: "white",
              }}
            >
              You're In Safe Hands
            </h1>
            <p style={{ color: "white", width: "400px", height: "280px" }}>
              Experience a 40% boost in computing from last generation. MSI
              Desktop equips the 10th Gen. Intel® Core™ i7 processor with the
              upmost computing power to bring you an unparalleled gaming
              experience. *Performance compared to i7-9700. Specs varies by
              model.
            </p>
          </div>
          <div>
            <img
              style={{
                marginTop: "80px",
                borderRadius: "50px",
                marginRight: "10px",
              }}
              src={PhotoPcPhoto}
            />
          </div>
        </div>
        <div className="fourth-section-container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginRight: "260px",
            }}
          >
            <div>
              <img
                style={{
                  maxWidth: "750px",
                  marginRight: "50px",
                  borderRadius: "50px",
                }}
                src={PhotoWhitePc}
              />
            </div>
            <div>
              <h1
                style={{
                  maxWidth: "400px",
                  marginTop: "150px",
                  marginBottom: "60px",
                  color: "black",
                }}
              >
                The Highest Quality of Products
              </h1>
              <p style={{ color: "black", width: "400px", height: "280px" }}>
                We guarantee the highest quality of the products we sell.
                Several decades of successful operation and millions of happy
                customers let us feel certain about that. Besides, all items we
                sell pass thorough quality control, so no characteristics
                mismatch can escape the eye of our professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="fifth-section-container">
        <div
          style={{
            marginTop: "30px",
            width: "400px",
            height: "280px",
            marginRight: "230px",
          }}
        >
          <h1
            style={{
              marginTop: "160px",
              marginBottom: "60px",
              color: "white",
            }}
          >
            Delivery to All Regions
          </h1>
          <p style={{ color: "white" }}>
            We deliver our goods all across Australia. No matter where you live,
            your order will be shipped in time and delivered right to your door
            or to any other location you have stated. The packages are handled
            with utmost care, so the ordered products will be handed to you safe
            and sound, just like you expect them to be.
          </p>
        </div>
        <div>
          <img
            style={{
              maxWidth: "360px",
              marginTop: "100px",
              borderRadius: "50px",
              marginRight: "50px",
            }}
            src={PhotoFuturePc}
          />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Review />
      </div>
    </div>
  );
};

export default AboutUs;
