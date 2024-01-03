import { DateFormats } from '../types/date';
import { Review } from '../types/review';
import { formatDate } from '../utils/format';


export default function ReviewBlock({ rating, user, comment, date }: Review) {
  return (
    <div className="review" data-testid="review-block">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>
        <footer className="review__details">
          <cite className="review__author">{user}</cite>
          <time className="review__date" dateTime={formatDate(date, DateFormats.Short)}>
            {formatDate(date, DateFormats.Standard)}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}
