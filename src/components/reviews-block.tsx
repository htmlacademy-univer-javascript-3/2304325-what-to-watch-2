import { useParams } from 'react-router-dom';
import { Review } from '../types/review';
import ReviewBlock from './review-block';
import { useEffect, useState } from 'react';
import api from '../api/api';

export default function Reviews() {
  const {id} = useParams();
  const [comments, setComments] = useState<Review[] | null>(null);

  useEffect(() => {
    if(id) {
      const data = api.get(`comments/${id}`);
      data.then((res) => setComments(res.data as Review[]));
    }
  }, []);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {comments?.map((value) => (
          <ReviewBlock key={value.id} {...value} />
        ))}
      </div>
    </div>
  );
}
