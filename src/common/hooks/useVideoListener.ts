import { useRef, useEffect, useContext } from 'react';
import { videoContext } from '@src/common/context/VideoProvider';

export function useVideoListener() {
  let videoRef = useRef<HTMLVideoElement>(null);
  const { dispatch } = useContext(videoContext);

  useEffect(() => {
    if (videoRef.current) {
      return;
    }
    videoRef = {
      current: document.querySelector('video'),
    };
  });

  useEffect(() => {
    const func = async (event: any) => {
      dispatch({
        type: 'setTime',
        payload: { time: event.target!.currentTime },
      });
    };

    if (!videoRef.current) {
      return;
    }
    videoRef.current.addEventListener('timeupdate', func);

    return () => {
      if (!videoRef.current) {
        return;
      }

      videoRef.current.removeEventListener('timeupdate', func);
    };
  }, [videoRef.current]);
}
