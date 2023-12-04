import { DetailsProps, OverviewProps, ReviewProps, TabProps } from '../types/tabs';

export const detailData: DetailsProps = {
  director: 'Wes Anderson',
  starring: `Bill Murray, \n
                    Edward Norton, \n
                    Jude Law, \n
                    Willem Dafoe, \n
                    Saoirse Ronan, \n
                    Tony Revoloru, \n
                    Tilda Swinton, \n
                    Tom Wilkinson, \n
                    Owen Wilkinson, \n
                    Adrien Brody, \n
                    Ralph Fiennes, \n
                    Jeff Goldblum`,
  genre: 'Comedy',
  runTime: '1h 39m',
  released: 2014
};

export const overviewData: OverviewProps = {
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge
        Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.\n
        Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there.
        When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
  director: 'Wes Anderson',
  starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
  rating: '8,9',
  ratingDescription: 'Very good',
  numberOfVotes: 240,
};

export const reviewData: ReviewProps[] = [
  {
    review: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed films in years.',
    author: 'Kate Muir',
    date: 'December 24, 2016',
    rating: 8.9,
  },
  {
    review: 'Anderson&qs films are too precious for some, but for those of us willing to lose ourselves in them, they\'re a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.',
    author: 'Bill Goodykoontz',
    date: 'November 18, 2015',
    rating: 8.0,
  },
  {
    review: 'I didn\'t find it amusing, and while I can appreciate the creativity, it\'s an hour and 40 minutes I wish I could take back.',
    author: 'Amanda Greever',
    date: 'November 18, 2015',
    rating: 8.0,
  },
  {
    review: 'The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.',
    author: 'Matthew Lickona',
    date: 'December 20, 2016',
    rating: 7.2,
  },
  {
    review: 'It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.',
    author: 'Paula Fleri-Soler',
    date: 'December 20, 2016',
    rating: 7.6,
  },
  {
    review: 'It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.',
    author: 'Paula Fleri-Soler',
    date: 'December 20, 2016',
    rating: 7.0,
  },
];

export const tabData: TabProps = {
  overview: overviewData,
  details: detailData,
  reviews: reviewData
};
