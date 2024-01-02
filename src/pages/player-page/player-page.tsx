
import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../api/api';
import { FilmData } from '../../types/film-data';
import VideoPlayer from '../../components/video-player';
import { AppRoute } from '../../const/const';
import TimeControls from './time-controls/time-controls';

interface CrossBrowserDocument {
  exitFullscreen?: () => void;
  mozCancelFullScreen?: () => void;
  webkitExitFullscreen?: () => void;
  msExitFullscreen?: () => void;
  fullscreenElement?: Element | null;
  mozFullScreenElement?: Element | null;
  webkitFullscreenElement?: Element | null;
  msFullscreenElement?: Element | null;
}

interface CrossBrowserElement extends HTMLDivElement {
  webkitRequestFullscreen?: () => Promise<void>;
  msRequestFullscreen?: () => Promise<void>;
  mozRequestFullscreen?: () => Promise<void>;
}

const PlayerPage = () => {
  const playerRef = useRef<HTMLVideoElement>(null);
  const [time, setTime] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const {id} = useParams();
  const [film, setFilm] = useState<FilmData | null>(null);
  const containerRef = useRef<CrossBrowserElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if(id) {
      const data = api.get(`films/${id}`);
      data.then((res) => setFilm(res.data as FilmData));
    }
  } , []);

  function handlePlay() {
    playerRef.current?.play();
    setIsPlaying(true);
  }

  function handlePause() {
    playerRef.current?.pause();
    setIsPlaying(false);
  }

  const handleTimeUpdate = useCallback(() => {
    setTime(Number(playerRef.current?.currentTime));
  }, []);

  function enterFullScreen(): void {
    containerRef.current?.requestFullscreen?.();
    containerRef.current?.mozRequestFullscreen?.();
    containerRef.current?.webkitRequestFullscreen?.();
    containerRef.current?.msRequestFullscreen?.();
  }

  function exitFullScreen(): void {
    const crossBrowserDocument = document as unknown as CrossBrowserDocument;
    if (crossBrowserDocument.exitFullscreen) {
      crossBrowserDocument.exitFullscreen();
    } else if (crossBrowserDocument.mozCancelFullScreen) {
      crossBrowserDocument.mozCancelFullScreen();
    } else if (crossBrowserDocument.webkitExitFullscreen) {
      crossBrowserDocument.webkitExitFullscreen();
    } else if (crossBrowserDocument.msExitFullscreen) {
      crossBrowserDocument.msExitFullscreen();
    }
  }

  function isFullscreen(): Element | null | undefined {
    const crossBrowserDocument = document as unknown as CrossBrowserDocument;
    return crossBrowserDocument.fullscreenElement ||
      crossBrowserDocument.mozFullScreenElement ||
      crossBrowserDocument.webkitFullscreenElement ||
      crossBrowserDocument.msFullscreenElement;
  }

  function handleFullScreenToggle() {
    if (isFullscreen()) {
      exitFullScreen();
    } else {
      enterFullScreen();
    }
  }

  return (
    <div className="player" ref={containerRef}>
      {film && (
        <>
          <VideoPlayer
            videoLink={film.videoLink}
            posterImage={film.posterImage}
            ref={playerRef}
            onTimeUpdate={handleTimeUpdate}
          />
          <button
            type="button"
            className="player__exit"
            onClick={() => navigate(AppRoute.Film.replace(':id', film.id))}
          >
          Exit
          </button>
          <div className="player__controls">
            {playerRef.current && <TimeControls time={time} duration={Number(playerRef.current?.duration)} />}
            <div className="player__controls-row">
              {isPlaying ? (
                <button type="button" className="player__play" onClick={handlePause}>
                  <svg viewBox="0 0 14 21" width="14" height="21">
                    <use xlinkHref="#pause"></use>
                  </svg>
                  <span>Pause</span>
                </button>
              ) : (
                <button type="button" className="player__play" onClick={handlePlay}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
              )}
              <div className="player__name">{film.name}</div>
              <button type="button" className="player__full-screen" onClick={handleFullScreenToggle}>
                <svg viewBox="0 0 27 27" width="27" height="27">
                  <use xlinkHref="#full-screen"></use>
                </svg>
                <span>Full screen</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PlayerPage;
