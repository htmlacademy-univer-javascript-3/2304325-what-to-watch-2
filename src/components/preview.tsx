import {useVideoPreview} from '../hooks/useVideoPreview';

type Props = {
  src: string;
  poster: string;
  name: string;
  isActive: boolean;
};
export const Preview = ({src, poster, isActive, name} : Props) => {
  const timeout = 1000;
  const isPreviewPlays = useVideoPreview(isActive, timeout);
  return (!isPreviewPlays ? <img src={poster} alt={name} width="280" height="175"/> :
    <video src={src} className="player__video" poster={poster} autoPlay muted/>
  );
};
