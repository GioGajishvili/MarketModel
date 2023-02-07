import "./Review.css";
import { VscCircleFilled } from "react-icons/vsc";
import { ArrayForReviews } from "./ArrayforReviews";
import { useState } from "react";

const Review = () => {
  const [comment, setComment] = useState(ArrayForReviews[0].comments);
  const [author, setAuthor] = useState(ArrayForReviews[0].authors);
  const [active, setActive] = useState(ArrayForReviews[0].id);

  const ReviewHandler = (comment, author, active) => {
    setComment(comment);
    setAuthor(author);
    setActive(active);
  };

  return (
    <div className="review-container">
      <div className="review-tag">
        <div>
          <img
            style={{ marginLeft: "100px", marginTop: "60px" }}
            src="/assets/images/ReviewIcon.png"
          />
        </div>
        <div className="review-text-container">
          <p className="review-texts">{comment}</p>
        </div>
      </div>
      <div className="review-author">
        <p>{`- ${author}`}</p>
      </div>
      <div>
        <button className="review-button">Leave us a Review</button>
        {ArrayForReviews.map((bubbles, index) => {
          return (
            <VscCircleFilled
              style={{
                ...(index === 0 && {
                  marginLeft: "110px",
                }),
                ...(bubbles.id === active && {
                  color: "black",
                  transition: "1.5s",
                }),
              }}
              key={bubbles.id}
              onClick={() =>
                ReviewHandler(bubbles.comments, bubbles.authors, bubbles.id)
              }
              className="review-bubbles"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Review;
