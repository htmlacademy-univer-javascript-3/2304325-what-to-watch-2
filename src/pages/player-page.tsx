import { useParams } from 'react-router-dom';

type Props = {
  src: string;
  poster: string;
  time: string;
  name: string;
}

const PlayerPage = (props : Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id } = useParams();

  return (
    <div className="player">
      <video src={props.src} className="player__video" poster={props.poster}></video>

      <button type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: ' 30% ' }}>Toggler</div>
          </div>
          <div className="player__time-value">{props.time}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{props.name}</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerPage;