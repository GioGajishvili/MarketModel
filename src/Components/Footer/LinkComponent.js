import { ArrayForLinks } from "./array";
import "./LinkComponent.css";

const WrapperComponent = () => {
  return (
    <div className="link-container">
      {ArrayForLinks.map((item) => {
        const { title, value, id } = item;
        return (
          <div className="link-container" key={id}>
            <div className="child-div">
              <h2 className="link-titles">{title}</h2>
              {value.map((item, index) => (
                <div key={index}>
                  <p className="link-values">{item}</p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WrapperComponent;
