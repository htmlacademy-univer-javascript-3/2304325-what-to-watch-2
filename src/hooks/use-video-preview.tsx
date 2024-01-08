import {useEffect, useRef, useState} from 'react';

export function useVideoPreview(isAcive: boolean, delay: number): boolean {
  const [isPreviewPlays, setIsPreviewPlays] = useState(false);
  const timoutId = useRef<NodeJS.Timeout | null>(null);

  const safeClearTimout = () => {
    if (timoutId.current) {
      clearTimeout(timoutId.current);
    }
  };

  useEffect(() => {
    if (isAcive) {
      timoutId.current = setTimeout(() => {
        setIsPreviewPlays(true);
      },
      delay);
    } else {
      safeClearTimout();
      setIsPreviewPlays(false);
    }
    return safeClearTimout;
  }, [delay, isAcive]);

  return isPreviewPlays;
}
