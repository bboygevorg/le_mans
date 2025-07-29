import { useRef, useCallback } from "react";

export const useHoverSound = (sound: string) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleMouseEnter = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.volume = 1.0;
      audioRef.current.play().catch((err) => {
        console.warn("Playback failed:", err);
      });
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, []);

  return {
    audioRef,
    handleMouseEnter,
    handleMouseLeave,
  };
};
