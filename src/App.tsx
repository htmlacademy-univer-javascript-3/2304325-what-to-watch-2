import MainPage from './MainPage';

type Props = {
  name: string;
  genre: string;
  date: string;
}

const App = (props : Props) => (

  <MainPage {...props}/>
);

export default App;
