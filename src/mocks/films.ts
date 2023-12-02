import { Film, FilmCard } from '../types/types';

export const filmCardData: Film = {
  id: 20,
  bgImage:
    'img/bg-the-grand-budapest-hotel.jpg',
  posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014
};

export const catalogFilmCards: FilmCard[] = [
  {id: 0, image: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    title:'Fantastic Beasts: The Crimes of Grindelwald'
  },
  {id: 1, image: 'img/bohemian-rhapsody.jpg',
    title:'Bohemian Rhapsody'
  },
  {id: 2, image: 'img/macbeth.jpg',
    title: 'Macbeth'
  },
  {id: 3, image: 'img/aviator.jpg',
    title: 'Aviator'
  },
  {id: 4, image: 'img/we-need-to-talk-about-kevin.jpg',
    title: 'We need to talk about Kevin'
  },
  {id: 5, image: 'img/what-we-do-in-the-shadows.jpg',
    title: 'What We Do in the Shadows'
  },
  {id: 6, image:'img/revenant.jpg' ,
    title: 'Revenant'
  },
  {id: 7, image: 'img/johnny-english.jpg',
    title: 'Johnny English'
  },
  {id: 8, image: 'img/shutter-island.jpg',
    title: 'Shutter Island'
  },
  {id: 9, image: 'img/pulp-fiction.jpg',
    title: 'Pulp Fiction'
  },
  {id: 10, image: 'img/no-country-for-old-men.jpg',
    title: 'No Country for Old Men'
  },
  {id: 11, image: 'img/snatch.jpg',
    title:'Snatch'
  },
  {id: 12, image: 'img/moonrise-kingdom.jpg',
    title:'Moonrise Kingdom'
  },
  {id: 13, image: 'img/seven-years-in-tibet.jpg',
    title: 'Seven Years in Tibet'
  },
  {id:14, image: 'img/midnight-special.jpg',
    title: 'Midnight Special'
  },
  {id:15, image: 'img/war-of-the-worlds.jpg',
    title: 'War of the Worlds'
  },
  {id: 16,image: 'img/dardjeeling-limited.jpg',
    title: 'Dardjeeling Limited'
  },
  {id: 17, image: 'img/orlando.jpg',
    title: 'Orlando'
  },
  {id: 18, image: 'img/mindhunter.jpg',
    title: 'Mindhunter'
  },
  {id: 19, image: 'img/midnight-special.jpg',
    title: 'Midnight Special'
  },
];

export const myListArray = catalogFilmCards.slice(0,9);

export const moreFilms = catalogFilmCards.slice(0,4);

export const VIDEO = 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4';
