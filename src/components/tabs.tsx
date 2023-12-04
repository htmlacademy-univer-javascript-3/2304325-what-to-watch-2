import {Link} from 'react-router-dom';

const TABS = [{
  key: 0,
  name: 'Overview',
  link: '#',
},
{
  key: 1,
  name: 'Details',
  link: '#',
},
{
  key: 2,
  name: 'Reviews',
  link: '#'
}
];

type TabsProps = {
  activeTab: number;
  setActiveTab: (tab: number) => void;
};

export const Tabs = (props: TabsProps) => (
  <nav className="film-nav film-card__nav">
    <ul className="film-nav__list">
      {
        TABS.map((tab)=> (
          <li
            className={`film-nav__item ${props.activeTab === tab.key ? 'film-nav__item--active' : ''}`}
            key={tab.key}
            onClick={() => props.setActiveTab(tab.key)}
          >
            <Link to={tab.link} className="film-nav__link"> { tab.name } </Link>
          </li>
        ))
      }
    </ul>
  </nav>
);
