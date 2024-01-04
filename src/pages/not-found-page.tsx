import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../const/const';

const NotFoundPage = () => {
  const navigate = useNavigate();

  function handleRedirect() {
    navigate(AppRoute.Main);
  }

  return(
    <div>
      <h2>Not found page</h2>
      <button className="redirect-button" onClick={handleRedirect}>Вернуться на главную страницу</button>
    </div>
  );
};

export default NotFoundPage;
