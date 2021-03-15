import React, { useEffect, useRef } from 'react';
import './star-rating.scss';


const StarRating = ({currentRating, numberOfStars, setRatingOnStarClick, isRatingEditable}) => {
  let starRate = useRef();

  useEffect(() => {
    setRating();
  });

  const setRating = () => {
    const stars = starRate.current.getElementsByClassName('star');
    Array.from(stars).forEach(star => {
      star.style.color = currentRating >= star.dataset.value ? 'yellow' : 'gray';
    });
  };

  const hoverHandler = (event) => {
    const stars = event.target.parentElement.getElementsByClassName('star');
    const hoverValue = event.target.dataset.value;
    Array.from(stars).forEach(star => {
      star.style.color = hoverValue >= star.dataset.value ? 'yellow' : 'gray';
    });
  };

  return (
    <>
      {
        isRatingEditable ?
        (
          <div
          className="rating"
          ref={starRate}
          data-rating={currentRating}
          onMouseOut={setRating}
          >
            {[...Array(+numberOfStars).keys()].map(n => {
              return (
                <span
                  className="star"
                  key={n+1}
                  data-value={n+1}
                  onMouseOver={hoverHandler}
                  onClick={setRatingOnStarClick}
                >
                  &#9733;
                </span>
              );
            })}
          </div>
        ) :
        (
          <div
          className="rating"
          ref={starRate}
          data-rating={currentRating}
          onMouseOut={setRating}
        >
          {[...Array(+numberOfStars).keys()].map(n => {
            return (
              <span
                className="star non-editable-star"
                key={n+1}
                data-value={n+1}
              >
                &#9733;
              </span>
            );
          })}
        </div>
        )
      }
    </>
  );
}

export default StarRating;
