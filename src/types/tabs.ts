export type DetailsProps = {
  director: string;
  starring: string;
  runTime: string;
  genre: string;
  released: number;
};

export type OverviewProps = {
  description: string;
  director: string;
  starring: string;
  rating: string;
  ratingDescription: 'Bad' | 'Normal' | 'Good' | 'Very good' | 'Awesome';
  numberOfVotes: number;
};

export type ReviewProps = {
  author: string;
  date: string;
  review: string;
  rating: number;
};

export type TabProps = {
  overview: OverviewProps;
  details: DetailsProps;
  reviews: ReviewProps[];
};
