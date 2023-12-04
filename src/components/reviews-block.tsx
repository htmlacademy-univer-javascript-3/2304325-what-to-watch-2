import {ReviewProps} from '../types/tabs';

export const Reviews = (props: { reviews: ReviewProps[] }) => {
  const firstRatings = props.reviews.slice(0, props.reviews.length / 2);
  const secondRatings = props.reviews.slice(props.reviews.length / 2, props.reviews.length);
  return (
    <div className="film-card__reviews film-card__row">
      {
        [firstRatings, secondRatings].map((ratingGroup, id) =>
          (
            // eslint-disable-next-line react/no-array-index-key
            <div className="film-card__reviews-col" key={id}>
              {
                ratingGroup.map((review, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <div className="review" key={index}>
                    <blockquote className="review__quote">
                      <p className="review__text">{review.review}</p>

                      <footer className="review__details">
                        <cite className="review__author">{review.author}</cite>
                        <time className="review__date" dateTime="2016-12-24">{review.date}</time>
                      </footer>
                    </blockquote>

                    <div className="review__rating">{review.rating}</div>
                  </div>
                ))
              }
            </div>
          ))
      }
    </div>
  );
};
